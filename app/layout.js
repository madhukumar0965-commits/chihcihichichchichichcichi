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
    default: "GiftCardMall/MyGift | Check Balance | Official Site",
  },
  description:
    "Check your mygift balance, activate your card, and view transactions at giftcardmall.com/mygift safe;y",
 
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
