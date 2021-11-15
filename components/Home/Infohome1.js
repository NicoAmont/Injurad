import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Infohome1() {
    const {ref, inView} = useInView({
        threshold: 0.3
    });
    const animation = useAnimation();

    useEffect(() =>{
        console.log("use effect hook, inView = ", inView);

            if(inView){
                animation.start({
                    y:0,
                    scale:1.1,
                    opacity: 1,
                    transition: {
                        type: 'spring', duration:3, bounce: 0.2
                    }
                });
            }
                if(!inView){
                    animation.start({ scale:1.8, opacity:0.1})
                }
    }, [inView]);

    return (
        <div ref={ref} className=" font-heads bg-gradient-to-b from-thome to-thome2 w-full relative z-10 h-full flex flex-col place-content-center" >
            <div className="bg-white h-16 sm:h-32  w-screen  mt-20 flex place-content-center">
                <h1 className="font-heads text-bd text-xl sm:text-2xl md:text-4xl md:mt-10 ml-2">Meeting Point for property buyers and sellers</h1>
            </div>  
            <div className="flex flex-col max-w-4xl mx-auto text-center pt-0 items-center  relative z-10 px-4 text-bd "  
                >
                
                <h1 className="text-3xl font-semibold mt-20 ">Descubre la forma más <span className="text-bttl">logica</span>  para comprar y vender una propiedad en España</h1>
                <div className="grid sm:grid-cols-2 max-w-4xl mt-10 gap-10 text-lg">
                    <div>
                        <h2 className="text-left   font-body text-subs1 max-w-lg mb-10">Compradores que<span className="text-bttl font-semibold"> buscan seriamente,</span>  pronto ven las deficiencias de los portales de viviendas. Anuncios duplicados, viviendas que ya se han vendido, información incorrecta, etc. Y la ubicación? Casi nunca se sabe, a pesar de qué es tan importante. Y lo que casi nadie sabe es que en los portales solo se encuentra una parte de la oferta. Por eso no es solo para el comprador la búsqueda, sino para el comprador y el vendedor. </h2>

                    </div>
                    <div>
                        <h2 className="text-left mt-0  font-body text-subs1 max-w-lg mb-10">Creamos una <span className="text-bttl">comunidad,</span> conectando compradores y vendedores. Son los vendedores que conocen su propiedad mejor que nadie. Si ellos podían conocer los deseos y demandas de los compradores, vender y comprar sería mucho más rápido y eficiente. <br /><br /> Y esto es justamente lo que hace <span className="text-bttl font-bold">BUSKAMOS.</span></h2>
                    </div>
                </div>
                

            </div>
            <motion.div animate={animation} className="h-full  w-full ">
                <svg className="w-full   z-0 top-full " viewBox="0 0 900 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 22L129 19L257 79L386 17L514 0L643 35L771 65L900 63V233H771H643H514H386H257H129H0V22Z" fill="#1E1F6F"/>
                    <path d="M0 109L129 90L257 112L386 50L514 58L643 50L771 94L900 85V233H771H643H514H386H257H129H0V109Z" fill="#4B4D94"/>
                    <path d="M0 83L129 113L257 136L386 119L514 77L643 131L771 135L900 143V233H771H643H514H386H257H129H0V83Z" fill="#777EB9"/>
                    <path d="M0 129L129 170L257 124L386 158L514 135L643 141L771 172L900 122V233H771H643H514H386H257H129H0V129Z" fill="#A8B1DC"/>
                    <path d="M0 194L129 195L257 186L386 166L514 180L643 169L771 182L900 190V233H771H643H514H386H257H129H0V194Z" fill="#DEE6FF"/>
                </svg>

            </motion.div>
            
            
        </div>
    )
}
