import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';

import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
//import {fadeIn, textVariant}

const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};


type Project = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
};


const ProjectCard: React.FC<Project> = ({index, name, description, tags, image, source_code_link})=> {
  return(
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
      options={{max: 45, scale: 1, speed: 450}}
      className='bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={()=> {
              window.open(source_code_link, 'blank')
            }}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index)=>{
            return(
              <p key={`${tag.name}-${index}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            )
          })}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText} text-center`}>
          My works
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p 
        variants={fadeIn('', '', 0.1, 1)} 
        className='mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described
          with links to code respositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index)=> {
          return(
            <ProjectCard key={`project-${index}`} index={index} {...project}/>
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper({ component: Works, idName: 'work' });