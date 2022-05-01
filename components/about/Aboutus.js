import React, { useState, Fragment } from 'react'
import { useTranslation } from "next-i18next";
import Image from "next/image"


export default function Aboutus() {     
    const { t } = useTranslation('common');
    const ytvideo = ["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]

  return (
    <div className="bg-bgr  pt-32 md:pt-40 pb-20 w-full">
        <div className="max-w-6xl m-auto px-8">
            <h1 className="md:ml-10 text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">{t("About_tittle1")}</h1>
            <div className="md:w-3/4 m-auto mb-20 text-base md:text-lg ">
                <p className="text-base">{t("About_tittle1_info")}</p>
            </div>
        </div>
            
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 relative">
            <div className="w-full h-full bg-gradient-to-r from-bgr2 via-bgr2 absolute z-10 bg-opacity-5 "></div>
            <div className="relative w-full bg-sl  ">
                <Image className='absolute w-96   h-full bottom-0 '  src="/1.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
            <div className="relative w-full bg-sl h-56 hidden sm:flex">
                <Image className='absolute w-96   h-full bottom-0 '  src="/2.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
            <div className="relative w-full bg-sl h-full col-span-2 row-span-2 hidden sm:flex">
                <Image className='absolute w-96   h-full bottom-0 '  src="/3.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
            <div className="relative w-full bg-sl h-56  hidden sm:flex">
                <Image className='absolute w-96   h-full bottom-0 '  src="/4.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
            <div className="relative w-full bg-sl h-56 ">
                <Image className='absolute w-96   h-full bottom-0 '  src="/5.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
        </div>

        <div className="max-w-6xl m-auto px-8 mt-20">
            <h1 className=" text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">{t("About_tittle2")}</h1>
            <div className="md:w-3/4 md:ml-10 mb-10 text-base md:text-lg ">
                <p className="">{t("About_tittle2_info")}</p>
            </div>
        </div>
        <div className="w-3/4 md:w-9/12 m-auto h-auto grid md:grid-cols-2 mb-20 place-content-center ">


            <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-wrap  mb-5 py-4 mx-auto md:px-10 hover:scale-110 ">
                <div className="w-10  mr-4">
                <Image className=""  src="/4n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                </div>
                <div className="flex  flex-col w-64 md:w-96">
                    <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info3")}</h1>
                    <h1 className="font-normal text-base">{t("About_tittle2_info3_1")}</h1>
                </div>
                
            </div>
            <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-wrap  mb-5 py-4 mx-auto md:px-10 hover:scale-110 ">
                <div className="w-10  mr-4">
                <Image className=""  src="/en.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                </div>
                <div className="flex flex-col  w-64 md:w-96 ">
                    <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info1")}</h1>
                    <h1 className="font-normal text-base">{t("About_tittle2_info1_1")}</h1>
                </div>
            </div>
            

            

            <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-wrap  mb-5 py-4 mx-auto md:px-10 hover:scale-110 ">
                <div className="w-10 mr-4">
                <Image className=""  src="/brain.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                </div>
                <div className="flex flex-col w-64 md:w-96">
                    <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info5")}</h1>   
                    <h1 className="font-normal text-base">{t("About_tittle2_info5_1")}</h1>
                </div>
                
            </div>
            
            <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-wrap  mb-5 py-4 mx-auto md:px-10 hover:scale-110 ">
                <div className="w-10  mr-4">
                <Image className=""  src="/evn.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                </div>
                <div className="flex flex-col w-64 md:w-96">
                    <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info4")}</h1>
                    <h1 className="font-normal text-base">{t("About_tittle2_info4_1")}</h1>
                </div>
                
            </div>
            <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-wrap  mb-5 py-4 mx-auto md:px-10 hover:scale-110 ">
                <div className="w-10  mr-4">
                <Image className=""  src="/4n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                </div>
                <div className="flex  flex-col w-64 md:w-96">
                    <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info3")}</h1>
                    <h1 className="font-normal text-base">{t("About_tittle2_info3_1")}</h1>
                </div>
                
            </div>
            
           
        </div>
        <div className="w-full m-auto mt-24  h-auto relative text-bgr segments segment-3 ">
                <div className="w-full h-full md:bg-gradient-to-r md:from-bgr2 md:via-bgr2 bg-opacity-10 "></div>                     
                {/* <Image className='absolute h-full  bottom-0 '  src="/ronda-foto-300x190.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" /> */}
                <div className="flex flex-col  relative w-full md:w-3/4 py-10 bg-gradient-to-b md:bg-gradient-to-r from-bg2 via-bg2  bg-opacity-25" >
                    <div className="max-w-xl w-3/4 m-auto  md:w-full text-center md:text-left md:ml-40">
                    <h1 className=" font-semibold text-3xl md:text-5xl  max-w-sm mb-10">
                        {t("About_tittle3")}
                    </h1>
                    <p>{t("About_tittle3_info")}</p>
                    
                    </div>
                    
                </div>
                
            </div>
            <div className="max-w-5xl m-auto px-8 mt-20">
                <h1 className=" text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">{t("About_tittle4")}</h1>

                <p className="w-3/4 text-base">{t("About_tittle4_info")}</p>

                <div className="w-full max-w-4xl m-auto h-full grid md:grid-cols-2 place-items-center mt-10">

                    <div className="shadow-lg mb-10 group border border-l-8 border-bg2 container relative rounded-md bg-bgr  max-w-sm flex justify-center items-center  mx-auto content-div">
                        <div className="w-full flex flex-col ">
                            <div  className="w-full image-cover rounded-t-md" >
                                
                            </div>
                            <div className="py-8 bg-gradient-to-t from-bg2 via-bg2  bg-opacity-25 w-full flex flex-col rounded-b-md fd-cl group-hover:opacity-25">
                                <span className="block text-xl m-auto pl-7 text-bgr w-full font-bold tracking-wide px-4">{t("About_tittle4_tittle2")}</span>
                                <button className="text-center  rounded-lg px-10 m-auto mt-4 font-normal py-1 bg-sl text-bgr text-base">{t("About_moreinfo")}</button>

                            </div>
                        </div>
                        <div className="absolute opacity-0 fd-sh px-6 group-hover:opacity-100">
                            <span className="text-base w-3/4 m-auto font-bold text-bgr tracking-wider  leading-relaxed ">{t("About_tittle4_tittle2_info")}</span> 
                            <div className="pt-8 text-center">
                        </div>
                    </div>
                    </div>
                    <div className="shadow-lg mb-10 group border border-l-8 border-bg2 container relative rounded-md bg-bgr  max-w-sm flex justify-center items-center  mx-auto content-div2">
                        <div className="w-full flex flex-col ">
                            <div  className="w-full image-cover rounded-t-md" >
                                
                            </div>
                            <div className="py-8 bg-gradient-to-t  from-bg2 via-bg2  bg-opacity-25 w-full flex flex-col rounded-b-md fd-cl group-hover:opacity-25">
                                <span className="block text-xl m-auto pl-7 text-bgr w-full font-bold tracking-wide">{t("About_tittle4_tittle1")}</span>
                                <button className="ttext-center  rounded-lg px-10 m-auto mt-4 font-normal py-1 bg-sl text-bgr text-base">{t("About_moreinfo")}</button>

                            </div>
                        </div>
                        <div className="absolute opacity-0 fd-sh px-6 group-hover:opacity-100">
                            <span className="text-base w-3/4 m-auto font-bold text-bgr tracking-wider  leading-relaxed ">{t("About_tittle4_tittle1_info")}</span> 
                            <div className="pt-8 text-center">
                        </div>
                    </div>
                    </div>

                    

                </div>



            {/* <div className="grid sm:grid-cols-2 md:grid-cols-3">
                <div className="">
                <Image className=""  src="/men.jpg" layout='' width={300+'px'} height={400+'px'} alt="" objectFit="cover" quality={100} />
                </div>
                <div className="">
                <Image className=""  src="/men2.jpg" layout='' width={300+'px'} height={400+'px'} alt=""  objectFit="cover" quality={100} />
                </div>
                <div className="">
                <Image className=""  src="/men3.jpg" layout='' width={300+'px'} height={400+'px'} alt=""  objectFit="cover" quality={100} />
                </div>
            </div> */}


            
            <div className="md:w-3/4  mt-20 text-base md:text-lg ">
                <h1 className=" text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">{t("About_tittle6")}</h1>
                <p className="">{t("About_tittle6_info")}</p>
            </div>
            <div className="flex flex-wrap">

            <button className="bg-bgr border-2 border-bg2 text-bg2 m-auto text-sm  w-48 py-2 flex items-center justify-center mt-20 transition-all duration-150 relative z-10">
                Mira las preguntas mas frecuentes
            </button>
            <button className="bg-bgr border-2 border-bg2 text-bg2 m-auto text-sm  w-48 py-2 flex items-center justify-center mt-20 transition-all duration-150 relative z-10">
                Conoce el mercado inmo españa
            </button>
            </div>
        </div>

    </div>
  )
}
