import Image from "next/image"
import { useTranslation } from "next-i18next";
import React, {Fragment, useState } from 'react'
import { Popover } from '@headlessui/react'

function InfoSection() {
    const { t } = useTranslation('common');
    
    return (
        <div>
            <div>
                    <Popover className="relative z-50">
            <Popover.Button>Solutions</Popover.Button>

            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-2">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
                </div>

                
            </Popover.Panel>
            </Popover>
            </div>

            <div className="flex flex-col w-full h-full bg-bg2 text-bgr font-heads m-auto pb-10  relative ">
            
            <div className="w-full m-auto  h-auto relative z-0 text-bgr segment-2  ">
                    <div className="w-full h-full md:bg-gradient-to-r md:from-bgr2 md:via-bgr2 bg-opacity-10 "></div>                     
                    {/* <Image className='absolute h-full  bottom-0 '  src="/ronda-foto-300x190.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" /> */}
                    <div className="flex flex-col  relative w-full md:w-2/4 py-20 bg-gradient-to-b md:bg-gradient-to-r from-bg2 via-bg2  bg-opacity-25" >
                        <div className="max-w-6xl  text-center items-center align-middle md:text-left  md:ml-40">
                            <h1 className=" font-semibold text-4xl md:text-5xl mb-10 max-w-sm m-auto md:ml-0 md:mb-5">
                                {t("announce")}
                            </h1>
                            <button className=" bg-sl m-auto md:m-0  text-bgr font-medium w-48 py-2 flex items-center justify-center mt-20 hover:bg-bg2 hover:border hover:border-sl transition-all duration-150">
                                {t("more2")}
                                <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                        
                    </div>
                    
                </div>
                    <svg className=" absolute -top-96 scale-125 left-0  z-0 w-full opacity-5" viewBox="0 0 1573 1517" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                        <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                        <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                        <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                    </svg>
                
                

                {/* <div className="m-auto  px-4 lg:pt-20  relative z-20 max-w-7xl">
                    
                            
                    <div className="grid place-items-center md:grid-cols-2 md:place-items-center m-auto">
                        
                        
                        <div className=" md:ml-2 font-light w-4/5 pt-10">
                            <div className="grid w-full mb-14 m-auto">
                                <h1 className=" text-4xl md:text-4xl  font-bold">{t('pdisection_title')}</h1>
                                <h1 className=" text-4xl md:text-4xl  text-sl font-bold">{t('pdisection_titleb')}</h1>
                                <h1 className=" text-4xl md:text-4xl  text-bgr font-bold">{t('pdisection_titlec')}</h1>
                            </div>
                            <p className="mt-10 text-left max-w-lg  md:pr-0  font-light  leading-8 text-lg "> {t('pdisection_p')}</p>
                            <p className="mt-2 text-left max-w-lg  md:pr-0  font-light  leading-8 text-lg  "> {t('pdisection_p22')}</p>
                            
                            <div className="w-full  pt-16">
                            </div>

                        </div> 
                        
                        <div className=" w-3/4  grid gap-4 lg:w-96 mx-auto bg-white rounded-2xl ">
                            <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                    <span className="text-normal font-normal text-bgf  ">{t("contidion1_tittle")}</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-bgf`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className=" m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
                                    <div className="flex m-auto w-full">
                                        <p className="mb-4 text-sm">  {t("contidion1")}</p>
                                    </div>
                                    
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                    <span className="text-normal font-normal text-bgf  ">{t("contidion2_tittle")}</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-bgf`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
                                    <div className="flex m-auto w-full">
                                        <p className="mb-4 text-sm">  {t("contidion2")}</p>
                                    </div>
                                    
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                    <span className="text-normal font-normal text-bgf  ">{t("contidion3_tittle")}</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-bgf`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className=" m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
                                    <div className="flex m-auto w-full ">
                                        <p className="mb-4 text-sm">  {t("contidion3")}</p>
                                    </div>
                                    
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            
                            
                            <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                    <span className="text-normal font-normal text-bgf  ">{t("contidion4_tittle")}</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-bgf`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
                                    <div className="flex m-auto w-full ">
                                        <p className="mb-4 text-sm">  {t("contidion4")}</p>
                                    </div>
                                    
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                    <span className="text-normal font-normal text-bgf  ">{t("contidion5_tittle")}</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-bgf`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
                                    <div className="flex m-auto w-full ">
                                        <p className="mb-4 text-sm">  {t("contidion5")}</p>
                                    </div>
                                    
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            
                            
                            <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                    <span className="text-normal font-normal text-bgf  ">{t("contidion6_tittle")}</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-bgf`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
                                    <div className="flex m-auto w-full ">
                                        <p className="mb-4 text-sm">  {t("contidion6")}</p>
                                    </div>
                                    
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                    </div>
                    </div>
                    
                    
                </div> */}

                
                <div className="flex flex-col md:flex-row w-3/4 max-w-4xl m-auto h-auto mb-10  rounded-xl p-5 bg-bgrS text-bgf shadow-xl z-30 relative bottom-5">
                    <div className=" max-w-4xl flex flex-col md:flex-row m-auto ">
                        <div className="h-auto w-20 md:mb-0 md:w-80 md:pb-7 md:pl-10 m-auto flex ">
                            <Image className=" m-auto"  src="/shield.png" layout='' width={136+'px'} height={136+'px'} alt="" quality={100} />
                        </div>
                        <div className="text-lg font-light text-left flex-col m-auto">
                            <h1 className="text-3xl font-bold mb-4  ml-10 mt-4 sm:ml-20">{t("work_zone_garantie_tittle")}</h1>
                            <p className="text-sm text-left w-3/4 m-auto mb-2 ">{t("work_zone_garantie_info1")}</p>
                            <p className="text-sm text-left w-3/4 m-auto">{t("work_zone_garantie_info2")}</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>

    )
}


export default InfoSection
