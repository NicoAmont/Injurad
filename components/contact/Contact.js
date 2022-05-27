import React from 'react'
import { useTranslation } from "next-i18next";
import FormContact from './FormContact';


export default function Contact() {
    const { t } = useTranslation('common');

  return (
    <div className="bg-bgrS bg-opacity-90 pt-32 md:pt-40 pb-20">
        <div className="max-w-4xl m-auto px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 text-bg2 uppercase">{t("Contact_tittle")}</h1>
            <div className=" mx-auto ">
                <h1 className="mb-10 text-lg text-bg2 font-medium ">{t("Contact_subtitle")}</h1>

                
            </div>
        </div>
                <FormContact/>
            
    </div>
    
  )
}
