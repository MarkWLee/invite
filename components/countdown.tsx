'use client';

import { useEffect, useState } from 'react';

const eventTime = new Date('2026-09-25T11:00:00+08:00').getTime();
const eventDayEnd = new Date('2026-09-25T23:59:59+08:00').getTime();

type TimeLeft =
  | { state: 'before'; days: number; hours: number; minutes: number }
  | { state: 'today' }
  | { state: 'past' };

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();

  if (now >= eventTime && now <= eventDayEnd) {
    return { state: 'today' };
  }

  if (now > eventDayEnd) {
    return { state: 'past' };
  }

  const difference = eventTime - now;
  return {
    state: 'before',
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(
      () => setTimeLeft(calculateTimeLeft()),
      60_000,
    );
    return () => window.clearInterval(timer);
  }, []);

  if (timeLeft.state === 'today') {
    return (
      <p className="mt-5 text-sm font-black text-primary">
        今天见，我已经准备好蛋糕啦！
      </p>
    );
  }

  if (timeLeft.state === 'past') {
    return (
      <p className="mt-5 text-sm font-black text-primary">
        谢谢你陪我过第一个生日！
      </p>
    );
  }

  return (
    <div aria-live="polite" suppressHydrationWarning>
      <p className="mt-5 text-xs font-semibold text-muted-foreground">
        距离我们见面还有
      </p>
      <p className="mt-1 text-sm font-black tabular-nums text-primary">
        {timeLeft.days} 天 {timeLeft.hours} 时 {timeLeft.minutes} 分
      </p>
    </div>
  );
}
