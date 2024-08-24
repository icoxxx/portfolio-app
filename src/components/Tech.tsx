import React, { useEffect, useState } from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import UAParser from 'ua-parser-js';

const Tech: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
        
  useEffect(() => {
      const parser = new UAParser();
      setIsMobile(parser.getDevice().type === 'mobile');
    }, []);
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=> {
        return(
          <div className={isMobile ? 'w-20 h-20' : 'w-28 h-28'} key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        )
      })}
    </div>
  )
}
export default SectionWrapper({ component: Tech, idName: 'tech' });