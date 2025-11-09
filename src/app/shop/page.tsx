import { ProductGrid } from "@/app/_components/ProductGrid";
import { VibeFooter } from "@/app/_components/VibeFooter";
import { products } from "@/app/data/products";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-56 pt-12 sm:px-8 lg:px-16 md:pb-32">
        <section className="space-y-6 text-left md:-ml-[4vw]">
          <div className="space-y-4 text-[clamp(2.5rem,9vw,7rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            <span className="block">Making</span>
            <span className="block">
              <span className="box-decoration-clone bg-[#d9ff00] px-3 py-1 text-black">
                Entrepreneurship
              </span>
            </span>
            <span className="block">Cool Again.</span>
          </div>
          <p className="text-lg font-medium text-neutral-800">
            The brand for the modern outcast.
          </p>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Capsule drop
            </p>
            <span className="rounded-2xl border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              New in vault
            </span>
          </div>
          <ProductGrid products={products} />
        </section>

        <VibeFooter />
      </main>
    </div>
  );
}
