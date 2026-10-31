import type { Metadata } from "next";
import { Suspense } from "react";
import HeroDemo from "@/components/HeroDemo";
import PublicationList from "./PublicationList";

export const metadata: Metadata = {
  title: "Publications | Enjanga Stack Playground",
  description: "Modern UI Architecture newsletter editions by Eric Njanga.",
};

export default function PublicationsPage() {
  return (
    <>
      <HeroDemo title="Publications" description="Explore Modern UI Architecture: the engineering decisions behind modern web applications." />
      <Suspense fallback={<p className="wrapper">Loading publications…</p>}>
        <PublicationList />
      </Suspense>
    </>
  );
}
