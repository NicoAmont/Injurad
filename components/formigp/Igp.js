import React, { useState, Fragment } from 'react'
import { useTranslation } from "next-i18next";


export default function Igp() {
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
    <div className="bg-bgr  pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl m-auto px-8">

        <h1 className="md:ml-10 text-4xl md:text-5xl font-bold  text-sl uppercase">{t("form_igp_tittle")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-semibold text-bg2 mt-5">{t("stepform1b1b")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-medium text-bg2 ">{t("stepform3ba")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-semibold text-bg2 mt-2">{t("stepform3b")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-medium text-bg2 ">{t("stepform3b2")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-semibold text-bg2 mt-2">{t("stepform3c")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-medium text-bg2 ">{t("stepform3c2")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-semibold text-bg2 mt-2">{t("stepform3d")}</h1>

        <div className="w-full md:w-3/4  m-auto mb-10 text-base md:text-base mt-20">

            {/* <iframe className="relative mt-10 mb-10 md:mt-20 z-10 w-10/12 m-auto h-96 scale-110 border-2 border-sl rounded-lg shadow-xl" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            <p className="mb-5 leading-8 text-lg">{t("form_igp_info1")}</p>

            

        </div>

        <div className="w-full  m-auto h-auto md:h-auto  mb-10  relative items-end align-bottom overflow-hidden">
                    
            
            <div className="w-full md:w-3/4  m-auto mb-8">
                <h2 className=" text-bg2 font-medium text-left text-3xl pt-5  md:px-0  ">{t("form_igp_tit2a")}</h2>
                <p className="  font-normal text-left leading-8 text-lg pt-5  md:px-0">{t("form_igp_tit2b")} <span className="font-medium"> {t("form_igp_tit2b2")}</span> {t("form_igp_tit2b3")}</p>
                <p className="  font-normal text-left leading-8 text-lg pt-5  md:px-0"><span className="font-medium">{t("form_igp_tit3")}</span> {t("form_igp_tit3b")}</p>
                {/* <button className="bg-bgr border-2 border-bg2 text-bg2 m-auto text-sm  w-48 py-2 flex items-center justify-center mt-5 mb-20 transition-all duration-150 relative z-10">
                {t("form_igp_infot4-")}
                </button> */}
            </div>
            
            <div className="w-full md:w-3/4  m-auto mb-8">
                <h2 className=" text-bg2 font-medium text-left text-3xl pt-5  md:px-0  ">{t("form_igp_tit4tit")}</h2>
                <p className="  font-normal text-left leading-8 text-lg pt-5  md:px-0">{t("form_igp_tit4cont")} </p>
                <p className="  font-normal text-left leading-8 text-lg pt-5  md:px-0">{t("form_igp_tit4cont2")}</p>

                <div className="item  m-auto w-8/12">
                    <div className="title  " onClick={ () => toggle(1)}>
                        <h2 className=" font-semibold text-bg2">{t("form_igp_tit4q1")}</h2>
                        <span className=" text-bg2 font-normal">{selected === 1 ? "-" : "+"}</span>
                    </div>
                    <div className=" border-l-2 border-sl pl-2 ">
                        <h2 className={selected === 1 ? "content show" : "content"} > {t("form_igp_tit4q1answ")} </h2>
                    </div>
                </div>
                <div className="item  m-auto w-8/12">
                    <div className="title  " onClick={ () => toggle(2)}>
                        <h2 className=" font-semibold text-bg2">{t("form_igp_tit4q2")}</h2>
                        <span className=" text-bg2 font-normal">{selected === 2 ? "-" : "+"}</span>
                    </div>
                    <div className=" border-l-2 border-sl pl-2 ">
                        <h2 className={selected === 2 ? "content show" : "content"} > {t("form_igp_tit4q2answ")} </h2>
                    </div>
                </div>
                <div className="item  m-auto w-8/12">
                    <div className="title  " onClick={ () => toggle(3)}>
                        <h2 className=" font-semibold text-bg2">{t("form_igp_tit4q3")}</h2>
                        <span className=" text-bg2 font-normal">{selected === 3 ? "-" : "+"}</span>
                    </div>
                    <div className=" border-l-2 border-sl pl-2 ">
                        <h2 className={selected === 3 ? "content show" : "content"} > {t("form_igp_tit4q3answ")} </h2>
                    </div>
                </div>
                <div className="item  m-auto w-8/12">
                    <div className="title  " onClick={ () => toggle(4)}>
                        <h2 className=" font-semibold text-bg2">{t("form_igp_tit4q4")}</h2>
                        <span className=" text-bg2 font-normal">{selected === 4 ? "-" : "+"}</span>
                    </div>
                    <div className=" border-l-2 border-sl pl-2 ">
                        <h2 className={selected === 4 ? "content show" : "content"} > {t("form_igp_tit4q4answ")} </h2>
                    </div>
                </div>
                <div className="item  m-auto w-8/12">
                    <div className="title  " onClick={ () => toggle(5)}>
                        <h2 className=" font-semibold text-bg2">{t("form_igp_tit4q5")}</h2>
                        <span className=" text-bg2 font-normal">{selected === 5 ? "-" : "+"}</span>
                    </div>
                    <div className=" border-l-2 border-sl pl-2 ">
                        <h2 className={selected === 5 ? "content show" : "content"} > {t("form_igp_tit4q5answ")} </h2>
                    </div>
                </div>
            
            </div>
        </div>
        {/* <div className="w-full flex flex-wrap m-auto gap-10 items-center justify-center">
                <div className="w-96 h-auto sm:h-96  bg-gl relative items-end align-bottom rounded-2xl shadow-2xl px-4 pb-6 ">
                    <svg className="opacity-30 w-10 absolute  bottom-2 right-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                    </svg>
                    <h1 className=" text-sl text-left text-2xl pt-5 font-normal m-auto ml-2 border-b-2 pb-2  border-sl ">{t("form_igp_t2")}</h1>
                    <p className=" text-bgr font-normal text-left text-sm pt-5 ml-2 m-auto mb-6 ">{t("form_igp_t2b")}</p>
                </div>
                <div className="w-96 h-auto sm:h-96 bg-gl relative items-end align-bottom rounded-2xl shadow-2xl px-4 pb-6">
                    <svg className="opacity-30 w-10 absolute  bottom-2 right-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                    </svg>
                    
                    <h1 className=" text-sl text-left text-2xl pt-5 font-normal m-auto ml-2 border-b-2 md:pb-10 border-sl ">{t("form_igp_t22")}</h1>
                    <p className=" text-bgr font-normal text-left text-sm pt-5 ml-2 m-auto mb-6 ">{t("form_igp_t2b2")}</p>
                </div>
                
                
            </div> */}
        
        <div className="w-11/12 md:w-3/4 m-auto mb-20 mt-20 text-xl flex flex-col">

            <h2 className="text-2xl text-bg2 font-medium mb-2">{t("form_igp_tittle2")}</h2>
            <p className="leading-8 text-lg  font-normal ">{t("form_igp_tittle2B")}</p>
            <div className="w-3/4 mt-10 md:w-full grid sm:grid-cols-2 md:grid-cols-3 m-auto gap-20 place-items-center">
                <div className="shadow-2xl rounded-xl w-full h-full bg-bgr  relative items-end align-bottom p-4 m-auto">
                    
                    <svg className="m-auto pl-7" width="113" height="297" viewBox="0 0 263 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81.9231 130.786V108.255C81.9231 106.68 83.5192 105.073 85.1154 105.073H97.8846C99.4808 105.073 101.077 106.68 101.077 108.287V130.786C101.077 131.638 101.413 132.456 102.012 133.059C102.611 133.661 103.423 134 104.269 134H129.808C130.654 134 131.466 133.661 132.065 133.059C132.664 132.456 133 131.638 133 130.786V85.7888C133.001 85.3664 132.919 84.9481 132.759 84.5576C132.599 84.1671 132.364 83.8123 132.068 83.5132L123.423 74.8159V53.648C123.423 52.7956 123.087 51.978 122.488 51.3753C121.889 50.7725 121.077 50.4339 120.231 50.4339H113.846C112.999 50.4339 112.188 50.7725 111.589 51.3753C110.99 51.978 110.654 52.7956 110.654 53.648V61.9596L93.7602 44.9443C93.4636 44.6449 93.1113 44.4075 92.7235 44.2454C92.3357 44.0834 91.9199 44 91.5 44C91.0801 44 90.6643 44.0834 90.2765 44.2454C89.8887 44.4075 89.5364 44.6449 89.2398 44.9443L50.9322 83.5132C50.6359 83.8123 50.4011 84.1671 50.2411 84.5576C50.0812 84.9481 49.9993 85.3664 50 85.7888V130.786C50 131.638 50.3363 132.456 50.935 133.059C51.5337 133.661 52.3457 134 53.1923 134H78.7308C79.5774 134 80.3894 133.661 80.9881 133.059C81.5867 132.456 81.9231 131.638 81.9231 130.786Z" fill="#F04A24"/>
                        <path d="M80.9231 265.786V243.255C80.9231 241.68 82.5192 240.073 84.1154 240.073H96.8846C98.4808 240.073 100.077 241.68 100.077 243.287V265.786C100.077 266.638 100.413 267.456 101.012 268.059C101.611 268.661 102.423 269 103.269 269H128.808C129.654 269 130.466 268.661 131.065 268.059C131.664 267.456 132 266.638 132 265.786V220.789C132.001 220.366 131.919 219.948 131.759 219.558C131.599 219.167 131.364 218.812 131.068 218.513L122.423 209.816V188.648C122.423 187.796 122.087 186.978 121.488 186.375C120.889 185.773 120.077 185.434 119.231 185.434H112.846C111.999 185.434 111.188 185.773 110.589 186.375C109.99 186.978 109.654 187.796 109.654 188.648V196.96L92.7602 179.944C92.4636 179.645 92.1113 179.407 91.7235 179.245C91.3357 179.083 90.9199 179 90.5 179C90.0801 179 89.6643 179.083 89.2765 179.245C88.8887 179.407 88.5364 179.645 88.2398 179.944L49.9322 218.513C49.6359 218.812 49.4011 219.167 49.2411 219.558C49.0812 219.948 48.9993 220.366 49 220.789V265.786C49 266.638 49.3363 267.456 49.935 268.059C50.5337 268.661 51.3457 269 52.1923 269H77.7308C78.5774 269 79.3894 268.661 79.9881 268.059C80.5867 267.456 80.9231 266.638 80.9231 265.786Z" fill="black"/>
                        <path d="M80.9231 400.786V378.255C80.9231 376.68 82.5192 375.073 84.1154 375.073H96.8846C98.4808 375.073 100.077 376.68 100.077 378.287V400.786C100.077 401.638 100.413 402.456 101.012 403.059C101.611 403.661 102.423 404 103.269 404H128.808C129.654 404 130.466 403.661 131.065 403.059C131.664 402.456 132 401.638 132 400.786V355.789C132.001 355.366 131.919 354.948 131.759 354.558C131.599 354.167 131.364 353.812 131.068 353.513L122.423 344.816V323.648C122.423 322.796 122.087 321.978 121.488 321.375C120.889 320.773 120.077 320.434 119.231 320.434H112.846C111.999 320.434 111.188 320.773 110.589 321.375C109.99 321.978 109.654 322.796 109.654 323.648V331.96L92.7602 314.944C92.4636 314.645 92.1113 314.407 91.7235 314.245C91.3357 314.083 90.9199 314 90.5 314C90.0801 314 89.6643 314.083 89.2765 314.245C88.8887 314.407 88.5364 314.645 88.2398 314.944L49.9322 353.513C49.6359 353.812 49.4011 354.167 49.2411 354.558C49.0812 354.948 48.9993 355.366 49 355.789V400.786C49 401.638 49.3363 402.456 49.935 403.059C50.5337 403.661 51.3457 404 52.1923 404H77.7308C78.5774 404 79.3894 403.661 79.9881 403.059C80.5867 402.456 80.9231 401.638 80.9231 400.786Z" fill="black"/>
                        <rect x="3" y="3" width="177" height="441" stroke="black" strokeWidth="6"/>
                        <path d="M25.9965 73.4987C61.9995 9.99976 122.501 10.4998 154.996 74.4987" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M26.0004 209.819C62.0034 146.32 122.504 146.82 155 210.819" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M27.0004 343.819C63.0034 280.32 123.504 280.82 156 344.819" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                    <h1 className="  font-normal m-auto text-left text-sm pt-5 italic ">{t("form_igp_tittle2B1")}</h1>
                    
                </div>
                <div className="shadow-2xl rounded-xl w-full h-full bg-bgr  relative items-end align-bottom p-4 m-auto">
                    
                    <svg className="m-auto pl-7" width="113" height="297" viewBox="0 0 263 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81.9231 130.786V108.255C81.9231 106.68 83.5192 105.073 85.1154 105.073H97.8846C99.4808 105.073 101.077 106.68 101.077 108.287V130.786C101.077 131.638 101.413 132.456 102.012 133.059C102.611 133.661 103.423 134 104.269 134H129.808C130.654 134 131.466 133.661 132.065 133.059C132.664 132.456 133 131.638 133 130.786V85.7888C133.001 85.3664 132.919 84.9481 132.759 84.5576C132.599 84.1671 132.364 83.8123 132.068 83.5132L123.423 74.8159V53.648C123.423 52.7956 123.087 51.978 122.488 51.3753C121.889 50.7725 121.077 50.4339 120.231 50.4339H113.846C112.999 50.4339 112.188 50.7725 111.589 51.3753C110.99 51.978 110.654 52.7956 110.654 53.648V61.9596L93.7602 44.9443C93.4636 44.6449 93.1113 44.4075 92.7235 44.2454C92.3357 44.0834 91.9199 44 91.5 44C91.0801 44 90.6643 44.0834 90.2765 44.2454C89.8887 44.4075 89.5364 44.6449 89.2398 44.9443L50.9322 83.5132C50.6359 83.8123 50.4011 84.1671 50.2411 84.5576C50.0812 84.9481 49.9993 85.3664 50 85.7888V130.786C50 131.638 50.3363 132.456 50.935 133.059C51.5337 133.661 52.3457 134 53.1923 134H78.7308C79.5774 134 80.3894 133.661 80.9881 133.059C81.5867 132.456 81.9231 131.638 81.9231 130.786Z" fill="black"/>
                        <path d="M80.9231 265.786V243.255C80.9231 241.68 82.5192 240.073 84.1154 240.073H96.8846C98.4808 240.073 100.077 241.68 100.077 243.287V265.786C100.077 266.638 100.413 267.456 101.012 268.059C101.611 268.661 102.423 269 103.269 269H128.808C129.654 269 130.466 268.661 131.065 268.059C131.664 267.456 132 266.638 132 265.786V220.789C132.001 220.366 131.919 219.948 131.759 219.558C131.599 219.167 131.364 218.812 131.068 218.513L122.423 209.816V188.648C122.423 187.796 122.087 186.978 121.488 186.375C120.889 185.773 120.077 185.434 119.231 185.434H112.846C111.999 185.434 111.188 185.773 110.589 186.375C109.99 186.978 109.654 187.796 109.654 188.648V196.96L92.7602 179.944C92.4636 179.645 92.1113 179.407 91.7235 179.245C91.3357 179.083 90.9199 179 90.5 179C90.0801 179 89.6643 179.083 89.2765 179.245C88.8887 179.407 88.5364 179.645 88.2398 179.944L49.9322 218.513C49.6359 218.812 49.4011 219.167 49.2411 219.558C49.0812 219.948 48.9993 220.366 49 220.789V265.786C49 266.638 49.3363 267.456 49.935 268.059C50.5337 268.661 51.3457 269 52.1923 269H77.7308C78.5774 269 79.3894 268.661 79.9881 268.059C80.5867 267.456 80.9231 266.638 80.9231 265.786Z" fill="#FFB931"/>
                        <path d="M80.9231 400.786V378.255C80.9231 376.68 82.5192 375.073 84.1154 375.073H96.8846C98.4808 375.073 100.077 376.68 100.077 378.287V400.786C100.077 401.638 100.413 402.456 101.012 403.059C101.611 403.661 102.423 404 103.269 404H128.808C129.654 404 130.466 403.661 131.065 403.059C131.664 402.456 132 401.638 132 400.786V355.789C132.001 355.366 131.919 354.948 131.759 354.558C131.599 354.167 131.364 353.812 131.068 353.513L122.423 344.816V323.648C122.423 322.796 122.087 321.978 121.488 321.375C120.889 320.773 120.077 320.434 119.231 320.434H112.846C111.999 320.434 111.188 320.773 110.589 321.375C109.99 321.978 109.654 322.796 109.654 323.648V331.96L92.7602 314.944C92.4636 314.645 92.1113 314.407 91.7235 314.245C91.3357 314.083 90.9199 314 90.5 314C90.0801 314 89.6643 314.083 89.2765 314.245C88.8887 314.407 88.5364 314.645 88.2398 314.944L49.9322 353.513C49.6359 353.812 49.4011 354.167 49.2411 354.558C49.0812 354.948 48.9993 355.366 49 355.789V400.786C49 401.638 49.3363 402.456 49.935 403.059C50.5337 403.661 51.3457 404 52.1923 404H77.7308C78.5774 404 79.3894 403.661 79.9881 403.059C80.5867 402.456 80.9231 401.638 80.9231 400.786Z" fill="black"/>
                        <rect x="3" y="3" width="177" height="441" stroke="black" strokeWidth="6"/>
                        <path d="M25.9965 73.4987C61.9995 9.99976 122.501 10.4998 154.996 74.4987" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M26.0004 209.819C62.0034 146.32 122.504 146.82 155 210.819" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M27.0004 343.819C63.0034 280.32 123.504 280.82 156 344.819" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                    </svg>

                    <h1 className="  font-normal m-auto text-sm pt-5  italic ">{t("form_igp_tittle2B2")}</h1>
                </div>
                <div className="shadow-2xl rounded-xl w-full h-full bg-bgr  relative items-end align-bottom p-4 m-auto">
                    
                    <svg className="m-auto pl-7" width="113" height="297" viewBox="0 0 263 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81.9231 130.786V108.255C81.9231 106.68 83.5192 105.073 85.1154 105.073H97.8846C99.4808 105.073 101.077 106.68 101.077 108.287V130.786C101.077 131.638 101.413 132.456 102.012 133.059C102.611 133.661 103.423 134 104.269 134H129.808C130.654 134 131.466 133.661 132.065 133.059C132.664 132.456 133 131.638 133 130.786V85.7888C133.001 85.3664 132.919 84.9481 132.759 84.5576C132.599 84.1671 132.364 83.8123 132.068 83.5132L123.423 74.8159V53.648C123.423 52.7956 123.087 51.978 122.488 51.3753C121.889 50.7725 121.077 50.4339 120.231 50.4339H113.846C112.999 50.4339 112.188 50.7725 111.589 51.3753C110.99 51.978 110.654 52.7956 110.654 53.648V61.9596L93.7602 44.9443C93.4636 44.6449 93.1113 44.4075 92.7235 44.2454C92.3357 44.0834 91.9199 44 91.5 44C91.0801 44 90.6643 44.0834 90.2765 44.2454C89.8887 44.4075 89.5364 44.6449 89.2398 44.9443L50.9322 83.5132C50.6359 83.8123 50.4011 84.1671 50.2411 84.5576C50.0812 84.9481 49.9993 85.3664 50 85.7888V130.786C50 131.638 50.3363 132.456 50.935 133.059C51.5337 133.661 52.3457 134 53.1923 134H78.7308C79.5774 134 80.3894 133.661 80.9881 133.059C81.5867 132.456 81.9231 131.638 81.9231 130.786Z" fill="black"/>
                        <path d="M80.9231 265.786V243.255C80.9231 241.68 82.5192 240.073 84.1154 240.073H96.8846C98.4808 240.073 100.077 241.68 100.077 243.287V265.786C100.077 266.638 100.413 267.456 101.012 268.059C101.611 268.661 102.423 269 103.269 269H128.808C129.654 269 130.466 268.661 131.065 268.059C131.664 267.456 132 266.638 132 265.786V220.789C132.001 220.366 131.919 219.948 131.759 219.558C131.599 219.167 131.364 218.812 131.068 218.513L122.423 209.816V188.648C122.423 187.796 122.087 186.978 121.488 186.375C120.889 185.773 120.077 185.434 119.231 185.434H112.846C111.999 185.434 111.188 185.773 110.589 186.375C109.99 186.978 109.654 187.796 109.654 188.648V196.96L92.7602 179.944C92.4636 179.645 92.1113 179.407 91.7235 179.245C91.3357 179.083 90.9199 179 90.5 179C90.0801 179 89.6643 179.083 89.2765 179.245C88.8887 179.407 88.5364 179.645 88.2398 179.944L49.9322 218.513C49.6359 218.812 49.4011 219.167 49.2411 219.558C49.0812 219.948 48.9993 220.366 49 220.789V265.786C49 266.638 49.3363 267.456 49.935 268.059C50.5337 268.661 51.3457 269 52.1923 269H77.7308C78.5774 269 79.3894 268.661 79.9881 268.059C80.5867 267.456 80.9231 266.638 80.9231 265.786Z" fill="black"/>
                        <path d="M80.9231 400.786V378.255C80.9231 376.68 82.5192 375.073 84.1154 375.073H96.8846C98.4808 375.073 100.077 376.68 100.077 378.287V400.786C100.077 401.638 100.413 402.456 101.012 403.059C101.611 403.661 102.423 404 103.269 404H128.808C129.654 404 130.466 403.661 131.065 403.059C131.664 402.456 132 401.638 132 400.786V355.789C132.001 355.366 131.919 354.948 131.759 354.558C131.599 354.167 131.364 353.812 131.068 353.513L122.423 344.816V323.648C122.423 322.796 122.087 321.978 121.488 321.375C120.889 320.773 120.077 320.434 119.231 320.434H112.846C111.999 320.434 111.188 320.773 110.589 321.375C109.99 321.978 109.654 322.796 109.654 323.648V331.96L92.7602 314.944C92.4636 314.645 92.1113 314.407 91.7235 314.245C91.3357 314.083 90.9199 314 90.5 314C90.0801 314 89.6643 314.083 89.2765 314.245C88.8887 314.407 88.5364 314.645 88.2398 314.944L49.9322 353.513C49.6359 353.812 49.4011 354.167 49.2411 354.558C49.0812 354.948 48.9993 355.366 49 355.789V400.786C49 401.638 49.3363 402.456 49.935 403.059C50.5337 403.661 51.3457 404 52.1923 404H77.7308C78.5774 404 79.3894 403.661 79.9881 403.059C80.5867 402.456 80.9231 401.638 80.9231 400.786Z" fill="#2EA153"/>
                        <rect x="3" y="3" width="177" height="441" stroke="black" strokeWidth="6"/>
                        <path d="M25.9965 73.4987C61.9995 9.99976 122.501 10.4998 154.996 74.4987" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M26.0004 209.819C62.0034 146.32 122.504 146.82 155 210.819" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M27.0004 343.819C63.0034 280.32 123.504 280.82 156 344.819" stroke="black" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                    <h1 className="  font-normal m-auto text-left  text-sm pt-5 italic ">{t("form_igp_tittle2B3")}</h1>


                </div>
               
            </div>
            

        </div>

            <div className="max-w-2xl mx-auto ">
                <h1 className="mb-10 text-lg text-bg2 font-medium ">{t("Contact_subtitle")} :</h1>
                <htmlform>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                            <label htmlhtmlfor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pais</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                            <label htmlhtmlfor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pasaporte / NIE / DNI</label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full ">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                            <label htmlFor="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono (+ 01-255-456-7890)</label>
                        </div>
                        <div className="relative z-0 mb-6  w-full group">
                            <select name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required>
                                <option>IGP Urbano    Costo: 532,40 &#8364;</option>
                                <option>IGP Rural  Costo: 665,50 &#8364;</option>
                            </select>
                            <label htmlhtmlfor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Selecciona el servicio</label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo de Inmueble</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                            <label htmlhtmlfor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ubicacion del inmueble</label>
                        </div>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección / Municipio y Provincia </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección de Facturación </label>
                    </div>
                    
                    <div className="relative z-0 mb-6 w-full group">
                        <textarea type="text" name="floating_email" className="block h-40 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Comentarios </label>
                    </div>
                    <h1 className="mb-10 text-base text-bg2 font-thin ">{t("Contact_opt7")}</h1>

                    <button className="m-auto  bg-bg2 text-bgr w-48 py-2 flex items-center justify-center mt-10 hover:bg-sl transition-all duration-150 relative z-10 ">
                    Enviar
                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                    </svg>
                </button>
                </htmlform>

                
            </div>
        </div>
            
    </div>
  )
}
