import { Button } from "./Button"

export const NotFoundPage = () => {
  return (
     <div className='h-screen flex items-center justify-center'>
        <div className ='space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span className='text-white dark:text-foreground opacity-0 animate-fade-in'>Not </span>
            <span className=' text-black dark:text-primary opacity-0 animate-fade-in-delay-1'>Found</span>
          </h1>
          <p className = "text-lg md:text-xl text-white dark:text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            <span className = "block mt-5 mb-5">
              You've reached plain old 404. Beyond my page's horizons.
            </span>

            <span className = "block mb-5">
              Wanna go back?
            </span>
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <Button 
            className='black-hover'
            href='/'>
              Take me!
            </Button>
          </div>
        </div>
      </div>
  )
}