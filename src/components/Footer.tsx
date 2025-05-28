import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <>
    <footer className = 'py-12 px-4 border-t border-border flex justify-between w-full'>
      <p className = 'text-sm text-muted-foreground mx-auto pt-2'>
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <a href="#hero" className = 'p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors'>
        <ArrowUp size={20} />
      </a>
    </footer>
  </> 
  )
}