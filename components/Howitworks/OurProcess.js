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
            <div className="w-11/12 h-full flex flex-col mt-10 md:mt-20  max-w-6xl mb-10 ml-8">
                <h1 className="text-bl font-semibold text-4xl md:text-4xl text-bg2 uppercase">
                {t('how_tittle')} <span className="text-4xl md:text-4xl uppercase text-sl font-bold ">{t('how_tittle2')}</span>
                </h1>
                <p className=" mt-10 tracking-wide text-lg w-11/12">{t('how_tittleinfo')}</p>
                
            </div>
            <div className="hidden lg:grid w-11/12 px-2 sm:px-0 text-bgr mx-auto place-items-center ">
                    <Tab.Group >
                        
                        <Tab.List className="grid sm:grid-flow-col place-content-center h-auto justify-center transition-all  duration-700 ">
                            <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                className={
                                    selected ? 'bg-bgr rounded-md h-64 w-64 md:w-64 px-4 py-1 ml-1 relative z-20 mb-4 text-sm text-center m-auto font-medium text-bg2 flex justify-center  border  border-sl ' : 'bg-sl rounded-md  h-56 w-64 md:w-64 px-4 py-1 ml-1 relative z-20 mb-4 text-sm text-center m-auto font-medium text-bgr flex  '
                                }
                                >
                                    <div className="grid place-items-center m-auto relative">
                                        <div className="bg-sl w-3 h-3 rounded-full absolute top-0 right-0" ></div>
                                        <h1 className=" text-center mb-5 font-medium text-3xl relative"> <span className="font-semibold text-4xl mr-6 ">48,</span> <span className="text-2xl absolute left-12 pl-1 font-semibold ">40</span>€</h1>
                                        <h1 className="text-base  text-center border-t border-b border-bgrS p-5">{t('step1')} </h1>
                                        <div className="text-sl bg-bgr border border-sl font-medium p-2 w-10/12 mt-5 rounded-lg">{t('card_infobtn')}</div>
                                    </div>
                                </button>
                            )}
                            </Tab>
                            <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                className={
                                    selected ? 'bg-bgr rounded-md h-64 w-64 md:w-64 px-4 py-1 ml-1 relative z-20 mb-4 text-sm text-center m-auto font-medium text-bg2 flex  border  border-sl ' : 'bg-sl rounded-md  h-56 w-64 md:w-64 px-4 py-1 ml-1 relative z-20 mb-4 text-sm text-center m-auto font-medium text-bgr flex  '
                                }
                                >
                                    <div className="grid place-items-center m-auto relative">
                                        <div className="bg-sl w-3 h-3 rounded-full absolute top-0 right-0" ></div>
                                        <h1 className=" text-center mb-5 font-medium text-3xl relative"> <span className="font-semibold text-4xl mr-6 ">121,</span> <span className="text-2xl absolute left-12 pl-1 font-semibold ">00</span>€</h1>
                                        <h1 className="text-base  text-center border-t border-b border-bgrS p-5">{t('step2')} </h1>
                                        <div className="text-sl bg-bgr border border-sl font-medium p-2 w-10/12 mt-5 rounded-lg">{t('card_infobtn')}</div>
                                    </div>
                                        
                                </button>
                            )}
                            </Tab>
                            <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                className={
                                    selected ? 'bg-bgr rounded-md  h-64 w-64 md:w-64 px-4 py-1 ml-1 relative z-20 mb-4 text-sm text-center m-auto font-medium text-bg2 flex  border  border-sl ' : 'bg-sl rounded-md  h-56 w-64 md:w-64 px-4 py-1 ml-1 relative z-20 mb-4 text-sm text-center m-auto font-medium text-bgr flex  '
                                }
                                >   
                                    <div className="grid place-items-center m-auto relative">
                                        <div className="bg-sl w-3 h-3 rounded-full absolute top-0 right-0" ></div>
                                        <h1 className=" text-center mb-5 font-medium text-3xl relative"> <span className="font-semibold text-4xl mr-6 ">544,</span> <span className="text-2xl absolute left-14 pl-5 font-semibold ">50</span>€</h1>
                                        <h1 className="text-base text-center border-t border-b border-bgrS p-5">{t('step3')} </h1>
                                        <div className="text-sl bg-bgr border border-sl font-medium p-2 w-10/12 mt-5 rounded-lg">{t('card_infobtn')}</div>
                                    </div>
                                </button>
                            )}
                            </Tab>
                            {/* <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                className={
                                    selected ? 'bg-bgr rounded-full h-auto w-32 md:w-36 py-1 ml-1 relative z-20 mb-4 text-sm text-center m-auto font-medium text-bg2 flex  border-2  border-sl ' : 'bg-bg2 rounded-full h-auto w-32 md:w-36 py-1 ml-1 relative z-20 mb-4 text-sm text-center m-auto font-medium text-bgr flex  '
                                }
                                >
                                        <h1 className="text-base text-center m-auto ">{t('step4')} </h1>
                                </button>
                            )}
                            </Tab> */}
                            
                        </Tab.List>
                        <Tab.Panels className=" h-auto sm:h-auto m-auto content-div3 border border-sl   p-8 md:p-10 sm:w-4/5 bg-bgr rounded-lg mb-20 shadow-2xl flex flex-col relative">
                            <svg className="w-10 md:w-20 absolute bottom-20 md:bottom-10 right-5 md:right-10"  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#326754"/>
                                <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#326754"/>
                                <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#326754"/>
                                <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#326754"/>
                            </svg>
                            <Tab.Panel>

                                <h1 className="text-4xl md:text-4xl font-bold text-sl m-auto flex ">
                                    {t('how_stepinfo_tittle1')}
                                </h1>
                                <div className="text-base font-normal text-bg2 mt-5 ml-4 ">
                                    <p className="font-normal font-heads leading-8 text-lg ">{t('how_stepinfo_descr1')}</p>
                                    <p className="font-semibold font-heads leading-8 text-lg mt-2 mb-4 ">{t('how_stepinfo_descr1b')}</p>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr1d1")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr1d2")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr1d3")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr1d4")}</p>
                                    </div>
                                    <p className="font-normal font-heads leading-8 text-lg mt-2 ">{t('how_stepinfo_descr1e')}</p>
                                    
                                </div>

                                <Link  href="/formdoc" passHref>
                                <button className="bg-sl text-bgr w-48 py-2 m-auto flex items-center justify-center mt-10 hover:bg-bgf transition-all duration-150 relative z-10 ml-4">
                                    {t('more3')}
                                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                                    </svg>
                                </button>
                                </Link>
                            
                            </Tab.Panel>
                            {/* ... */}
                            <Tab.Panel>

                            <div className="text-4xl md:text-4xl font-bold text-sl m-auto flex ">
                                    {t('how_stepinfo_tittle2')}
                                </div>
                                <div className="text-base font-normal text-bg2 mt-5 ml-4 ">
                                    
                                    <p className="font-normal font-heads leading-8 text-lg mb-4">{t('how_stepinfo_descr2')}</p>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr2b")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr2b2")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr2b3")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr2b4")}</p>
                                    </div>
                                    <p className="font-normal font-heads leading-8 text-lg mt-2">{t('how_stepinfo_descr2c')}</p>
                                    
                                </div>
                                <Link  href="/formreserva" passHref>
                                <button className="bg-sl text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-bgf transition-all duration-150 relative z-10 ml-4">
                                    {t('more3')}
                                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                                    </svg>
                                </button>
                                </Link>
                            
                            </Tab.Panel>
                            {/* ... */}
                            <Tab.Panel>

                            <div className="text-4xl md:text-4xl font-bold text-sl m-auto flex ">
                                    {t('how_stepinfo_tittle3')}
                                </div>
                                <div className="text-base font-normal text-bg2 mt-5 ml-4 ">
                                    
                                    <p className="font-normal font-heads leading-8 text-lg">{t('how_stepinfo_descr3A')}</p>
                                    <p className="font-normal font-heads leading-8 text-lg mt-4">{t('how_stepinfo_descr3B')}</p>
                                   
                                    <div className="flex flex-row pl-2 mt-4">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr3B1")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr3B2")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr3B3")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr3B4")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr3B5")}</p>
                                    </div>
                                    <div className="flex flex-row pl-2">
                                        <svg className="mr-2 transition-all duration-150 pt-1 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-60 text-lg sm:w-full mb-2">{t("how_stepinfo_descr3B6")}</p>
                                    </div>
                                    <p className="font-normal font-heads leading-8 text-lg">{t('how_stepinfo_descr35')}</p>
                                    
                                </div>
                                <Link  href="/formigp" passHref>
                                <button className="bg-sl text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-bgf transition-all duration-150 relative z-10 ml-4">
                                    {t('more')}
                                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                                    </svg>
                                </button>
                                </Link>

                            </Tab.Panel>
                            <Tab.Panel>

                            <div className="text-4xl md:text-4xl font-bold text-sl m-auto flex ">
                                    {t('how_stepinfo_tittle4')}
                                </div>
                                <div className="text-base font-normal text-bg2 mt-5 ml-4 ">
                                    
                                    <p className="font-normal font-heads leading-8 text-lg">{t('how_stepinfo_descr4')}</p>
                                    
                                </div>
                                <Link  href="/formigp" passHref>
                                <button className="bg-sl text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-bgf transition-all duration-150 relative z-10 ml-4">
                                    {t('more')}
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





