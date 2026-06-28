import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClipPilot AI",
  description: "AI Reel & Shorts Generator",
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
