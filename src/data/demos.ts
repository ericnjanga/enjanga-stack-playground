
export type LinkedInArticleShape = {
    title: string;
    url: string;
};

export type DemoShape = {
  id: number;
  title: string;
  route?: string;
  stack: string;
  description: string;
  blurb?: string;
  relatedArticle?: LinkedInArticleShape[];
};

// Stable IDs, listed in display order. Move an ID between groups to change its status.
export const currentDemos: readonly number[] = [186427826, 934199063, 185770943];

export const plannedDemos: readonly number[] = [916986263, 896143462, 649765520];

export const demos: readonly DemoShape[] = [
  {
    id: 186427826,
    title: "react counter",
    route: "/react-counter",
    stack: "React / TypeScript",
    blurb: "A flexible, customizable, and scalable react counter",
    description: "A planned React counter demo exploring reusable component design and state management. The counter will support configurable starting values, step sizes, minimum and maximum limits, and a reset action, with accessible controls and flexible styling for use across different interfaces.",
    relatedArticle: [{
      title: "Building a React Counter: Learning Through Mistakes — Part 1",
      url: "https://www.linkedin.com/pulse/building-react-counter-learning-through-mistakes-part-eric-njanga-kse2c/",
    }],
  },
  {
    id: 934199063,
    title: "Form controls",
    route: "/react-form-controls",
    stack: "React / TypeScript",
    description: "In React, let's exploring form controls and their state management, error handling, validation, submission, and accessibility. This demo, instead of using packages like React Hook Form or Formik, will use React's built-in state management and event handling to manage form state and validation, using a custom hook.",
    relatedArticle: [{
      title: "React Forms: Managing Inputs Without External Libraries",
      url: "https://www.linkedin.com/pulse/react-forms-managing-inputs-without-external-libraries-eric-njanga-ajhlc/"
    }],
  },
  {
    id: 185770943,
    title: "Product search",
    route: "/react-product-search",
    stack: "React / TypeScript",
    description: "A dynamic search and filter feature for API fetched products. Explore data fetching in React, including loading states, error handling, and rendering data from an API.",
    relatedArticle: [{
      title: "Inside a React Product Search: Architecture, Data Flow & Performance",
      url: "https://www.linkedin.com/pulse/inside-react-product-search-architecture-data-flow-eric-njanga-za6vc?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3BkaZ2j%2BleQDySn6%2B2v6lOVQ%3D%3D"
    }],
  },
  {
    id: 916986263,
    title: "React shopping cart reservation",
    route: "/react-shopping-cart-reservation",
    stack: "React / TypeScript",
    blurb: "Users add products to a cart, adjust quantities, and have 2 minutes to “check out” before their reservation expires.",
    description: `Users add products to a cart, adjust quantities, and have 2 minutes to “check out” before their reservation expires:

- Show 5 products with an Add to cart button.
- Adding the same product again increases its quantity.
- Let users increase, decrease, and remove cart items.
- Display the total item count and total price—calculate these from the cart instead of storing them separately.
- Start a 2-minute countdown when the first item is added. At zero, clear the cart and show “Reservation expired.”
- A Checkout button clears the cart and shows a success message.`,
  },
  {
    id: 896143462,
    title: "Secure API integration",
    stack: "JavaScript / TypeScript",
    description: "Explore secure integration with RESTful APIs and web services, including API security gateways, OAuth 2.0 authorization, JSON Web Tokens (JWTs), TLS/SSL certificates, middleware, and communication protocols.",
  },
  {
    id: 649765520,
    title: "Streaming rendering",
    stack: "Next.js",
    description: "A demo of the streaming rendering strategy.",
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
