import Image from "next/image"
import { useTranslation } from "next-i18next";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

function InfoSection() {
    const { t } = useTranslation('common');

    return (
        <div className="flex flex-col w-full h-full bg-bg2 text-bgr font-heads m-auto pb-10  relative">
        
                <svg className="absolute w-full top-0 left-0"  viewBox="0 0 1440 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="557" height="55" fill="white"/>
                <path d="M557 0H1443L557 55V0Z" fill="white"/>
                <path d="M547 0H571L557 55H547V0Z" fill="white"/>
                </svg>


            
                <svg className=" absolute -top-96 scale-125 left-0  z-0 w-full opacity-5" viewBox="0 0 1573 1517" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                    <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                    <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                    <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                </svg>
            
            

            <div className="m-auto pt-20 px-4 lg:pt-40  relative z-20 max-w-7xl">
                
                        
                <div className="grid place-items-center md:grid-cols-2 md:place-items-center m-auto">
                    
                    
                    <div className=" md:ml-2 font-light w-4/5 mt-10">
                        <div className="grid place-items-center w-full mb-14 m-auto">
                            <h1 className="uppercase text-2xl md:text-5xl  font-bold">{t('pdisection_title')}</h1>
                            <h1 className="uppercase text-center text-4xl md:text-4xl  text-sl font-bold">{t('pdisection_titleb')}</h1>
                            <h1 className="uppercase text-xl md:text-4xl  font-bold text-center ">{t('pdisection_titlec')}</h1>
                        </div>
                        <p className="mt-10 text-left max-w-lg  md:pr-0  font-light text-lg md:text-xl   "> {t('pdisection_p')}</p>
                        <button className="bg-sl text-bgr w-48 py-2 m-auto flex items-center justify-center mt-16 hover:bg-bg2 transition-all duration-150">
                            Tarifas y Servicios
                            <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                            </svg>
                        </button>
                        <div className="w-full  pt-16">
                        </div>

                    </div> 
                    
                    <div className=" w-3/4 md:w-full grid place-items-center gap-4 lg:w-full mx-auto bg-white rounded-2xl mt-10 ">
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                <span className="text-normal font-normal text-bgf  ">{t("contidion1_tittle")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-bgf`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className=" bg-bgr text-bg  p-4 border-2 border-sl rounded-lg shadow-lg flex flex-col w-3/4" >
                                <div className="flex m-auto w-full">
                                    <p className="mb-4 text-sm">  {t("contidion1")}</p>
                                </div>
                                
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                <span className="text-normal font-normal text-bgf  ">{t("contidion2_tittle")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-bgf`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className=" bg-bgr text-bg  p-4 border-2 border-sl rounded-lg shadow-lg flex flex-col w-3/4" >
                                <div className="flex m-auto w-full">
                                    <p className="mb-4 text-sm">  {t("contidion2")}</p>
                                </div>
                                
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                <span className="text-normal font-normal text-bgf  ">{t("contidion3_tittle")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-bgf`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className=" bg-bgr text-bg text-normal  p-4 border-2 border-sl rounded-lg shadow-lg flex flex-col w-3/4" >
                                <div className="flex m-auto w-full ">
                                    <p className="mb-4 text-sm">  {t("contidion3")}</p>
                                </div>
                                
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                <span className="text-normal font-normal text-bgf  ">{t("contidion4_tittle")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-bgf`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className=" bg-bgr text-bg text-normal  p-4 border-2 border-sl rounded-lg shadow-lg flex flex-col w-3/4" >
                                <div className="flex m-auto w-full ">
                                    <p className="mb-4 text-sm">  {t("contidion4")}</p>
                                </div>
                                
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                <span className="text-normal font-normal text-bgf  ">{t("contidion5_tittle")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-bgf`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className=" bg-bgr text-bg text-normal  p-4 border-2 border-sl rounded-lg shadow-lg flex flex-col w-3/4" >
                                <div className="flex m-auto w-full ">
                                    <p className="mb-4 text-sm">  {t("contidion5")}</p>
                                </div>
                                
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                <span className="text-normal font-normal text-bgf  ">{t("contidion6_tittle")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-bgf`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className=" bg-bgr text-bg text-normal  p-4 border-2 border-sl rounded-lg shadow-lg flex flex-col w-3/4" >
                                <div className="flex m-auto w-full ">
                                    <p className="mb-4 text-sm">  {t("contidion6")}</p>
                                </div>
                                
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className=" bg-bgr bg-opacity-90 shadow-2xl  rounded-lg flex justify-between w-full max-w-lg px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                <span className="text-normal font-normal text-bgf  ">{t("contidion7_tittle")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-bgf`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className=" bg-bgr text-bg text-normal  p-4 border-2 border-sl rounded-lg shadow-lg flex flex-col w-3/4" >
                                <div className="flex m-auto w-full ">
                                    <p className="mb-4 text-sm">  {t("contidion7")}</p>
                                </div>
                                
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>

                </div>

                </div>

                
                
            </div>


        </div>
    )
}


export default InfoSection
