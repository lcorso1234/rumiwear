import { VibeFooter } from "@/app/_components/VibeFooter";
import {
  blogPosts,
  podcastHighlights,
  videoFeatures,
} from "@/app/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-4 pb-56 pt-12 sm:px-8 lg:px-16 md:pb-32">
        <section className="w-full max-w-5xl space-y-6 text-left md:-ml-[4vw]">
          <div className="space-y-4 text-[clamp(3rem,10vw,7.5rem)] font-semibold uppercase leading-[0.92] tracking-tight">
            <span className="block">Allow us to reintroduce ourselves.</span>
            <span className="block">
              <span className="box-decoration-clone bg-[#d9ff00] px-2 py-1 text-black">
                Rumi Wear
              </span>
              , we get knocked down
            </span>
            <span className="block">and we get the fuck back up.</span>
          </div>
          <p className="text-lg font-medium text-neutral-800">
            The clothing brand for the modern entrepreneur.
          </p>
        </section>

        <section className="mt-16 space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Podcast hub
            </p>
            <button
              type="button"
              className="rounded-2xl border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Latest episodes
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {podcastHighlights.map((item) => (
              <article
                key={item.label}
                className="flex flex-col gap-4 rounded-[28px] border border-black bg-white p-5 shadow-[0_6px_0_0_#000]"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em]">
                  <span>{item.label}</span>
                  <span className="rounded-full border border-black px-3 py-1 text-[0.65rem]">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-700">{item.description}</p>
                <button className="self-start rounded-2xl border border-black bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Play episode
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Studio films
            </p>
            <button
              type="button"
              className="rounded-2xl border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              See archive
            </button>
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

        <section className="mt-16 space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Blog dispatches
            </p>
            <button
              type="button"
              className="rounded-2xl border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Read the blog
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="flex h-full flex-col gap-4 rounded-[28px] border border-black bg-white p-5 shadow-[0_4px_0_0_#000]"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em]">
                  <span>{post.category}</span>
                  <span className="rounded-full border border-black px-3 py-1 text-[0.65rem]">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold uppercase leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-700">{post.summary}</p>
                <button className="mt-auto self-start rounded-2xl border border-black bg-[#d9ff00] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
                  Read post
                </button>
              </article>
            ))}
          </div>
        </section>

        <VibeFooter />
      </main>
    </div>
  );
}
