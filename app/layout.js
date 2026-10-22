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
    "An independent guide to GiftCardMall/MyGift balance checks, card activation, and prepaid gift card support. Visit the official issuer website for card-specific services.",
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
    title: "GiftCardMall/MyGift Guide | GiftCardPortal",
    description:
      "An independent guide to GiftCardMall/MyGift balance checks and card activation, with a link to the official issuer website.",
  },
  twitter: {
    card: "summary",
    title: "GiftCardMall/MyGift Guide | GiftCardPortal",
    description:
      "An independent guide to GiftCardMall/MyGift balance checks and card activation, with a link to the official issuer website.",
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
