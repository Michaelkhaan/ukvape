import AccountShell from "@/components/account-shell";
import { CheckCircle2, Package, Truck } from "lucide-react";
export default function OrderDetails() {
  return (
    <AccountShell active="orders">
      <a href="/account/orders" className="eyebrow">
        ← Back to orders
      </a>
      <h1 style={{ marginTop: 10 }}>Order #GB0012</h1>
      <p>Placed 16 November 2026 · £24.99</p>
      <div className="panel">
        <h2>Order progress</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 8,
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          {[
            [CheckCircle2, "Order placed"],
            [CheckCircle2, "Processing"],
            [Truck, "Shipped"],
            [Package, "Delivered"],
          ].map(([I, t]: any, i) => (
            <div key={t}>
              <I color={i < 4 ? "var(--green)" : "#aaa"} size={25} />
              <p style={{ fontSize: 10, fontWeight: 700 }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="panel" style={{ marginTop: 15 }}>
        <h2>Order items</h2>
        <p>Lost Mary MO5000 · Blue Razz Cherry　　Qty 1　　£12.99</p>
        <p>Delivery　　£0.00</p>
        <b>Total　£24.99</b>
      </div>
    </AccountShell>
  );
}
