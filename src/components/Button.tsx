import { cn } from "../lib/utils";

//The Button component is a reusable component that can be used as a button or a link (a tag), depending on the props passed to it, we define the type
type ButtonProps = (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>) & {
  children: React.ReactNode; //children is the content of the button, name xd
  className?: string;
  hollow?: boolean; //? means optional
  href?: string;
}

export const Button = ({ children, className, hollow, href,...props }: ButtonProps) => {
  const classes = cn(
    'cosmic-button',
    !hollow && 'bg-black dark:bg-primary dark:purple-hover', //if hollow is false, add the class dark:bg-primary dark:purple-hover
    hollow && 'bg-transparent border border-primary text-primary dark:purple-hover', //if hollow is true, add the class bg-transparent border border-primary text-primary dark:purple-hover
    className
  )

  //if href is defined, return an a tag, otherwise return a button tag, passing props corresponding to each type of tag
  if (href) {
    return (
      <a href={href} className={classes} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>{children}</a>
    )
  }

  return (
    <button className={classes} {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}>{children}</button>
  )
}
