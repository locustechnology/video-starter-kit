import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

export const metadata: Metadata = {
  title: "GoStudio Clips — AI Video Creator",
  description: "Create stunning AI-powered videos in seconds — by GoStudio.ai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
