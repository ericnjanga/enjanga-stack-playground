import ChapterContent from "./ChapterContent";
import { chaptersContent } from "./constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Enjanga Stack Playground",
  description: "Meet Eric Njanga: connecting the dots through curiosity, exploring ideas, and digging deeper into the concepts behind the code.",
};

export default function AboutMePage() {
  return ( 
    <ChapterContent slug="introduction" title={chaptersContent.introduction.title}>
      {chaptersContent.introduction.description}
    </ChapterContent> 
  );
}
