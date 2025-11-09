"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useCart } from "@/app/_providers/CartProvider";
import type { Product } from "@/app/data/products";

type ProductGridProps = {
  products: readonly Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [view, setView] = useState<"front" | "back">("front");

  const handleAdd = (goToCheckout = false) => {
    addItem(product);
    if (goToCheckout) {
      router.push("/checkout");
    }
  };

  const toggleView = () => {
    setView((prev) => (prev === "front" ? "back" : "front"));
  };

  return (
    <article className="flex flex-col gap-3 rounded-[28px] border border-black bg-white p-4 shadow-[0_6px_0_0_#000]">
      <div className="relative h-[22rem] w-full overflow-hidden rounded-[22px] border border-black bg-neutral-100">
        <Image
          src={view === "front" ? product.front : product.back}
          alt={`${product.name} ${view} graphic`}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <button
          type="button"
          onClick={toggleView}
          className="absolute -bottom-6 right-4 flex h-28 w-28 flex-col items-center gap-1 rounded-2xl border border-black bg-white px-2 pb-2 pt-3 text-xs font-semibold uppercase tracking-[0.2em] shadow-[0_4px_0_0_#000]"
        >
          <span className="text-[0.55rem] text-neutral-500">Tap to view</span>
          <div className="relative h-full w-full">
            <Image
              src={view === "front" ? product.back : product.front}
              alt={`${product.name} toggle preview`}
              fill
              className="object-contain"
              sizes="112px"
            />
          </div>
        </button>
      </div>
      <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.12em]">
        <span>{product.name}</span>
        <span className="text-neutral-400">{product.price}</span>
      </div>
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
        Now viewing: {view}
      </p>
      <div className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
        <button
          className="rounded-2xl border border-black bg-[#d9ff00] px-4 py-2 text-black"
          onClick={() => handleAdd(true)}
        >
          Shop
        </button>
        <button
          className="rounded-2xl border border-black px-4 py-2"
          onClick={() => handleAdd(false)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
