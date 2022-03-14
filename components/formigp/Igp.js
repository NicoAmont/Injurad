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

        <div className="w-full md:w-3/4 m-auto mb-20 text-base md:text-base ">

            <iframe className="relative mt-10 mb-10 md:mt-20 z-10 w-10/12 m-auto h-96 scale-110 border-2 border-sl rounded-lg shadow-xl" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="mb-5 ">{t("form_igp_info1")}</p>
            <p className="mb-5 font-normal">{t("form_igp_info2")}</p>

            <div className="w-full mb-10">
                <div className="w-full md:w-3/4  m-auto h-auto relative items-end align-bottom  ">
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
        <div className="w-full grid md:grid-cols-2 my-20">
            <div className="w-full md:w-3/4 mb-10 md:mb-0 m-auto h-auto relative items-end align-bottom border-bg2 pl-4 border-l-2  ">
                <p className=" mb-2  text-xl text-bg2 font-medium">{t("form_igp_t2")}</p>
                <p className=" mb-2  text-base">{t("form_igp_t2b")}</p>
            </div>
            <div className="w-full md:w-3/4  m-auto h-auto relative items-end align-bottom border-bg2 pl-4 border-l-2 ">
                <p className=" mb-2  text-xl text-bg2 font-medium">{t("form_igp_t22")}</p>
                <p className=" mb-2  text-base">{t("form_igp_t2b2")}</p>
            </div>
        </div>
        <div className="w-11/12 md:w-3/4 m-auto mb-20 text-xl flex flex-col">

            <h2 className="text-2xl text-bg2 font-medium mb-10">{t("form_igp_tittle2")}</h2>
            <p className="text-lg text-bg2 font-normal mb-10">{t("form_igp_tittle2B")}</p>
            <div className="w-3/4 md:w-full grid sm:grid-cols-2 md:grid-cols-3 m-auto gap-20 place-items-center">
                <div className="w-full h-full bg-bgr border-2 border-bg2 relative items-end align-bottom p-4 m-auto">
                    <svg className="opacity-5 w-44 absolute  top-7 left-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#326754"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#326754"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#326754"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#326754"/>
                    </svg>
                    <h1 className=" text-bg2 font-normal m-auto text-center text-sm pt-5 italic ">{t("form_igp_tittle2B1")}</h1>
                </div>
                <div className="w-full h-full bg-bgr border-2 border-sl relative items-end align-bottom p-4 m-auto">
                    <svg className="opacity-5 w-44 absolute  top-7 left-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#E5AE35"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#E5AE35"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#E5AE35"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#E5AE35"/>
                    </svg>
                    <h1 className=" text-sl font-normal m-auto text-center text-sm pt-5 italic ">{t("form_igp_tittle2B2")}</h1>
                </div>
                <div className="w-full h-full bg-bgr border-2 border-bgfva relative items-end align-bottom p-4 m-auto">
                    <svg className="opacity-5 w-44 absolute  top-7 left-2 "  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#8A3529"/>
                        <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#8A3529"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#8A3529"/>
                        <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#8A3529"/>
                    </svg>
                    <h1 className=" text-bgfva font-normal m-auto text-center text-sm pt-5 italic ">{t("form_igp_tittle2B3")}</h1>
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
