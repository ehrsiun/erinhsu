"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Moving between home and a category page, the pieces that exist on both
// (the name, the about link, each project thumbnail, the chosen category)
// glide from their old place to their new one. Elements are paired by a
// shared view-transition-name; everything else crossfades.
//
// Browsers without view transitions simply change page as usual.

let arrived: ((path: string) => void) | null = null;
let moving = false;

// True while a page is being swapped in by a transition. Pages use it to
// skip their own entrance animation for pieces that are already gliding in.
export const isMovingIntoPlace = () => moving;

function navigate(push: () => void, href: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduce) {
    push();
    return;
  }
  moving = true;
  const transition = document.startViewTransition(
    () =>
      new Promise<void>((resolve) => {
        const giveUp = setTimeout(resolve, 2000);
        arrived = (path) => {
          if (path !== href) return;
          arrived = null;
          clearTimeout(giveUp);
          waitForImages().then(() => resolve());
        };
        push();
      }),
  );
  transition.finished.finally(() => {
    moving = false;
  });
}

// Give the gliding thumbnails a moment to decode so they don't fly in blank.
function waitForImages() {
  const images = [...document.querySelectorAll<HTMLImageElement>('main [style*="view-transition-name"] img')];
  const decoded = Promise.all(images.map((image) => image.decode().catch(() => {})));
  return Promise.race([decoded, new Promise((r) => setTimeout(r, 400))]);
}

// Lives in the root layout and tells a waiting transition the new page is in.
export function PathnameWatcher() {
  const pathname = usePathname();
  useEffect(() => {
    arrived?.(pathname);
  }, [pathname]);
  return null;
}

// A Link that changes page with the move-into-place animation.
export default function TransitionLink({ href, onClick, ...props }: React.ComponentProps<typeof Link> & { href: string }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigate(() => router.push(href), href);
      }}
    />
  );
}
