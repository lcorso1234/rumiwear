"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SVGProps } from "react";

import { useCart } from "@/app/_providers/CartProvider";
import { menuLinks } from "@/app/data/navigation";

const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
    <path
      d="M7 4h10a2 2 0 0 1 2 2v15l-7-3-7 3V6a2 2 0 0 1 2-2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
    <path
      d="M7 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 0 10-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={17} cy={6} r={2} fill="none" stroke="currentColor" strokeWidth={1.8} />
    <path
      d="M7 12l10 6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={17} cy={18} r={2} fill="none" stroke="currentColor" strokeWidth={1.8} />
  </svg>
);

const MegaphoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
    <path
      d="M4 13V7l14-4v18l-6-2"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 13v4a3 3 0 0 0 3 3h1"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
    <path
      d="M4 6h16v10H8l-4 4Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={9} cy={11} r={0.9} fill="currentColor" />
    <circle cx={12} cy={11} r={0.9} fill="currentColor" />
    <circle cx={15} cy={11} r={0.9} fill="currentColor" />
  </svg>
);

const BoltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" role="img" aria-hidden="true" {...props}>
    <path
      d="M11 2 4 13h6v9l7-11h-6Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function linkIsActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

export function NavigationDock() {
  const pathname = usePathname();
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="pointer-events-none hidden md:flex">
        <div className="pointer-events-auto fixed bottom-[18px] left-1/2 z-20 w-full max-w-[900px] -translate-x-1/2 px-3">
          <nav className="flex w-full items-center gap-3 rounded-[32px] border border-black bg-white px-4 py-3 shadow-[0_6px_0_0_#000]">
            <Link
              href="/"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black text-black"
              aria-label="Saved stories"
            >
              <BookmarkIcon className="h-5 w-5" />
            </Link>
            <ul className="flex flex-1 items-center gap-3 text-sm font-semibold">
              {menuLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`rounded-2xl border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                      linkIsActive(pathname, href)
                        ? "bg-[#d9ff00] text-black"
                        : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <Link
                href="/checkout"
                className={`rounded-2xl border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                  pathname === "/checkout"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Cart ({cartCount})
              </Link>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white"
                aria-label="Share"
              >
                <ShareIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white"
                aria-label="Announcements"
              >
                <MegaphoneIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white"
                aria-label="Chat"
              >
                <ChatIcon className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div className="pointer-events-none md:hidden">
        <div className="pointer-events-auto fixed inset-x-0 bottom-6 z-20 flex flex-col items-center gap-4 px-4">
          <div className="w-full max-w-xs rounded-[24px] border border-black bg-neutral-100 p-4 text-center shadow-[0_4px_0_0_#000]">
            <div className="grid grid-cols-2 gap-3">
              {menuLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`rounded-2xl border border-black px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
                    linkIsActive(pathname, href)
                      ? "bg-[#d9ff00] text-black"
                      : "bg-white text-black"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex w-full max-w-sm flex-wrap items-center justify-center gap-3 rounded-[30px] border border-black bg-white px-4 py-3 shadow-[0_6px_0_0_#000]">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white"
              aria-label="Share"
            >
              <ShareIcon className="h-5 w-5" />
            </button>
            <Link
              href="/checkout"
              className="rounded-2xl border border-black px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
            >
              Cart ({cartCount})
            </Link>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white"
                aria-label="Broadcast"
              >
                <MegaphoneIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black bg-[#d9ff00] text-black"
                aria-label="Pulse"
              >
                <BoltIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
