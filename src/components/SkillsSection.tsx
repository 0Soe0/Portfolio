import { useState } from 'react';
import {cn} from '../lib/utils';

//Skills array
const skills = [
  {
    name: 'HTML',
    level: '65',
    category: 'Frontend', 
  },
  {
    name: 'CSS',
    level: '65',
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    level: '55',
    category: 'Frontend',
  },
  {
    name: 'React',
    level: '50',
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    level: '30',
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    level: '35',
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    level: '55',
    category: 'Frontend',
  },
  {
    name: 'Boostrap',
    level: '30',
    category: 'Frontend',
  },
  {
    name: 'Git',
    level: '20',
    category: 'Tools',
  },
  {
    name: 'GitHub',
    level: '20',
    category: 'Tools',
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
    <section id = 'skills' className = 'py-24 px-4 bg-secondary/30'>
      <div className = 'container mx-auto max-w-5xl'>
        <h2 className = 'text-3xl md:text-4xl font-bold text-center mb-12'>
            My <span className = 'text-primary relative'>Skills</span>
        </h2>

        <div className = 'flex flex-wrap justify-center gap-5 mb-12'>
          {categories.map((category, key) => (
            <button key = {key} 
            className = {cn('px-5 py-2 rounded-full text-primary transition-colors duration-300',
              //changes the color of the buttons based on the active category
              activeCategory === category ? 'relative bg-primary text-primary-foreground' : 
              'cursor-pointer hover:bg-primary/10 duration-300 transition-all hover:scale-105 active:scale-95'
            )}
            onClick = {() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredSkills.map((skill, key) => (
            <div key = {key} className = 'bg-card p-6 rounded-lg shadow-xs card-hover'>
              <div className = 'text-left mb-4'>
                <h3 className = 'text-lg font-semibold mb-2'>{skill.name}</h3>
              </div>
              <div className= 'grid grid-cols-2 gap-2 items-center'>
                <div className = 'w-full h-2 bg-secondary/50 rounded-full overflow-hidden'>
                  <div className = 'h-2 bg-primary rounded-full origin-left'
                     style = {{width: `${skill.level}%`}}>
                  </div>
                </div>
                <span className = 'text-right pb-2 text-sm'>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}