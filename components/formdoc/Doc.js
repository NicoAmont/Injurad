import React, { useState, Fragment, useEffect, useRef } from 'react'
import { useTranslation } from "next-i18next";
import Image from "next/image"
import { Menu, Transition } from '@headlessui/react'
import FormDoc from './FormDoc';

export default function Doc() {
    const { t } = useTranslation('common');
    const ytvideo = ["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]
    
    const [selected, setSelected] = useState(null);
    
    const toggle = (i) => {
        if (selected === i){
            return setSelected(null);
        }
        setSelected(i)
    }

  return (
    <div className="bg-bgr  pt-20 md:pt-40 pb-20">
        <div className="max-w-6xl m-auto px-8 mb-10 ">
        
            <h1 className="md:ml-10 text-4xl md:text-5xl font-bold text-sl uppercase">{t("form_doc_tittle")}</h1>
            <h1 className="md:ml-10 text-lg md:text-base font-semibold text-bg2 mt-5 ">{t("stepform1b")}</h1>
            <h1 className="md:ml-10 text-sm md:text-sm font-medium text-bg2 mb-2">{t("iva1b")}</h1>
            <h1 className="md:ml-10 text-lg md:text-base font-semibold text-bg2 ">{t("stepform1b2")}</h1>
            <h1 className="md:ml-10 text-sm md:text-sm font-medium text-bg2 mb-2">{t("iva2b")}</h1>
            <h1 className="md:ml-10 text-lg md:text-base font-semibold text-bg2 ">{t("stepform1c")}</h1>

            <div className="w-full md:w-3/4 m-auto mb-20 text-base md:text-base ">
                {/* <iframe className="relative mt-10 mb-10 md:mt-20 z-10 w-10/12 m-auto h-96 scale-110 border-2 border-sl rounded-lg shadow-xl" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                <p className="mb-10 text-2xl md:text-3xl uppercase font-medium text-bg2 mt-20">{t("form_doc_info1")}</p>
                <p className="leading-8 text-lg">{t("form_doc_info2")}</p>
                <p className="leading-8 text-lg mt-5">{t("form_doc_info2b")}</p>
            </div>

            <div className="w-full m-auto mb-20 text-xl">
                <div className="w-full flex flex-wrap m-auto gap-10 items-center justify-center">
                    <div className="w-8/12 h-auto sm:h- bg-gl relative items-end align-bottom rounded-2xl shadow-2xl px-10 pb-4">
                        <svg className="opacity-30 w-10 absolute  bottom-2 right-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                        </svg>
                        <h1 className=" text-sl text-left text-2xl pt-5 font-normal m-auto ml-2 border-b-2 pb-2  border-sl ">{t("form_igp_infot2")}</h1>
                        <p className=" text-bgr font-normal text-left text-base pt-5 ml-2 m-auto mb-6 ">{t("form_igp_infot2P")}</p>
                        <p className=" text-bgr font-normal text-left text-base pt-5 ml-2 m-auto mb-6 ">{t("form_igp_infot2Pb")}</p>
                    
                    
                    
                    </div>
                        
                        <div className="item  m-auto w-8/12">
                            <div className="title  " onClick={ () => toggle(1)}>
                                <h2 className=" font-semibold text-bg2">{t("form_doc_q1")}</h2>
                                <span className=" text-bg2 font-normal">{selected === 1 ? "-" : "+"}</span>
                            </div>
                            <div className=" border-l-2 border-sl pl-2 ">
                                <h2 className={selected === 1 ? "content show" : "content"} ><span className="font-medium">{t("form_doc_a11")}</span> {t("form_doc_a12")} </h2>
                            </div>
                        </div>
                        <div className="item  m-auto w-8/12">
                            <div className="title  " onClick={ () => toggle(2)}>
                                <h2 className=" font-semibold text-bg2">{t("form_doc_q2")}</h2>
                                <span className=" text-bg2 font-normal">{selected === 2 ? "-" : "+"}</span>
                            </div>
                            <div className=" border-l-2 border-sl pl-2 ">
                                <h2 className={selected === 2 ? "content show" : "content"} >{t("form_doc_a21")}</h2>
                                <h2 className={selected === 2 ? "content show" : "content"} >{t("form_doc_a22")}</h2>
                            </div>
                        </div>
                    {/* <div className="w-96 h-auto sm:h-80 bg-gl relative items-end align-bottom rounded-2xl shadow-2xl px-4 pb-6">
                        <svg className="opacity-30 w-10 absolute  bottom-2 right-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                        </svg>
                        <h1 className=" text-sl text-left text-2xl pt-5 font-normal m-auto ml-2 border-b-2 pb-2 border-sl ">{t("form_igp_infot3")}</h1>
                        <p className=" text-bgr font-normal text-left text-base pt-5 ml-2 m-auto mb-6 ">{t("form_igp_infot3P")}</p>
                    </div> */}
                    
                    
                </div>
            </div>


            <div className="w-full md:w-3/4 m-auto mb-16 text-xl flex flex-col">
                
                    
                


                   
                </div>
            </div>

            <div className="max-w-3xl mx-auto relative w-3/4">
                {/* <div className="flex flex-col md:flex-row w-auto max-w-6xl m-auto h-auto mb-20  rounded-xl p-5 bg-bgrS text-bgf shadow-xl mt-20">
                    <div className=" max-w- flex flex-col md:flex-row m-auto ">
                        <div className="h-auto w-20 md:mb-0 md:w-80 md:pb-2 md:pl-10 m-auto flex ">
                            <Image className=" m-auto"  src="/shield.png" layout='' width={136+'px'} height={136+'px'} alt="" quality={100} />
                        </div>
                        <div className="text-lg font-light text-center flex-col m-auto">
                            <h1 className="text-2xl font-bold mb-4">{t("work_zone_garantie_tittle")}</h1>
                            
                        </div>
                        
                    </div>
                    
                </div> */}
                <h2 className="mb-10 text-3xl text-bg2 font-medium ">{t("form_doc_btbl")}</h2>
                <p className="mb-10  font-normal leading-8 text-lg ">{t("form_doc_btbl2")} :</p>

                <FormDoc/>
                
            </div>
        </div>
            
   
  )
}
