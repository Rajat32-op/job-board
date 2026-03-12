import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "department" | "type" | "location";
}

const variantStyles: Record<string, string> = {
  default:
    "inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-surface text-text-secondary border border-glass-border whitespace-nowrap",
  department:
    "inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent-soft text-accent border border-accent/20 whitespace-nowrap",
  type:
    "inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-sky-soft text-sky-accent border border-sky-accent/20 whitespace-nowrap",
  location:
    "inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-soft text-emerald-accent border border-emerald-accent/20 whitespace-nowrap",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return <span className={variantStyles[variant]}>{children}</span>;
}
