import Image from "next/image"
import { useTranslation } from "next-i18next";



function InfoSection() {
    const { t } = useTranslation('common');

    return (
        <div className="flex flex-col w-full h-full bg-bg2 text-bgr font-heads m-auto   relative">
        
            
                <svg className="flex absolute top-0 left-0  z-0 " viewBox="0 0 1573 1517" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                    <path d="M1437.24 486.831L550.304 1516.97L62.4415 818.136L550.304 1187.33L1437.24 486.831Z" fill="white"/>
                    <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                    <path d="M873.753 817.035L1295.69 461.023L399.071 461.024L105.496 790.665L438.625 526.955L873.753 817.035Z" fill="white"/>
                </svg>
            
            

            <div className="flex-row-reverse sm:flex-row m-auto pt-60 relative z-20">
                <div className="flex m-auto justify-center items-center">

                    <Image src="/meeting.png" layout='' width={488+'px'} height={326+'px'} alt="" />
                    <div className="max-w-xl ml-24 font-light">
                        <h1 className="uppercase text-5xl text-sl font-bold">{t('pdisection_title')}</h1>
                        <h1 className="uppercase text-4xl font-bold">{t('pdisection_titleb')}</h1>
                        <p className="mt-10 text-justify max-w-lg "> {t('pdisection_p')}</p>
                    </div>  
                </div>
            </div>

            <div>

            </div>

        </div>
    )
}


export default InfoSection
