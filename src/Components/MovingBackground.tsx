"use client"

import { useEffect } from "react";

export default function LandingParalaxBackground() {
  useEffect(() => {
    const handleScroll = () => {
      const bgDiv = document.getElementById('Effectbg') as HTMLElement | null;
      if (bgDiv) {
        const scrollY = window.scrollY;
        const translateY = scrollY * 0.2;
        bgDiv.style.transform = `translateY(${translateY}px)`;
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="Effectbg" className="z-[-100] mt-[-72px] bg-[url('/landscape.webp')] bg-cover bg-center bg-no-repeat bg-black/20 bg-blend-multiply flex flex-col items-center absolute w-full h-[900px]" /> //bg-[url('/landscape.webp')] bg-cover bg-center bg-no-repeat
  )
}