//   <div className="relative w-10/12 m-auto h-full shadow-2xl">
//             {/* <div className="h-full w-32 absolute -left-32 z-0 bg-gradient-to-r  from-bgr to-gl bg-opacity-5 "></div>
//             <div className="h-full w-32 absolute -right-32 z-0 bg-gradient-to-l  from-bgr to-gl "></div> */}
//             <div className="w-full  z-10  m-auto h-96 overflow-auto rounded-2xl   whitespace-nowrap contenedor_flujo relative shadow-2xl border-bg2 border-l-2 border-r-2  ">
//                 <svg className="absolute top-10 right-10 animate-pulse " width="44" height="44" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M0 73.5C0 76.2848 1.10625 78.9555 3.07538 80.9246C5.04451 82.8938 7.71523 84 10.5 84H73.5C76.2848 84 78.9555 82.8938 80.9246 80.9246C82.8938 78.9555 84 76.2848 84 73.5V10.5C84 7.71523 82.8938 5.04451 80.9246 3.07538C78.9555 1.10625 76.2848 0 73.5 0L10.5 0C7.71523 0 5.04451 1.10625 3.07538 3.07538C1.10625 5.04451 0 7.71523 0 10.5L0 73.5ZM23.625 39.375H54.0383L42.7665 28.1085C42.2736 27.6156 41.9967 26.9471 41.9967 26.25C41.9967 25.5529 42.2736 24.8844 42.7665 24.3915C43.2594 23.8986 43.9279 23.6217 44.625 23.6217C45.3221 23.6217 45.9906 23.8986 46.4835 24.3915L62.2335 40.1415C62.478 40.3853 62.6719 40.675 62.8042 40.9939C62.9366 41.3128 63.0047 41.6547 63.0047 42C63.0047 42.3453 62.9366 42.6872 62.8042 43.0061C62.6719 43.325 62.478 43.6147 62.2335 43.8585L46.4835 59.6085C45.9906 60.1014 45.3221 60.3783 44.625 60.3783C43.9279 60.3783 43.2594 60.1014 42.7665 59.6085C42.2736 59.1156 41.9967 58.4471 41.9967 57.75C41.9967 57.0529 42.2736 56.3844 42.7665 55.8915L54.0383 44.625H23.625C22.9288 44.625 22.2611 44.3484 21.7688 43.8562C21.2766 43.3639 21 42.6962 21 42C21 41.3038 21.2766 40.6361 21.7688 40.1438C22.2611 39.6516 22.9288 39.375 23.625 39.375V39.375Z" fill="#CFE0C9"/>
//                 </svg>
//                 <div className="w-full h-full grid grid-flow-col ">
//                     <div className="w-80 h-10 rounded-full border ml-10 my-auto  border-bgr2 flujo_cuadro grid place-items-center">
//                         <p className="text-bg2 font-medium text-base">{t("how_flujo_1")}</p>
//                     </div>
//                     <div className="m-auto ml-4">
//                         <svg width="219" height="24" viewBox="0 0 219 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM218.061 13.0607C218.646 12.4749 218.646 11.5251 218.061 10.9393L208.515 1.3934C207.929 0.807612 206.979 0.807612 206.393 1.3934C205.808 1.97918 205.808 2.92893 206.393 3.51472L214.879 12L206.393 20.4853C205.808 21.0711 205.808 22.0208 206.393 22.6066C206.979 23.1924 207.929 23.1924 208.515 22.6066L218.061 13.0607ZM2 13.5H217V10.5H2V13.5Z" fill="#2A614D"/>
//                         </svg>
//                     </div>
//                     <div className="w-80 h-48 py-4 rounded-xl border ml-4 my-auto border-bgr2 flujo_cuadro grid place-items-center">
//                         <div className="">

