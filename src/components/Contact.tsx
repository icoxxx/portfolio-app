import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';


type SlideInTransition = {
  hidden: {
    x: string;
    y: string;
  };
  show: {
    x: number;
    y: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
};

const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): SlideInTransition => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : "0",
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : "0",
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Contact = () => {


  const[form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const[loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
    const {name, value} = e.target;
    setForm({...form, [name]: value})

  }
//template_4axmsz5
//service_op62rek
//X-AB_n2pcSTX6Qiar
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_op62rek',
      'template_4axmsz5',
      {from_name: form.name,
        to_name: 'Hristiyan',
        from_email: form.email,
        to_email: 'hristiyanvv28@gmail.com',
        message: form.message,
      },
      'X-AB_n2pcSTX6Qiar'
    )
    .then(()=> {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.')

    }
    )

  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} 
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} 
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper({ component: Contact, idName: 'contact' });