import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[TEACHER NAME] — Classes 1–10",
  description: "All-subject tuition for Classes 1–10, available online and offline.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
