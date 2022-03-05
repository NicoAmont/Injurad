import React from 'react'
import { useTranslation } from "next-i18next";
import Image from "next/image"

export default function Headertys() {
    const { t } = useTranslation('common');
  return (
    <div className="bg-bgr  pt-32 md:pt-40 pb-20">
        <div className="max-w-6xl m-auto px-8">

        <h1 className="md:ml-10 text-4xl md:text-6xl font-bold mb-10 text-bg2 uppercase">Tarifas y servicios</h1>
        <div className="w-3/4 m-auto mb-20 text-base md:text-lg ">

            <p className="mb-5 ">Las tarifas se han establecido con profesionales externos que han firmado una declaración de integridad y son supervisadas por el comité de arbitraje formado por miembros de Casa Propia. Casa Propia no recibe comisiones ni devoluciones.</p>
            
        </div>
        
        <div className="flex flex-col w-full h-full relative bg-bgr text-bg2 pb-20">
        


        <div className="max-w-6xl w-full h-full relative z-10 m-auto md:px-4">       
            

            <div className="w-3/4 md:w-full h-auto grid md:grid-cols-2">

                <div className=" rounded-lg h-32 w-10/12 md:w-1/2 flex pr-8 mb-10 py-4 m-auto md:px-10 hover:scale-110 ">
                    <div className="w-72 m-auto  mr-4">
                    </div>
                    <div className="flex m-auto">
                        <h1></h1>
                        <h1 className="font-normal text-lg"> <span className="font-bold">{t("risk_1n")}</span> {t("risk_1info")}</h1>
                    </div>
                </div>

                

                <div className=" rounded-xl h-32 w-10/12 md:w-1/2 flex pl-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                    <div className="flex m-auto mr-4">
                        <h1 className="font-normal text-lg">{t("risk_2info")} <span className="font-bold">{t("risk_2n")}</span></h1>
                    </div>
                    <div className="w-64 m-auto mr-4">
                    </div>
                </div>

                <div className=" rounded-full h-32 w-10/12 md:w-1/2 flex pr-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                    <div className="w-48 m-auto  mr-4">
                    </div>
                    <div className="flex m-auto">
                        <h1 className="font-normal text-lg">{t("risk_3info")} <span className="font-bold">{t("risk_3n")}</span> {t("risk_3infob")}</h1>
                    </div>
                </div>

                <div className=" rounded-full h-32 w-10/12 md:w-1/2 flex pl-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                    <div className="flex m-auto mr-4">
                    <h1></h1>
                        <h1 className="font-normal text-lg">{t("risk_4info")} <span className="font-bold">{t("risk_4n")}</span> {t("risk_4infob")}</h1>
                    </div>
                    <div className="w-64 m-auto mr-4">
                    </div>
                </div>
            </div>

            
            
        </div>
        
    </div>

            
        </div>
            
    </div>
  )
}
