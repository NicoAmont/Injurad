import Image from "next/image"
import { useTranslation } from "next-i18next";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

function InfoSection() {
    const { t } = useTranslation('common');

    return (
        <div className="flex flex-col w-full h-full bg-bg2 text-bgr font-heads m-auto pb-10  relative">
        
                
                <svg className=" absolute -top-96 scale-125 left-0  z-0 w-full opacity-5" viewBox="0 0 1573 1517" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                    <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                    <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                    <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                </svg>
            
            

            <div className="m-auto  px-4 lg:pt-28  relative z-20 max-w-7xl">
                
                        
                <div className="grid place-items-center md:grid-cols-2 md:place-items-center m-auto">
                    
                    
                    <div className=" md:ml-2 font-light w-4/5 mt-10">
                        <div className="grid w-full mb-14 m-auto">
                            <h1 className=" text-4xl md:text-4xl  font-bold">{t('pdisection_title')}</h1>
                            <h1 className=" text-4xl md:text-4xl  text-sl font-bold">{t('pdisection_titleb')}</h1>
                            <h1 className=" text-4xl md:text-4xl  text-bgr font-bold">{t('pdisection_titlec')}</h1>
                        </div>
                        <p className="mt-10 text-left max-w-lg  md:pr-0  font-light  md:text-base   "> {t('pdisection_p')}</p>
                        <p className="mt-2 text-left max-w-lg  md:pr-0  font-light  md:text-base   "> {t('pdisection_p22')}</p>
                        
                        <div className="w-full  pt-16">
                        </div>

                    </div> 
                    
                    <div className=" w-3/4  grid gap-4 lg:w-96 mx-auto bg-white rounded-2xl mt-10 ">
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
                            <Disclosure.Panel className=" m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
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
                            <Disclosure.Panel className="m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
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
                            <Disclosure.Panel className=" m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
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
                            <Disclosure.Panel className="m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
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
                            <Disclosure.Panel className="m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
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
                            <Disclosure.Panel className="m-auto bg-bgr text-white font-medium bg-opacity-20  p-4 border- rounded-lg shadow-lg flex flex-col w-full" >
                                <div className="flex m-auto w-full ">
                                    <p className="mb-4 text-sm">  {t("contidion6")}</p>
                                </div>
                                
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                </div>
                </div>
                
                
            </div>

            
            <div className="flex flex-col md:flex-row w-3/4 max-w-4xl m-auto h-auto mb-20  rounded-xl p-5 bg-bgrS text-bgf shadow-xl mt-20">
                <div className=" max-w-4xl flex flex-col md:flex-row m-auto ">
                    <div className="h-auto w-20 md:mb-0 md:w-80 md:pb-7 md:pl-10 m-auto flex ">
                        <Image className=" m-auto"  src="/shield.png" layout='' width={136+'px'} height={136+'px'} alt="" quality={100} />
                    </div>
                    <div className="text-lg font-light text-left flex-col m-auto">
                        <h1 className="text-3xl font-bold mb-4 ml-20">{t("work_zone_garantie_tittle")}</h1>
                        <p className="text-sm text-left w-3/4 m-auto mb-2 ">{t("work_zone_garantie_info1")}</p>
                        <p className="text-sm text-left w-3/4 m-auto">{t("work_zone_garantie_info2")}</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}


export default InfoSection
