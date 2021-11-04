import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Infohome() {
    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() =>{
        console.log("use effect hook, inView = ", inView);

            if(inView){
                animation.start({
                    x:0,
                    transition: {
                        type: 'spring', duration:2, bounce: 0.3
                    }
                });
            }
                if(!inView){
                    animation.start({x:'-100vw'})
                }
    }, [inView]);

    return (
        <div ref={ref} className="bg-gradient-to-b from-thome to-thome2 w-full relative z-10 h-screen" >
            <motion.div className="block max-w-xl mx-auto text-center pt-28 items-center justify-center relative z-10 px-4 text-bd"
                
                animate={animation}
                
                >
                <h1 className="text-2xl font-medium">Vender una propiedad suele ser desafiante, y aún más <span className="underline"> comprarla</span> si no tienes las herramientas y conocimiento para esto.</h1>
                <h2 className="text-base mt-6 sm:ml-24 sm:w-96 ">¡ No te preocupes más ! con nuestra plataforma y ayuda, tendrás la posibilidad de estar  asesorado desde el primer momento. </h2>
                <button className="w-32 font-semibold rounded-lg px-8 py-2 shadow-lg uppercase mt-24 lg:text-bd text-bgr lg:bg-bgr bg-bd hover:scale-105 transition-all duration-1000 ease-out">unete</button>

            </motion.div>
            <div className="h-full">
            <svg className="w-full  absolute z-0  bottom-0" viewBox="0 0 900 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 22L129 19L257 79L386 17L514 0L643 35L771 65L900 63V233H771H643H514H386H257H129H0V22Z" fill="#1E1F6F"/>
                <path d="M0 109L129 90L257 112L386 50L514 58L643 50L771 94L900 85V233H771H643H514H386H257H129H0V109Z" fill="#4B4D94"/>
                <path d="M0 83L129 113L257 136L386 119L514 77L643 131L771 135L900 143V233H771H643H514H386H257H129H0V83Z" fill="#777EB9"/>
                <path d="M0 129L129 170L257 124L386 158L514 135L643 141L771 172L900 122V233H771H643H514H386H257H129H0V129Z" fill="#A8B1DC"/>
                <path d="M0 194L129 195L257 186L386 166L514 180L643 169L771 182L900 190V233H771H643H514H386H257H129H0V194Z" fill="#DEE6FF"/>
            </svg>

            </div>
            

        </div>
    )
}
