import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
export const metadata: Metadata = {
  title: "Global Bargain | Premium Vape Wholesale",
  description:
    "Discover premium vape products, competitive wholesale prices and dedicated trade support.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