//                             <p className="text-bg2 font-medium text-base">{t("how_flujo_2")}</p>
//                             <p className="text-bg2 font-normal text-base">{t("how_flujo_2info")}</p>
//                         </div>
//                         <div className="w-3/4 ml-12">
//                             <p className="text-bg2 font-normal text-base">- {t("how_flujo_2info2")}</p>
//                             <p className="text-bg2 font-normal  text-base">- {t("how_flujo_2info2a")}</p>
//                             <p className="text-bg2 font-normal text-base">- {t("how_flujo_2info2b")}</p>
//                             <p className="text-bg2 font-normal text-base">- {t("how_flujo_2info2c")}</p>
//                         </div>
//                     </div>
                    
//                     <div className="m-auto ml-4">
//                         <svg width="296" height="166" viewBox="0 0 296 166" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M295.707 8.70711C296.098 8.31658 296.098 7.68342 295.707 7.29289L289.343 0.928932C288.953 0.538408 288.319 0.538408 287.929 0.928932C287.538 1.31946 287.538 1.95262 287.929 2.34315L293.586 8L287.929 13.6569C287.538 14.0474 287.538 14.6805 287.929 15.0711C288.319 15.4616 288.953 15.4616 289.343 15.0711L295.707 8.70711ZM80 9H295V7H80V9Z" fill="#2A614D"/>
//                             <path d="M295.707 158.707C296.098 158.317 296.098 157.683 295.707 157.293L289.343 150.929C288.953 150.538 288.319 150.538 287.929 150.929C287.538 151.319 287.538 151.953 287.929 152.343L293.586 158L287.929 163.657C287.538 164.047 287.538 164.681 287.929 165.071C288.319 165.462 288.953 165.462 289.343 165.071L295.707 158.707ZM80 159H295V157H80V159Z" fill="#2A614D"/>
//                             <line x1="80" y1="158" x2="80" y2="8" stroke="#2A614D" strokeWidth="2"/>
//                             <line x1="0.988281" y1="81" x2="81.0133" y2="81" stroke="black" strokeWidth="2"/>
//                         </svg>
//                     </div>
//                     <div className="pt-2 " >
                        
