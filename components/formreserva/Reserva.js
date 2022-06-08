import React, { useState, Fragment } from 'react'
import { useTranslation } from "next-i18next";
import FormRes from './FormRes';


export default function Reserva() {
    const { t } = useTranslation('common');
    const ytvideo = ["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",];
    const [selected, setSelected] = useState(null);
    
    const toggle = (i) => {
        if (selected === i){
            return setSelected(null);
        }
        setSelected(i)
    }

  return (
    <div className="bg-bgr  pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl m-auto px-8">
        
            <h1 className="md:ml-10 text-4xl md:text-5xl font-bold  text-sl uppercase">{t("form_reserva_tittle")}</h1>
            <h1 className="md:ml-10 text-lg md:text-base font-semibold text-bg2  mt-5">{t("stepform2b")}</h1>
            <h1 className="md:ml-10 text-lg md:text-base font-medium text-bg2 ">{t("iva22b")}</h1>
            <h1 className="md:ml-10 text-lg md:text-base font-semibold text-bg2 mt-2 ">{t("stepform2c")}</h1>

            <div className="md:w-11/12 m-auto mb-10 text-base md:text-lg ">
                {/* <iframe className="relative mt-10 mb-10 md:mt-20 z-10 w-10/12 m-auto h-96 scale-110 border-2 border-sl rounded-lg shadow-xl" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                <p className="mb-10 text-2xl md:text-4xl  font-medium text-bg2 mt-20 ">{t("form_reserva_tittle2b")}</p>
                <p className="mb-8 leading-8 text-lg">{t("form_reserva_info1")}</p>
                <h2 className="leading-8 font-semibold text-xl text-sl mt-16 mb-5">{t("form_reserva_info1pb")}</h2>
                <p className="leading-8 text-lg">{t("form_reserva_info1b")}</p>
            </div>

            <div className=" m-auto mb-20 text-xl flex flex-col">
                <div className="w-full flex flex-col m-auto gap-5 items-center ">
                    <div className="w-3/4  m-auto h-auto relative items-end align-bottom border-l-4 pl-4 border-sl">
                        <p className="  text-base"> <span className="text-bg2 font-bold">{t("form_reserva_info1t")} </span>{t("form_reserva_info1tinfo")}</p>
                    </div>
                    <div className="w-3/4  m-auto h-auto relative items-end align-bottom border-l-4 pl-4 border-sl">
                        <p className="  text-base"> <span className="text-bg2 font-bold">{t("form_reserva_info2t")} </span>{t("form_reserva_info2tinfo")}</p>
                    </div>
                    <div className="w-3/4  m-auto h-auto relative items-end align-bottom border-l-4 pl-4 border-sl">
                        <p className="  text-base"> <span className="text-bg2 font-bold">{t("form_reserva_info3t")} </span>{t("form_reserva_info3tinfo")}</p>
                    </div>
                    <div className="w-3/4  m-auto h-auto relative items-end align-bottom border-l-4 pl-4 border-sl">
                        <p className="  text-base"> <span className="text-bg2 font-bold">{t("form_reserva_info4t")} </span>{t("form_reserva_info4tinfo")}</p>
                    </div>
                
                    
                    <div className="">
                        <div className="w-full m-auto ">
                            <h2 className="  font-base text-left text-lg italic mt-2">{t("form_reserva_quest1")} <span className="text-sl">{t("form_reserva_quest1b")}</span> {t("form_reserva_quest1c")}</h2>
                            
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full m-auto mt-24  h-auto relative text-bgr segments segment-3  ">
                    <div className="w-full h-full md:bg-gradient-to-r md:from-bgr2 md:via-bgr2 bg-opacity-10 "></div>                     
                    {/* <Image className='absolute h-full  bottom-0 '  src="/ronda-foto-300x190.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" /> */}
                    <div className="flex flex-col  relative w-full md:w-3/4 py-10 bg-gradient-to-b md:bg-gradient-to-r from-bg2 via-bg2  bg-opacity-25" >

                    <div className="w-11/12 md:w-3/4  m-auto mb-8">
                    <h2 className=" text-sl font-semibold text-left text-4xl pt-5  md:px-0  ">{t("form_reserva_tit4tit")}</h2>
                    <p className="  font-normal text-left leading-8 text-lg pt-5  md:px-0">{t("form_reserva_tit4cont")} </p>
                    <p className="  font-normal text-left leading-8 text-lg pt-5  md:px-0">{t("form_reserva_tit4cont2")}</p>
                    <p className="  font-normal text-left leading-8 text-lg pt-5 mb-10 md:px-0">{t("form_reserva_tit4cont3")}</p>
                    {/*
                    <h2 className=" text-sl font-semibold text-left text-xl pt-5  md:px-0  ">{t("form_reserva_tit4_2")}</h2>
                     <div className="item2 m-auto w-8/12">
                        <div className="title  " onClick={ () => toggle(1)}>
                            <h2 className=" font-semibold text-bgr">{t("form_igp_tit4q1")}</h2>
                            <span className=" text-bgr font-normal">{selected === 1 ? "-" : "+"}</span>
                        </div>
                        <div className=" border-l-2 border-sl pl-2 ">
                            <h2 className={selected === 1 ? "content show" : "content"} > {t("form_igp_tit4q1answ")} </h2>
                        </div>
                    </div>
                    <div className="item2  m-auto w-8/12">
                        <div className="title  " onClick={ () => toggle(2)}>
                            <h2 className=" font-semibold text-bgr">{t("form_igp_tit4q2")}</h2>
                            <span className=" text-bgr font-normal">{selected === 2 ? "-" : "+"}</span>
                        </div>
                        <div className=" border-l-2 border-sl pl-2 ">
                            <h2 className={selected === 2 ? "content show" : "content"} > {t("form_igp_tit4q2answ")} </h2>
                        </div>
                    </div>
                    <div className="item2  m-auto w-8/12">
                        <div className="title  " onClick={ () => toggle(3)}>
                            <h2 className=" font-semibold text-bgr">{t("form_igp_tit4q3")}</h2>
                            <span className=" text-bgr font-normal">{selected === 3 ? "-" : "+"}</span>
                        </div>
                        <div className=" border-l-2 border-sl pl-2 ">
                            <h2 className={selected === 3 ? "content show" : "content"} > {t("form_igp_tit4q3answ")} </h2>
                        </div>
                    </div>
                    <div className="item2  m-auto w-8/12">
                        <div className="title  " onClick={ () => toggle(4)}>
                            <h2 className=" font-semibold text-bgr">{t("form_igp_tit4q4")}</h2>
                            <span className=" text-bgr font-normal">{selected === 4 ? "-" : "+"}</span>
                        </div>
                        <div className=" border-l-2 border-sl pl-2 ">
                            <h2 className={selected === 4 ? "content show" : "content"} > {t("form_igp_tit4q4answ")} </h2>
                        </div>
                    </div>
                    <div className="item2  m-auto w-8/12 border-b border-bgr">
                        <div className="title  " onClick={ () => toggle(5)}>
                            <h2 className=" font-semibold text-bgr">{t("form_igp_tit4q5")}</h2>
                            <span className=" text-bgr font-normal">{selected === 5 ? "-" : "+"}</span>
                        </div>
                        <div className=" border-l-2 border-sl pl-2 ">
                            <h2 className={selected === 5 ? "content show" : "content"} > {t("form_igp_tit4q5answ")} </h2>
                        </div>
                    </div> */}
                
                </div>
                        
                    </div>
                    
            </div>

            <div className=" mt-16 mx-auto ">
                <h2 className="mb-10 text-4xl text-bg2 font-medium ">{t("form_reserva_quest3")}</h2>
                <p className="mb-10 leading-8 text-lg  font-normal ">{t("form_reserva_quest4")} :</p>
                
                <FormRes />


                
            </div>
        </div>
            
    </div>
  )
}
