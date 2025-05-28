import { useState, useEffect } from 'react';

type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
};

type Meteor = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
};

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]); //the array will consist of stars with: id, size, x, y, opacity, animationDuration
  const [meteors, setMeteors] = useState<Meteor[]>([]); //the array will consist of meteors with: id, size, x, y, delay, animationDuration

  useEffect(() => {
    generateStars();
    generateMeteors();

    //generate stars again when the window is resized
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // whenever the page is loaded, the stars and meteors will be generated

  const generateStars = () => {
    const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000); //number of stars based on the screen size

    const newStars = [];

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 +1, // generate stars with random size between 1 and 4px
        x: Math.random() * 100, //random x position anywhere from 0 to 100 % on the viewport
        y: Math.random() * 100, //random y position anywhere from 0 to 100 % on the viewport
        opacity: Math.random() * 0.5 + 0.5, //random opacity between 0.5 and 1 (some 50% opacity, some 100%)
        animationDuration: Math.random() * 4 + 2 //random animation duration between 2 and 6 seconds
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i < numMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // generate meteors with random size between 1 and 3px
        x: Math.random() * 100, //random x position anywhere from 0 to 100 % on the viewport
        y: Math.random() * 20, //random y position anywhere from 0 to 20 % on the viewport
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3 //random animation duration between 3 and 6 seconds
      });
    }

    setMeteors(newMeteors);
  };
  
  return (
    <>
      <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map((star) => (
          <div key = {star.id} className = 'star animate-pulse-subtle' style = {{
            width: star.size + 'px', //easier way to do it just using the variable and adding 'px'
            height: `${star.size}px`, // backticks are used to be able to use the star.size variable (js) inside of a string
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}/>
        ))}

        {meteors.map((meteor) => (
          <div key = {meteor.id} className = 'meteor animate-meteor' style = {{
            width: meteor.size + 'px', // multiply meteor.size * 50 to make it 'longer'
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}/>
        ))}
      </div>
    </>
  );
}