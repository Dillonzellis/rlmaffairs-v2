import { MoveRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Image from "next/image";

export const footerLinks = [
  {
    title: "RLM Affairs",
    links: [
      { label: "Venue", href: "/venue" },
      { label: "Florals", href: "/florals" },
      { label: "Event Planning", href: "/event-planning" },
      { label: "Our Story", href: "/our-story" },
    ],
  },
  {
    title: null,
    links: [
      { label: "Catering Menu", href: "/catering-menu" },
      { label: "Floor Plan", href: "/floor-plan" },
      { label: "Event Planning", href: "/event-planning" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "/instagram" },
      { label: "Facebook", href: "/facebook" },
      { label: "Twitter", href: "/twitter" },
      { label: "The Knot", href: "/the-knot" },
    ],
  },
];

type FooterLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const FooterCol = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col justify-end gap-2">{children}</div>;
};

const FooterLinkHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-3xl font-light text-slate-50/60">{children}</div>;
};

const FooterLink = ({ children, ...props }: FooterLinkProps) => {
  return (
    <a className="text-3xl text-slate-50" {...props}>
      {children}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brandingBlue-900 py-20">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-[55rem] text-center">
          <div className="pb-2 text-5xl text-slate-50">
            Create Your Perfect Day with Our All-Inclusive Wedding Packages.
          </div>
          <div className="pb-8 text-4xl font-light text-brandingGrey-400">
            Packages start at $30,000 with flexible payment plans available.
          </div>
          <Button variant="secondary" size="lg">
            Browse Our Packages
          </Button>
          <div className="pt-8 text-sm font-light text-brandingGrey-400">
            Not finding what you&apos;re looking for?
          </div>
          <a
            className="flex items-center justify-center gap-1 text-sm text-slate-50 underline-offset-4 hover:underline"
            href="#"
          >
            Tell us about your dream wedding
            <MoveRight className="h-5 w-5 text-slate-50" />
          </a>
        </div>
      </MaxWidthWrapper>
      <Image src="/footer-sparkler.jpg" alt="" width={1282} height={647} />
      <MaxWidthWrapper>
        <div className="grid grid-cols-4">
          {footerLinks.map((col, idx) => (
            <FooterCol key={idx}>
              {col.title && <FooterLinkHeader>{col.title}</FooterLinkHeader>}
              {col.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterCol>
          ))}
          <div className="flex flex-col justify-end gap-8 text-slate-50">
            <div className="space-y-2">
              <div>Have Questions?</div>
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
            <div className="space-y-2">
              <div>Have Questions?</div>
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
