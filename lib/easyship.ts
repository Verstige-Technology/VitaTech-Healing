// EasyShip API client for VitaTech order fulfillment
// Uses EasyShip Kite Plan REST API v2

const EASYSHIP_API_BASE = 'https://api.easyship.com';
const DEFAULT_COURIER = 'usps';
const DEFAULT_PACKAGE = {
  weight: 0.5, // lbs
  dimensions: {
    length: 8,
    width: 8,
    height: 4,
  },
};

// Types
export interface EasyshipLabel {
  shipmentId: string;
  labelUrl: string;
  trackingNumber: string;
  courier: string;
  estimatedDelivery: string;
}

export interface TrackingInfo {
  shipmentId: string;
  trackingNumber: string;
  status: string;
  estimatedDelivery: string;
  events: Array<{
    timestamp: string;
    description: string;
    location: string;
  }>;
}

export interface OrderItem {
  productId: string;
  productName: string;
  variant: string;
  quantity: number;
  price: number;
}

export interface ShippingAddress {
  name: string;
  email: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface OrderData {
  orderId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: ShippingAddress;
  };
  braceletSize: string;
  items: OrderItem[];
  total: number;
}

// Default sender address ( VitaTech HQ)
const SENDER = {
  company_name: 'VitaTech',
  contact_name: 'VitaTech Fulfillment',
  email: 'fulfillment@vitatech.com',
  phone: '+1-800-VITATECH',
  address_line_1: '123 VitaTech Way',
  address_line_2: 'Suite 100',
  city: 'San Francisco',
  state: 'CA',
  postal_code: '94102',
  country: 'US',
};

/**
 * Create a shipment with EasyShip and generate a shipping label.
 * Kite plan API scope note: if token lacks `shipments:write`, returns 403.
 * In that case, order is saved with shipment status = 'pending' for manual label creation.
 */
export async function createShipment(order: OrderData): Promise<{ label: EasyshipLabel; scopeError: boolean }> {
  const apiKey = process.env.EASYSHIP_API_KEY;

  if (!apiKey) {
    throw new Error('EASYSHIP_API_KEY is not configured');
  }

  const { customer, items } = order;
  const address = customer.address;

  // EasyShip v2 REST API body format
  const payload = {
    shipment: {
      address_from: {
        ...SENDER,
      },
      address_to: {
        contact_name: customer.name,
        contact_email: customer.email,
        contact_phone: customer.phone || '',
        address_line_1: address.line1,
        address_line_2: address.line2 || '',
        city: address.city,
        state: address.state,
        postal_code: address.zip,
        country: address.country,
      },
      parcels: [
        {
          length: DEFAULT_PACKAGE.dimensions.length,
          width: DEFAULT_PACKAGE.dimensions.width,
          height: DEFAULT_PACKAGE.dimensions.height,
          weight: DEFAULT_PACKAGE.weight,
          distance_metric: 'in',
          weight_metric: 'lb',
          description: items.map(i => `${i.quantity}x ${i.productName}`).join(', '),
        },
      ],
      shipping_settings: {
        unit_system: 'imperial',
        default_language: 'en',
        currency: 'USD',
      },
      order_reference: order.orderId,
    },
  };

  const response = await fetch(`${EASYSHIP_API_BASE}/v2/shipments`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  // Scope error — token can't create shipments
  if (response.status === 403 || (data as { type?: string }).type === 'invalid_request_error') {
    console.warn('[EasyShip] Token lacks shipments:write scope. Order recorded for manual label.');
    return {
      label: {
        shipmentId: `pending_${Date.now()}`,
        labelUrl: '',
        trackingNumber: '',
        courier: DEFAULT_COURIER,
        estimatedDelivery: '',
      },
      scopeError: true,
    };
  }

  if (!response.ok) {
    throw new Error((data as { message?: string }).message || `EasyShip API error: ${response.status}`);
  }

  const shipment = (data as { shipment?: Record<string, unknown> }).shipment || data;

  return {
    label: {
      shipmentId: (shipment.id as string) || (shipment.shipment_id as string) || `ES-${Date.now()}`,
      labelUrl: (shipment.label_url as string) || '',
      trackingNumber: (shipment.tracking_number as string) || '',
      courier: (shipment.courier as string) || DEFAULT_COURIER,
      estimatedDelivery: (shipment.estimated_delivery_date as string) || '',
    },
    scopeError: false,
  };
}

/**
 * Get shipment label PDF URL
 */
export async function getShipmentLabel(shipmentId: string): Promise<string> {
  const apiKey = process.env.EASYSHIP_API_KEY;

  if (!apiKey) {
    throw new Error('EASYSHIP_API_KEY is not configured');
  }

  const response = await fetch(`${EASYSHIP_API_BASE}/v2/shipments/${shipmentId}/label`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to get shipment label: ${response.status}`);
  }

  const data = await response.json();
  return data.label_url || data.url || '';
}

/**
 * Track a shipment
 */
export async function trackShipment(shipmentId: string): Promise<TrackingInfo> {
  const apiKey = process.env.EASYSHIP_API_KEY;

  if (!apiKey) {
    throw new Error('EASYSHIP_API_KEY is not configured');
  }

  const response = await fetch(`${EASYSHIP_API_BASE}/v2/shipments/${shipmentId}/tracking`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to track shipment: ${response.status}`);
  }

  const data = await response.json();

  return {
    shipmentId,
    trackingNumber: data.tracking_number || '',
    status: data.status || 'unknown',
    estimatedDelivery: data.estimated_delivery || '',
    events: (data.events || []).map((event: { timestamp: string; description: string; location: string }) => ({
      timestamp: event.timestamp,
      description: event.description,
      location: event.location || '',
    })),
  };
}

export default {
  createShipment,
  getShipmentLabel,
  trackShipment,
};
