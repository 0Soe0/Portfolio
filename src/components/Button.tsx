import { cn } from "../lib/utils";

type ButtonProps = (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>) & {
  children: React.ReactNode;
  className?: string;
  hollow?: boolean;
  href?: string;
}

export const Button = ({ children, className, hollow, href,...props }: ButtonProps) => {
  const classes = cn(
    'cosmic-button',
    !hollow && 'dark:bg-primary dark:purple-hover',
    hollow && 'bg-transparent border border-primary text-primary dark:purple-hover',
    className
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>{children}</a>
    )
  }

  return (
    <button className={classes} {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}>{children}</button>
  )
}
