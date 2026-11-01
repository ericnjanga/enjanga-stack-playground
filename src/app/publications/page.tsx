import type { Metadata } from "next";
import { Suspense } from "react";
import HeroDemo from "@/components/HeroDemo";
import PublicationList from "./PublicationList";

export const metadata: Metadata = {
  title: "Publications | Enjanga Stack Playground",
  description: "Explore Eric Njanga’s Modern UI Architecture articles, published on LinkedIn and organized here by topic with links to relevant projects.",
};

export default function PublicationsPage() {
  return (
    <>
      <HeroDemo
        title="Publications"
        description={
          <p>
            Explore my LinkedIn publications from the{" "}
            <strong>
              <a
                href="https://www.linkedin.com/newsletters/modern-ui-architecture-7498340545321123840/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline underline-offset-4 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
              >
                Modern UI Architecture<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </strong>{" "}
            newsletter, organized by topic and linked to relevant projects that bring architectural concepts and engineering practices to life.
          </p>
        }
      />
      <Suspense fallback={<p className="wrapper">Loading publications…</p>}>
        <PublicationList />
      </Suspense>
    </>
  );
}
