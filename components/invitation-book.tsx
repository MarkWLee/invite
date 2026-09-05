'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type PointerEvent,
} from 'react';

const chapters = [
  { hash: 'cover', label: '安安的邀请函' },
  { hash: 'details', label: '我的周岁派对' },
  { hash: 'little', label: '小小的我' },
  { hash: 'growing', label: '长大一点点' },
  { hash: 'hugs', label: '等你来抱抱' },
];

type Turn = { from: number; to: number };

export function InvitationBook({ children }: { children: ReactNode }) {
  const pages = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [turn, setTurn] = useState<Turn | null>(null);
  const lock = useRef(false);
  const finishTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointer = useRef<{ x: number; y: number; id: number } | null>(null);

  const finishTurn = useCallback(() => {
    if (finishTimer.current) clearTimeout(finishTimer.current);
    lock.current = false;
    setTurn(null);
  }, []);

  const go = useCallback(
    (next: number) => {
      if (lock.current || next < 0 || next >= pages.length || next === index)
        return;
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      if (!reduceMotion) {
        lock.current = true;
        setTurn({ from: index, to: next });
        finishTimer.current = setTimeout(finishTurn, 850);
      }
      setIndex(next);
      window.history.replaceState(null, '', `#${chapters[next].hash}`);
    },
    [index, pages.length, finishTurn],
  );

  useEffect(() => {
    const syncHash = () => {
      const next = chapters.findIndex(
        (chapter) => `#${chapter.hash}` === window.location.hash,
      );
      finishTurn();
      setIndex(next < 0 ? 0 : next);
    };
    const frame = window.requestAnimationFrame(syncHash);
    window.addEventListener('hashchange', syncHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', syncHash);
      if (finishTimer.current) clearTimeout(finishTimer.current);
    };
  }, [finishTurn]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        target.closest('input, textarea, select, [contenteditable="true"]')
      )
        return;
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (
        [
          'ArrowRight',
          'PageDown',
          'ArrowLeft',
          'PageUp',
          'Home',
          'End',
        ].includes(event.key)
      ) {
        event.preventDefault();
        if (event.key === 'Home') go(0);
        else if (event.key === 'End') go(pages.length - 1);
        else
          go(index + (['ArrowRight', 'PageDown'].includes(event.key) ? 1 : -1));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, index, pages.length]);

  function pointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary) {
      pointer.current = null;
      return;
    }
    if (event.button !== 0) return;
    if ((event.target as HTMLElement).closest('button, a')) return;
    pointer.current = {
      x: event.clientX,
      y: event.clientY,
      id: event.pointerId,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function pointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = pointer.current;
    pointer.current = null;
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) >= 42 && Math.abs(dx) > Math.abs(dy) * 1.25)
      go(index + (dx < 0 ? 1 : -1));
  }

  const forward = turn ? turn.to > turn.from : true;
  const moving = turn ? (forward ? turn.from : turn.to) : -1;

  return (
    <main className="invitation-room">
      <div className="book-titlebar">
        <span>安安的第一份生日邀请</span>
        <span>2026.09.25</span>
      </div>
      <div className="book-shell">
        <div
          className="book-stage"
          data-turning={!!turn}
          onPointerDown={pointerDown}
          onPointerUp={pointerUp}
          onPointerCancel={() => {
            pointer.current = null;
          }}
        >
          {pages.map((page, pageIndex) => {
            const isMoving = pageIndex === moving;
            const visible = pageIndex === index || pageIndex === turn?.from;
            return (
              <div
                key={chapters[pageIndex].hash}
                className={`book-leaf${isMoving ? (forward ? ' turning-forward' : ' turning-backward') : ''}`}
                data-active={pageIndex === index}
                data-visible={visible}
                aria-hidden={pageIndex !== index}
                inert={pageIndex !== index || !!turn}
                style={{ zIndex: isMoving ? 3 : visible ? 2 : 0 }}
                onAnimationEnd={(event) => {
                  if (event.target === event.currentTarget) finishTurn();
                }}
              >
                <div className="book-face">{page}</div>
                <div className="book-reverse" aria-hidden="true" />
              </div>
            );
          })}
          <Button
            className="page-corner"
            variant="ghost"
            aria-label={index === pages.length - 1 ? '回到封面' : '翻到下一页'}
            disabled={!!turn}
            onClick={() => go(index === pages.length - 1 ? 0 : index + 1)}
          >
            <ChevronRight aria-hidden="true" />
          </Button>
        </div>
      </div>
      <nav className="book-controls" aria-label="邀请函翻页">
        <Button
          variant="ghost"
          className="book-arrow"
          disabled={index === 0 || !!turn}
          onClick={() => go(index - 1)}
          aria-label="上一页"
        >
          <ChevronLeft aria-hidden="true" />
        </Button>
        <div className="chapter-status" aria-live="polite" aria-atomic="true">
          <span>{chapters[index].label}</span>
          <span className="page-count">
            {index + 1} / {pages.length}
          </span>
        </div>
        <Button
          variant="ghost"
          className="book-arrow"
          disabled={!!turn}
          onClick={() => go(index === pages.length - 1 ? 0 : index + 1)}
          aria-label={index === pages.length - 1 ? '回到封面' : '下一页'}
        >
          <ChevronRight aria-hidden="true" />
        </Button>
      </nav>
      <p className="book-help">左右滑动，或轻点页角翻一翻</p>
    </main>
  );
}
