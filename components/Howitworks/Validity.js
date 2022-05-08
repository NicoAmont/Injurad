import { useTranslation } from "next-i18next";
import Image from "next/image"

export default function Validity() {
    const { t } = useTranslation('common');

  return (
    <div className="w-full h-full bg-bg2 flex flex-col relative ">
        

        <svg className="w-10 md:w-20 absolute bottom-10 md:bottom-10 right-5 md:right-10"  viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
            <path d="M30.5306 10.3415L11.69 32.2242L1.32663 17.3792L11.69 25.2217L30.5306 10.3415Z" fill="#fff"/>
            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
            <path d="M18.5609 17.3561L27.5238 9.79357L8.47747 9.79359L2.24123 16.796L9.3177 11.1941L18.5609 17.3561Z" fill="#fff"/>
        </svg>

        <div className="w-full h-full z-0 absolute">
            <Image className='z-0 brightness-90 opacity-10 '  src="/imgvald.png" layout='fill' objectFit='cover' objectPosition='center' alt="" />
        </div>

        <div className="max-w-6xl h-auto grid md:grid-cols-1 place-items-center place-content-center m-auto md:p-8 relative z-10 text-bgr py-15 " >
            
            <div className=" w-11/12 md:w-full h-full flex-col pt-16">
                <h1 className=" font-semibold text-2xl sm:text-4xl mb-10  ">{t("validity_tittle")} <span className="text-sl">{t("validity_tittle2")}</span> {t("validity_tittle3")}</h1>
                <h1 className=" font-base text-base  mb-10 font-normal w-3/4">{t("validity_info1")}</h1>
                <h1 className=" font-base text-base  mb-5 ">{t("validity_info2_1")}</h1>

                <div className="w-full md:w-3/4  m-auto h-auto relative items-end align-bottom ">
                
                        <div className=" text-bgr font-normal text-left text-sm pt-5 flex flex-row  ">
                            <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#ffff"/>
                            </svg>
                            <p className="w-60 md:w-80">{t("validity_info2_2")}</p> 
                        </div>
                        <div className=" text-bgr font-normal text-left text-sm pt-5 flex flex-row">
                            <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#ffff"/>
                            </svg>
                            <p className="w-60 md:w-80">{t("validity_info2_3")}</p> 
                        </div>
                        <div className=" text-bgr font-normal text-left text-sm pt-5 flex flex-row  ">
                            <svg className="mr-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#fff"/>
                            </svg>
                            <p  className="w-60 md:w-80">{t("validity_info2_4")}</p> 
                        </div>
                        
                    </div> 
                <h1 className=" font-base text-base text-justify mt-5 ">{t("validity_info2_5")}</h1>
                
                
            </div>
        
        </div>
        {/* <svg className="w-full relative z-10 " viewBox="0 0 1440 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L1440 102H0V0Z" fill="white"/>
        </svg> */}
    </div>
  )
}
