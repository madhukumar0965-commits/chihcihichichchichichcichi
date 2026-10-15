import { ImageResponse } from "next/og";

export const alt =
  "GiftCard independent guide to GiftCardMall/MyGift prepaid card balances and activation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f5f8ff",
          color: "#172554",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            color: "#2563eb",
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 30,
          }}
        >
          GiftCard
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: "-2px",
            lineHeight: 1.12,
            maxWidth: 1000,
          }}
        >
          GiftCardMall/MyGift Balance Guide
        </div>
        <div
          style={{
            color: "#475569",
            display: "flex",
            fontSize: 30,
            marginTop: 28,
          }}
        >
          Independent prepaid card information
        </div>
      </div>
    ),
    size,
  );
}
