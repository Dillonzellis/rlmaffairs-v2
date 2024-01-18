import { navItems } from "@/config/nav-items";
import { cn } from "@/lib/utils";

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
    <nav className="bg-white flex justify-center items-center absolute top-6 w-full gap-12">
      {navItems.map((item) => (
        <NavLink key={item.name} href={item.href} isTitle={item.isTitle}>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};
