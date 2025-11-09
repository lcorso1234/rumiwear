type PaginationControlsProps = {
  current: number;
  total: number;
  label?: string;
};

export function PaginationControls({ current, total, label }: PaginationControlsProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-[28px] border border-black bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] shadow-[0_4px_0_0_#000]">
      <div className="flex items-center gap-3">
        {label ? <span className="text-neutral-500">{label}</span> : null}
        <span>
          {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm tracking-[0.18em]">
        <button
          type="button"
          className="rounded-2xl border border-black px-4 py-2 text-black disabled:opacity-40"
          disabled={current <= 1}
        >
          Prev
        </button>
        <button
          type="button"
          className="rounded-2xl border border-black bg-[#d9ff00] px-4 py-2 text-black disabled:opacity-40"
          disabled={current >= total}
        >
          Next
        </button>
      </div>
    </div>
  );
}
