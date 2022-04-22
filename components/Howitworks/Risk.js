import { useTranslation } from "next-i18next";
import Image from "next/image"


export default function Risk() {

    const { t } = useTranslation('common');
    
    return (

        <div className="flex flex-col w-full h-full relative bg-bgr pb-20 pt-10">
            
            <div className="max-w-6xl w-full h-full relative z-10 m-auto md:px-4 flex-col ">
                
                <h1 className=" text-2xl md:text-4xl text-bg2 font-semibold px-6 text-left uppercase ">
                    {t("risk_tittle")} <span className="text-bg2  text-4xl md:text-4xl">{t("risk_tittleB")}</span> 
                </h1>
                
                <h1 className=" text-2xl  text-sl md:text-4xl font-semibold px-6 mb-20 text-left uppercase">
                    {t("risk_tittleC")} 
                </h1>
                
                <p className="px-6 font-base text-normal text-justify mb-5 ">{t("risk_info")}</p>
                <p className="px-6 font-base text-normal text-justify mb-5 ">{t("risk_info2")}</p>
                <div className="w-full h-auto grid md:grid-cols-2 place-items-center mt-10">
                
                    
                    <div className=" rounded-xl h-32 md:h-20 w-60  hover:scale-110 flex items-start">
                        <div className="w-20  ">
                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                            </svg>                        </div>
                        <div className="flex ">
                            <h1 className="font-normal text-normal w-60">{t("risk_2info")} <span className="font-bold">{t("risk_2n")}</span></h1>
                        </div>
                    </div>
                    
                    <div className=" rounded-full h-32 md:h-20 w-60  hover:scale-110 flex items-start">
                        <div className="w-20   ">
                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                            </svg>                        </div>
                        <div className="flex  ">
                            <h1 className="font-normal text-normal w-60">{t("risk_3info")} <span className="font-bold">{t("risk_3n")}</span> {t("risk_3infob")}</h1>
                        </div>
                    </div>
                    
                    <div className=" rounded-full h-32 md:h-20 w-60  hover:scale-110 flex items-start">
                        <div className="w-20  ">
                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                            </svg>                        </div>
                        <div className=" flex  ">
                            <h1 className="font-normal text-normal w-60">{t("risk_7info")} <span className="font-bold">{t("risk_7n")}</span> {t("risk_7infob")}</h1>
                        </div>
                    </div>
                    <div className=" rounded-full h-32 md:h-20 w-60  hover:scale-110 flex items-start">
                        <div className="w-20  ">
                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                            </svg>                        </div>
                        <div className=" flex ">
                            <h1 className="font-normal text-normal w-60">{t("risk_5info")} <span className="font-bold">{t("risk_5n")}</span> {t("risk_5infob")}</h1>
                        </div>
                    </div>
                    <div className=" rounded-lg h-32 md:h-20 w-60  hover:scale-110 flex items-start ">
                        <div className="w-20   ">
                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                            </svg>                        </div>
                        <div className="flex ">
                            <h1 className="font-normal text-normal w-60"> <span className="font-bold">{t("risk_1n")}</span> {t("risk_1info")}</h1>
                        </div>
                    </div>
                    <div className=" rounded-full h-32 md:h-20 w-60  hover:scale-110 flex items-start">
                        <div className="w-20  ">
                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                            </svg>                        </div>
                        <div className=" flex  ">
                            <h1 className="font-normal text-normal w-60">{t("risk_4info")} <span className="font-bold">{t("risk_4n")}</span> {t("risk_4infob")}</h1>
                        </div>
                    </div>
                    <div className=" rounded-full h-32 md:h-20 w-60   hover:scale-110 flex items-start">
                        <div className="w-20  ">
                        <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                            </svg>                        </div>
                        <div className=" flex  ">
                            <h1 className="font-normal text-normal w-60">{t("risk_6info")} <span className="font-bold">{t("risk_6n")}</span> {t("risk_6infob")}</h1>
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
