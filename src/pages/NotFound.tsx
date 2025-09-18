import { StarBackground } from "components/StarBackground"
import { NotFoundPage } from "components/NotFoundPage"
import { Navbar } from "components/Navbar"

export const NotFound = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <Navbar />
      <StarBackground />
      <main>
        <NotFoundPage/>
      </main>
    </div>
  )
}