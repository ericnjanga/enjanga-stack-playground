export type Demo = {
  title: string;
  route?: string;
  stack: string;
  description: string;
};

export const current = [
  {
    title: "Product search",
    route: "/react-product-search",
    stack: "React / TypeScript",
    description: "A dynamic search and filter feature for API fetched products.",
  },
] satisfies (Demo & { route: string })[];

export const planned = [
  {
    title: "Dynamic form",
    stack: "JavaScript / TypeScript",
    description: "The same dynamic form, with direct manipulation of the DOM tree.",
  },
  {
    title: "Streaming rendering",
    stack: "Next.js",
    description: "A demo of the streaming rendering strategy.",
  },
] satisfies Demo[];
