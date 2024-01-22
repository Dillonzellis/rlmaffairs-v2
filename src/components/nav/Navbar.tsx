import { navItems } from "@/config/nav-items";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        className={cn(
          "text-base font-light uppercase hover:text-brandingGreen-400",
          {
            "text-3xl font-normal": isTitle,
          },
        )}
        href={href}
      >
        {children}
      </a>
    </div>
  );
};

export const NavBar = () => {
  return (
    <nav className="absolute top-6 flex w-full items-center justify-evenly gap-12 bg-white">
      {navItems.map((item) => (
        <NavLink key={item.name} href={item.href} isTitle={item.isTitle}>
          {item.name}
        </NavLink>
      ))}
      <Image
        src="/nav-leaves.svg"
        alt=""
        width={85}
        height={58}
        className="absolute bottom-0 left-[58%]"
      />
    </nav>
  );
};
