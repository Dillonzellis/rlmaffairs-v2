export interface NavItem {
  name: string;
  href: string;
  isTitle?: boolean;
}

export const navItems = [
  { name: "venue", href: "/venue" },
  { name: "catering", href: "/catering" },
  { name: "rlm affairs", href: "/", isTitle: true },
  { name: "florals", href: "/florals" },
  { name: "our story", href: "/our-story" },
];
