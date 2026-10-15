import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  themeColor: "#f5fbff",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://giftcardportal.vip"),
  title: {
    default: "GiftCardMall/MyGift Balance & Activation Guide | GiftCardPortal",
  },
  description:
    "Explore how to find GiftCardMall/MyGift cards real balance-check Activation, read available funds, understand transactions, and solve prepaid gift card issues.",
  keywords: [
    "GiftCardMall MyGift balance",
    "GiftCardMall balance",
    "MyGift prepaid card",
    "gift card balance check",
    "prepaid gift card activation instructions",
    "prepaid card transaction help",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "GiftCardPortal",
    title: "GiftCardMall/MyGift | View Your Gift on GiftCardPortal",
    description:
      "Explore GiftCardMall/MyGift to find your cards real balance-check Activation, read available funds, understand transactions, and solve prepaid gift card issues.",
  },
  twitter: {
    card: "summary",
    title: "GiftCardMall/MyGift | View Your Gift on GiftCardPortal",
    description:
      "Explore how to find your GiftCardMall/MyGift real balance-check Activation, read available funds, understand transactions, and solve prepaid gift card issues.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html  className={inter.variable}>
    
      <body>
        {children}
      </body>
    </html>
  );
}
