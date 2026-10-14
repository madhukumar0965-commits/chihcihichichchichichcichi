import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "./site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `GiftCardMall/MyGift | Balance/Activation | Official Website`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "GiftCardMall MyGift balance",
    "GiftCardMall balance",
    "MyGift prepaid card",
    "GiftCardMall/MyGift ",
    "GiftCardMall/MyGift balance",
    "GiftCardMall/MyGift check balance",
    "GiftCardMall/MyGift activation",
    "Check My Balance GiftCardMall MyGift",
    "giftcardmall/mygift visa",


  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: `GiftCardMall/MyGift Balance and Activation Guide | ${siteName}`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `GiftCardMall/MyGift Balance and Activation Guide | ${siteName}`,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