//                         <div className="w-80 h-14 rounded-xl border ml-4 mt-16 py-3   my-auto border-bgr2  flujo_cuadro grid place-items-center">
//                             <p className="text-bg2 font-semibold text-base">{t("how_flujo_3")}</p>
//                             <p className="text-bg2 font-normal text-base">{t("how_flujo_3-")}</p>
//                         </div>

//                         <div className="w-auto h-14 rounded-xl border ml-4 mt-16 p-3  my-auto border-bgr2 flujo_cuadro grid place-items-center">
//                             <p className="text-bg2 font-semibold text-base">{t("how_flujo_3b")}</p>
//                             <p className="text-bg2 font-normal text-base">{t("how_flujo_3b-")}</p>
//                         </div>

//                     </div>
//                     <div className="m-auto ml-4 relative">
//                             <p className="text-bg2 absolute -top-16 left-60 font-semibold text-base">{t("how_flujo_4")}</p>
//                         <div className=" absolute -top-36 left-56 w-80 h-20 rounded-xl border ml-4 mt-28 bg-bg2  my-auto border-bgr2 flujo_cuadro grid place-items-center">
                            
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_4a")}</p>
//                         </div>
//                         <svg width="787" height="168" viewBox="0 0 787 168" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M216.707 8.70711C217.098 8.31658 217.098 7.68342 216.707 7.29289L210.343 0.928932C209.953 0.538408 209.319 0.538408 208.929 0.928932C208.538 1.31946 208.538 1.95262 208.929 2.34315L214.586 8L208.929 13.6569C208.538 14.0474 208.538 14.6805 208.929 15.0711C209.319 15.4616 209.953 15.4616 210.343 15.0711L216.707 8.70711ZM1 9H216V7H1V9Z" fill="#2A614D"/>
//                             <path d="M785.715 161.207C786.106 160.817 786.106 160.183 785.715 159.793L779.351 153.429C778.961 153.038 778.328 153.038 777.937 153.429C777.547 153.819 777.547 154.453 777.937 154.843L783.594 160.5L777.937 166.157C777.547 166.547 777.547 167.181 777.937 167.571C778.328 167.962 778.961 167.962 779.351 167.571L785.715 161.207ZM0.992188 161.5H785.008V159.5H0.992188V161.5Z" fill="#2A614D"/>
//                             <path d="M785.707 8.70711C786.098 8.31658 786.098 7.68342 785.707 7.29289L779.343 0.928932C778.953 0.538408 778.319 0.538408 777.929 0.928932C777.538 1.31946 777.538 1.95262 777.929 2.34315L783.586 8L777.929 13.6569C777.538 14.0474 777.538 14.6805 777.929 15.0711C778.319 15.4616 778.953 15.4616 779.343 15.0711L785.707 8.70711ZM570 9H785V7H570V9Z" fill="#2A614D"/>
//                         </svg>

