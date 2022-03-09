import { useTranslation } from "next-i18next";
import React, { useState, Fragment } from 'react'
import Image from "next/image"
import { Tab } from '@headlessui/react';
import Link from "next/link"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function OurProcess() {
    const { t } = useTranslation('common');
    
  return (
    <div className="w-screen h-full relative flex flex-col bg-bgr">

        <div className="w-full h-full z-0 absolute hidden">
            <Image className='z-0 brightness-90 opacity-90 '  src="/howimg.png" layout='fill' objectFit='cover' objectPosition='center' alt="" />
        </div>
        <div className="w-full h-full max-w-4xl m-auto flex-row">
            <div className="w-full h-full flex flex-col mt-32 md:mt-20  max-w-6xl mb-20 ml-8">
                <h1 className="text-bl font-medium text-4xl md:text-4xl text-bg2 uppercase">
                {t('how_tittle')}
                </h1>
                <h1 className="text-4xl md:text-4xl uppercase text-sl font-bold ">
                {t('how_tittle2')}
                </h1>
                
            </div>
            <div className=" w-11/12 px-2 sm:px-0 text-bgr m-auto ">
                    <Tab.Group>
                        
                        <Tab.List className="flex  space-x-1 w-full md:w-4/5  relative  ">
                            <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                className={
                                    selected ? 'bg-bgr rounded-t-lg  w-32 md:w-40 py-2 relative mt-2 z-20  text-sm leading-5 font-medium text-sl flex h-10 border-2  border-bgf ' : 'bg-b rounded-t-lg w-24 mt-2 h-10 sm:w-32 py-2.5 focus:outline-none focus:ring-2 ring-offset-2 text-bgr flex '
                                }
                                >
                                <div className=" absolute w-full h-4 bg-bgr z-4 -bottom-4"></div> 
                                <div className="flex w-full h-full m-auto mr-11  px-3 relative">
                                    <h1 className="text-4xl md:text-4xl font-bold relative z-10">1</h1> 
                                    <h2>
                                        {t('how_dubstep1')}
                                    </h2>
                                    <div className="w-full h-full relative z-10 ">

                                        <h1 className="text-xl md:text-2xl absolute bottom-0 ">{t('step')}</h1>
                                    </div>
                                </div>
                                
                                </button>
                            )}
                            </Tab>
                            {/* ...  */}
                            <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                className={
                                    selected ? 'bg-bgr rounded-t-lg  w-32 md:w-40 py-2 mt-2 relative z-20 text-sm leading-5 font-medium text-sl flex h-10 border-2  border-bgf ' : 'bg-b rounded-t-lg w-24 mt-2 sm:w-32 py-2.5 h-10 focus:outline-none focus:ring-2 ring-offset-2 text-bgr flex '
                                }
                                >
                                <div className=" absolute w-full h-4 bg-bgr z-4 -bottom-4"></div>
                                <div className="flex w-full h-full m-auto  px-2">

                                    <h1 className="text-4xl md:text-4xl font-bold relative z-10 ">2</h1> 
                                    <h2>
                                        {t('how_dubstep2')}
                                    </h2>
                                    <div className="w-full h-full relative z-10 ">

                                        <h1 className="text-xl md:text-2xl absolute bottom-0">{t('step')}</h1>
                                </div>
                                </div>
                                
                                </button>
                            )}
                            </Tab>
                            {/* ...  */}
                            <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                className={
                                    selected ? 'bg-bgr rounded-t-lg  w-32 md:w-40 py-2 relative mt-2 z-20  text-sm leading-5 font-medium text-sl flex h-10 border-2  border-bgf ' : 'bg-b rounded-t-lg w-24 mt-2 h-10 sm:w-32 py-2.5 focus:outline-none focus:ring-2 ring-offset-2 text-bgr flex '
                                }
                                >
                                <div className=" absolute w-full h-4 bg-bgr z-4 -bottom-4"></div>
                                <div className="flex w-full h-full m-auto  px-3">

                                    <h1 className="text-4xl md:text-4xl font-bold relative z-10 ">3</h1> 
                                    <h2>
                                        {t('how_dubstep3')}
                                    </h2>
                                    <div className="w-full h-full relative z-10 ">

                                        <h1 className="text-xl md:text-2xl absolute bottom-0">{t('step')}</h1>
                                </div>
                                </div>
                                
                                </button>
                            )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className=" h-auto  p-8 md:p-10 w-4/5 bg-bgr rounded-b-lg sm:rounded-r-lg shadow-2xl flex flex-col border-2 border-bg relative">
                        <svg className="w-10 md:w-20 absolute bottom-20 md:bottom-10 right-5 md:right-10"  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#203D46"/>
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#203D46"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#203D46"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#203D46"/>
                        </svg>
                            <Tab.Panel>

                                <div className="text-4xl md:text-4xl font-bold text-bg2 m-auto flex">
                                    {t('how_stepinfo_tittle1')}
                                </div>
                                <div className="text-xl font-normal text-bgf mt-10 w-4/5 ml-4">
                                    {t('how_stepinfo_descr1')}
                                    <h1 className="font-medium mt-2 ml-2">Precio: 75 &euro; </h1>
                                </div>

                                <Link  href="/formdoc" passHref>
                                <button className="bg-sl text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-bgf transition-all duration-150 relative z-10 ml-4">
                                    Leer más
                                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                                    </svg>
                                </button>
                                </Link>
                            
                            </Tab.Panel>
                            {/* ... */}
                            <Tab.Panel>

                                <div className="text-4xl font-bold text-bg2 m-auto flex">
                                    {t('how_stepinfo_tittle2')}
                                </div>
                                <div className="text-xl font-normal text-bgf mt-10 w-4/5 ml-4">
                                    {t('how_stepinfo_descr2')}
                                    <h1 className="font-medium mt-2 ml-2">Costo: 363 &euro; </h1>
                                </div>
                                <Link  href="/formreserva" passHref>
                                <button className="bg-sl text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-bgf transition-all duration-150 relative z-10 ml-4">
                                    Solicitar
                                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                                    </svg>
                                </button>
                                </Link>
                            
                            </Tab.Panel>
                            {/* ... */}
                            <Tab.Panel>

                                <div className="text-4xl font-bold text-bg2 m-auto flex">
                                    {t('how_stepinfo_tittle3')}
                                </div>
                                <div className="text-xl font-normal text-bgf mt-10 w-4/5 ml-4">
                                    {t('how_stepinfo_descr3')}
                                    <h1 className="font-medium mt-2 ml-2">Costo Urbano: 532,40 &euro; </h1>
                                    <h1 className="font-medium ml-2">Costo Rústico: 665,50 &euro; </h1>
                                </div>
                                <Link  href="/formigp" passHref>
                                <button className="bg-sl text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-bgf transition-all duration-150 relative z-10 ml-4">
                                    Solicitar
                                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                                    </svg>
                                </button>
                                </Link>

                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

            </div>
        </div>

        <svg className="w-full relative z-10 " viewBox="0 0 1440 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L1440 102H0V0Z" fill="white"/>
        </svg>


    </div>
  )
}

export default OurProcess


export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common', 'footer']),
    },
  })