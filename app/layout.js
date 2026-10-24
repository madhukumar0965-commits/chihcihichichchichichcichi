import { Inter } from "next/font/google";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "./site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  themeColor: "#f7faf8",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GiftCardMall/MyGift | Official Website | View Your Card",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
