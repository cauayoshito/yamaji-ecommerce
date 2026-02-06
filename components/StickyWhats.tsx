// components/StickyWhats.tsx
"use client";
import Link from "next/link";

type Props = {
  href?: string;
  label?: string;
};

export default function StickyWhats({
  href = "https://wa.me/5571992258349?text=Oi!%20Quero%20saber%20sobre%20os%20servi%C3%A7os%20da%20Yamaji%20Studio",
  label = "Falar no WhatsApp",
}: Props) {
  return (
    <div className="fixed inset-x-0 bottom-3 z-40 px-4 md:hidden">
      <Link
        href={href}
        target="_blank"
        className="block rounded-xl bg-accent px-5 py-3 text-center font-semibold text-black shadow-[0_10px_30px_rgba(0,255,163,0.25)]"
      >
        {label}
      </Link>
    </div>
  );
}
