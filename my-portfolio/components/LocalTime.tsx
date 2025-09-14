"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Europe/Stockholm",
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        absolute top-10 left-20 mt-2 text-lg sm:text-xl font-rajdhani tracking-widest text-white/90
        transform
        /* mobile (≤550px) overrides */
  max-[550px]:static max-[550px] max-[550px]:left-auto max-[550px]:top-auto max-[550px]:-translate-x-0 max-[550px]
        max-[550px]:text-xs min-[375px]:max-[550px]:text-sm
        max-[550px]:tracking-[0.18em]
  max-[550px]:py-3
        max-[550px]:min-w-[220px] max-[550px]:rounded-2xl max-[550px]:bg-black/30 max-[550px]:border max-[550px]:border-white/10 max-[550px]:backdrop-blur
        max-[550px]:shadow-[0_2px_10px_rgba(0,0,0,0.25)]
  max-[550px]:mb-0
  max-[550px]:px-4
        flex flex-col items-center max-[550px]:items-start max-[550px]:text-left
      "
      aria-label="Local time in Stockholm, Sweden"
    >
      <span className="hidden max-[550px]:block">Stockholm, Sweden</span>
      <span className="hidden max-[550px]:block">{time}</span>
      <span className="max-[550px]:hidden">Stockholm, Sweden {time}</span>
    </div>
  );
}
