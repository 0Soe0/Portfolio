import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'TCG-Pokemon website',
    description: 'Using the tcg-pokemon api, I created a website that allows users to view pokemon cards and their details.',
    image: '/projects/pageExample.png',
    tags: ['React', 'TypeScript', 'Next.js'],
    demoLink: '#',
    gitHubLink: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of project 2, that I dont have yet, but will be added soon, so please stay tuned!',
    image: '/projects/pageExample.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoLink: '#',
    gitHubLink: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of project 3, that I dont have yet, but will be added soon, so please stay tuned!',
    image: '/projects/pageExample.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoLink: '#',
    gitHubLink: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <>
      <section id = 'projects' className = 'py-24 px-4 relative'>
        <div className = 'container mx-auto max-w-5xl'>
          <h2 className = 'text-3xl md:text-4xl font-bold text-center mb-10'>
            My <span className = 'text-primary'>Projects</span>
          </h2>
          <p className = 'text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Here are some of the projects I've done, not only to practice my skills and learn new things, but also to showcase my work.
          </p>
          <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, key) => (
              <div key = {key} className = 'group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                <div className ='overflow-hidden'>
                  <img src={project.image} alt={project.title} className = 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                </div>
                <div className = 'p-6'>
                  <div className = 'flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag) => (
                      <span className = 'text-xs px-2 py-1 bg-secondary rounded-full text-primary font-medium border'>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className = 'text-xl font-semibold mb-2'>{project.title}</h3>
                  <p className ='text-muted-foreground mb-4 text-sm'>{project.description}</p>
                  <div className = 'flex items-center justify-between'>
                    <div className = 'flex space-x-3'>
                      <a 
                      href={project.demoLink} 
                      target = '_blank' 
                      className ='text-foreground/80 hover:text-primary transition-colors duration-300'> <ExternalLink size ={20}/> </a>
                      <a 
                      href={project.gitHubLink} 
                      target = '_blank' 
                      className ='text-foreground/80 hover:text-primary transition-colors duration-300'> <Github size ={20}/> </a>
                    </div>
                  </div>
                </div>
              </div>
          ))}
          </div>
          <div className='text-center mt-12'>
            <a href="" className = 'bg-red-400 dark:bg-primary dark:purple-hover cosmic-button w-fit mx-auto flex items-center gap-2' target = '_blank'>
              Check my GitHub <ArrowRight size ={20}/>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
