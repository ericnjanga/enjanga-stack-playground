export type DemoShape = {
  title: string;
  route?: string;
  stack: string;
  description: string;
  relatedArticle?: {
    title: string;
    url: string;
  };
};

export const current = [
  {
    title: "Form controls",
    route: "/react-form-controls",
    stack: "React / TypeScript",
    description: "In React, let's exploring form controls and their state management, error handling, validation, submission, and accessibility. This demo, instead of using packages like React Hook Form or Formik, will use React's built-in state management and event handling to manage form state and validation, using a custom hook.",
    relatedArticle: {
      title: "React Forms: Managing Inputs Without External Libraries",
      url: "https://www.linkedin.com/pulse/react-forms-managing-inputs-without-external-libraries-eric-njanga-ajhlc/"
    },
  },
  {
    title: "Product search",
    route: "/react-product-search",
    stack: "React / TypeScript",
    description: "A dynamic search and filter feature for API fetched products. Explore data fetching in React, including loading states, error handling, and rendering data from an API.",
    relatedArticle: {
      title: "Inside a React Product Search: Architecture, Data Flow & Performance",
      url: "https://www.linkedin.com/pulse/inside-react-product-search-architecture-data-flow-eric-njanga-za6vc?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3BkaZ2j%2BleQDySn6%2B2v6lOVQ%3D%3D"
    },
  },
] satisfies (DemoShape & { route: string })[];

export const planned = [
  {
    title: "Secure API integration",
    stack: "JavaScript / TypeScript",
    description: "Explore secure integration with RESTful APIs and web services, including API security gateways, OAuth 2.0 authorization, JSON Web Tokens (JWTs), TLS/SSL certificates, middleware, and communication protocols.",
  },
  {
    title: "Streaming rendering",
    stack: "Next.js",
    description: "A demo of the streaming rendering strategy.",
  },
] satisfies DemoShape[];
