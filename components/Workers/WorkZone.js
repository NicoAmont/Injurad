import React, { useState, Fragment } from 'react'
import { useTranslation } from "next-i18next";
import Image from "next/image"
import { Tab } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function WorkZone() {
    const { t } = useTranslation('common');

  return (
    <div className="flex flex-col w-full h-full bg-bgr text-bg2 font-heads m-auto pb-10  relative">
        
        <div className="m-auto w-screen pt-20 lg:pt-40  relative z-20 ">
            
            <div className="grid  md:grid-cols-2  m-auto max-w-6xl relative w-11/12">
                
                
                <div className=" md:ml-2 font-light  relative z-10 w-3/4 md:w-full m-auto ">
                    <div className="grid w-full mb-14 place-items-start ">
                        <h1 className="uppercase text-2xl md:text-5xl  font-bold">{t('work_zone_tittle')}</h1>
                        <h1 className="uppercase text-left text-4xl md:text-5xl  text-sl font-bold">{t('work_zone_tittle2')}</h1>
                    </div>
                    <div className="rounded-lg lg:rounded-full bg-bgrS mt-20 flex flex-col md:flex-row mb-10 py-2 m-auto md:px-2 hover:scale-105 shadow-lg">
                            <div className=" w-40 md:w-80 m-auto grid  md:mr-4 mb-4 md:mb-0">
                            <Image className=""  src="/menwork.png" layout='responsive' width={400+'px'} height={400+'px'} alt="" quality={100} />
                            </div>
                            <div className="flex-col pl-4 m-auto text-center">
                                <h1 className="font-medium text-base">{t("work_zone_testi")} </h1>
                                <h1 className="font-normal text-sm mt-2">{t("work_zone_quote1")} </h1>
                                <h1 className="font-normal text-sm">{t("work_zone_quote2")} </h1>
                            </div>
                        </div>
                    

                </div> 

                <div className="w-3/4 md:w-full m-auto h-auto  md:block mt-10 sm:relative z-0">
                    <Image className=""  src="/workgr.png" layout='responsive' width={624+'px'} height={552+'px'} alt="" quality={100} />
                </div>

            </div>

            <div className=" w-3/4 px-2 sm:px-0 text-bgr m-auto md:pb-20">
                <Tab.Group>
                    
                    <Tab.List className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full  relative uppercase ">
                        <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                            className={
                                selected ? 'bg-bg2 md:rounded-t-md  w-auto md:w-auto shadow-xl scale-105 py-2.5 text-sm leading-5 font-medium text-sl flex h-auto  ' : 'bg-bg2 h-auto opacity-70 rounded-t-lg w-auto sm:w-auto py-2.5 focus:outline-none focus:ring-2 ring-offset-2 text-bgr flex'
                            }
                            >
                            <div className="grid place-items-center w-full h-full m-auto md:px-4 pb-4   ">
                                <div className=" w-10 md:w-40 m-auto hidden lg:grid   mb-4 md:mb-0">
                                    <Image className=""  src="/w1.png" layout='responsive' width={170+'px'} height={170+'px'} alt="" quality={100} />
                                </div>                            
                                <h1 className="text-sm md:text-lg mt-4 font-semibold relative z-10 uppercase w-1/2">{t("work_zone_1")}</h1> 
                            </div>
                            
                            </button>
                        )}
                        </Tab>
                        {/* ...  */}
                        <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                            className={
                                selected ? 'bg-bg2 md:rounded-t-md  w-auto md:w-auto  shadow-xl scale-105  py-2.5 text-sm leading-5 font-medium text-sl flex h-auto  ' : 'bg-bg2 h-auto opacity-70 md:rounded-t-lg w-auto sm:w-auto py-2.5 focus:outline-none focus:ring-2 ring-offset-2 text-bgr flex'
                            }
                            >
                            <div className="grid place-items-center w-full h-full m-auto md:px-4 pb-4   ">
                                <div className=" w-10 md:w-40 m-auto hidden lg:grid   mb-4 md:mb-0">
                                    <Image className=""  src="/w2.png" layout='responsive' width={170+'px'} height={170+'px'} alt="" quality={100} />
                                </div>                            
                                <h1 className="text-sm md:text-lg mt-4 font-semibold relative z-10 uppercase w-3/4">{t("work_zone_2")}</h1> 
                            </div>
                            
                            </button>
                        )}
                        </Tab>
                        {/* ...  */}
                        <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                            className={
                                selected ? 'bg-bg2 md:rounded-t-md  w-auto md:w-auto  shadow-xl scale-105  py-2.5 text-sm leading-5 font-medium text-sl flex h-auto  ' : 'bg-bg2 h-auto opacity-70 md:rounded-t-lg w-auto sm:w-auto py-2.5 focus:outline-none focus:ring-2 ring-offset-2 text-bgr flex'
                            }
                            >
                            <div className="grid place-items-center w-full h-full m-auto md:px-4 pb-4   ">
                                <div className=" w-10 md:w-40 m-auto hidden lg:grid   mb-4 md:mb-0">
                                    <Image className=""  src="/w3.png" layout='responsive' width={170+'px'} height={170+'px'} alt="" quality={100} />
                                </div>                            
                                <h1 className="text-sm md:text-lg mt-4 font-semibold relative z-10 uppercase w-3/4">{t("work_zone_3")}</h1> 
                            </div>
                            
                            </button>
                        )}
                        </Tab>
                        {/* ...  */}
                        <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                            className={
                                selected ? 'bg-bg2 md:rounded-t-md  w-auto md:w-auto  shadow-xl scale-105  py-2.5 text-sm leading-5 font-medium text-sl flex h-auto  ' : 'bg-bg2 h-auto opacity-70 md:rounded-t-lg w-auto sm:w-auto py-2.5 focus:outline-none focus:ring-2 ring-offset-2 text-bgr flex'
                            }
                            >
                            <div className="grid place-items-center w-full h-full m-auto md:px-4 pb-4   ">
                                <div className=" w-10 md:w-40 m-auto  hidden lg:grid   mb-4 md:mb-0">
                                    <Image className=""  src="/w4.png" layout='responsive' width={170+'px'} height={170+'px'} alt="" quality={100} />
                                </div>                            
                                <h1 className="text-sm md:text-lg mt-4 font-semibold relative z-10 uppercase ">{t("work_zone_4")}</h1> 
                            </div>
                            
                            </button>
                        )}
                        </Tab>
                    </Tab.List>
                    {/*  */}
                    <Tab.Panels className=" h-auto  p-8 md:p-16 w-10/12 m-auto bg-bg2 rounded-b-lg  shadow-2xl flex flex-col relative overflow-hidden">
                        <svg className="opacity-40 w-10 md:w-10 absolute bottom-20 md:bottom-10 left-5 md:left-10"  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                        </svg>
                        <svg className="opacity-5 w-96 md:w-3/4 absolute  -bottom-28 -right-40 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                        </svg>
                        <Tab.Panel>
                            <div className="grid md:grid-cols-2 h-64 place-items-center ">
                                <h1 className="md:w-96 text-xl md:text-4xl font-bold text-bgr m-auto flex flex-wrap ">{t('work_zone_equip1')} <span className="text-sl mr-2"> {t('work_zone_equip2')}</span> <span className=" text-bgr"> {t('work_zone_equip3')}</span> <span className=" text-sl">{t('work_zone_equip4')}</span></h1>
                            </div>
                        </Tab.Panel>
                        {/* ... */}
                        <Tab.Panel>
                            <div className="grid md:grid-cols-2 h-64 place-items-center ">
                                <h1 className="md:w-96 text-xl md:text-4xl font-bold text-bgr m-auto flex flex-wrap ">{t('work_zone_equip1')} <span className="text-sl mr-2"> {t('work_zone_equip2')}</span> <span className=" text-bgr"> {t('work_zone_equip3')}</span> <span className=" text-sl">{t('work_zone_equip4')}</span></h1>
                                <p className="text-base md:text-lg font-normal text-bgr m-auto flex flex-wrap ">{t("work_zone_equipquote")}</p>
                            </div>
                        </Tab.Panel>
                        {/* ... */}
                        <Tab.Panel>
                            <div className="grid md:grid-cols-2 h-64 place-items-center ">
                                <h1 className="md:w-96 text-xl md:text-4xl font-bold text-bgr m-auto flex flex-wrap ">{t('work_zone_equip1')} <span className="text-sl mr-2"> {t('work_zone_equip2')}</span> <span className=" text-bgr"> {t('work_zone_equip3')}</span> <span className=" text-sl">{t('work_zone_equip4')}</span></h1>
                                <p className="text-base md:text-lg font-normal text-bgr m-auto flex flex-wrap ">{t("work_zone_equipquote")}</p>
                            </div>
                        </Tab.Panel>
                        {/* ... */}
                        <Tab.Panel>
                            <div className="grid md:grid-cols-2 h-64 place-items-center ">
                                <h1 className="md:w-96 text-xl md:text-4xl font-bold text-bgr m-auto flex flex-wrap ">{t('work_zone_equip1')} <span className="text-sl mr-2"> {t('work_zone_equip2')}</span> <span className=" text-bgr"> {t('work_zone_equip3')}</span> <span className=" text-sl">{t('work_zone_equip4')}</span></h1>
                                <p className="text-base md:text-lg font-normal text-bgr m-auto flex flex-wrap ">{t("work_zone_equipquote")}</p>
                            </div>
                        </Tab.Panel>
                        
                    </Tab.Panels>
                </Tab.Group>

            </div>
            
            <button className="m-auto bg-bg2 text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-sl transition-all duration-150 relative z-10 ">
                    Conocenos
                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                    </svg>
                </button>
        </div>

       
    </div>
        
  )
}

export default WorkZone