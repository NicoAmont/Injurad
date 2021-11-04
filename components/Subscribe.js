import Image from "next/image"
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Subscribe() {
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
        <div className="bg-bgr flex-col place-content-center pb-14">
            <div ref={ref} className="bg-bgr max-w-4xl mx-auto">
                <motion.div animate={animation} className="flex flex-col sm:flex-row place-content-center px-5 ">
                    <h1 className=" max-w-xl font-semibold text-bd text-3xl pt-10">Recibe informaciones precisas y  seguimiento, además de publicaciones frecuentes con nuestros planes de suscripción </h1>
                    <div className="w-full flex place-content-center mt-10">
                        <svg className="w-20 animate-wiggle" viewBox="0 0 41 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11.0293" y="14.7061" width="5.5147" height="11.0294" fill="#DC0000"/>
                            <rect x="26.3994" y="14.6934" width="4.26117" height="15.3696" transform="rotate(89.8332 26.3994 14.6934)" fill="#DC0000"/>
                            <rect x="21.5625" y="14.375" width="5.5147" height="11.0294" fill="#DC0000"/>
                            <path d="M18.7499 9.55908L26.4705 14.7061H11.0293L18.7499 9.55908Z" fill="#DC0000"/>
                            <circle cx="18.75" cy="18.75" r="17.25" stroke="#1E1F6F" strokeWidth="3"/>
                            <rect x="26.4707" y="35.2178" width="1.47059" height="6.61764" transform="rotate(-26.6177 26.4707 35.2178)" fill="#1E1F6F"/>
                            <rect x="27.6533" y="41.8525" width="5.66063" height="18.2638" transform="rotate(-26.6177 27.6533 41.8525)" fill="#1E1F6F"/>
                            <path d="M28.944 39.6729L29.74 41.0515L27.6572 41.8787L28.944 39.6729Z" fill="#1E1F6F"/>
                            <path d="M28.944 39.6729L29.74 41.0515L27.6572 41.8787L28.944 39.6729Z" fill="#1E1F6F"/>
                            <path d="M29.5957 39.1543L32.7207 39.3381L30.5148 40.4411L29.5957 39.1543Z" fill="#1E1F6F"/>
                            <path d="M29.5957 39.1543L32.7207 39.3381L30.5148 40.4411L29.5957 39.1543Z" fill="#1E1F6F"/>
                            <rect x="37.0566" y="57.3335" width="2.98334" height="1.24025" transform="rotate(-26.7516 37.0566 57.3335)" fill="#1E1F6F"/>
                            <path d="M37.0102 57.1226L37.6602 58.4093L35.8457 58.0884L37.0102 57.1226Z" fill="#1E1F6F"/>
                            <path d="M38.9875 56.1982L40.6249 55.6986L40.2572 57.1692L38.9875 56.1982Z" fill="#1E1F6F"/>
                        </svg>
                    </div>
                    
                </motion.div>
                
                <div className="flex-col mt-40">
                    <div className="flex flex-col sm:flex-row border-b border-bd h-full ">
                        <div className="max-w-lg mt-5 h-40 w-80 rounded-full flex place-content-center px-4">
                            <div className="h-28 w-80 flex items-center pt-6 relative">
                                <div className="border-8 border-bgr w-28 h-28 rounded-full absolute z-20">
                                    <Image className="border-2 border-bgr" src="/buyersub.png" width="116" height="116" alt="" />
                                </div>
                                <div className=" bg-none transition-all duration-200 ease-linear cursor-pointer border-bgr border-4  ml-2 hover: h-28 w-full rounded-full flex place-content-center ">
                                    <h1 className=" font-bold uppercase text-xl text-bd ml-28 mt-10 text-center">Comprador pro</h1>
                                    <div className="ml-4">
                                        <svg className="w-8 mt-10" viewBox="0 0 801 801" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M497 0C329.1 0 193 136.1 193 304C193 374.3 216.9 439 256.9 490.5L215.8 531.6L153.5 469.3C151.977 467.81 149.931 466.975 147.8 466.975C145.669 466.975 143.623 467.81 142.1 469.3L102.3 509.1C100.81 510.623 99.9751 512.669 99.9751 514.8C99.9751 516.931 100.81 518.977 102.3 520.5L164.6 582.8L119.7 627.7L57.4 565.4C55.877 563.91 53.8308 563.075 51.7 563.075C49.5691 563.075 47.523 563.91 46 565.4L6.19997 605.2C4.70968 606.723 3.87514 608.769 3.87514 610.9C3.87514 613.031 4.70968 615.077 6.19997 616.6L68.5 678.9L3.19997 744.2C1.71115 745.704 0.875977 747.734 0.875977 749.85C0.875977 751.966 1.71115 753.996 3.19997 755.5L45.5 797.8C48.6 800.9 53.7 800.9 56.8 797.8L310.4 544.2C363.785 585.607 429.439 608.055 497 608C664.9 608 801 471.9 801 304C801 136.1 664.9 0 497 0ZM658.2 465.2C615.2 508.3 557.9 532 497 532C436.1 532 378.8 508.3 335.8 465.2C292.7 422.2 269 364.9 269 304C269 243.1 292.7 185.8 335.8 142.8C378.8 99.7 436.1 76 497 76C557.9 76 615.2 99.7 658.2 142.8C701.3 185.8 725 243.1 725 304C725 364.9 701.3 422.2 658.2 465.2Z" fill="#EA7911"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-md sm:ml-20 px-6 mt-4 sm:mt-0">
                            <h1 className="font-semibold mb-9 text-3xl"><span className="">Añade a tu perfil</span> de Comprador :</h1>
                                <li><span className="text-subs2 font-bold">Descripción detallada</span> dentro del perfil, ayudando a esclarecer preferencias del comprador</li>
                                <li>Perfil agregado a Buskador de perfiles, para que <span className="text-subs2 font-bold">te destaques</span> entre otros compradores. </li>
                                <li><span className="text-subs2 font-bold">Destaca</span>  entre buskamos como comprador verificado.</li>
                                <div className="flex w-full place-content-center">
                                <button className="mt-10 mb-10 font-medium text-white border-subs2  bg-subs2 hover:border-subs2 transition-colors duration-1000  hover:animate-pulse flex uppercase border rounded px-10 py-2 w-154">
                                    <svg className="mt-1 mr-2" width="15" height="15" viewBox="0 0 801 801" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M497 0C329.1 0 193 136.1 193 304C193 374.3 216.9 439 256.9 490.5L215.8 531.6L153.5 469.3C151.977 467.81 149.931 466.975 147.8 466.975C145.669 466.975 143.623 467.81 142.1 469.3L102.3 509.1C100.81 510.623 99.9751 512.669 99.9751 514.8C99.9751 516.931 100.81 518.977 102.3 520.5L164.6 582.8L119.7 627.7L57.4 565.4C55.877 563.91 53.8308 563.075 51.7 563.075C49.5691 563.075 47.523 563.91 46 565.4L6.19997 605.2C4.70968 606.723 3.87514 608.769 3.87514 610.9C3.87514 613.031 4.70968 615.077 6.19997 616.6L68.5 678.9L3.19997 744.2C1.71115 745.704 0.875977 747.734 0.875977 749.85C0.875977 751.966 1.71115 753.996 3.19997 755.5L45.5 797.8C48.6 800.9 53.7 800.9 56.8 797.8L310.4 544.2C363.785 585.607 429.439 608.055 497 608C664.9 608 801 471.9 801 304C801 136.1 664.9 0 497 0ZM658.2 465.2C615.2 508.3 557.9 532 497 532C436.1 532 378.8 508.3 335.8 465.2C292.7 422.2 269 364.9 269 304C269 243.1 292.7 185.8 335.8 142.8C378.8 99.7 436.1 76 497 76C557.9 76 615.2 99.7 658.2 142.8C701.3 185.8 725 243.1 725 304C725 364.9 701.3 422.2 658.2 465.2Z" fill="white"/>
                                    </svg>
                                    suscribete
                                </button>
                                </div>

                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-20">
                        <div className="max-w-md sm:ml-20 mt-4 sm:mt-0 px-6">
                            <h1 className="font-semibold mb-9 text-3xl"><span className="">Añade a tu perfil</span>  de Vendedor:</h1>
                                <li><span className="text-subs2 font-bold">Descripción detallada</span>  dentro del perfil y filtros, ayudando a esclarecer detalles especiales hacia el comprador.</li>
                                <li>Perfil agregado a Buskador de propiedades, para que <span className="text-subs2 font-bold">te destaques</span>  entre otros vendedores. </li>
                                <li>Publicaciones de propiedades <span className="text-subs2 font-bold">sin restricciones.</span> </li>
                                <div className="flex w-full place-content-center">
                                <button className="mt-10 font-medium text-white border-subs2  bg-subs2 hover:border-subs2 transition-colors duration-1000  hover:animate-pulse flex uppercase border rounded px-10 py-2 w-154">
                                    <svg className="mt-1 mr-2" width="15" height="15" viewBox="0 0 801 801" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M497 0C329.1 0 193 136.1 193 304C193 374.3 216.9 439 256.9 490.5L215.8 531.6L153.5 469.3C151.977 467.81 149.931 466.975 147.8 466.975C145.669 466.975 143.623 467.81 142.1 469.3L102.3 509.1C100.81 510.623 99.9751 512.669 99.9751 514.8C99.9751 516.931 100.81 518.977 102.3 520.5L164.6 582.8L119.7 627.7L57.4 565.4C55.877 563.91 53.8308 563.075 51.7 563.075C49.5691 563.075 47.523 563.91 46 565.4L6.19997 605.2C4.70968 606.723 3.87514 608.769 3.87514 610.9C3.87514 613.031 4.70968 615.077 6.19997 616.6L68.5 678.9L3.19997 744.2C1.71115 745.704 0.875977 747.734 0.875977 749.85C0.875977 751.966 1.71115 753.996 3.19997 755.5L45.5 797.8C48.6 800.9 53.7 800.9 56.8 797.8L310.4 544.2C363.785 585.607 429.439 608.055 497 608C664.9 608 801 471.9 801 304C801 136.1 664.9 0 497 0ZM658.2 465.2C615.2 508.3 557.9 532 497 532C436.1 532 378.8 508.3 335.8 465.2C292.7 422.2 269 364.9 269 304C269 243.1 292.7 185.8 335.8 142.8C378.8 99.7 436.1 76 497 76C557.9 76 615.2 99.7 658.2 142.8C701.3 185.8 725 243.1 725 304C725 364.9 701.3 422.2 658.2 465.2Z" fill="white"/>
                                    </svg>
                                    suscribete
                                </button>

                                </div>
                        </div>
                        <div className="max-w-lg mt-5 h-40 w-80 rounded-full flex place-content-center px-4">
                            <div className="h-28 w-80 flex items-center pt-6 relative">
                                <div className="border-8 border-bgr w-28 h-28 rounded-full absolute z-20">
                                    <Image className="border-2 border-bgr" src="/sellersub.png" width="116" height="116" alt="" />
                                </div>
                                <div className="  bg-none transition-all duration-200 ease-linear cursor-pointer border-bgr border-4  ml-2 hover: h-28 w-full rounded-full flex place-content-center ">
                                    <h1 className=" font-bold uppercase text-xl text-bd text-center ml-28 mt-10">Vendedor pro</h1>
                                    <div className="ml-4">
                                        <svg className="w-8 mt-10" viewBox="0 0 801 801" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M497 0C329.1 0 193 136.1 193 304C193 374.3 216.9 439 256.9 490.5L215.8 531.6L153.5 469.3C151.977 467.81 149.931 466.975 147.8 466.975C145.669 466.975 143.623 467.81 142.1 469.3L102.3 509.1C100.81 510.623 99.9751 512.669 99.9751 514.8C99.9751 516.931 100.81 518.977 102.3 520.5L164.6 582.8L119.7 627.7L57.4 565.4C55.877 563.91 53.8308 563.075 51.7 563.075C49.5691 563.075 47.523 563.91 46 565.4L6.19997 605.2C4.70968 606.723 3.87514 608.769 3.87514 610.9C3.87514 613.031 4.70968 615.077 6.19997 616.6L68.5 678.9L3.19997 744.2C1.71115 745.704 0.875977 747.734 0.875977 749.85C0.875977 751.966 1.71115 753.996 3.19997 755.5L45.5 797.8C48.6 800.9 53.7 800.9 56.8 797.8L310.4 544.2C363.785 585.607 429.439 608.055 497 608C664.9 608 801 471.9 801 304C801 136.1 664.9 0 497 0ZM658.2 465.2C615.2 508.3 557.9 532 497 532C436.1 532 378.8 508.3 335.8 465.2C292.7 422.2 269 364.9 269 304C269 243.1 292.7 185.8 335.8 142.8C378.8 99.7 436.1 76 497 76C557.9 76 615.2 99.7 658.2 142.8C701.3 185.8 725 243.1 725 304C725 364.9 701.3 422.2 658.2 465.2Z" fill="#EA7911"/>
                                        </svg>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
