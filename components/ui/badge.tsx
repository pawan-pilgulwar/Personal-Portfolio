import React from "react"

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary"
}

export function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  const base =
    "inline-block px-3 py-1 rounded-full text-xs font-semibold transition-colors";
  const variants = {
    default: "bg-primary text-white",
    secondary: "bg-muted text-primary",
  }
  return (
    <span
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}