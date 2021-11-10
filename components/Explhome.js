import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Expl1 from "./Home/Expl1";
import Expl2 from "./Home/Expl2";


export default function Explhome() {

    const {ref, inView} = useInView({
        threshold: 0.5
    });
    const animation = useAnimation();

    useEffect(() =>{
        console.log("use effect hook, inView = ", inView);

            if(inView){
                animation.start({
                    display:"visible",
                    scale:1 , 
                    opacity: 1,
                    transition: {
                        type: 'spring', duration:2, bounce: 0.3, 
                    }
                });
            }
                if(!inView){
                    animation.start({
                        display:"hidden",
                        scale: 0.4,
                        opacity: 0
                    })
                }
    }, [inView]);

    return (
        <div className=" text-white font-heads ">
            
            <Expl1 />
            <Expl2 />
            
        </div>
    )
}
