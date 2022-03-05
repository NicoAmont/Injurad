import {useRouter} from "next/router"
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Image from "next/image"



function VideoSection() {
    const { t } = useTranslation('common');
        
    const ytvideo = ["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]
    return (
        <div className=" m-auto bg-bgr font-heads relative  ">

            <svg className="hidden lg:flex absolute -top-12 -left-5 scale-90" width="193" height="935" viewBox="0 0 263 835" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M254.905 413.738L0.731041 826.607L0.72636 0.87226L254.905 413.738Z" fill="#2A614D"/>
            </svg>

            <svg className="hidden lg:flex absolute -top-12 -right-5 rotate-180 scale-90" width="193" height="935" viewBox="0 0 263 835" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M254.905 413.738L0.731041 826.607L0.72636 0.87226L254.905 413.738Z" fill="#2A614D"/>
            </svg>

            <div className="grid grid-cols-1 w-full max-w-6xl m-auto place-items-center gap-20">
                
                
            <div className="flex flex-col text-center justify-center m-auto w-3/4 max-w-7xl py-20 px-4 relative h-full">

                <svg className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0 scale-150" width="415" height="400" viewBox="0 0 415 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                    <path d="M378.382 128.168L144.879 399.374L16.4392 215.391L144.879 312.588L378.382 128.168Z" fill="#3F8466" fillOpacity="0.2"/>
                    <path d="M378.382 128.168L144.879 399.374L16.4392 215.391L144.879 312.588L378.382 128.168Z" fill="#3F8466" fillOpacity="0.2"/>
                    <path d="M230.031 215.099L341.115 121.372L105.061 121.372L27.7719 208.157L115.475 138.73L230.031 215.099Z" fill="#3F8466" fillOpacity="0.2"/>
                    <path d="M230.031 215.099L341.115 121.372L105.061 121.372L27.7719 208.157L115.475 138.73L230.031 215.099Z" fill="#3F8466" fillOpacity="0.2"/>
                    </g>
                </svg>

                <h1 className="text-4xl text-bg2 sm:text-5xl  font-bold mb-10">{t('reason_tittle')} <span className="text-sl">{t('reason_tittlebold')}</span> </h1>
                
                <div className="grid md:grid-cols-2 place-items-center m-auto gap-20 md:px-4">
                    <div className="flex flex-col md:flex-row align-text-top w-full h-full">
                        <h1 className="text-5xl md:text-5xl font-bold text-sl text-left mr-4">1</h1>
                        <div className=" flex-col ">
                            <p className="w-80 text-lg text-left">{t('reason_1a')} <span className="text-bg2 font-bold ">{t('reason_1b')}</span> <span>{t('reason_1c')}</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row align-text-top w-full h-full">
                        <h1 className="text-5xl md:text-5xl font-bold text-sl text-left mr-4">2</h1>
                        <div className=" flex-col ">
                            <p className="w-80 text-lg text-left">{t('reason_2a')} <span className="text-bg2 font-bold "> {t('reason_2b')}</span><span>{t('reason_2c')}</span></p>
                        </div>
                    </div>
                    
                </div>
                <div className="w-full md:w-full pt-5" >
                    <div className=" px-4  text-left mb-4">
                        <h1 className="font-bold  text-3xl md:text-3xl md:ml-40  text-bg2  mb-10  ">{t('info_title')} </h1>
                        <p className="mb-2 md:w-3/5 m-auto text-justify text-lg">{t('info_pa')}</p>
                        <p className="mb-5 md:w-3/5 m-auto text-justify  text-lg">{t('info_pd')}</p>
                        
                    </div>
                </div>
                <div className="w-3/4 m-auto pr-8 mb-24 ">
                    <div className="w-full max-w-lg  m-auto bg-white rounded-2xl relative z-10">
                       
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full border border-bg2 hover:bg-bg2 px-4 py-2 text-lg font-normal text-bgf  text-left hover:text-bgr bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <div>
                                    <span>{t("reason_question1")}</span>
                                </div>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-8 h-6 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-left text-bg2 font-normal">
                                <div className="w-full bg-bgr2 p-4">
                                    <p className="mb-2">{t("reason_qansw1a")}</p>
                                    <p className="mb-2">{t("reason_qansw1b")}</p>
                                    <p>{t("reason_qansw1c")}</p>
                                </div>
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        
                        <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full border border-bg2 hover:bg-bg2 px-4 py-2 text-lg font-normal text-bgf  text-left hover:text-bgr bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>{t("reason_question2")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-left text-bg2">
                                <div className="w-full bg-bgr2 p-4">
                                    <div className="flex flex-row ">
                                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-40 sm:w-full mb-2">{t("reason_qansw2a")}</p>
                                    </div>

                                    <div className="flex flex-row ">
                                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-40 sm:w-full mb-2">{t("reason_qansw2b")}</p>
                                    </div>
                                    
                                    <div className="flex flex-row ">
                                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className=" w-40 sm:w-full mb-2">{t("reason_qansw2c")}</p>
                                    </div>

                                    <div className="flex flex-row ">
                                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-40 sm:w-full mb-2">{t("reason_qansw2d")}</p>
                                    </div>
                                    <div className="flex flex-row ">
                                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-40 sm:w-full mb-2">{t("reason_qansw2e")}</p>
                                    </div>
                                    <div className="flex flex-row ">
                                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-40 sm:w-full">{t("reason_qansw1c")}</p>
                                    </div>
                                    
                                    
                                    
                                    
                                </div>
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        
                        <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full border border-bg2 hover:bg-bg2 px-4 py-2 text-lg font-normal text-bgf  text-left hover:text-bgr bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>{t("reason_question3")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-left text-bg2">
                                <div className="w-full bg-bgr2 p-4">
                                    <div className="flex flex-row ">
                                        <p className=" mb-2">{t("reason_qansw3a")}</p>
                                    </div>

                                    <div className="flex flex-row ml-2 ">
                                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-40 sm:w-full mb-2">{t("reason_qansw3b")}</p>
                                    </div>
                                    
                                    <div className="flex flex-row ml-2 ">
                                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className=" w-40 sm:w-full mb-2">{t("reason_qansw3c")}</p>
                                    </div>

                                    <d className="flex flex-row ml-2 ">
                                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                                        </svg>
                                        <p className="w-40 sm:w-full mb-2">{t("reason_qansw3d")}</p>
                                    </d>
                                    
                                    
                                    
                                    
                                </div>
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                    </div>
                </div>
                    
            </div>
                
            </div>            
            <div className="w-full m-auto mt-24  h-auto relative text-bgr ">
                <div className="w-full h-full md:bg-gradient-to-r md:from-bgr2 md:via-bgr2 bg-opacity-10 "></div>                     
                <Image className='absolute h-full  bottom-0 '  src="/ronda-foto-300x190.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" />
                <div className="flex flex-col  relative w-full md:w-2/4 py-20 bg-gradient-to-b md:bg-gradient-to-r from-bg2 via-bg2  bg-opacity-25" >
                    <div className="max-w-6xl text-center md:text-left md:ml-40">
                    <h1 className=" font-semibold text-4xl md:text-6xl  max-w-sm">
                        {t("announce")}
                    </h1>
                    <button className="border border-bgr m-auto  text-bgr font-medium w-48 py-2 flex items-center justify-center mt-16 hover:bg-bg2 transition-all duration-150">
                    Conoce más
                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                    </svg>
                </button>
                    </div>
                    
                </div>
                
            </div>

            
                
                
            

            
            
        </div>
    )
}

export default VideoSection






