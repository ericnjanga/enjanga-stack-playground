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
      <HeroDemo title="Publications" description="I publish these Modern UI Architecture articles on LinkedIn. Here, I organize them by topic and connect them to relevant projects so you can explore the ideas in practice." />
      <Suspense fallback={<p className="wrapper">Loading publications…</p>}>
        <PublicationList />
      </Suspense>
    </>
  );
}
