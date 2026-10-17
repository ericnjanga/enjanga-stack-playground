export type Demo = {
  title: string;
  route?: string;
  stack: string;
  description: string;
};

export const current = [
  {
    title: "Form controls",
    route: "/react-form-controls",
    stack: "React / TypeScript",
    description: "In React, let's exploring form controls and their state management, error handling, validation, submission, and accessibility. This demo, instead of using packages like React Hook Form or Formik, will use React's built-in state management and event handling to manage form state and validation, using a custom hook.",
  },
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
