"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const EXPERIENCE_PATH = "/e-commerce/experiencia";

export default function StudioExperienceRoute() {
  const router = useRouter();

  useEffect(() => {
    const link = document.querySelector<HTMLAnchorElement>('a[href="#experiencia"]');
    if (link) link.href = EXPERIENCE_PATH;

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const experienceLink = target?.closest<HTMLAnchorElement>('a[href="#experiencia"], a[href$="/e-commerce/experiencia"]');
      if (!experienceLink) return;

      event.preventDefault();
      router.push(EXPERIENCE_PATH);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  return null;
}
