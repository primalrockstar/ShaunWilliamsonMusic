import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaun Williamson Music",
  description: "Professional musician and performer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
