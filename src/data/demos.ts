
export type LinkedInArticleShape = {
    title: string;
    url: string;
};

export type CodeVersion = "Vanilla" | "React" | "Next.js";

export type DemoShape = {
  id: number;
  title: string;
  route?: string;
  stack: string;
  /** Implementations available to explore now; use an empty array for planned demos. */
  codeVersions: readonly CodeVersion[];
  /** User problem, practical use, and intended outcome. */
  practicalApplication: string;
  /** Languages, libraries, patterns, and their rationale for a technical audience. */
  technicalOverview: string;
  relatedArticle?: LinkedInArticleShape[];
};

// Stable IDs in display order, with current demos listed newest first.
// Add new current demos at the start; move an ID between groups to change its status.
export const currentDemos: readonly number[] = [728430615, 185770943, 934199063, 186427826];

export const plannedDemos: readonly number[] = [916986263, 896143462, 649765520];

export const demos: readonly DemoShape[] = [
  {
    id: 186427826,
    title: "react counter",
    route: "/react-counter",
    stack: "React / TypeScript",
    codeVersions: ["React"],
    technicalOverview:
      "Explores React state updates, automatic batching, closures, and the interaction between state and asynchronous callbacks such as setTimeout.",
    practicalApplication:
      "Allows users to increment, pause, resume, and reset a counter, demonstrating controlled, time-based interactions.",
    relatedArticle: [
      {
        title: "Building a React Counter: Learning Through Mistakes — Part 1",
        url: "https://www.linkedin.com/pulse/building-react-counter-learning-through-mistakes-part-eric-njanga-kse2c/",
      },
      {
        title: "Building a React Counter: Learning Through Mistakes — Part 2",
        url: "https://www.linkedin.com/pulse/building-react-counter-learning-through-mistakes-part-eric-njanga-fkj6c",
      },
    ],
  },
  {
    id: 934199063,
    title: "Form controls",
    route: "/react-form-controls",
    stack: "React / TypeScript",
    codeVersions: ["React"],
    technicalOverview:
      "Explores controlled form inputs and custom hooks to centralize form state, validation, and submission without external libraries.",
    practicalApplication:
      "Enables users to complete and submit forms with immediate validation feedback, reducing errors and improving usability.",
    relatedArticle: [
      {
        title: "React Forms: Managing Inputs Without External Libraries",
        url: "https://www.linkedin.com/pulse/react-forms-managing-inputs-without-external-libraries-eric-njanga-ajhlc/",
      },
    ],
  },
  {
    id: 185770943,
    title: "Product search",
    route: "/react-product-search",
    stack: "React / TypeScript",
    codeVersions: ["React"],
    technicalOverview:
      "Explores data fetching, JavaScript array transformations, and reusable generic components. Observes how React state updates affect derived calculations, controlled inputs, and component re-rendering.",
    practicalApplication:
      "Helps shoppers search and filter product catalogs, with clear loading and error feedback to support a reliable browsing experience.",
    relatedArticle: [
      {
        title: "Inside a React Product Search: Architecture, Data Flow & Performance",
        url: "https://www.linkedin.com/pulse/inside-react-product-search-architecture-data-flow-eric-njanga-za6vc?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3BkaZ2j%2BleQDySn6%2B2v6lOVQ%3D%3D",
      },
    ],
  },
  {
    id: 916986263,
    title: "React shopping cart reservation",
    route: "/react-shopping-cart-reservation",
    stack: "React / TypeScript",
    codeVersions: [],
    technicalOverview:
      "Will explore React state management, derived calculations, and countdown timers to coordinate cart updates, checkout, and reservation expiry.",
    practicalApplication:
      "Will allow shoppers to manage cart quantities, review totals, and complete checkout within a two-minute reservation window before the cart expires.",
  },
  {
    id: 896143462,
    title: "Secure API integration",
    stack: "JavaScript / TypeScript",
    codeVersions: [],
    technicalOverview:
      "Will explore secure REST API integration using OAuth 2.0, JWTs, TLS, and middleware for authentication, authorization, and data protection.",
    practicalApplication:
      "Will demonstrate secure communication between applications and external services, protecting sensitive data and restricting access to authorized users.",
  },
  {
    id: 649765520,
    title: "Streaming rendering",
    stack: "Next.js",
    codeVersions: [],
    technicalOverview:
      "Will explore Next.js streaming and React Suspense to progressively deliver UI sections without waiting for all data to load.",
    practicalApplication:
      "Will demonstrate how progressive page rendering improves perceived performance by making available content usable while slower sections load.",
  },
  {
    id: 728430615,
    title: "The Learner App",
    route: "/the-learner-app",
    stack: "TypeScript / JavaScript / React",
    codeVersions: ["Vanilla", "React"],
    technicalOverview:
      "Explores JavaScript abstractions, array transformations, function borrowing with call() and apply(), and rendering strategies in Vanilla JavaScript and React.",
    practicalApplication:
      "Helps educators evaluate and rank learners using their lowest assessment scores, highlighting areas where additional support may be needed.",
    relatedArticle: [
      {
        title: "The Learner App — Part 1: Solving a TypeScript Challenge",
        url: "https://www.linkedin.com/pulse/learner-app-part-1-solving-typescript-challenge-eric-njanga-rjkhc",
      },
    ],
  },
];


function getDemoById(id: number): DemoShape {
  const demo = demos.find((demo) => demo.id === id);
  if (!demo) throw new Error(`Unknown demo ID: ${id}`);
  return demo;
}

export function getCurrentDemos(): (DemoShape & { route: string })[] {
  return currentDemos.map((id) => {
    const demo = getDemoById(id);
    if (!demo.route) throw new Error(`Current demo ${id} must have a route.`);
    return { ...demo, route: demo.route };
  });
}

export function getPlannedDemos(): DemoShape[] {
  return plannedDemos.map(getDemoById);
}

export function getDemoByRoute(route: string): DemoShape | undefined {
  return demos.find((demo) => demo.route === route);
}
