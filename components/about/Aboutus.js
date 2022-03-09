import React, { useState, Fragment } from 'react'
import { useTranslation } from "next-i18next";
import Image from "next/image"


export default function Aboutus() {
    const { t } = useTranslation('common');
    const ytvideo = ["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]

  return (
    <div className="bg-bgr  pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl m-auto px-8">
            <h1 className="md:ml-10 text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">Todo surge por que...</h1>
            <div className="md:w-3/4 m-auto mb-20 text-base md:text-lg ">
                <p className="">lorem impsum lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum </p>
            </div>
        </div>
            
        <div className="w-full grid grid-cols-4 relative">
            <div className="w-full h-full bg-gradient-to-r from-bgr2 via-bgr2 absolute z-10 bg-opacity-5 "></div>
            <div className="relative w-full bg-sl    ">
                <Image className='absolute w-96   h-full bottom-0 '  src="/1.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
            <div className="relative w-full bg-sl h-56">
                <Image className='absolute w-96   h-full bottom-0 '  src="/2.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
            <div className="relative w-full bg-sl h-full col-span-2 row-span-2 ">
                <Image className='absolute w-96   h-full bottom-0 '  src="/3.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
            <div className="relative w-full bg-sl h-56  ">
                <Image className='absolute w-96   h-full bottom-0 '  src="/4.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
            <div className="relative w-full bg-sl h-56 ">
                <Image className='absolute w-96   h-full bottom-0 '  src="/5.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            </div>
        </div>

        <div className="max-w-6xl m-auto px-8 mt-20">
            <h1 className="md:ml-10 text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">La solucion al problema que injurad proporciona</h1>
            <div className="md:w-3/4 m-auto mb-20 text-base md:text-lg ">
                <p className="">lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum </p>
            </div>
        </div>
        <div className="w-full md:w-9/12 m-auto h-auto grid md:grid-cols-2 mb-20">

            <div className=" rounded-lg h-auto w-8/12 md:w-3/4 flex pr-8 mb-10 py-4 m-auto md:px-10 hover:scale-110 ">
                <div className="w-10  mr-4">
                <Image className=""  src="/1n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                </div>
                <div className="flex flex-col w-64 md:w-96 ">
                    <h1 className="font-medium text-2xl mb-2 text-bg2">Nuestra etica ...</h1>
                    <h1 className="font-normal text-base"> Mauris mattis turpis et facilisis interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent aliquet, urna sed vulputate rutrum, nisl eros placerat sem, in ultricies nunc nisi sit amet velit. Duis efficitur ac mi quis cursus. </h1>
                </div>
            </div>

            

            <div className=" rounded-xl h-auto w-8/12 md:w-3/4 flex md:pl-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                <div className="w-10  mr-4">
                <Image className=""  src="/2n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                </div>
                <div className="flex  mr-4 flex-col w-64 md:w-96">
                    <h1 className="font-medium text-2xl mb-2 text-bg2">Seguridad al comprar ...</h1>
                    <h1 className="font-normal text-base">Mauris mattis turpis et facilisis interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent aliquet, urna sed vulputate rutrum, nisl eros placerat sem, in ultricies nunc nisi sit amet velit. Duis efficitur ac mi quis cursus. </h1>
                </div>
                
            </div>

            <div className=" rounded-full h-auto w-8/12 md:w-3/4 flex pr-8 mb-10 mt-10 py-4 m-auto md:px-10 hover:scale-110">
                <div className="w-10   mr-4">
                <Image className=""  src="/3n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                </div>
                <div className="flex  flex-col w-64 md:w-96">
                    <h1 className="font-medium text-2xl mb-2 text-bg2">Trabajamos en toda España ...</h1>
                    <h1 className="font-normal text-base">Mauris mattis turpis et facilisis interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent aliquet, urna sed vulputate rutrum, nisl eros placerat sem, in ultricies nunc nisi sit amet velit. Duis efficitur ac mi quis cursus. </h1>
                </div>
            </div>

            <div className=" rounded-full h-auto w-8/12 md:w-3/4 flex md:pl-8 mt-10 py-4 m-auto md:px-10 hover:scale-110">
                <div className="w-10 mr-4">
                <Image className=""  src="/4n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                </div>
                <div className="flex  mr-4 flex-col w-64 md:w-96">
                    <h1 className="font-medium text-2xl mb-2 text-bg2">Todo el proceso juntos ...</h1>   
                    <h1 className="font-normal text-base">Mauris mattis turpis et facilisis interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent aliquet, urna sed vulputate rutrum, nisl eros placerat sem, in ultricies nunc nisi sit amet velit. Duis efficitur ac mi quis cursus. </h1>
                </div>
                
            </div>
        </div>
        
        <div className="max-w-6xl m-auto px-8 mt-20">
            <h1 className="md:ml-10 text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">Cofundadores y Equipo</h1>
            <div className="md:w-3/4 m-auto mb-20 text-base md:text-lg ">
            </div>
        </div>

    </div>
  )
}
