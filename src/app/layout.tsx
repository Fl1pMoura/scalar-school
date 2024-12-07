import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scalar School",
  description: "Scalar School",
};

const jetBrains = JetBrains_Mono({
  weight: ["400", "500", "700", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetBrains.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
