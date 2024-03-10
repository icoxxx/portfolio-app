import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

type Service = {
  title: string;
  icon: string;
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

export const textVariant = (delay: number) => {
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

type CardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard: React.FC<CardProps> = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'>
        I'm a skilled software developer with experience in JavaScript (strong) / TypeScript (intermediate) and expertise in
        technologies, frameworks and libraries like React, Node.js, MongoDB, SCSS, Tailwind, WebPack & more. I'm a quick learner and
        collaborate closely with clients to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let's work together to bring your ideas to life!
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {services.map((service: Service, index: number) => (
            <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
          ))}
        </div>
      </motion.p>
    </>
  );
};

export default SectionWrapper({ component: About, idName: 'about' });
