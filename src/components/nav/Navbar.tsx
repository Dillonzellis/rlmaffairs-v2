import { navItems } from "@/config/nav-items";
import { cn } from "@/lib/utils";

// TODO: add nav font
// TODO: add leaves

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  isTitle?: boolean;
}

const NavLink = ({ children, href, isTitle }: NavLinkProps) => {
  return (
    <div className="py-4">
      <a
        className={cn("uppercase", { "text-2xl font-bold": isTitle })}
        href={href}
      >
        {children}
      </a>
    </div>
  );
};

export const NavBar = () => {
  return (
    <nav className="absolute top-6 flex w-full items-center justify-center gap-12 bg-white">
      {navItems.map((item) => (
        <NavLink key={item.name} href={item.href} isTitle={item.isTitle}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};