//                     </div>
                    

//                     <div className="relative" >
//                         <p className="absolute text-bg2 font-semibold text-center top-9 left-4 text-base">{t("how_flujo_5")}</p>
//                         <div className="w-80 h-20 rounded-xl border ml-4 mt-16   my-auto border-bgr2 bg-bg2 flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_5a")}</p>
//                         </div>
//                         <div className="w-80 h-20 rounded-xl border ml-4 mt-16  my-auto border-bgr2 bg-bg2 flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_5b")}</p>
//                         </div>

//                     </div>
//                     <div className="m-auto ml-4">
//                         <svg width="216" height="166" viewBox="0 0 216 166" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M215.707 8.70711C216.098 8.31658 216.098 7.68342 215.707 7.29289L209.343 0.928932C208.953 0.538408 208.319 0.538408 207.929 0.928932C207.538 1.31946 207.538 1.95262 207.929 2.34315L213.586 8L207.929 13.6569C207.538 14.0474 207.538 14.6805 207.929 15.0711C208.319 15.4616 208.953 15.4616 209.343 15.0711L215.707 8.70711ZM0 9H215V7H0V9Z" fill="#2A614D"/>
//                             <path d="M215.707 158.707C216.098 158.317 216.098 157.683 215.707 157.293L209.343 150.929C208.953 150.538 208.319 150.538 207.929 150.929C207.538 151.319 207.538 151.953 207.929 152.343L213.586 158L207.929 163.657C207.538 164.047 207.538 164.681 207.929 165.071C208.319 165.462 208.953 165.462 209.343 165.071L215.707 158.707ZM0 159H215V157H0V159Z" fill="#2A614D"/>
//                         </svg>
//                     </div>
//                     <div className="relative" >
//                         <p className="absolute text-bg2 font-semibold text-center top-9 left-4 text-base">{t("how_flujo_5c")}</p>
//                         <div className="w-80 h-20 rounded-xl border ml-4 mt-16   my-auto border-bgr2 bg-bg2 flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_5d")}</p>
//                         </div>
//                         <div className="w-80 h-20 rounded-xl border ml-4 mt-16  my-auto border-bgr2 bg-bg2 flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_5e")}</p>
//                         </div>

