import ChapterContent from "../ChapterContent";
import { notFound, redirect } from "next/navigation";
import { chaptersContent } from "./../constants";

type ChapterSlug = keyof typeof chaptersContent;

function isChapterSlug(slug: string): slug is ChapterSlug {
  return Object.hasOwn(chaptersContent, slug);
}

export function generateStaticParams() {
  return Object.keys(chaptersContent).filter((slug) => slug !== "introduction").map((slug) => ({ slug }));
}

export default async function AboutChapterPage({ params }: { params: Promise<{ slug: string}>}) {
  const { slug } = await params;

  if (!isChapterSlug(slug)) {
    notFound();
  }

  if (slug === "introduction") redirect("/about");

  const chapter = chaptersContent[slug];

  return (
    <ChapterContent slug={slug} title={chapter.title}>
      {chapter.description}
    </ChapterContent>
  );
}