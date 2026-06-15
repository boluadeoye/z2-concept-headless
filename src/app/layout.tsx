import type { Metadata } from "next";
import { Bricolage_Grotesque, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Z2 Concept x Kefee HP | Creative Media & Print Agency",
  description: "Professional photography, video production, and creative design solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="site-wrapper">
        {children}
      </body>
    </html>
  );
}
