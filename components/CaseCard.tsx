"use client";

import { motion } from "framer-motion";
import HoverCard from "@/components/HoverCard";

interface CaseCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

export default function CaseCard({
  title,
  description,
  image,
  link,
  delay = 0,
}: CaseCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="block"
    >
      <HoverCard className="p-0 overflow-hidden">
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-slate-300">{description}</p>
        </div>
      </HoverCard>
    </motion.a>
  );
}
