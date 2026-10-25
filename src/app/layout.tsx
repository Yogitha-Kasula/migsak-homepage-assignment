import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Migsak | Websites, mobile apps and automation for your business",
  description:
    "Migsak builds websites, mobile apps and automation, connected to your payments, WhatsApp, CRM and ERP. Fixed-price phases and a working demo every two weeks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}