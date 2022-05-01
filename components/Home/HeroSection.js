import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from "next-i18next";
import Image from "next/image"
import Poster from "../../public/poster.PNG";
import ReactPlayer from 'react-player';
import {useRouter} from "next/router"

export default function HeroSection() {

    const {push, pathname, locale} = useRouter();

    console.log(locale)

    const poster = Poster;
    const ytvideo = ["https://www.youtube.com/embed/7AOdXHAP40I" , "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]
    const { t } = useTranslation('common');
    const [isPlaying, setIsPlaying] = useState(true);
    const [yidiom, setYidiom] = useState(0);
    const currentIdiom =  () => {
        if (locale == "es" || ""){
            setYidiom(0)
        }else if ( locale == "en"){
            setYidiom(1)
        }else {
            setYidiom(2)
        }
    }

    return (
        
        <div className="w-full h-auto sm:h-screen md:videoh font-heads bg-bgf  relative flex flex-col ">
                <div className="w-screen h-screen  md:w-full md:h-full relative z-20 m-auto" >
                
                <ReactPlayer
                    url={ytvideo[yidiom]} 
                    width='100%' 
                    height='100%'
                    light
                    playing={ isPlaying }
                    playIcon={  
                                <div className="w-screen h-screen  relative z-20 m-auto" >
                                        <div className="w-full h-full relative z-20 bg-bg2 bg-opacity-40"></div>
                                        <Image className='absolute h-screen  bottom-0 z-10 '  src={poster} layout='fill' objectFit='cover' objectPosition='center' alt="" />    
                                        <svg className="w-20 sm:w-32 videoh2 sm:videoh  z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8V8ZM6.79 5.093C6.71524 5.03977 6.62726 5.00814 6.53572 5.00159C6.44418 4.99503 6.35259 5.01379 6.27101 5.05583C6.18942 5.09786 6.12098 5.16154 6.07317 5.23988C6.02537 5.31823 6.00006 5.40822 6 5.5V10.5C6.00006 10.5918 6.02537 10.6818 6.07317 10.7601C6.12098 10.8385 6.18942 10.9021 6.27101 10.9442C6.35259 10.9862 6.44418 11.005 6.53572 10.9984C6.62726 10.9919 6.71524 10.9602 6.79 10.907L10.29 8.407C10.3548 8.36075 10.4076 8.29968 10.4441 8.22889C10.4806 8.1581 10.4996 8.07963 10.4996 8C10.4996 7.92037 10.4806 7.8419 10.4441 7.77111C10.4076 7.70031 10.3548 7.63925 10.29 7.593L6.79 5.093V5.093Z" fill="#2EA153"/>
                                        </svg>
                                </div>    
                            }
                    controls />
                </div>
                {/* <iframe className="relative z-10 w-screen m-auto h-screen scale-100  rounded-lg shadow-xl" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="fullscreen; autoplay; clipboard-write; picture-in-picture" allowFullScreen></iframe> */}
                {/* <Image className='absolute h-96 opacity-80 bottom-0 z-20 '  src={poster} layout='fill' objectFit='cover' objectPosition='center' alt="" /> */}
            
        </div>
    )
}
