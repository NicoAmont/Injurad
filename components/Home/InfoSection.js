import Image from "next/image"
import { useTranslation } from "next-i18next";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

function InfoSection() {
    const { t } = useTranslation('common');

    return (
        <div className="flex flex-col w-full h-full bg-bg2 text-bgr font-heads m-auto pb-20  relative">
        
                <svg className="absolute w-full top-0 left-0"  viewBox="0 0 1440 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="557" height="55" fill="white"/>
                <path d="M557 0H1443L557 55V0Z" fill="white"/>
                <path d="M547 0H571L557 55H547V0Z" fill="white"/>
                </svg>


            
                <svg className=" absolute -top-96 scale-125 left-0  z-0 w-full opacity-10" viewBox="0 0 1573 1517" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                    <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                    <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                    <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                </svg>
            
            

            <div className="m-auto pt-20 px-4 lg:pt-60 relative z-20 max-w-7xl">
                <div className="grid place-items-center w-full mb-14">
                    <h1 className="uppercase text-3xl md:text-5xl  font-bold">{t('pdisection_title')}</h1>
                    <h1 className="uppercase text-2xl md:text-5xl  text-sl font-bold">{t('pdisection_titleb')}</h1>
                    <h1 className="uppercase text-xl md:text-5xl  font-bold text-center ">{t('pdisection_titlec')}</h1>
                </div>
                        
                <div className="grid place-items-center md:grid-cols-2 md:place-items-center m-auto">
                    
                    <div className="w-full h-full hidden md:block mt-10">
                        <Image className="scale-150 border-2 border-sl rounded-lg"  src="/meeting.png" layout='responsive' width={488+'px'} height={326+'px'} alt="" quality={100} />
                    </div>
                    <div className=" md:ml-24 font-light w-4/5 ">
                        
                        <p className="mt-10 text-justify max-w-lg  md:pr-0  font-normal text-xl md:text-2xl "> {t('pdisection_p')}</p>
                        <div className="w-full  pt-16">
                        </div>
                    </div> 
                </div>

                <div className=" grid place-items-center gap-4 lg:w-full mx-auto bg-white rounded-2xl mt-10 ">
                        <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="border-2 border-sl rounded-lg flex justify-between w-3/4 px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-bgr focus-visible:ring-opacity-75">
                                <span className="text-xl font-medium  uppercase">{t("condition_title1")}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-bgr`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className=" bg-bgr text-bg  p-4 border-2 border-sl rounded-lg shadow-lg flex flex-col w-3/4" >
                                <div className="flex m-auto w-full">
                                    <p className="text-sl border-bg border-b-2 text-4xl  font-extrabold w-2 h-full mr-6">1</p>
                                    <p className="mb-4">  {t("contidion1")}</p>
                                </div>
                                <div className="flex  w-ful mb-4">
                                    <p className="text-sl border-bg border-b-2 text-4xl  font-extrabold w-2 h-full mr-6">2</p>
                                    <p className="mb-4">  {t("contidion2")}</p>
                                </div>
                                <div className="flex  w-full mb-4 ">
                                    <p className="text-sl border-bg border-b-2 text-4xl  font-extrabold w-2 h-full mr-6">3</p>
                                    <p className="mb-4">  {t("contidion3")}</p>
                                </div>
                                <div className="flex w-full mb-4">
                                    <p className="text-sl border-bg border-b-2 text-4xl  font-extrabold w-2 h-full mr-6">4</p>
                                    <p className="mb-4">  {t("contidion4")}</p>
                                </div>
                                <div className="flex  w-full mb-4">
                                    <p className="text-sl border-bg border-b-2 text-4xl  font-extrabold w-2 h-full mr-6">5</p>
                                    <p className="mb-4">  {t("contidion5")}</p>
                                </div>
                                <div className="flex w-full mb-4">
                                    <p className="text-sl border-bg border-b-2 text-4xl  font-extrabold w-2 h-full mr-6">6</p>
                                    <p className="mb-4">  {t("contidion6")}</p>
                                </div>
                                <div className="flex w-full ">
                                    <p className="text-sl border-bg border-b-2 text-4xl  font-extrabold w-2 h-full mr-6">7</p>
                                    <p className="">  {t("contidion7")}</p>
                                </div>
                                
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                </div>
                
            </div>


        </div>
    )
}


export default InfoSection
