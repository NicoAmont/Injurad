import React, { useState, Fragment } from 'react'
import { useTranslation } from "next-i18next";
import Image from "next/image"
import MediaPlayerAbout from './MediaPlayerAbout';


export default function Aboutus() {     
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
    <div className="bg-bgr  pt-32 md:pt-40 pb-20 w-full">
    <div className="w-96 h-96 fixed bottom-0 left-44 sm:right-0  z-50 ">
                <div className="w-96 h-20  absolute bottom-10 right-40 shadow-2xl  ">
                <div className="rounded-xl shadow-lg pt-10  pb-5 mb-10 h-18 group container relative  bg-bgr  max-w-sm flex justify-center items-center  mx-auto content-about4 z-10">
                    <div className="absolute top-2 px-6 ">
                    <span className="block text-xl  text-bgr w-full font-semibold tracking-wide">Nuestra historia</span>
                    </div>
                <MediaPlayerAbout className="" /> 
                </div>
            </div>
            </div>
        <div className="max-w-6xl m-auto px-8">
            <h1 className="md:ml-10 text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">{t("About_tittle1")}</h1>
            <div className="md:w-3/4 m-auto mb-10 text-base md:text-lg ">
                <p className="leading-8 text-lg">{t("About_tittle1_info")}</p>
            </div>
            <div className="overflow-scroll md:overflow-auto mt-10">
            <div className="flex sejue gap-5 m-auto">
                
                <div className="shadow-lg mb-10 h-96 group container relative  bg-bgr  max-w-sm flex justify-center items-center  mx-auto content-about3 z-10">
                    <div className="absolute bottom-0 px-6 ">
                    <span className="block text-xl  text-bgr w-full font-semibold tracking-wide  mb-8">{t("About_foto1")}</span>
                    </div>
                </div>

                <div className="shadow-lg mb-10 h-96 group container relative  bg-bgr  max-w-sm flex justify-center items-center  mx-auto content-about1 z-10">
                    <div className="absolute bottom-0 px-6 ">
                    <span className="block text-xl  text-bgr w-full font-semibold tracking-wide  mb-8">Luz y Ralph</span>
                    </div>
                </div>
                

                <div className="shadow-lg mb-10 h-96 group container relative  bg-bgr  max-w-sm flex justify-center items-center  mx-auto content-about2 z-10">
                    <div className="absolute bottom-0 px-6 ">
                    <span className="block text-xl  text-bgr w-full font-semibold tracking-wide  mb-8">Juan Navarro</span>
                    </div>
                </div>
            </div>
            </div>
            <div className="md:w-3/4 m-auto mb-20 text-base md:text-lg ">
                <p className="leading-8 text-lg">Ralph en Luz hebben de gevolgen van misleiding aan den lijve ondervonden. Nu zetten zij zich in voor preventie, zodat de Spaanse droom van anderen gerealiseerd kan worden. Luister naar hun verhaal.</p>
                <p className="leading-8 text-lg">Juan Navarro is advocaat en medeoprichter van Injurad. Hij zorgt ervoor dat Injurad koers houdt voor wat betreft kennis en ethiek van de professionals die namens kopers checks en keuringen uitvoeren.</p>
                
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
                <p className="leading-8 text-lg">{t("About_tittle2_info")}</p>
            </div>
            <div className="w-3/4 md:w-10/12 md:m-auto h-auto grid md:grid-cols-2 mb-20 place-content-center ">

                <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-wrap md:flex-col  mb-5 py-4  md:px-10  ">
                    <div className="w-10  mr-4">
                    <Image className=""  src="/4n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                    </div>
                    <div className="flex  flex-col w-64 md:w-96">
                        <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info2")}</h1>
                        <h1 className="font-normal leading-8 text-lg">{t("About_tittle2_info2_1")}</h1>
                    </div>
                    
                </div>
                <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-col  mb-5 py-4  md:px-10  ">
                    <div className="w-10  mr-4">
                    <Image className=""  src="/4n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                    </div>
                    <div className="flex  flex-col w-64 md:w-96">
                        <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info3")}</h1>
                        <h1 className="font-normal leading-8 text-lg">{t("About_tittle2_info3_1")}</h1>
                    </div>
                    
                </div>
                
                <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-col  mb-5 py-4  md:px-10  ">
                    <div className="w-10  mr-4">
                    <Image className=""  src="/evn.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                    </div>
                    <div className="flex flex-col w-64 md:w-96">
                        <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info4")}</h1>
                        <h1 className="font-normal leading-8 text-lg">{t("About_tittle2_info4_1")}</h1>
                    </div>
                    
                </div>

                

                <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-wrap md:flex-col mb-5 py-4  md:px-10  ">
                    <div className="w-10 mr-4">
                    <Image className=""  src="/brain.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                    </div>
                    <div className="flex flex-col w-64 md:w-96">
                        <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info5")}</h1>   
                        <h1 className="font-normal leading-8 text-lg">{t("About_tittle2_info5_1")}</h1>
                    </div>
                    
                </div>
                <div className=" rounded-lg h-auto w-auto md:w-3/4 flex flex-col  mb-5 py-4  md:px-10  ">
                    <div className="w-10  mr-4">
                    <Image className=""  src="/en.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                    </div>
                    <div className="flex flex-col  w-64 md:w-96 ">
                        <h1 className="font-medium text-2xl mb-2 text-bg2">{t("About_tittle2_info1")}</h1>
                        <h1 className="font-normal leading-8 text-lg">{t("About_tittle2_info1_1")}</h1>
                    </div>
                </div>
                
                
            </div>
            <h1 className=" text-4xl md:text-4xl font-bold mt-5 mb-10 text-bg2 uppercase">{t("About_tittle4")}</h1>

                <p className=" text-base">{t("About_tittle4_info")}</p>

                <div className="w-full max-w-4xl m-auto h-full grid md:grid-cols-2 place-items-center mt-10">

                    <div className="shadow-lg mb-10 h-96 group container relative rounded-md bg-bgr  max-w-sm flex justify-center items-center  mx-auto content-div">
                        <div className="absolute  px-6 ">
                            <span className="block text-xl  text-bgr w-full font-bold tracking-wide  mb-8">{t("About_tittle4_tittle2")}</span>
                            <span className="text-base w-3/4 m-auto font-normal text-bgr tracking-wider  ">{t("About_tittle4_tittle2_info")}</span> 
                        </div>
                    </div>
                    <div className="shadow-lg mb-10 h-96 group container relative rounded-md bg-bgr  max-w-sm flex justify-center items-center  mx-auto content-div2">
                        <div className="absolute  px-6 ">
                            <span className="block text-xl  text-bgr w-full font-bold tracking-wide  mb-8">{t("About_tittle4_tittle1")}</span>
                            <span className="text-base w-3/4 m-auto font-normal text-bgr tracking-wider  ">{t("About_tittle4_tittle1_info")}</span> 
                        </div>
                    </div>
                    
                </div>
        </div>

        <div className="w-full m-auto mt-24  h-auto relative text-bgr segments segment-3 ">
                <div className="w-full h-full md:bg-gradient-to-r md:from-bgr2 md:via-bgr2 bg-opacity-10 "></div>                     
                {/* <Image className='absolute h-full  bottom-0 '  src="/ronda-foto-300x190.jpg" layout='fill' objectFit='cover' objectPosition='center' alt="" /> */}
                <div className="flex flex-col  relative w-full md:w-3/4 py-10 bg-gradient-to-b md:bg-gradient-to-r from-bg2 via-bg2  bg-opacity-25" >

                <div className="w-3/4 md:w-3/4  m-auto mb-8">
                <h2 className=" text-sl font-semibold text-left text-4xl pt-5  md:px-0  ">{t("form_igp_tit4tit")}</h2>
                <p className="  font-normal text-left leading-8 text-lg pt-5  md:px-0">{t("form_igp_tit4cont")} </p>
                <p className="  font-normal text-left leading-8 text-lg pt-5 mb-10 md:px-0">{t("form_igp_tit4cont2")}</p>

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
                </div>
            
            </div>
                    
                </div>
                
            </div>
            <div className="max-w-5xl m-auto px-8 mt-20">
                
            


            
            
            <div className="md:w-3/4  mt-20 text-base md:text-lg ">
                <h1 className=" text-4xl md:text-4xl font-bold mb-10 text-bg2 uppercase">{t("About_tittle6")}</h1>
                <p className="">{t("About_tittle6_info")}</p>
            </div>
            <div className="flex flex-wrap">
            
            <button className="bg-bgr border-2 border-bg2 text-bg2 m-auto text-sm  w-48 py-2 flex items-center justify-center mt-20 transition-all duration-150 relative z-10">
                Conoce el mercado inmobiliario en España
            </button>
            
            </div>
        </div>

    </div>
  )
}
