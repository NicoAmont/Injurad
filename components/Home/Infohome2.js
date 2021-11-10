import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Infohome2() {
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
                        type: 'spring', duration:4, bounce: 0.3
                    }
                });
            }
                if(!inView){
                    animation.start({x:'100vw'})
                }
    }, [inView]);

    return (
        <div ref={ref} className=" font-heads bg-gradient-to-b from-thome to-thome2 w-full relative z-10 h-full" >
            
            <motion.div className="flex flex-col max-w-xl mx-auto text-center  items-center  relative z-10 px-4 text-bd "
                
                animate={animation}
                
                >
                <h1 className="text-3xl font-semibold text-bd pt-10">Creamos una <span className="text-bttl">comunidad,</span> conectando compradores y vendedores</h1>
                <h2 className="text- mt-10  font-body text-subs1 max-w-lg mb-10">Son los vendedores que conocen su propiedad mejor que nadie. Si ellos podían conocer los deseos y demandas de los compradores, vender y comprar sería mucho más rápido y eficiente. <br /><br /> Y esto es justamente lo que hace <span className="text-bttl font-bold">BUSKAMOS.</span></h2>
                
                

                <button className="w-32 font-semibold rounded-lg px-8 py-2 shadow-lg uppercase mt-10 md:text-white text-bgr md:bg-bd bg-bd hover:scale-105 transition-all duration-1000 ease-out">unete</button>

            </motion.div>
            <div className="h-full">
            
                <svg className="w-full  left-0 sm:bottom-0 bottom-0" xmlns="http://www.w3.org/2000/svg" version="1.1"  width="1440" height="300" preserveAspectRatio="none" viewBox="0 0 1440 560">
                    <g mask="url(&quot;#SvgjsMask1102&quot;)" fill="none">
                        <path d="M 0,259 C 144,276.2 432,347.6 720,345 C 1008,342.4 1296,265.8 1440,246L1440 560L0 560z" fill="#4B4D94"></path>
                    </g>
                </svg>    
            </div>
        </div>
    )
}
