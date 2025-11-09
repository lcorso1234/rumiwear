import { PaginationControls } from "@/app/_components/PaginationControls";
import { VibeFooter } from "@/app/_components/VibeFooter";
import { blogPosts } from "@/app/data/content";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-56 pt-12 sm:px-8 lg:px-16 md:pb-32">
        <section className="space-y-6 text-left md:-ml-[4vw]">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
            Blog Dispatches
          </p>
          <div className="space-y-4 text-[clamp(2.5rem,8vw,6rem)] font-semibold uppercase leading-[0.95] tracking-tight">
            <span className="block">Notes from the neon underground.</span>
            <span className="block">
              We write like we build — loud, honest, relentless.
            </span>
          </div>
          <p className="text-lg font-medium text-neutral-800">
            Interviews, rants, and playbooks for founders who prefer the hard way.
          </p>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Latest posts
            </p>
            <span className="rounded-2xl border border-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Updated weekly
            </span>
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

        <PaginationControls current={1} total={5} label="Page" />

        <VibeFooter />
      </main>
    </div>
  );
}
