import React, {useEffect, useState} from "react";
import { logo } from "../assets";
import { useHasOpenedBefore } from "../utils/HasOpenedContext";



const Intro: React.FC = ()=> {

    const {hasOpened, setHasOpened} = useHasOpenedBefore();

    const [hideAnimation, setHideAnimation] = useState(false)

    useEffect(() => {
        document.body.classList.add('no-scroll');

        setTimeout(() => {
            sessionStorage.setItem('hasOpenedBefore', 'true');
            const session: any = sessionStorage.getItem('hasOpenedBefore')
            setHasOpened(JSON.parse(session));           
        }, 4500);

        setTimeout(() => {
            setHideAnimation(true)
        }, 3500);

        return () => {
          document.body.classList.remove('no-scroll');
        };

      }, []);

    return(
            <div  className={`w-screen h-screen z-30 absolute bg-primary flex items-center justify-center ${hideAnimation ? 'slideOutAnimation' : ''}`}>
                    <img src={logo} alt="logo" className='slide-in-from-right animation-shine' />
            </div>
    )
}

export default Intro;