//                     </div>
//                     <div className="relative ml-10" >
//                         <div className="w-80 h-16 rounded-xl border ml-4 mt-5   my-auto border-bgr2 bg-bgfva2 flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_b1")} <br /> <span className="font-thin">{t("how_flujo_b1-")}</span> </p>
//                         </div>
//                         <div className="w-80 h-16 rounded-xl border ml-4 mt-16  my-auto border-bgr2 bg-sl flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_b2")} <br /> <span className="font-thin">{t("how_flujo_b3")}</span> </p>
//                         </div>
//                         <div className="w-80 h-16 rounded-xl border ml-4 mt-16  my-auto border-bgr2 bg-bgfva flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_b4")} <br /> <span className="font-thin">{t("how_flujo_b5")}</span> </p>
//                         </div>

//                     </div>
//                     <div className="m-auto ml-4">
//                         <svg width="217" height="286" viewBox="0 0 217 286" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM216.707 8.70711C217.098 8.31658 217.098 7.68342 216.707 7.29289L210.343 0.928932C209.953 0.538408 209.319 0.538408 208.929 0.928932C208.538 1.31946 208.538 1.95262 208.929 2.34315L214.586 8L208.929 13.6569C208.538 14.0474 208.538 14.6805 208.929 15.0711C209.319 15.4616 209.953 15.4616 210.343 15.0711L216.707 8.70711ZM1 9H216V7H1V9Z" fill="#2A614D"/>
//                             <path d="M1 277C0.447715 277 0 277.448 0 278C0 278.552 0.447715 279 1 279V277ZM216.707 278.707C217.098 278.317 217.098 277.683 216.707 277.293L210.343 270.929C209.953 270.538 209.319 270.538 208.929 270.929C208.538 271.319 208.538 271.953 208.929 272.343L214.586 278L208.929 283.657C208.538 284.047 208.538 284.681 208.929 285.071C209.319 285.462 209.953 285.462 210.343 285.071L216.707 278.707ZM1 279H216V277H1V279Z" fill="#2A614D"/>
//                             <path d="M1 142C0.447715 142 0 142.448 0 143C0 143.552 0.447715 144 1 144V142ZM216.707 143.707C217.098 143.317 217.098 142.683 216.707 142.293L210.343 135.929C209.953 135.538 209.319 135.538 208.929 135.929C208.538 136.319 208.538 136.953 208.929 137.343L214.586 143L208.929 148.657C208.538 149.047 208.538 149.681 208.929 150.071C209.319 150.462 209.953 150.462 210.343 150.071L216.707 143.707ZM1 144H216V142H1V144Z" fill="#2A614D"/>
//                         </svg>
//                     </div>
//                     <div className="relative ml-10" >
//                         <div className="w-96 h-16 rounded-xl border ml-4 mt-5   my-auto border-bgr2  flujo_cuadro grid place-items-center">
//                             <p className="text-bg2 font-semibold text-base">{t("how_flujo_b6")}</p>
//                         </div>
//                         <div className="w-auto h-16 rounded-xl border ml-4 mt-16  my-auto border-bgr2  flujo_cuadro grid place-items-center">
//                             <h2 className="text-bg2 w-auto px-4 font-semibold    ">{t("how_flujo_b7")}</h2>
//                         </div>
//                         <div className="w-96 h-16 rounded-xl border ml-4 mt-16  my-auto border-bgr2 flujo_cuadro grid place-items-center">
//                             <p className="text-bg2 font-semibold text-base">{t("how_flujo_b8")}</p>
//                         </div>

