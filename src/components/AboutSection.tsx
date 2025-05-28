import { Code, User, Briefcase } from 'lucide-react';
import { Button } from './Button';

export const AboutSection = () => {
  return (
    <>
      <section id = 'about' className = 'py-24 px-4 relative'>
        <div className = 'container mx-auto max-w-5xl'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            About <span className = 'text-primary'>Me</span>
          </h2>

          <div className = 'grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className = 'space-y-6'>
              <h3 className = 'text-2xl font-semibold'>Information technology analyst student at ORT</h3>

              <p className = 'text-muted-foreground'>
                I'm a big enthusiast of frontend development with basic knowledge of Javascript, Typescript, React, Tailwind CSS 
                (using it for the very first time in this project!), and some other libraries. I've been studying for a couple of years
                now, recieving a diploma as a web developer in the process and looking forward to finish my career soon.
              </p>

              <p className = 'text-muted-foreground'>
                I'm also a big enthusiast of design and animation, and it's on my plans to learn more about it in the future! <br />
                (Unrelated, but i also love videogames, so if we don't get to work together, we could play something instead! haha)
              </p>

              <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center'>
                <a href="#contact" className='dark:bg-primary dark:purple-hover cosmic-button'>
                  Get in touch
                </a>
                <Button 
                  className='hover:bg-primary/10'
                  hollow
                  href="/SophiaFacalCVEnglish.pdf"
                  download
                >
                  Download CV
                </Button>
              </div>
            </div>

            <div className = 'grid grid-cols-1 gap-6'>
                <div className = 'gradient-border p-6 card-hover'>
                  <div className ='flex items-start gap-4'>
                    <div className = 'p-3 rounded-full bg-primary/10'>
                      <Code className= 'w-6 h-6 text-primary'></Code>
                    </div>
                    <div className ='text-left'>
                      <h4 className ='font-semibold text-lg'>Web development</h4>
                      <p className ='text-muted-foreground'>
                        I have mostly worked with websites throughout my academic career, but I'm willing to learn anything mobile related
                        as well!
                      </p>
                    </div>
                  </div>
                </div>
                <div className = 'gradient-border p-6 card-hover'>
                <div className ='flex items-start gap-4'>
                    <div className = 'p-3 rounded-full bg-primary/10'>
                      <User className= 'w-6 h-6 text-primary'></User>
                    </div>
                    <div className ='text-left'>
                      <h4 className ='font-semibold text-lg'>Work mates</h4>
                      <p className ='text-muted-foreground'>
                        Teamwork makes the dream work! Learning from and with each other let us grow not only as professionals, but as people,
                        that's my philosophy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className = 'gradient-border p-6 card-hover'>
                <div className ='flex items-start gap-4'>
                    <div className = 'p-3 rounded-full bg-primary/10'>
                      <Briefcase className= 'w-6 h-6 text-primary'></Briefcase>
                    </div>
                    <div className ='text-left'>
                      <h4 className ='font-semibold text-lg'>Growth</h4>
                      <p className ='text-muted-foreground'>
                        I'm excited to learn and practice new things, not only in the development field, but in other work related areas and
                        in life in general.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}