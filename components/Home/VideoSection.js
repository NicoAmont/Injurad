import {useRouter} from "next/router"
import { useTranslation } from "next-i18next";
import React, { useState } from "react";



function VideoSection() {
    const { t } = useTranslation('common');
        
    const ytvideo = ["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]
    return (
        <div className=" m-auto bg-bgr font-heads pb-20 relative  ">

            <svg className="hidden lg:flex absolute -top-12 -left-5 scale-90" width="193" height="935" viewBox="0 0 263 835" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M254.905 413.738L0.731041 826.607L0.72636 0.87226L254.905 413.738Z" fill="#334F5F"/>
            </svg>

            <svg className="hidden lg:flex absolute -top-12 -right-5 rotate-180 scale-90" width="193" height="935" viewBox="0 0 263 835" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M254.905 413.738L0.731041 826.607L0.72636 0.87226L254.905 413.738Z" fill="#334F5F"/>
            </svg>


            <div className="flex flex-col text-center justify-center m-auto max-w-7xl py-20 relative h-full">

                    <svg className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0 scale-150" width="415" height="400" viewBox="0 0 415 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.1">
                        <path d="M378.382 128.168L144.879 399.374L16.4392 215.391L144.879 312.588L378.382 128.168Z" fill="#3F8466" fillOpacity="0.2"/>
                        <path d="M378.382 128.168L144.879 399.374L16.4392 215.391L144.879 312.588L378.382 128.168Z" fill="#3F8466" fillOpacity="0.2"/>
                        <path d="M230.031 215.099L341.115 121.372L105.061 121.372L27.7719 208.157L115.475 138.73L230.031 215.099Z" fill="#3F8466" fillOpacity="0.2"/>
                        <path d="M230.031 215.099L341.115 121.372L105.061 121.372L27.7719 208.157L115.475 138.73L230.031 215.099Z" fill="#3F8466" fillOpacity="0.2"/>
                        </g>
                    </svg>
                

                <h1 className="text-4xl text-bg2 sm:text-7xl uppercase font-bold mb-20">{t('reason_tittle')} <span className="text-sl">{t('reason_tittlebold')}</span> </h1>
                <div className="grid md:grid-cols-2 place-items-center m-auto gap-20 px-4">
                    <div className="flex flex-col md:flex-row align-text-top w-full h-full">
                        <h1 className="text-5xl md:text-7xl font-bold text-sl text-left mr-4">1</h1>
                        <p className="w-80 text-xl text-left">{t('reason_1')}</p>
                    </div>
                    <div className="flex flex-col md:flex-row align-text-top w-full h-full">
                        <h1 className="text-5xl md:text-7xl font-bold text-sl text-left mr-4">2</h1>
                        <p className="w-80 text-2xl text-left">{t('reason_2')}</p>
                    </div>
                    
                </div>
                
                    
                
            </div>

            <div className="grid grid-cols-1 lg:grid-flow-col lg:grid-cols-2 max-w-6xl m-auto place-items-center gap-20">
                
                <div className="px-4" >
                    <div className=" text-justify pt-24">
                        <h1 className="font-bold text-5xl text-left text-bg2 uppercase">{t('info_title')} </h1>
                        <h1 className="font-bold text-5xl mb-10 text-left text-sl uppercase">{t('info_title2')} </h1>
                        <p className="mb-5 font-medium">{t('info_p')} </p>
                        <p className="mb-10 font-medium">{t('info_pb')} </p>                    
                    </div>
                    <div className="flex ">
                        <svg className="w-28"  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#203D46"/>
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#203D46"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#203D46"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#203D46"/>
                        </svg>

                        <h1 className="pt-1 pl-2 font-bold underline text-bg uppercase ">{t('info_pc')}</h1>
                    </div>
                </div>
                <div className="w-full">
                    <iframe className="w-full h-80" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                
                <div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default VideoSection
