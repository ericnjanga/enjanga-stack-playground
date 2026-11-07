import type { ReactNode } from "react";
import Link from 'next/link';

type ChapterContent = {
  title: string;
  description: ReactNode;
};


export { chapters } from "./chapter-config";

export const chaptersContent = {
  introduction: {
    title: "Introduction",
    description: (
      <>
      <section aria-labelledby="introduction-title" className="space-y-6"> 
        <div className="">
          <h3 id="introduction-title" className="mb-6">HI, I`M ERIC</h3>
          <div className="space-y-5">
            <p>Welcome once again in my Stack Playground.</p>
            <p>I am a software engineer who connects UI architecture, practical engineering, and customers needs to shape the best possible web experience.</p>
            <p>I primarily work in engineering, where the software is created, tested, and shipped; but I like being close to the product, and design, to better understand customers` needs and seeing how my work helps them.</p>
            <p>I enjoy mastering concepts, and then turning them into practical customer solutions; that`s why I`ve created this <b>Stack Playground</b>, and a {' '}
              <Link href="/publications" className="text-sky-300 underline underline-offset-4 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
                sister LinkedIn Newsletter
              </Link>.
            </p>


            <div aria-hidden="true" className="my-10 h-px bg-gradient-to-r from-sky-400/50 via-slate-700 to-transparent" />
          </div>
        </div>
      </section>
      </>
    ),
  },
  "ai-context": {
    title: "The Context of AI",
    description: (
      <>


      <section aria-labelledby="curiosity-title" className="space-y-6">
        <div className="space-y-5">
          <h3 id="curiosity-title" className="mb-6">How do you feel when you discover you were just scratching the surface all these years?</h3>
          <div className="space-y-5">
            <h4 className="text-lg">First, I was shocked, then I was faced with a decision</h4>
            <p>...</p>
            <p>I’m drawn to the moments when separate ideas begin to connect. A question about an interface can lead to a closer look at architecture, human behaviour, or the small decisions that shape an experience. This is placeholder copy for a story about curiosity, thoughtful exploration, and finding patterns in unexpected places.</p>
            <p>For me, understanding a concept means going beneath the surface: tracing how it works, asking why it matters, and discovering what else it might teach us. This second placeholder paragraph leaves room for my background, the ideas I’m exploring, and the connections I hope to share along the way.</p>
          </div>
        </div>
      </section>

        <section aria-labelledby="ai-section-1" className="space-y-6">
        <div aria-hidden="true" className="my-10 h-px bg-gradient-to-r from-sky-400/50 via-slate-700 to-transparent" />
        <h3 id="ai-section-1" className="mb-6">The rise of AI and the impact on software development</h3>
        <div className="space-y-5">
          <p>Like many Software Engineers in Canada, in the USA, and probably around the world, I`ve been impacted by the rise of AI.</p>
          <p>I was an independent contractor for several years, working with startups and established companies to build scalable web applications; and experienced a reduced demand for my services.</p>
          <p>My ending contract with a major client not being renewed in early June 2026 was another confirmation of the market shift.</p>
          <blockquote className="mt-6 border-l-4 border-sky-300 pl-4 text-slate-400">
            <p className="text-sky-300">“Sofware engineers must re-engineer themselves, and wear their students hats once again.”</p> 
          </blockquote>
        </div>
      </section>
      <section aria-labelledby="ai-section-2" className="space-y-6">
        <div aria-hidden="true" className="my-10 h-px bg-gradient-to-r from-sky-400/50 via-slate-700 to-transparent" />
        <h3 id="ai-section-2" className="mb-6">The market has changed, so as job search</h3>
        <div className="space-y-5">
          <p>Like many Software Engineers in Canada, in the USA, and probably around the world, I`ve been impacted by the rise of AI.</p>
          <p>I was an independent contractor for several years, working with startups and established companies to build scalable web applications; and experienced a reduced demand for my services.</p>
          <p>My ending contract with a major client not being renewed in early June 2026 was another confirmation of the market shift.</p>
          <blockquote className="mt-6 border-l-4 border-sky-300 pl-4 text-slate-400">
            <p className="text-sky-300">“Sofware engineers must re-engineer themselves, and wear their students hats once again.”</p> 
          </blockquote>
        </div>
      </section>
      <section aria-labelledby="ai-section-3" className="space-y-6">
        <div aria-hidden="true" className="my-10 h-px bg-gradient-to-r from-sky-400/50 via-slate-700 to-transparent" />
        <h3 id="ai-section-3" className="mb-6">What kind of learning should we prioritize in the age of AI?</h3>
        <div className="space-y-5">
          <p>I`ve seen so many pears jumping into the mastery of AI tools...</p>
          <p>...</p>
        </div>
      </section>
      <section aria-labelledby="ai-section-4" className="space-y-6">
        <div aria-hidden="true" className="my-10 h-px bg-gradient-to-r from-sky-400/50 via-slate-700 to-transparent" />
        <h3 id="ai-section-4" className="mb-6">Why I created the `Modern UI Architecture` newsletter?</h3>
        <div className="space-y-5">
          <h4 className="text-lg">A difficult career decision</h4>
          <p>I first created it for myself; I made the decision to strenghen my field knowledge, using AI tools as facilitators, instead of shifting my career.</p>
          <p>...</p>

          <h4 className="text-lg">Organizing my thoughts &amp; discoveries</h4>
          <p>...</p>

          <h4 className="text-lg">Self honesty in the face of global shifts &amp; an unsatisfied curiosity</h4>
          <p>...</p>

          <h4 className="text-lg">The desire to contribute &amp; leave a meaningful trail</h4>
          <p>...</p>

          <h4 className="text-lg">And finally, a desire for atonement</h4>
          <p>...</p>
        </div>
      </section>
      <section aria-labelledby="ai-section-5" className="space-y-6">
        <div aria-hidden="true" className="my-10 h-px bg-gradient-to-r from-sky-400/50 via-slate-700 to-transparent" />
        <h3 id="ai-section-5" className="mb-6">How do I see the future of the relationship between software engineers and AI?</h3>
        <div className="space-y-5">
          <p>I collaboration, not replacement, or conflict.</p>
          <p>As an example, this website was built by CODEX following my precise instructions.</p>
          <p>CODEX builds most of the scaffolding, I focus on the creative and strategic aspects, and when necessary, I make surgical coding adjustments.</p>
          <p>Another example is sometimes, making surgical code adjustments, then prompting the AI agent to complete the task is more effective that writing series of prompts in the first place.</p>
          <p>Another example is that AI doesn`t necessarily concern itself with the right patterns or best practices when generating a solution. It`s up to the human engineer to exercise judgment and apply domain knowledge.</p>
          <p>There is so much more in the software development process, so much complexities, so many elements that cannot be automated that require human oversight and judgment. And more importantly, that cano tbe argued in a short conversation.</p>
          <p>But one thing is certain: There will still be a need of people who master the software engineering craft well enough to work alongside AI effectively, and take the lead when necessary.</p>
        </div>
      </section>
      </>
    ),
  },
  newsletter: {
    title: "Modern UI Architecture Newsletter",
    description: <p>Why I started writing and sharing what I learn.</p>,
  },
  "the-future": {
    title: "The Future of Web Engineering",
    description: (
      <>
        <h3>In the short term</h3>
        <p>The wide adoption of AI has greately demystified the web engineering process...</p>
        <p>There will be an explosion of complex applications and websites, easily generated and operated by non-engineers.</p>
        <hr />
        <h3>In the medium to long term</h3>
        <p>Web engineerings, to thrive will have to develop a deeper expertise of their field as well as some qualities. Like Self-confiance, ownership, and intuition.</p>
        <p>Web engineers will still need to develop a deep learning of the code, but not for implementation sake, but to develop a better sense of judement, as well as the sufficient knowledge to know what to ask AI agents.</p>
      </>
    ),
  },
} satisfies Record<string, ChapterContent>;
