import { useTranslation } from "next-i18next";
import Image from "next/image"

export default function HeroSection() {

    
    const { t } = useTranslation('common');
    return (
        
        <div className="w-full h-screen font-heads bg-bgrS  realtive flex flex-col ">

            
            
            <div className=" w-screen flex flex-col items-center lg:items-start align-top text-center lg:text-left relative text-bgr font-bold m-auto z-10 lg:left-14 tracking-widest top-1/3 max-w-7xl" >
                <h1 className="text-4xl sm:text-7xl uppercase">{t('hero_title')}</h1> 
                <h1 className="text-3xl sm:text-7xl uppercase  text-sl">{t('hero_titleb')}</h1>  
                <h1 className="text-4xl sm:text-7xl uppercase ">{t('hero_titlec')}  <span className="text-4xl sm:text-7xl text-sl">{t('hero_titled')}</span> </h1> 
                <h1 className="text-base sm:text-base font-normal mt-4 px-1 ">{t('hero_subtitle')}</h1>
                <button className="bg-sl text-bgr w-48 py-2 flex items-center justify-center mt-16 hover:bg-bg2 transition-all duration-150">
                    Conoce más
                    <svg className="pl-2 hover:ml-2 transition-all duration-150 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="white"/>
                    </svg>
                </button>
            </div>
            
            <div className="w-full h-screen z-0 ">
                
                <Image className='absolute w-96 brightness-90 '  src="/heroimg.png" layout='fill' objectFit='cover' objectPosition='center' alt="" />
                
            </div>
            
        </div>
    )
}
