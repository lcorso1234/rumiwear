import { PaginationControls } from "@/app/_components/PaginationControls";
import { VibeFooter } from "@/app/_components/VibeFooter";
import { podcastHighlights } from "@/app/data/content";

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-56 pt-12 sm:px-8 lg:px-16 md:pb-32">
        <section className="space-y-6 text-left md:-ml-[4vw]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
            Podcast Hub
          </p>
          <div className="space-y-4 text-[clamp(2.5rem,8vw,6rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            <span className="block">Radio for the modern outcast.</span>
            <span className="block">
              Founder hotline, therapy sessions, and midnight dispatches.
            </span>
          </div>
          <p className="text-lg font-medium text-neutral-800">
            Stream the shows that keep you building when everyone else clocks out.
          </p>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Shows
            </p>
            <span className="rounded-2xl border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Drop every Monday
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {podcastHighlights.map((show) => (
              <article
                key={show.label}
                className="flex flex-col gap-4 rounded-[28px] border border-black bg-white p-5 shadow-[0_6px_0_0_#000]"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em]">
                  <span>{show.label}</span>
                  <span className="rounded-full border border-black px-3 py-1 text-[0.65rem]">
                    {show.metric}
                  </span>
                </div>
                <h3 className="text-3xl font-semibold uppercase leading-tight">
                  {show.title}
                </h3>
                <p className="text-sm text-neutral-700">{show.description}</p>
                <button className="self-start rounded-2xl border border-black bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Play episode
                </button>
              </article>
            ))}
          </div>
        </section>

        <PaginationControls current={1} total={7} label="Seasons" />

        <VibeFooter />
      </main>
    </div>
  );
}
