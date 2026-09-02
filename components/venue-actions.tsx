'use client';

import { useState } from 'react';

const address = '上海市徐汇区武康路100弄1号';
const mapUrl =
  'https://uri.amap.com/search?keyword=5Senses%E6%AD%A6%E5%BA%B7%E8%8A%B1%E5%9B%AD%E9%A4%90%E5%8E%85&city=%E4%B8%8A%E6%B5%B7&src=birthday-invitation';

type CopyState = 'idle' | 'copied' | 'error';

export function VenueActions() {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 2200);
    } catch {
      setCopyState('error');
      window.setTimeout(() => setCopyState('idle'), 2200);
    }
  }

  const copyLabel =
    copyState === 'copied' ? '地址已复制' : copyState === 'error' ? '请长按复制' : '复制地址';

  return (
    <div className="mt-5 flex flex-wrap justify-center gap-3">
      <a
        href={mapUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium tracking-[0.06em] whitespace-nowrap text-primary-foreground transition-transform duration-300 active:scale-[0.98]"
      >
        导航前往
      </a>
      <button
        type="button"
        onClick={copyAddress}
        className="inline-flex h-11 items-center justify-center rounded-full border border-primary/35 bg-card/90 px-5 text-sm font-medium tracking-[0.06em] whitespace-nowrap text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px"
        aria-live="polite"
      >
        {copyLabel}
      </button>
    </div>
  );
}
