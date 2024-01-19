import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={cn("py-20", className)} {...props}>
      {children}
    </section>
  );
};
