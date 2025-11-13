import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RIWOXX TOP UP — Top Up Game & Voucher Instan",
  description:
    "RIWOXX TOP UP adalah toko digital terpercaya untuk top up game, voucher, dan entertainment dengan pembayaran cepat dan aman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
