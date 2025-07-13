import { Gabarito, Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

// Configure Gabarito for headings
const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "700", "800"], // Include weights you need
  variable: "--font-gabarito", // Unique CSS variable for Gabarito
});

// Configure Inter for body text or specific components
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include weights you need
  variable: "--font-inter", // Unique CSS variable for Inter
});

export const metadata = {
  title: "PORTFOLIO | Deepak Thapa",
  description: "portfolio of deepak thapa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
