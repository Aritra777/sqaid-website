export type ProductLink = {
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "soon";
};

export const PRODUCTS: ProductLink[] = [
  {
    slug: "argus",
    name: "Argus",
    tagline: "AI-native financial-crime intelligence",
    status: "live",
  },
  {
    slug: "case-manager",
    name: "Case Manager",
    tagline: "Configurable case management for compliance",
    status: "live",
  },
  {
    slug: "faro",
    name: "Faro",
    tagline: "Real-time fraud & AML microservices",
    status: "live",
  },
  {
    slug: "abacus",
    name: "Abacus",
    tagline: "Coming soon",
    status: "soon",
  },
];

export const TOP_NAV = [
  { to: "/#solution", label: "Platform" },
  { to: "/#products", label: "Products" },
  { to: "/#industries", label: "Industries" },
  { to: "/#about", label: "About" },
] as const;

export const COMPANY_EMAIL = "info@sqaid.ai";
