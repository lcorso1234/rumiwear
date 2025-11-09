import { PaginationControls } from "@/app/_components/PaginationControls";
import { VibeFooter } from "@/app/_components/VibeFooter";
import { videoFeatures } from "@/app/data/content";

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-56 pt-12 sm:px-8 lg:px-16 md:pb-32">
        <section className="space-y-6 text-left md:-ml-[4vw]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
            Studio Films
          </p>
          <div className="space-y-4 text-[clamp(2.5rem,8vw,6rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            <span className="block">Screenshots of the rebellion.</span>
            <span className="block">
              Cameras on, filters off, hustle documented in neon.
            </span>
          </div>
          <p className="text-lg font-medium text-neutral-800">
            Mini docs, founder confessionals, and behind-the-drop footage.
          </p>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Watch list
            </p>
            <span className="rounded-2xl border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Fresh uploads
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {videoFeatures.map((video) => (
              <article
                key={video.title}
                className="flex flex-col gap-4 rounded-[32px] border border-black bg-white p-5 shadow-[0_6px_0_0_#000]"
              >
                <div className="relative overflow-hidden rounded-[26px] border border-black">
                  <div
                    className={`relative flex h-56 items-end justify-between bg-gradient-to-br ${video.gradient} px-6 pb-6 text-white`}
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em]">
                        {video.duration}
                      </p>
                      <h3 className="text-3xl font-semibold uppercase leading-tight">
                        {video.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                      {video.guest}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-neutral-700">{video.summary}</p>
                <button className="self-start rounded-2xl border border-black bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Watch now
                </button>
              </article>
            ))}
          </div>
        </section>

        <PaginationControls current={1} total={4} label="Episodes" />

        <VibeFooter />
      </main>
    </div>
  );
}
