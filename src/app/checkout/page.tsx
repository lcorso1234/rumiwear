"use client";

import Link from "next/link";

import { useCart } from "@/app/_providers/CartProvider";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function CheckoutPage() {
  const { items, total, removeItem, clear } = useCart();

  const handleCompleteOrder = () => {
    if (!items.length) return;
    clear();
    alert("Order received. Keep building.");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 pb-56 pt-12 sm:px-8 lg:px-16 md:pb-32">
        <section className="space-y-4 text-left md:-ml-[4vw]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
            Checkout
          </p>
          <div className="space-y-2 text-[clamp(2.5rem,7vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            <span className="block">Uniforms for the</span>
            <span className="block">
              <span className="box-decoration-clone bg-[#d9ff00] px-2 py-1 text-black">
                resilient ones.
              </span>
            </span>
          </div>
          <p className="text-lg font-medium text-neutral-800">
            Review your cart, then go make entrepreneurship cool again.
          </p>
        </section>

        <section className="space-y-6 rounded-[32px] border border-black bg-white p-6 shadow-[0_6px_0_0_#000]">
          {items.length === 0 ? (
            <div className="space-y-4 text-center">
              <p className="text-lg font-semibold uppercase tracking-[0.3em]">
                Cart is empty
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-2xl border border-black bg-[#d9ff00] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em]"
              >
                Back to shop
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-black px-4 py-3"
                >
                  <div>
                    <p className="text-base font-semibold uppercase tracking-[0.2em]">
                      {item.name}
                    </p>
                    <p className="text-sm text-neutral-500">
                      Qty: {item.quantity} · {item.price}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-2xl border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
                    onClick={() => removeItem(item.name)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-[32px] border border-black bg-white/70 p-6 shadow-[0_6px_0_0_#000] backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4 text-lg font-semibold uppercase tracking-[0.2em]">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="rounded-2xl border border-black bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white disabled:opacity-40"
              onClick={handleCompleteOrder}
              disabled={!items.length}
            >
              Complete order
            </button>
            <Link
              href="/shop"
              className="rounded-2xl border border-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
            >
              Continue shopping
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
