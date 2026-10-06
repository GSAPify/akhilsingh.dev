"use client";

import { useEffect, useState } from "react";

// Static export renders these at build time, so the first paint shows dashes and the
// browser fills in real time on mount.
function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);
  return now;
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Clock({ timeZone }: { timeZone: string }) {
  const now = useNow();
  if (!now) return <span>--:--:--</span>;
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);
  return <time dateTime={now.toISOString()}>{time}</time>;
}

export function Elapsed({ since }: { since: string }) {
  const now = useNow();
  if (!now) return <span>T+ ---d --:--:--</span>;
  const s = Math.max(0, Math.floor((now.getTime() - Date.parse(since)) / 1000));
  const days = Math.floor(s / 86400);
  const hms = `${pad(Math.floor((s % 86400) / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
  return (
    <span>
      T+ {days}d {hms}
    </span>
  );
}