//                     </div>
//                     <div className="m-auto ml-4 relative">
//                         <svg width="1357" height="284" viewBox="0 0 1357 284" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M787.707 139.149C788.098 138.758 788.098 138.125 787.707 137.734L781.343 131.37C780.953 130.98 780.319 130.98 779.929 131.37C779.538 131.761 779.538 132.394 779.929 132.785L785.586 138.441L779.929 144.098C779.538 144.489 779.538 145.122 779.929 145.512C780.319 145.903 780.953 145.903 781.343 145.512L787.707 139.149ZM572 139.441H787V137.441H572V139.441Z" fill="#2A614D"/>
//                         <path d="M216.707 139.971C217.098 139.58 217.098 138.947 216.707 138.557L210.343 132.193C209.953 131.802 209.319 131.802 208.929 132.193C208.538 132.583 208.538 133.216 208.929 133.607L214.586 139.264L208.929 144.921C208.538 145.311 208.538 145.944 208.929 146.335C209.319 146.725 209.953 146.725 210.343 146.335L216.707 139.971ZM1 140.264H216V138.264H1V140.264Z" fill="#2A614D"/>
//                         <path d="M216.208 248.881C216.79 248.744 217.169 248.237 217.054 247.747L215.178 239.773C215.063 239.283 214.498 238.998 213.916 239.135C213.334 239.271 212.955 239.779 213.071 240.268L214.738 247.357L206.309 249.34C205.727 249.476 205.349 249.984 205.464 250.473C205.579 250.963 206.144 251.249 206.726 251.112L216.208 248.881ZM0.402387 140.067L215.402 248.797L216.598 247.193L1.59761 138.464L0.402387 140.067Z" fill="#2A614D"/>
//                         <path d="M0.292878 276.707C-0.0976463 276.317 -0.0976463 275.683 0.292878 275.293L6.65684 268.929C7.04736 268.538 7.68053 268.538 8.07105 268.929C8.46158 269.319 8.46158 269.953 8.07105 270.343L2.4142 276L8.07105 281.657C8.46158 282.047 8.46158 282.681 8.07105 283.071C7.68053 283.462 7.04736 283.462 6.65684 283.071L0.292878 276.707ZM216 277H0.999985V275H216V277Z" fill="#2A614D"/>
//                         <path d="M1356.71 135.029C1357.1 134.639 1357.1 134.006 1356.71 133.615L1350.34 127.251C1349.95 126.861 1349.32 126.861 1348.93 127.251C1348.54 127.642 1348.54 128.275 1348.93 128.665L1354.59 134.322L1348.93 139.979C1348.54 140.37 1348.54 141.003 1348.93 141.393C1349.32 141.784 1349.95 141.784 1350.34 141.393L1356.71 135.029ZM1141 135.322H1356V133.322H1141V135.322Z" fill="#2A614D"/>
//                         <path d="M1356.7 9.00365C1357.1 8.61408 1357.1 7.98092 1356.71 7.58945L1350.37 1.21005C1349.98 0.818583 1349.35 0.817044 1348.95 1.20662C1348.56 1.59619 1348.56 2.22935 1348.95 2.62082L1354.59 8.29139L1348.91 13.9345C1348.52 14.324 1348.51 14.9572 1348.9 15.3487C1349.29 15.7401 1349.93 15.7417 1350.32 15.3521L1356.7 9.00365ZM0.996416 5.99999L1356 9.29483L1356 7.29484L1.00358 4.00001L0.996416 5.99999Z" fill="#2A614D"/>
//                         </svg>
//                         <div className=" absolute bg-bgfva   -bottom-5 left-52 w-96 h-16 rounded-xl border ml-4 mt-5   my-auto border-bgr2  flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_b10")}</p>
//                         </div>
//                         <div className=" absolute bg-bgfva2 bottom-24 left-56 w-80 h-20 rounded-xl border ml-4 mt-5   my-auto border-bgr2  flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold p-4 text-base">{t("how_flujo_b9")} <br /> {t("how_flujo_b11")} </p>
//                         </div>
//                         <div className=" absolute bottom-24 right-56 w-80 h-20 rounded-xl border ml-4 mt-5   my-auto border-bgr2  flujo_cuadro grid place-items-center">
//                             <p className="text-bg2 font-semibold p-4 text-base">{t("how_flujo_b12")}  </p>
//                         </div>

//                     </div>
//                     <div className="relative ml-10 mr-20" >
//                         <div className="w-auto px-2 h-16 bg-bgfva2 rounded-xl border ml-4 mt-5   my-auto border-bgr2  flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_b13")}</p>
//                         </div>
//                         <div className="w-auto h-16 bg-bgfva2 rounded-xl border ml-4 mt-16  my-auto border-bgr2  flujo_cuadro grid place-items-center">
//                             <p className="text-bgr font-semibold text-base">{t("how_flujo_b13")}</p>
//                         </div>

//                     </div>
//                     <div className="relative ml-10 mr-20 " >
//                         <div className="w-1"></div>

//                     </div>
                    
//                 </div>

//             </div>
//             </div>
//             <p className="mb-10 text-bg2 m-auto max-w-2xl font-thin italic">{t("how_flujo_swip")}</p>