import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Why High-Performers Lose Their Edge After 40 (It's Not What You Think)",
  description: "Spartan landing page migrated from Vite to Next.js."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
