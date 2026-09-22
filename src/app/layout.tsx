import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karan Singh Rathore | AI/ML Engineer",
  description: "Applied machine learning, computer vision, and LLM systems by Karan Singh Rathore.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
