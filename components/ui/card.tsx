import React from "react"

export function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`rounded-lg border p-6 shadow ${props.className ?? ""}`}>{children}</div>
}

export function CardHeader({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`mb-4 ${props.className ?? ""}`}>{children}</div>
}

export function CardTitle({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 {...props} className={`text-xl font-bold ${props.className ?? ""}`}>{children}</h2>
}

export function CardContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={`${props.className ?? ""}`}>{children}</div>
}

export function CardDescription({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={`text-muted-foreground ${props.className ?? ""}`}>{children}</p>
}