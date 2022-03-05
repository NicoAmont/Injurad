import React from 'react'
import { useTranslation } from "next-i18next";


export default function Contact() {
    const { t } = useTranslation('common');

  return (
    <div className="bg-bgrS bg-opacity-90 pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl m-auto px-8">
        <h1 className="md:ml-10 text-4xl md:text-6xl font-bold mb-10 text-bg2 uppercase">{t("Contact_tittle")}</h1>
            <div className="max-w-2xl mx-auto ">
                <h1 className="mb-10 text-lg text-bg2 font-medium ">{t("Contact_subtitle")}</h1>
                <htmlform>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail </label>
                    </div>
                    
                    
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
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                            <label htmlFor="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono (+ 01-255-456-7890)</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <select name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required>
                                <option>Chequeo de documentos</option>
                                <option>Contrato de Reserva</option>
                                <option>IGP</option>
                                <option>Otro</option>
                            </select>
                            <label htmlhtmlfor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Etapa del proceso</label>
                        </div>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <textarea type="text" name="floating_email" className="block h-40 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-bg2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-bgrS2 bg-opacity-10" placeholder=" " required />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje </label>
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
