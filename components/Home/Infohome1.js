import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Infohome1() {
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
                    animation.start({x:'-100vw'})
                }
    }, [inView]);

    return (
        <div ref={ref} className=" font-heads bg-gradient-to-b from-thome to-thome2 w-full relative z-10 h-full" >
            <motion.div className="flex flex-col max-w-xl mx-auto text-center pt-20 items-center  relative z-10 px-4 text-bd "
                
                animate={animation}
                
                >
                <h1 className="text-3xl font-semibold text-">Descubre la forma más <span className="text-bttl">logica</span>  para comprar y vender una propiedad en España</h1>
                <h2 className="text- mt-10  font-body text-subs1 max-w-lg mb-10">Compradores que<span className="text-bttl font-semibold"> buscan seriamente,</span>  pronto ven las deficiencias de los portales de viviendas. Anuncios duplicados, viviendas que ya se han vendido, información incorrecta, etc. Y la ubicación? Casi nunca se sabe, a pesar de qué es tan importante. Y lo que casi nadie sabe es que en los portales solo se encuentra una parte de la oferta. Por eso no es solo para el comprador la búsqueda, sino para el comprador y el vendedor. </h2>
                
                

            </motion.div>
            <div className="h-full  w-full ">
            <svg className="w-full   z-0 top-full " viewBox="0 0 900 232" fill="none" xmlns="http://www.w3.org/2000/svg">
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
