import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About me | Enjanga Stack Playground",
  description: "Meet Eric Njanga: connecting the dots through curiosity, exploring ideas, and digging deeper into the concepts behind the code.",
};

export default function AboutMePage() {
  return (
    <article className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,#64748b33_1px,transparent_0)] bg-size-[28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="wrapper py-16 sm:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <h1>Connecting the dots,<br />and following curiosity.</h1> 

          <div className="mt-8 flex flex-wrap items-center justify-center  gap-4 border-t border-b border-slate-700 pt-6 pb-6 text-sm">
            <a href="https://enjanga.com" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline underline-offset-4 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">My website<span className="sr-only"> (opens in a new tab)</span> ↗</a>
            <span aria-hidden="true" className="text-slate-500">|</span>
            <a href="https://www.linkedin.com/in/ericnjanga/" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline underline-offset-4 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">LinkedIn<span className="sr-only"> (opens in a new tab)</span> ↗</a>
          </div>
        </header>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <figure className="relative">
            <Image
              src="/eric-njanga-portrait.jpg"
              alt="Eric Njanga seated at an outdoor café, wearing a light pink blazer."
              width={1600}
              height={1537}
              sizes="(min-width: 1050px) 313px, (min-width: 768px) calc((100vw - 112px) / 3), calc(100vw - 48px)"
              preload
              className="h-auto w-full rounded-2xl border border-slate-700 shadow-2xl"
            />


            <figcaption className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
              <span aria-hidden="true" className="size-2 rounded-full bg-sky-300" />Eric Njanga, software engineer, architect, and author.
            </figcaption>
          </figure>

          <div>
            <section aria-labelledby="digging-deeper-title" className="md:col-start-2 md:pt-3"> 
              <div className="">
                <h2 className="mb-6">HI, I`M ERIC</h2>
                <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                  <p>Thank`s again for visiting my Stack Playground!</p>
                  <p>In this page, I share a little of my journey and explain my motivation for creating this space.</p>
                  <p>Most of what I discuss revolves around the changes caused by the rise of AI, my reaction to these changes, and the process of self-discovery that insued.</p>
                  <p>Have 5 minutes to spare? Let`s go. 👇</p>
                </div>
              </div>
            </section>


            <section aria-labelledby="digging-deeper-title" className="md:col-start-2 md:pt-3">
              <div aria-hidden="true" className="mb-8 flex items-center text-sky-300">
                <span className="size-2 rounded-full bg-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-3 rounded-full border border-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-2 rounded-full bg-current" />
              </div>
              <div className="md:pt-3">
                <h2 className="mb-6">How do you feel when you discover you were just scratching the surface all these years?</h2>
                <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                  <h3 className="text-lg">First, I was shocked, then I was faced with a decision</h3>
                  <p>...</p>
                  <p>I’m drawn to the moments when separate ideas begin to connect. A question about an interface can lead to a closer look at architecture, human behaviour, or the small decisions that shape an experience. This is placeholder copy for a story about curiosity, thoughtful exploration, and finding patterns in unexpected places.</p>
                  <p>For me, understanding a concept means going beneath the surface: tracing how it works, asking why it matters, and discovering what else it might teach us. This second placeholder paragraph leaves room for my background, the ideas I’m exploring, and the connections I hope to share along the way.</p>
                </div>
              </div>
            </section>
            <section aria-labelledby="digging-deeper-title" className="md:col-start-2 md:pt-3">
              <div aria-hidden="true" className="mb-8 flex items-center text-sky-300">
                <span className="size-2 rounded-full bg-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-3 rounded-full border border-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-2 rounded-full bg-current" />
              </div>
              <h2 id="digging-deeper-title" className="mb-6">The rise of AI and the impact on software development</h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                <p>Like many Software Engineers in Canada, in the USA, and probably around the world, I`ve been impacted by the rise of AI.</p>
                <p>I was an independent contractor for several years, working with startups and established companies to build scalable web applications; and experienced a reduced demand for my services.</p>
                <p>My ending contract with a major client not being renewed in early June 2026 was another confirmation of the market shift.</p>
                <blockquote className="mt-6 border-l-4 border-sky-300 pl-4 text-slate-400">
                  <p className="text-sky-300">“Sofware engineers must re-engineer themselves, and wear their students hats once again.”</p> 
                </blockquote>
              </div>
            </section>
            <section aria-labelledby="digging-deeper-title" className="md:col-start-2 md:pt-3">
              <div aria-hidden="true" className="mb-8 flex items-center text-sky-300">
                <span className="size-2 rounded-full bg-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-3 rounded-full border border-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-2 rounded-full bg-current" />
              </div>
              <h2 id="digging-deeper-title" className="mb-6">The market has changed, so as job search</h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                <p>Like many Software Engineers in Canada, in the USA, and probably around the world, I`ve been impacted by the rise of AI.</p>
                <p>I was an independent contractor for several years, working with startups and established companies to build scalable web applications; and experienced a reduced demand for my services.</p>
                <p>My ending contract with a major client not being renewed in early June 2026 was another confirmation of the market shift.</p>
                <blockquote className="mt-6 border-l-4 border-sky-300 pl-4 text-slate-400">
                  <p className="text-sky-300">“Sofware engineers must re-engineer themselves, and wear their students hats once again.”</p> 
                </blockquote>
              </div>
            </section>
            <section aria-labelledby="digging-deeper-title" className="md:col-start-2 md:pt-3">
              <div aria-hidden="true" className="mb-8 flex items-center text-sky-300">
                <span className="size-2 rounded-full bg-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-3 rounded-full border border-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-2 rounded-full bg-current" />
              </div>
              <h2 id="digging-deeper-title" className="mb-6">What kind of learning should we prioritize in the age of AI?</h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                <p>I`ve seen so many pears jumping into the mastery of AI tools...</p>
                <p>...</p>
              </div>
            </section>
            <section aria-labelledby="digging-deeper-title" className="md:col-start-2 md:pt-3">
              <div aria-hidden="true" className="mb-8 flex items-center text-sky-300">
                <span className="size-2 rounded-full bg-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-3 rounded-full border border-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-2 rounded-full bg-current" />
              </div>
              <h2 id="digging-deeper-title" className="mb-6">Why I created the `Modern UI Architecture` newsletter?</h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                <h3 className="text-lg">A difficult career decision</h3>
                <p>I first created it for myself; I made the decision to strenghen my field knowledge, using AI tools as facilitators, instead of shifting my career.</p>
                <p>...</p>

                <h3 className="text-lg">Organizing my thoughts &amp; discoveries</h3>
                <p>...</p>

                <h3 className="text-lg">Self honesty in the face of global shifts &amp; an unsatisfied curiosity</h3>
                <p>...</p>

                <h3 className="text-lg">The desire to contribute &amp; leave a meaningful trail</h3>
                <p>...</p>

                <h3 className="text-lg">And finally, a desire for atonement</h3>
                <p>...</p>
              </div>
            </section>
            <section aria-labelledby="digging-deeper-title" className="md:col-start-2 md:pt-3">
              <div aria-hidden="true" className="mb-8 flex items-center text-sky-300">
                <span className="size-2 rounded-full bg-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-3 rounded-full border border-current" /><span className="h-px w-16 bg-sky-300/40" /><span className="size-2 rounded-full bg-current" />
              </div>
              <h2 id="digging-deeper-title" className="mb-6">How do I see the future of the relationship between software engineers and AI?</h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                <p>I collaboration, not replacement, or conflict.</p>
                <p>As an example, this website was built by CODEX following my precise instructions.</p>
                <p>CODEX builds most of the scaffolding, I focus on the creative and strategic aspects, and when necessary, I make surgical coding adjustments.</p>
                <p>Another example is sometimes, making surgical code adjustments, then prompting the AI agent to complete the task is more effective that writing series of prompts in the first place.</p>
                <p>Another example is that AI doesn`t necessarily concern itself with the right patterns or best practices when generating a solution. It`s up to the human engineer to exercise judgment and apply domain knowledge.</p>
                <p>There is so much more in the software development process, so much complexities, so many elements that cannot be automated that require human oversight and judgment. And more importantly, that cano tbe argued in a short conversation.</p>
                <p>But one thing is certain: There will still be a need of people who master the software engineering craft well enough to work alongside AI effectively, and take the lead when necessary.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
