import type { Metadata } from "next";
import { MotionPreferenceControl, MotionPreferences } from "@/components/MotionPreferences";
import "./globals.css";

export const metadata: Metadata = {
  title: "[TEACHER NAME] — Classes 1–10",
  description: "All-subject tuition for Classes 1–10, available online and offline.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionPreferences>
          {children}
          <MotionPreferenceControl />
        </MotionPreferences>
      </body>
    </html>
  );
}
