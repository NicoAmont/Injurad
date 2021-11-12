import 'animate.css';
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Herohome() {
    const {ref, inView} = useInView({
        threshold: 0
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
                    animation.start({x:'0'})
                }
    }, [inView]);

    return (
        <div className="font-heads font-medium w-screen h-full flex-row bg-gradient-to-b from-bl via-bl to-bgr text-white tracking-widest relative overflow-hidden">

                

            <svg className="absolute top-5 mt-60 opacity-50 " width="2050" height="828" viewBox="0 0 2050 828" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M648.752 350.865C343.491 311.51 95.6904 480.464 0 453.486L6.39515 828H2050V46.1763C1994.81 18.4933 1855.02 -25.6584 1737.35 19.1986C1590.26 75.2698 1583.86 124.464 1433.22 258.824C1282.58 393.183 1030.33 400.06 648.752 350.865Z" fill="url(#paint0_linear_4:674)"/>
                <defs>
                <linearGradient id="paint0_linear_4:674" x1="1025" y1="0" x2="1025" y2="828" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8FAFF"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                </defs>
            </svg>
            <div className=" w-screen h-32">

            </div>
            <div className="mt-52 sm:mt-48 max-w-7xl px-3 md:mx-auto flex flex-col items-center sm:items-start ">
                
                
                    <video className="w-96 absolute top-20 sm:left-20" autoPlay muted  id="videoHero">
                        <source  src="/video/WhatsApp Video 2021-11-07 at 10.45.09 PM.mp4" type="video/mp4"/>
                        Your Browser does not support mp4 videos, change browser!
                    </video>
                <div className="relative h-96">
                    <h1 className="text-5xl md:text-6xl  leading-relaxed ml-2 text-left"> Encuentra tu <span className="hover:text-rb sm:text-6xl hover: transition-all duration-1000 ease-out ">casa ideal</span></h1>
                    <div className="flex items-left h-full w-full relative left-2">

                        <svg className="mt-2 lg:mt-7 hover:animate-wiggle absolute  sm:mt-8 animate__animated animate__jackInTheBox transition-all delay-1000 duration-1000 infinite w-13 sm:w-14 mb-3" width="42" height="60" viewBox="0 0 41 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11.0293" y="14.7061" width="5.5147" height="11.0294" fill="#DC0000"/>
                            <rect x="26.3994" y="14.6934" width="4.26117" height="15.3696" transform="rotate(89.8332 26.3994 14.6934)" fill="#DC0000"/>
                            <rect x="21.5625" y="14.375" width="5.5147" height="11.0294" fill="#DC0000"/>
                            <path d="M18.7499 9.55908L26.4705 14.7061H11.0293L18.7499 9.55908Z" fill="#DC0000"/>
                            <circle cx="18.75" cy="18.75" r="17.25" stroke="white" strokeWidth="3"/>
                            <rect x="26.4707" y="35.2178" width="1.47059" height="6.61764" transform="rotate(-26.6177 26.4707 35.2178)" fill="white"/>
                            <rect x="27.6533" y="41.8525" width="5.66063" height="18.2638" transform="rotate(-26.6177 27.6533 41.8525)" fill="white"/>
                            <path d="M28.944 39.6729L29.74 41.0515L27.6572 41.8787L28.944 39.6729Z" fill="white"/>
                            <path d="M28.944 39.6729L29.74 41.0515L27.6572 41.8787L28.944 39.6729Z" fill="white"/>
                            <path d="M29.5957 39.1543L32.7207 39.3381L30.5148 40.4411L29.5957 39.1543Z" fill="white"/>
                            <path d="M29.5957 39.1543L32.7207 39.3381L30.5148 40.4411L29.5957 39.1543Z" fill="white"/>
                            <rect x="37.0566" y="57.3335" width="2.98334" height="1.24025" transform="rotate(-26.7516 37.0566 57.3335)" fill="white"/>
                            <path d="M37.0102 57.1226L37.6602 58.4093L35.8457 58.0884L37.0102 57.1226Z" fill="white"/>
                            <path d="M38.9875 56.1982L40.6249 55.6986L40.2572 57.1692L38.9875 56.1982Z" fill="white"/>
                        </svg>
                        <h2 className=" text-5xl ml-14 sm:text-6xl sm:mt-4 pb-10">vendela</h2>
                    </div>
                </div>
                <div className="flex items-center text-2xl md:text-5xl">
                    <div className="invisible md:visible ">
                        <svg animate=" x:3000" className="absolute right-40 top-72 animate__animated animate__fadeInRight duration-1000 " width="203" height="71" viewBox="0 0 203 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="43" cy="37" rx="41" ry="8" fill="white"/>
                            <ellipse cx="60" cy="29" rx="25" ry="8" fill="white"/>
                            <ellipse cx="113" cy="34" rx="25" ry="8" fill="white"/>
                            <ellipse cx="109" cy="37" rx="41" ry="8" fill="white"/>
                            <ellipse cx="134" cy="45" rx="41" ry="8" fill="white"/>
                            <ellipse cx="97" cy="38" rx="41" ry="8" fill="white"/>
                            <ellipse cx="12.8125" cy="5" rx="12.8125" ry="2.5" fill="white"/>
                            <ellipse cx="22.5" cy="7.5" rx="7.8125" ry="2.5" fill="white"/>
                            <ellipse cx="18.125" cy="2.5" rx="7.8125" ry="2.5" fill="white"/>
                            <ellipse cx="34.6875" cy="4.0625" rx="7.8125" ry="2.5" fill="white"/>
                            <ellipse cx="33.4375" cy="5" rx="12.8125" ry="2.5" fill="white"/>
                            <ellipse cx="25.7812" cy="4.0625" rx="12.9688" ry="2.5" fill="white"/>
                            <ellipse cx="41.25" cy="7.5" rx="12.8125" ry="2.5" fill="white"/>
                            <ellipse cx="160.812" cy="66" rx="12.8125" ry="2.5" fill="white"/>
                            <ellipse cx="170.5" cy="68.5" rx="7.8125" ry="2.5" fill="white"/>
                            <ellipse cx="166.125" cy="63.5" rx="7.8125" ry="2.5" fill="white"/>
                            <ellipse cx="182.688" cy="65.0625" rx="7.8125" ry="2.5" fill="white"/>
                            <ellipse cx="181.438" cy="66" rx="12.8125" ry="2.5" fill="white"/>
                            <ellipse cx="173.781" cy="65.0625" rx="12.9688" ry="2.5" fill="white"/>
                            <ellipse cx="189.25" cy="68.5" rx="12.8125" ry="2.5" fill="white"/>
                        </svg>
                    
                        <svg className="absolute left-2/4 bottom-400 animate__animated animate__fadeInRight duration-700" width="258" height="45" viewBox="0 0 258 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="52.5" cy="20" rx="52.5" ry="10" fill="white"/>
                            <ellipse cx="92" cy="30" rx="32" ry="10" fill="white"/>
                            <ellipse cx="74" cy="10" rx="32" ry="10" fill="white"/>
                            <ellipse cx="142" cy="16" rx="32" ry="10" fill="white"/>
                            <ellipse cx="136.5" cy="20" rx="52.5" ry="10" fill="white"/>
                            <ellipse cx="105.5" cy="16" rx="52.5" ry="10" fill="white"/>
                            <ellipse cx="168.5" cy="30" rx="52.5" ry="10" fill="white"/>
                            <ellipse cx="215.812" cy="40" rx="12.8125" ry="2.5" fill="white"/>
                            <ellipse cx="225.5" cy="42.5" rx="7.8125" ry="2.5" fill="white"/>
                            <ellipse cx="221.125" cy="37.5" rx="7.8125" ry="2.5" fill="white"/>
                            <ellipse cx="237.688" cy="39.0625" rx="7.8125" ry="2.5" fill="white"/>
                            <ellipse cx="236.438" cy="40" rx="12.8125" ry="2.5" fill="white"/>
                            <ellipse cx="228.781" cy="39.0625" rx="12.9688" ry="2.5" fill="white"/>
                            <ellipse cx="244.25" cy="42.5" rx="12.8125" ry="2.5" fill="white"/>
                        </svg>
                            
                            
                        <div className="w-40 h-40 bg-white rounded-full absolute right-1/4 z-10 top-72 animate__animated animate__zoomInDown  sm:mt-20 xl:mt-0 transition-all ease-linear"></div>
                    </div>
                    
                </div>
                
                {/* <div className="mt-7 w-72 sm:w-96 text-base italic font-light animate__animated animate__fadeInLeft"> 
                    ¡ Descubre la forma más fácil de comprar o vender tu propiedad !
                </div> */}
                
                
                
            </div>
            <div className="flex flex-col items-center justify-center relative z-10 left-0 "
                initial={{x:-800}}
                >
            </div>
            
           


        </div>
    )
}