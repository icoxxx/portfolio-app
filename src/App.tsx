import { BrowserRouter } from "react-router-dom";
import UAParser from 'ua-parser-js';
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas,} from './components';
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);
        
  useEffect(() => {
      const parser = new UAParser();
      setIsMobile(parser.getDevice().type === 'mobile');
    }, []);
  return (
    <>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        {isMobile === false && (<Tech/>)}
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>

        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
