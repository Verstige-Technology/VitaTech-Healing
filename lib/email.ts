import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'VitaTech <noreply@vitatech.rocks>';

export async function sendOrderConfirmation(order: {
  orderId: string;
  customer: { name: string; email: string };
  items: { productName: string; quantity: number; price: number }[];
  total: number;
  trackingNumber?: string | null;
  labelUrl?: string | null;
}) {
  const itemsHtml = order.items
    .map(item => `<tr><td style="padding:8px;border-bottom:1px solid #2a2a4e">${item.quantity}x ${item.productName}</td><td style="padding:8px;border-bottom:1px solid #2a2a4e;text-align:right">$${(item.price * item.quantity).toFixed(2)}</td></tr>`)
    .join('');

  const html = `
  <div style="background:#0a0a1a;color:#fff;font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;border-radius:16px">
    <h1 style="color:#00ffaa;font-size:28px;margin:0 0 8px">Order Confirmed!</h1>
    <p style="color:#888;margin:0 0 24px">Thank you for your order, ${order.customer.name}</p>
    
    <div style="background:#1a1a2e;border:1px solid #2a2a4e;border-radius:12px;padding:24px;margin-bottom:24px">
      <p style="color:#00ffaa;font-family:monospace;font-size:18px;font-weight:bold;margin:0 0 16px">${order.orderId}</p>
      <table style="width:100%;border-collapse:collapse;color:#fff">
        ${itemsHtml}
        <tr><td colspan="2" style="padding:8px"></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Total</td><td style="padding:8px;text-align:right;font-weight:bold;color:#00ffaa">$${order.total.toFixed(2)}</td></tr>
      </table>
    </div>

    <p style="color:#888;font-size:14px">We'll email you a tracking number once your order ships.</p>
  </div>`;

  await resend.emails.send({
    from: FROM,
    to: order.customer.email,
    subject: `Order ${order.orderId} Confirmed — VitaTech`,
    html,
  });
}

export async function sendShippingUpdate(order: {
  orderId: string;
  customer: { name: string; email: string };
  trackingNumber: string;
  labelUrl?: string | null;
}) {
  const html = `
  <div style="background:#0a0a1a;color:#fff;font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;border-radius:16px">
    <h1 style="color:#00ffaa;font-size:28px;margin:0 0 8px">Your Order Has Shipped!</h1>
    <p style="color:#888;margin:0 0 24px">Great news, ${order.customer.name} — your VitaTech order is on its way.</p>
    
    <div style="background:#1a1a2e;border:1px solid #2a2a4e;border-radius:12px;padding:24px;margin-bottom:24px">
      <p style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px">Tracking Number</p>
      <p style="font-family:monospace;font-size:20px;color:#00ffaa;margin:0 0 16px">${order.trackingNumber}</p>
      ${order.labelUrl ? `<a href="${order.labelUrl}" style="display:inline-block;background:#00ffaa;color:#0a0a1a;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:bold">Download Shipping Label</a>` : ''}
    </div>

    <p style="color:#666;font-size:13px">Track your package anytime at vitatech.rocks/track</p>
  </div>`;

  await resend.emails.send({
    from: FROM,
    to: order.customer.email,
    subject: `Your VitaTech Order ${order.orderId} Has Shipped!`,
    html,
  });
}
