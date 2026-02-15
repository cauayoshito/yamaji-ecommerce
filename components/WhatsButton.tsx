// components/WhatsButton.tsx
"use client";
import Link from "next/link";
import { useUtm } from "@/hooks/useUtm";

const wa = (msg: string) =>
  `https://wa.me/5571992258349?text=${encodeURIComponent(msg)}`;

export default function WhatsButton({
  label = "Falar no WhatsApp",
  message = "Quero virar a chave com Sites + Ads + IA da Yamaji Studio 🔑💻",
  className = "",
}: {
  label?: string;
  message?: string;
  className?: string;
}) {
  const { qs } = useUtm();
  const href = wa(message) + (qs ? `&${qs.slice(1)}` : ""); // preserva utms no link externo

  return (
    <Link
      href={href}
      target="_blank"
      className={`inline-flex items-center rounded-xl px-5 py-3 bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition ${className}`}
    >
      {label}
    </Link>
  );
}
