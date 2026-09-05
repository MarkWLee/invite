'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const address = '上海市徐汇区武康路100弄1号';
const mapUrl =
  'https://uri.amap.com/search?keyword=5Senses%E6%AD%A6%E5%BA%B7%E8%8A%B1%E5%9B%AD%E9%A4%90%E5%8E%85&city=%E4%B8%8A%E6%B5%B7&src=birthday-invitation';

type CopyState = 'idle' | 'copied' | 'error';

export function VenueActions() {
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyState('idle'), 2200);
  }

  const copyLabel =
    copyState === 'copied'
      ? '地址已复制'
      : copyState === 'error'
        ? '请长按复制'
        : '复制地址';

  return (
    <div className="venue-actions">
      <a
        href={mapUrl}
        target="_blank"
        rel="noreferrer"
        className="venue-button venue-button-primary"
      >
        <MapPin size={16} aria-hidden="true" />
        导航前往
      </a>
      <Button
        type="button"
        onClick={copyAddress}
        variant="outline"
        className="venue-button venue-button-secondary"
        aria-live="polite"
      >
        {copyLabel}
      </Button>
    </div>
  );
}
