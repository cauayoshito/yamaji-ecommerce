// hooks/useUtm.ts
"use client";
import Cookies from "js-cookie";

type Keys =
  | "utm_source"
  | "utm_medium"
  | "utm_campaign"
  | "utm_content"
  | "utm_term";

export function useUtm() {
  const keys: Keys[] = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];
  const utm: Record<Keys, string> = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  };

  keys.forEach((k) => {
    utm[k] = Cookies.get(k) || "";
  });

  const qs = Object.entries(utm)
    .filter(([, v]) => !!v)
    .map(([k, v]) => `${k}=${encodeURIComponent(v as string)}`)
    .join("&");

  // retorna objeto e a query pronta (ex.: ?utm_source=instagram&utm_campaign=reels)
  return { utm, qs: qs ? `?${qs}` : "" };
}
