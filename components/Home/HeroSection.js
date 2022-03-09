import { useTranslation } from "next-i18next";
import Image from "next/image"

export default function HeroSection() {

    const ytvideo = ["https://player.vimeo.com/video/685044859?h=6bae6281ba&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" , "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]
    const { t } = useTranslation('common');

    return (
        
        <div className="w-full h-screen font-heads bg-bgf  relative flex flex-col ">
                
            
                <iframe className="relative z-10 w-screen m-auto h-screen scale-100  rounded-lg shadow-xl" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="fullscreen; autoplay; clipboard-write; picture-in-picture" allowFullScreen></iframe>
                <Image className='absolute h-full opacity-5 bottom-0 '  src="/heroimg.png" layout='fill' objectFit='cover' objectPosition='center' alt="" />
            
        </div>
    )
}
