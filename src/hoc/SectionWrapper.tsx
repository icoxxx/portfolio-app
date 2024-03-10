import { motion } from "framer-motion";
import { ReactElement } from "react";
import { styles } from "../styles";

type StaggerContainerProps = {
  staggerChildren: number;
  delayChildren?: number;
};

const staggerContainer = ({ staggerChildren, delayChildren = 0 }: StaggerContainerProps): { hidden: {}; show: { transition: { staggerChildren: number; delayChildren: number; }; }; } => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

type SectionWrapperProps = {
    component: React.ComponentType<any>;
    idName: string;
  };
  

const SectionWrapper = ({ component: Component, idName}: SectionWrapperProps): (() => ReactElement) => {
  return function HOC(): ReactElement {
    return (
      <motion.section
        variants={staggerContainer({ staggerChildren: 0 })} 
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
