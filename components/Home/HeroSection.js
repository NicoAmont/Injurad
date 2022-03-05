import { useTranslation } from "next-i18next";
import Image from "next/image"

export default function HeroSection() {

    const ytvideo = ["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]
    const { t } = useTranslation('common');

    return (
        
        <div className="w-full h-screen font-heads bg-bgf  relative flex flex-col ">
            
                <iframe className="relative mt-28 md:mt-36 xl:mt-44 z-10 w-10/12 m-auto h-3/4 scale-110 border-2 border-sl rounded-lg shadow-xl" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Image className='absolute   h-full opacity-5 bottom-0 '  src="/heroimg.png" layout='fill' objectFit='cover' objectPosition='center' alt="" />
                
            
        </div>
    )
}
