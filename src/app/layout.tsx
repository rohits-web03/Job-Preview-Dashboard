import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const sans = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senior Product Designer | Atlassian",
  description: "Job Preview for Senior Product Designer by Atlassian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
