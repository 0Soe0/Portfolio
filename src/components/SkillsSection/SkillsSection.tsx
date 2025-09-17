import { useState } from 'react';
import {cn} from '../../lib/utils';

// Import icons as components
import { Html5Icon } from './assets/Html5Icon.tsx';
import { CssIcon } from './assets/CssIcon.tsx';
import { JavascriptIcon } from './assets/JavascriptIcon.tsx';
import { ReactIcon } from './assets/ReactIcon.tsx';
import { NextJsIcon } from './assets/NextJsIcon.tsx';
import { TailwindCssIcon } from './assets/TailwindCssIcon.tsx';
import { TypescriptIcon } from './assets/TypescriptIcon.tsx';
import { BootstrapIcon } from './assets/BootstrapIcon.tsx';
import { GitIcon } from './assets/GitIcon.tsx';
import { GithubIcon } from './assets/GithubIcon.tsx';

//Skills array
const skills = [
  {
    name: 'HTML',
    category: 'Frontend', 
    icon: Html5Icon,
  },
  {
    name: 'CSS',
    category: 'Frontend',
    icon: CssIcon,
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: JavascriptIcon,
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: NextJsIcon,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: TailwindCssIcon,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: TypescriptIcon,
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    icon: BootstrapIcon,
  },
  {
    name: 'Git',
    category: 'Tools',
    icon: GitIcon,
  },
  {
    name: 'GitHub',
    category: 'Tools',
    icon: GithubIcon,
  }
]

//Categories array based on the categories in the skills array, added 'All' and sorted them to be in alphabetical order
const categories = [...new Set(skills.map(skill => skill.category))];
categories.push('All');
categories.sort();


export const SkillsSection = () => {
  //State to keep track of the active category, default is 'All'
  const [activeCategory, setActiveCategory] = useState('All');

  //Filtered skills based on the active category
  const filteredSkills = skills.filter(skill => activeCategory === 'All' || skill.category === activeCategory);

  return (
    <>
    <section id='skills' className='py-24 px-4 bg-secondary/30 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            My <span className='text-primary relative'>Skills</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-5 mb-12'>
          {categories.map((category, key) => (
            <button key = {key} 
            className = {cn('px-5 py-2 rounded-full text-primary transition-colors duration-300',
              //changes the color of the buttons based on the active category
              activeCategory === category ? 'relative bg-primary/10 dark:bg-primary text-primary-foreground' : 
              'cursor-pointer hover:bg-primary/10 duration-300 transition-all hover:scale-105 active:scale-95'
            )}
            onClick = {() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredSkills.map((skill, key) => (
            <div key = {key} className='bg-card/10 dark:bg-card p-6 rounded-lg shadow-xs card-hover flex justify-between items-center'>
              <div className='mb-4'>
                <h3 className='text-lg font-semibold mb-2'>{skill.name}</h3>
              </div>
              <div>
                <skill.icon className='w-10 h-10' props={{}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}