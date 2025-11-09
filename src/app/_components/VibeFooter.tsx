const beforeList = [
  "We are not owning who we are.",
  "We feel ashamed to be on our own path.",
  "We are walking on eggshells in our environments.",
];

const afterList = [
  "We are free to be ourselves.",
  "We are proud of the path we walk because it is ours.",
  "We own who we are.",
];

export function VibeFooter() {
  return (
    <footer className="mt-20 rounded-[36px] border border-black bg-white/70 p-6 shadow-[0_6px_0_0_#000] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
        Before / After Matrix
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-black bg-white p-5 shadow-[0_4px_0_0_#000]">
          <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            <p>Before Rumi Wear</p>
            <span className="text-3xl">:(</span>
          </div>
          <p className="mt-2 text-2xl font-semibold">We were miserable.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {beforeList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] border border-black bg-[#d9ff00]/20 p-5 shadow-[0_4px_0_0_#000]">
          <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            <p>After Rumi Wear</p>
            <span className="text-3xl">:)</span>
          </div>
          <p className="mt-2 text-2xl font-semibold">Now we are chaos-proof.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {afterList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-black bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] shadow-[0_4px_0_0_#000]">
        <span className="text-neutral-600">Subscribe for rude awakenings + neon drops</span>
        <a
          href="https://example.com/subscribe"
          className="rounded-2xl border border-black bg-[#d9ff00] px-4 py-2 text-black"
        >
          Subscribe
        </a>
      </div>
    </footer>
  );
}
