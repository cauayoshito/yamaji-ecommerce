// utils/track.ts
"use client";
export function track(event: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params || {});
  }
}
