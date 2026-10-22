"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return (
    <main className="not-found">
      <p>Taking you back to the home page…</p>
      <a href="/">Continue to GiftCardPortal</a>
    </main>
  );
}
