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
        <div className="w-3/4 m-auto mb-20 text-base md:text-lg ">
            <p className="">lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum </p>
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

        <h1 className="md:ml-10 text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">Todo surge por que...</h1>
        <div className="w-3/4 m-auto mb-20 text-base md:text-lg ">
            <p className="">lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum </p>
        </div>

    </div>
  )
}
