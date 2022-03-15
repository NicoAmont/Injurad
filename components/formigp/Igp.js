import React, { useState, Fragment } from 'react'
import { useTranslation } from "next-i18next";


export default function Igp() {
    const { t } = useTranslation('common');
    const ytvideo = ["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]


  return (
    <div className="bg-bgr  pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl m-auto px-8">

        <h1 className="md:ml-10 text-lg md:text-lg font-bold text-sl uppercase">{t("stepform3")}</h1>
        <h1 className="md:ml-10 text-4xl md:text-4xl font-bold  text-bg2 uppercase">{t("form_igp_tittle")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-bold text-bg2 ">{t("stepform3b")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-bold text-bg2 ">{t("stepform3c")}</h1>
        <h1 className="md:ml-10 text-lg md:text-base font-bold text-bg2 ">{t("stepform3d")}</h1>

        <div className="w-full md:w-3/4 m-auto mb-20 text-base md:text-base mt-20">

            {/* <iframe className="relative mt-10 mb-10 md:mt-20 z-10 w-10/12 m-auto h-96 scale-110 border-2 border-sl rounded-lg shadow-xl" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            <p className="mb-5 ">{t("form_igp_info1")}</p>
            <p className="mb-5 font-normal">{t("form_igp_info2")}</p>

            <div className="w-full mb-10">
                <div className="w-full md:w-3/4  m-auto h-auto relative items-end align-bottom mt-10 ">
                    <p className="border-bg2 pl-4 border-l-2 mb-2  text-base">{t("form_igp_info2c")}</p>
                    <p className="border-bg2 pl-4 border-l-2 mb-2  text-base">{t("form_igp_info2d")}</p>
                    <p className="border-bg2 pl-4 border-l-2 mb-2  text-base">{t("form_igp_info2e")}</p>
                    <p className="border-bg2 pl-4 border-l-2 mb-2  text-base">{t("form_igp_info2f")}</p>
                    <p className=" border-bg2 pl-4  border-l-2 mb-2  text-base">{t("form_igp_info2g")}</p>
                </div>
            </div>
            <p className="font-normal">{t("form_igp_info3")}</p>

        </div>

        <div className="w-full md:w-3/4 m-auto h-auto md:h-auto shadow-2xl rounded-xl mb-10  relative items-end align-bottom overflow-hidden">
                    
            <svg className="opacity-80 w-8 md:w-10  absolute  bottom-4 right-4 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#326754"/>
                <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#326754"/>
                <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#326754"/>
                <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#326754"/>
            </svg>
            <div className="w-full md:w-3/4 m-auto mb-8">
                <h2 className=" text-bg2 font-medium text-center text-lg pt-5 px-4 md:px-0 italic ">{t("form_igp_tit2a")}</h2>
                <p className=" text-bg2 font-normal text-left text-sm pt-5 italic px-4 md:px-0">{t("form_igp_tit2b")}</p>
            </div>
            
        </div>
        <div className="w-full flex flex-wrap m-auto gap-10 items-center justify-center">
                <div className="w-96 h-auto sm:h-96  bg-gl relative items-end align-bottom rounded-2xl shadow-2xl px-4 pb-6 ">
                    <svg className="opacity-30 w-10 absolute  bottom-2 right-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                    </svg>
                    <h1 className=" text-bgr text-left text-2xl pt-5 font-semibold m-auto ml-2 border-b-2 pb-2  border-bgr ">{t("form_igp_t2")}</h1>
                    <p className=" text-bgr font-normal text-left text-base pt-5 w-10/12 m-auto mb-6 ">{t("form_igp_t2b")}</p>
                </div>
                <div className="w-96 h-auto sm:h-96 bg-gl relative items-end align-bottom rounded-2xl shadow-2xl px-4 pb-6">
                    <svg className="opacity-30 w-10 absolute  bottom-2 right-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
                    </svg>
                    
                    <h1 className=" text-bgr text-left text-2xl pt-5 font-semibold m-auto ml-2 border-b-2 md:pb-10 border-bgr ">{t("form_igp_t22")}</h1>
                    <p className=" text-bgr font-normal text-left text-base pt-5 w-10/12 m-auto mb-6 ">{t("form_igp_t2b2")}</p>
                </div>
                
                
            </div>
        
        <div className="w-11/12 md:w-3/4 m-auto mb-20 mt-10 text-xl flex flex-col">

            <h2 className="text-2xl text-bg2 font-medium mb-10">{t("form_igp_tittle2")}</h2>
            <p className="text-lg text-bg2 font-normal ">{t("form_igp_tittle2B")}</p>
            <div className="w-3/4 md:w-full grid sm:grid-cols-2 md:grid-cols-3 m-auto gap-20 place-items-center">
                <div className="w-full h-full bg-bgr  relative items-end align-bottom p-4 m-auto">
                    <svg className="opacity-5 w-10 absolute  bottom-0 left-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#326754"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#326754"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#326754"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#326754"/>
                    </svg>
                    <svg className="m-auto" width="113" height="297" viewBox="0 0 263 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M121.923 130.786V108.255C121.923 106.68 123.519 105.073 125.115 105.073H137.885C139.481 105.073 141.077 106.68 141.077 108.287V130.786C141.077 131.638 141.413 132.456 142.012 133.059C142.611 133.661 143.423 134 144.269 134H169.808C170.654 134 171.466 133.661 172.065 133.059C172.664 132.456 173 131.638 173 130.786V85.7888C173.001 85.3664 172.919 84.9481 172.759 84.5576C172.599 84.1671 172.364 83.8123 172.068 83.5132L163.423 74.8159V53.648C163.423 52.7956 163.087 51.978 162.488 51.3753C161.889 50.7725 161.077 50.4339 160.231 50.4339H153.846C152.999 50.4339 152.188 50.7725 151.589 51.3753C150.99 51.978 150.654 52.7956 150.654 53.648V61.9596L133.76 44.9443C133.464 44.6449 133.111 44.4075 132.724 44.2454C132.336 44.0834 131.92 44 131.5 44C131.08 44 130.664 44.0834 130.276 44.2454C129.889 44.4075 129.536 44.6449 129.24 44.9443L90.9322 83.5132C90.6359 83.8123 90.4011 84.1671 90.2411 84.5576C90.0812 84.9481 89.9993 85.3664 90 85.7888V130.786C90 131.638 90.3363 132.456 90.935 133.059C91.5337 133.661 92.3457 134 93.1923 134H118.731C119.577 134 120.389 133.661 120.988 133.059C121.587 132.456 121.923 131.638 121.923 130.786Z" fill="#C92C17"/>
                        <path d="M120.923 265.786V243.255C120.923 241.68 122.519 240.073 124.115 240.073H136.885C138.481 240.073 140.077 241.68 140.077 243.287V265.786C140.077 266.638 140.413 267.456 141.012 268.059C141.611 268.661 142.423 269 143.269 269H168.808C169.654 269 170.466 268.661 171.065 268.059C171.664 267.456 172 266.638 172 265.786V220.789C172.001 220.366 171.919 219.948 171.759 219.558C171.599 219.167 171.364 218.812 171.068 218.513L162.423 209.816V188.648C162.423 187.796 162.087 186.978 161.488 186.375C160.889 185.773 160.077 185.434 159.231 185.434H152.846C151.999 185.434 151.188 185.773 150.589 186.375C149.99 186.978 149.654 187.796 149.654 188.648V196.96L132.76 179.944C132.464 179.645 132.111 179.407 131.724 179.245C131.336 179.083 130.92 179 130.5 179C130.08 179 129.664 179.083 129.276 179.245C128.889 179.407 128.536 179.645 128.24 179.944L89.9322 218.513C89.6359 218.812 89.4011 219.167 89.2411 219.558C89.0812 219.948 88.9993 220.366 89 220.789V265.786C89 266.638 89.3363 267.456 89.935 268.059C90.5337 268.661 91.3457 269 92.1923 269H117.731C118.577 269 119.389 268.661 119.988 268.059C120.587 267.456 120.923 266.638 120.923 265.786Z" fill="#223C22"/>
                        <path d="M120.923 400.786V378.255C120.923 376.68 122.519 375.073 124.115 375.073H136.885C138.481 375.073 140.077 376.68 140.077 378.287V400.786C140.077 401.638 140.413 402.456 141.012 403.059C141.611 403.661 142.423 404 143.269 404H168.808C169.654 404 170.466 403.661 171.065 403.059C171.664 402.456 172 401.638 172 400.786V355.789C172.001 355.366 171.919 354.948 171.759 354.558C171.599 354.167 171.364 353.812 171.068 353.513L162.423 344.816V323.648C162.423 322.796 162.087 321.978 161.488 321.375C160.889 320.773 160.077 320.434 159.231 320.434H152.846C151.999 320.434 151.188 320.773 150.589 321.375C149.99 321.978 149.654 322.796 149.654 323.648V331.96L132.76 314.944C132.464 314.645 132.111 314.407 131.724 314.245C131.336 314.083 130.92 314 130.5 314C130.08 314 129.664 314.083 129.276 314.245C128.889 314.407 128.536 314.645 128.24 314.944L89.9322 353.513C89.6359 353.812 89.4011 354.167 89.2411 354.558C89.0812 354.948 88.9993 355.366 89 355.789V400.786C89 401.638 89.3363 402.456 89.935 403.059C90.5337 403.661 91.3457 404 92.1923 404H117.731C118.577 404 119.389 403.661 119.988 403.059C120.587 402.456 120.923 401.638 120.923 400.786Z" fill="#223C22"/>
                        <rect x="43" y="3" width="177" height="441" stroke="#223C22" strokeWidth="6"/>
                        <path d="M3.61412 33.4384C3.64027 32.9139 3.67113 32.4327 3.70355 32H43.0008V81.583C41.2231 81.2698 38.8007 80.7347 35.9786 79.8306C29.8518 77.8676 21.9 74.1848 14.5503 67.3092C7.5489 60.7595 4.8205 51.4666 3.9193 43.4763C3.47287 39.5181 3.48731 35.9823 3.61412 33.4384Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M3.07701 165.438C3.10316 164.914 3.13402 164.433 3.16644 164H42.4637V213.583C40.686 213.27 38.2636 212.735 35.4415 211.831C29.3147 209.868 21.3629 206.185 14.0131 199.309C7.01179 192.76 4.28339 183.467 3.38219 175.476C2.93576 171.518 2.9502 167.982 3.07701 165.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M3.07701 304.438C3.10316 303.914 3.13402 303.433 3.16644 303H42.4637V352.583C40.686 352.27 38.2636 351.735 35.4415 350.831C29.3147 348.868 21.3629 345.185 14.0131 338.309C7.01179 331.76 4.28339 322.467 3.38219 314.476C2.93576 310.518 2.9502 306.982 3.07701 304.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M259.386 30.4384C259.36 29.9139 259.329 29.4327 259.296 29H219.999V78.583C221.777 78.2698 224.199 77.7347 227.021 76.8306C233.148 74.8676 241.1 71.1848 248.45 64.3092C255.451 57.7595 258.179 48.4666 259.081 40.4763C259.527 36.5181 259.513 32.9823 259.386 30.4384Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M259.923 162.438C259.897 161.914 259.866 161.433 259.834 161H220.536V210.583C222.314 210.27 224.736 209.735 227.558 208.831C233.685 206.868 241.637 203.185 248.987 196.309C255.988 189.76 258.717 180.467 259.618 172.476C260.064 168.518 260.05 164.982 259.923 162.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M259.923 301.438C259.897 300.914 259.866 300.433 259.834 300H220.536V349.583C222.314 349.27 224.736 348.735 227.558 347.831C233.685 345.868 241.637 342.185 248.987 335.309C255.988 328.76 258.717 319.467 259.618 311.476C260.064 307.518 260.05 303.982 259.923 301.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M65.9965 73.4987C101.999 9.99976 162.501 10.4998 194.996 74.4987" stroke="#223C22" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M66.0004 209.819C102.003 146.32 162.504 146.82 195 210.819" stroke="#223C22" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M67.0004 343.819C103.003 280.32 163.504 280.82 196 344.819" stroke="#223C22" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                    <h1 className=" text-bgfva font-normal m-auto text-center text-sm pt-5 italic ">{t("form_igp_tittle2B3")}</h1>

                </div>
                <div className="w-full h-full bg-bgr  relative items-end align-bottom p-4 m-auto">
                    <svg className="opacity-5 w-10 absolute  bottom-0 left-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#E5AE35"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#E5AE35"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#E5AE35"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#E5AE35"/>
                    </svg>
                    <svg className="m-auto" width="113" height="297" viewBox="0 0 263 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M121.923 130.786V108.255C121.923 106.68 123.519 105.073 125.115 105.073H137.885C139.481 105.073 141.077 106.68 141.077 108.287V130.786C141.077 131.638 141.413 132.456 142.012 133.059C142.611 133.661 143.423 134 144.269 134H169.808C170.654 134 171.466 133.661 172.065 133.059C172.664 132.456 173 131.638 173 130.786V85.7888C173.001 85.3664 172.919 84.9481 172.759 84.5576C172.599 84.1671 172.364 83.8123 172.068 83.5132L163.423 74.8159V53.648C163.423 52.7956 163.087 51.978 162.488 51.3753C161.889 50.7725 161.077 50.4339 160.231 50.4339H153.846C152.999 50.4339 152.188 50.7725 151.589 51.3753C150.99 51.978 150.654 52.7956 150.654 53.648V61.9596L133.76 44.9443C133.464 44.6449 133.111 44.4075 132.724 44.2454C132.336 44.0834 131.92 44 131.5 44C131.08 44 130.664 44.0834 130.276 44.2454C129.889 44.4075 129.536 44.6449 129.24 44.9443L90.9322 83.5132C90.6359 83.8123 90.4011 84.1671 90.2411 84.5576C90.0812 84.9481 89.9993 85.3664 90 85.7888V130.786C90 131.638 90.3363 132.456 90.935 133.059C91.5337 133.661 92.3457 134 93.1923 134H118.731C119.577 134 120.389 133.661 120.988 133.059C121.587 132.456 121.923 131.638 121.923 130.786Z" fill="#223C22"/>
                        <path d="M120.923 265.786V243.255C120.923 241.68 122.519 240.073 124.115 240.073H136.885C138.481 240.073 140.077 241.68 140.077 243.287V265.786C140.077 266.638 140.413 267.456 141.012 268.059C141.611 268.661 142.423 269 143.269 269H168.808C169.654 269 170.466 268.661 171.065 268.059C171.664 267.456 172 266.638 172 265.786V220.789C172.001 220.366 171.919 219.948 171.759 219.558C171.599 219.167 171.364 218.812 171.068 218.513L162.423 209.816V188.648C162.423 187.796 162.087 186.978 161.488 186.375C160.889 185.773 160.077 185.434 159.231 185.434H152.846C151.999 185.434 151.188 185.773 150.589 186.375C149.99 186.978 149.654 187.796 149.654 188.648V196.96L132.76 179.944C132.464 179.645 132.111 179.407 131.724 179.245C131.336 179.083 130.92 179 130.5 179C130.08 179 129.664 179.083 129.276 179.245C128.889 179.407 128.536 179.645 128.24 179.944L89.9322 218.513C89.6359 218.812 89.4011 219.167 89.2411 219.558C89.0812 219.948 88.9993 220.366 89 220.789V265.786C89 266.638 89.3363 267.456 89.935 268.059C90.5337 268.661 91.3457 269 92.1923 269H117.731C118.577 269 119.389 268.661 119.988 268.059C120.587 267.456 120.923 266.638 120.923 265.786Z" fill="#E5AE35"/>
                        <path d="M120.923 400.786V378.255C120.923 376.68 122.519 375.073 124.115 375.073H136.885C138.481 375.073 140.077 376.68 140.077 378.287V400.786C140.077 401.638 140.413 402.456 141.012 403.059C141.611 403.661 142.423 404 143.269 404H168.808C169.654 404 170.466 403.661 171.065 403.059C171.664 402.456 172 401.638 172 400.786V355.789C172.001 355.366 171.919 354.948 171.759 354.558C171.599 354.167 171.364 353.812 171.068 353.513L162.423 344.816V323.648C162.423 322.796 162.087 321.978 161.488 321.375C160.889 320.773 160.077 320.434 159.231 320.434H152.846C151.999 320.434 151.188 320.773 150.589 321.375C149.99 321.978 149.654 322.796 149.654 323.648V331.96L132.76 314.944C132.464 314.645 132.111 314.407 131.724 314.245C131.336 314.083 130.92 314 130.5 314C130.08 314 129.664 314.083 129.276 314.245C128.889 314.407 128.536 314.645 128.24 314.944L89.9322 353.513C89.6359 353.812 89.4011 354.167 89.2411 354.558C89.0812 354.948 88.9993 355.366 89 355.789V400.786C89 401.638 89.3363 402.456 89.935 403.059C90.5337 403.661 91.3457 404 92.1923 404H117.731C118.577 404 119.389 403.661 119.988 403.059C120.587 402.456 120.923 401.638 120.923 400.786Z" fill="#223C22"/>
                        <rect x="43" y="3" width="177" height="441" stroke="#223C22" strokeWidth="6"/>
                        <path d="M3.61412 33.4384C3.64027 32.9139 3.67113 32.4327 3.70355 32H43.0008V81.583C41.2231 81.2698 38.8007 80.7347 35.9786 79.8306C29.8518 77.8676 21.9 74.1848 14.5503 67.3092C7.5489 60.7595 4.8205 51.4666 3.9193 43.4763C3.47287 39.5181 3.48731 35.9823 3.61412 33.4384Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M3.07701 165.438C3.10316 164.914 3.13402 164.433 3.16644 164H42.4637V213.583C40.686 213.27 38.2636 212.735 35.4415 211.831C29.3147 209.868 21.3629 206.185 14.0131 199.309C7.01179 192.76 4.28339 183.467 3.38219 175.476C2.93576 171.518 2.9502 167.982 3.07701 165.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M3.07701 304.438C3.10316 303.914 3.13402 303.433 3.16644 303H42.4637V352.583C40.686 352.27 38.2636 351.735 35.4415 350.831C29.3147 348.868 21.3629 345.185 14.0131 338.309C7.01179 331.76 4.28339 322.467 3.38219 314.476C2.93576 310.518 2.9502 306.982 3.07701 304.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M259.386 30.4384C259.36 29.9139 259.329 29.4327 259.296 29H219.999V78.583C221.777 78.2698 224.199 77.7347 227.021 76.8306C233.148 74.8676 241.1 71.1848 248.45 64.3092C255.451 57.7595 258.179 48.4666 259.081 40.4763C259.527 36.5181 259.513 32.9823 259.386 30.4384Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M259.923 162.438C259.897 161.914 259.866 161.433 259.834 161H220.536V210.583C222.314 210.27 224.736 209.735 227.558 208.831C233.685 206.868 241.637 203.185 248.987 196.309C255.988 189.76 258.717 180.467 259.618 172.476C260.064 168.518 260.05 164.982 259.923 162.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M259.923 301.438C259.897 300.914 259.866 300.433 259.834 300H220.536V349.583C222.314 349.27 224.736 348.735 227.558 347.831C233.685 345.868 241.637 342.185 248.987 335.309C255.988 328.76 258.717 319.467 259.618 311.476C260.064 307.518 260.05 303.982 259.923 301.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M65.9965 73.4987C101.999 9.99976 162.501 10.4998 194.996 74.4987" stroke="#223C22" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M66.0004 209.819C102.003 146.32 162.504 146.82 195 210.819" stroke="#223C22" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M67.0004 343.819C103.003 280.32 163.504 280.82 196 344.819" stroke="#223C22" strokeWidth="4" strokeLinecap="round"/>
                    </svg>


                    <h1 className=" text-sl font-normal m-auto text-center text-sm pt-5 italic ">{t("form_igp_tittle2B2")}</h1>
                </div>
                <div className="w-full h-full bg-bgr  relative items-end align-bottom p-4 m-auto">
                    <svg className="opacity-5 w-10 absolute  bottom-0 left-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#8A3529"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#8A3529"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#8A3529"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#8A3529"/>
                    </svg>
                    <svg className="m-auto" width="113" height="297" viewBox="0 0 263 447" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M121.923 130.786V108.255C121.923 106.68 123.519 105.073 125.115 105.073H137.885C139.481 105.073 141.077 106.68 141.077 108.287V130.786C141.077 131.638 141.413 132.456 142.012 133.059C142.611 133.661 143.423 134 144.269 134H169.808C170.654 134 171.466 133.661 172.065 133.059C172.664 132.456 173 131.638 173 130.786V85.7888C173.001 85.3664 172.919 84.9481 172.759 84.5576C172.599 84.1671 172.364 83.8123 172.068 83.5132L163.423 74.8159V53.648C163.423 52.7956 163.087 51.978 162.488 51.3753C161.889 50.7725 161.077 50.4339 160.231 50.4339H153.846C152.999 50.4339 152.188 50.7725 151.589 51.3753C150.99 51.978 150.654 52.7956 150.654 53.648V61.9596L133.76 44.9443C133.464 44.6449 133.111 44.4075 132.724 44.2454C132.336 44.0834 131.92 44 131.5 44C131.08 44 130.664 44.0834 130.276 44.2454C129.889 44.4075 129.536 44.6449 129.24 44.9443L90.9322 83.5132C90.6359 83.8123 90.4011 84.1671 90.2411 84.5576C90.0812 84.9481 89.9993 85.3664 90 85.7888V130.786C90 131.638 90.3363 132.456 90.935 133.059C91.5337 133.661 92.3457 134 93.1923 134H118.731C119.577 134 120.389 133.661 120.988 133.059C121.587 132.456 121.923 131.638 121.923 130.786Z" fill="#223C22"/>
                        <path d="M120.923 265.786V243.255C120.923 241.68 122.519 240.073 124.115 240.073H136.885C138.481 240.073 140.077 241.68 140.077 243.287V265.786C140.077 266.638 140.413 267.456 141.012 268.059C141.611 268.661 142.423 269 143.269 269H168.808C169.654 269 170.466 268.661 171.065 268.059C171.664 267.456 172 266.638 172 265.786V220.789C172.001 220.366 171.919 219.948 171.759 219.558C171.599 219.167 171.364 218.812 171.068 218.513L162.423 209.816V188.648C162.423 187.796 162.087 186.978 161.488 186.375C160.889 185.773 160.077 185.434 159.231 185.434H152.846C151.999 185.434 151.188 185.773 150.589 186.375C149.99 186.978 149.654 187.796 149.654 188.648V196.96L132.76 179.944C132.464 179.645 132.111 179.407 131.724 179.245C131.336 179.083 130.92 179 130.5 179C130.08 179 129.664 179.083 129.276 179.245C128.889 179.407 128.536 179.645 128.24 179.944L89.9322 218.513C89.6359 218.812 89.4011 219.167 89.2411 219.558C89.0812 219.948 88.9993 220.366 89 220.789V265.786C89 266.638 89.3363 267.456 89.935 268.059C90.5337 268.661 91.3457 269 92.1923 269H117.731C118.577 269 119.389 268.661 119.988 268.059C120.587 267.456 120.923 266.638 120.923 265.786Z" fill="#223C22"/>
                        <path d="M120.923 400.786V378.255C120.923 376.68 122.519 375.073 124.115 375.073H136.885C138.481 375.073 140.077 376.68 140.077 378.287V400.786C140.077 401.638 140.413 402.456 141.012 403.059C141.611 403.661 142.423 404 143.269 404H168.808C169.654 404 170.466 403.661 171.065 403.059C171.664 402.456 172 401.638 172 400.786V355.789C172.001 355.366 171.919 354.948 171.759 354.558C171.599 354.167 171.364 353.812 171.068 353.513L162.423 344.816V323.648C162.423 322.796 162.087 321.978 161.488 321.375C160.889 320.773 160.077 320.434 159.231 320.434H152.846C151.999 320.434 151.188 320.773 150.589 321.375C149.99 321.978 149.654 322.796 149.654 323.648V331.96L132.76 314.944C132.464 314.645 132.111 314.407 131.724 314.245C131.336 314.083 130.92 314 130.5 314C130.08 314 129.664 314.083 129.276 314.245C128.889 314.407 128.536 314.645 128.24 314.944L89.9322 353.513C89.6359 353.812 89.4011 354.167 89.2411 354.558C89.0812 354.948 88.9993 355.366 89 355.789V400.786C89 401.638 89.3363 402.456 89.935 403.059C90.5337 403.661 91.3457 404 92.1923 404H117.731C118.577 404 119.389 403.661 119.988 403.059C120.587 402.456 120.923 401.638 120.923 400.786Z" fill="#2EA153"/>
                        <rect x="43" y="3" width="177" height="441" stroke="#223C22" strokeWidth="6"/>
                        <path d="M3.61412 33.4384C3.64027 32.9139 3.67113 32.4327 3.70355 32H43.0008V81.583C41.2231 81.2698 38.8007 80.7347 35.9786 79.8306C29.8518 77.8676 21.9 74.1848 14.5503 67.3092C7.5489 60.7595 4.8205 51.4666 3.9193 43.4763C3.47287 39.5181 3.48731 35.9823 3.61412 33.4384Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M3.07701 165.438C3.10316 164.914 3.13402 164.433 3.16644 164H42.4637V213.583C40.686 213.27 38.2636 212.735 35.4415 211.831C29.3147 209.868 21.3629 206.185 14.0131 199.309C7.01179 192.76 4.28339 183.467 3.38219 175.476C2.93576 171.518 2.9502 167.982 3.07701 165.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M3.07701 304.438C3.10316 303.914 3.13402 303.433 3.16644 303H42.4637V352.583C40.686 352.27 38.2636 351.735 35.4415 350.831C29.3147 348.868 21.3629 345.185 14.0131 338.309C7.01179 331.76 4.28339 322.467 3.38219 314.476C2.93576 310.518 2.9502 306.982 3.07701 304.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M259.386 30.4384C259.36 29.9139 259.329 29.4327 259.296 29H219.999V78.583C221.777 78.2698 224.199 77.7347 227.021 76.8306C233.148 74.8676 241.1 71.1848 248.45 64.3092C255.451 57.7595 258.179 48.4666 259.081 40.4763C259.527 36.5181 259.513 32.9823 259.386 30.4384Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M259.923 162.438C259.897 161.914 259.866 161.433 259.834 161H220.536V210.583C222.314 210.27 224.736 209.735 227.558 208.831C233.685 206.868 241.637 203.185 248.987 196.309C255.988 189.76 258.717 180.467 259.618 172.476C260.064 168.518 260.05 164.982 259.923 162.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M259.923 301.438C259.897 300.914 259.866 300.433 259.834 300H220.536V349.583C222.314 349.27 224.736 348.735 227.558 347.831C233.685 345.868 241.637 342.185 248.987 335.309C255.988 328.76 258.717 319.467 259.618 311.476C260.064 307.518 260.05 303.982 259.923 301.438Z" stroke="#223C22" strokeWidth="6"/>
                        <path d="M65.9965 73.4987C101.999 9.99976 162.501 10.4998 194.996 74.4987" stroke="#223C22" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M66.0004 209.819C102.003 146.32 162.504 146.82 195 210.819" stroke="#223C22" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M67.0004 343.819C103.003 280.32 163.504 280.82 196 344.819" stroke="#223C22" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                    <h1 className=" text-bg2 font-normal m-auto text-center text-sm pt-5 italic ">{t("form_igp_tittle2B1")}</h1>

                </div>
               
            </div>
            <button className="bg-bgr border-2 border-bg2 text-bg2 m-auto text-sm  w-48 py-2 flex items-center justify-center mt-20 transition-all duration-150 relative z-10">
                Ejemplo informe IGP
            </button>

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
