import { useTranslation } from "next-i18next";
import React, {useState} from "react";


export default function Faq() {
    const { t } = useTranslation('common');


    const [content, setContent] = useState("general");
    return (
        <div className="w-full h-auto bg-bgr">
            <div className="w-full h-full  flex pt-24 sm:pt-36 ">
                <div className="w-full max-w-6xl  mx-auto px-8">

                    <h1 className="text-bg2 font-bold text-2xl sm:text-4xl m-auto mb-10 uppercase">Todo lo que cualquier comprador debe saber para entender el mercado inmobiliario español</h1>
                    <p className="w-auto h-auto font-heads mb-10">Recomendamos leer las preguntas mas frecuentes de compradores. Es importante estar bien preparado ante argumentos y explicaciones de profesionales que intervienen durante el proceso de compraventa.</p>
                    <div className="w-full h-auto grid grid-flow-col md:grid-flow-row">
                        <div className="w-auto md:w-60 ">
                            <div>En general</div>
                            <div>Relacionado con profesionales involucrados en la compraventa</div>
                            <div>Sobre los servicios de Injurad</div>
                            <div>Sobre INJURAD</div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
