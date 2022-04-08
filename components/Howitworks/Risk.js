import { useTranslation } from "next-i18next";
import Image from "next/image"


export default function Risk() {

    const { t } = useTranslation('common');
    
    return (

        <div className="flex flex-col w-full h-full relative bg-bgr pb-20">
            
            <div className="max-w-6xl w-full h-full relative z-10 m-auto md:px-4 flex-col ">
                
                <h1 className=" text-2xl md:text-4xl font-semibold px-6 text-left uppercase ">
                    {t("risk_tittle")} <span className="text-bgf  text-4xl md:text-4xl">{t("risk_tittleB")}</span> 
                </h1>
                
                <h1 className=" text-2xl md:text-4xl font-semibold px-6 mb-20 text-left uppercase">
                    {t("risk_tittleC")} 
                </h1>
                
                <p className="px-6 font-base text-lg text-justify mb-5 ">{t("risk_info")}</p>
                <p className="px-6 font-base text-lg text-justify mb-5 ">{t("risk_info2")}</p>
                <div className="w-full h-auto grid md:grid-cols-2">
                
                    
                    <div className=" rounded-xl h-32 w-8/12 md:w-1/2 flex md:pl-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                        <div className="w-20 m-auto mr-4">
                        <Image className=""  src="/1n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                        </div>
                        <div className="flex m-auto mr-4">
                            <h1 className="font-normal text-lg">{t("risk_2info")} <span className="font-bold">{t("risk_2n")}</span></h1>
                        </div>
                    </div>
                    
                    <div className=" rounded-full h-32 w-8/12 md:w-1/2 flex pr-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                        <div className="w-40 m-auto  mr-4">
                        <Image className=""  src="/1n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                        </div>
                        <div className="flex m-auto">
                            <h1 className="font-normal text-lg">{t("risk_3info")} <span className="font-bold">{t("risk_3n")}</span> {t("risk_3infob")}</h1>
                        </div>
                    </div>
                    
                    <div className=" rounded-full h-32 w-8/12 md:w-1/2 flex md:pl-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                        <div className="w-28 m-auto mr-4">
                        <Image className=""  src="/1n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                        </div>
                        <div className=" flex m-auto mr-4">
                            <h1 className="font-normal text-lg">{t("risk_7info")} <span className="font-bold">{t("risk_7n")}</span> {t("risk_7infob")}</h1>
                        </div>
                    </div>
                    <div className=" rounded-full h-32 w-8/12 md:w-1/2 flex md:pl-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                        <div className="w-40 m-auto mr-4">
                        <Image className=""  src="/1n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                        </div>
                        <div className=" flex m-auto mr-4">
                            <h1 className="font-normal text-lg">{t("risk_5info")} <span className="font-bold">{t("risk_5n")}</span> {t("risk_5infob")}</h1>
                        </div>
                    </div>
                    <div className=" rounded-lg h-32 w-8/12 md:w-1/2 flex pr-8 mb-10 py-4 m-auto md:px-10 hover:scale-110 ">
                        <div className="w-44 m-auto  mr-4">
                            <Image className=""  src="/1n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                        </div>
                        <div className="flex m-auto">
                            <h1 className="font-normal text-lg"> <span className="font-bold">{t("risk_1n")}</span> {t("risk_1info")}</h1>
                        </div>
                    </div>
                    <div className=" rounded-full h-32 w-8/12 md:w-1/2 flex md:pl-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                        <div className="w-72 m-auto mr-4">
                        <Image className=""  src="/1n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                        </div>
                        <div className=" flex m-auto mr-4">
                            <h1 className="font-normal text-lg">{t("risk_4info")} <span className="font-bold">{t("risk_4n")}</span> {t("risk_4infob")}</h1>
                        </div>
                    </div>
                    <div className=" rounded-full h-32 w-8/12 md:w-1/2 flex md:pl-8 mb-10 py-4 m-auto md:px-10 hover:scale-110">
                        <div className="w-64 m-auto mr-4">
                        <Image className=""  src="/1n.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                        </div>
                        <div className=" flex m-auto mr-4">
                            <h1 className="font-normal text-lg">{t("risk_6info")} <span className="font-bold">{t("risk_6n")}</span> {t("risk_6infob")}</h1>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row w-auto max-w-4xl m-auto h-auto border-bg  rounded-xl py-10 bg-b text-bgr shadow-xl mt-20 hover:scale-105">
                    <div className="w-3/4 max-w-3xl mauto flex flex-col md:flex-row m-auto ">
                    
                        <div className=" w-40 md:w-80 m-auto  md:mr-4">
                            <Image className=""  src="/CP.png" layout='' width={400+'px'} height={400+'px'} alt="" quality={100} />
                        </div>
                        <div className="text-lg font-light text-center">
                            &quot;{t("cp_slogan")}&quot;
                            <div className="text-base font-light mt-4 text-center w-3/4 m-auto">
                            &quot;{t("cp_nomber")}&quot;
                            <a className="underline font-normal" href="https://www.casapropia.es"> www.casapropia.es</a> 
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
                
            </div>
            <button></button>
            
        </div>
    )
}


// primer apellito y el municipio 
// dropdown de los municipios con todos los municipios de españa 
// un formulario donde se pueda llenar los campos del correo de respuesta 2
// un formulario donde se envie que ya se pago
// un formulario donde se envie la informacion pertinente al caso 
// en el correo colocar al inicio la seña de que esta en un paso especifico de 3
// diseño de factura chevere
// diseño de tarjeta profesional y de curriculum especifico en el correo de respuesta 2
// en correo igp envio de formulario diciendo que si no le fue facil conseguir los documentos enviar un correo con el caso para que injurad ayude a conseguirlos 

// info@casapropia.es
