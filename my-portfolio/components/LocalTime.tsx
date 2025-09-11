"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format for Sweden (Stockholm time zone)
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        second: undefined,
        hour12: true,
        timeZone: "Europe/Stockholm",
      };
      const time = new Intl.DateTimeFormat("en-US", options).format(now);
      setTimeString(`Stockholm, Sweden ${time}`);
    };

    updateTime(); // run immediately
    const interval = setInterval(updateTime, 60 * 1000); // update every 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-10 left-20 text-lg sm:text-xl font-rajdhani tracking-widest text-white/90">
      {timeString}
    </div>
  );
}
