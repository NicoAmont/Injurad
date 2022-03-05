import { useTranslation } from "next-i18next";
import Image from "next/image"

export default function HeroSection() {

    const ytvideo = ["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/watch?v=UKRY63Buv6A&t=56s",]
    const { t } = useTranslation('common');

    return (
        
        <div className="w-full h-screen font-heads bg-bgf  relative flex flex-col ">
                <div>

                </div>
            
                <iframe className="relative z-10 w-screen m-auto h-screen scale-100  rounded-lg shadow-xl" src={ytvideo[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Image className='absolute h-full opacity-5 bottom-0 '  src="/heroimg.png" layout='fill' objectFit='cover' objectPosition='center' alt="" />
                <h1 className='text-2xl text-bgr m-auto absolute z-0'>Error 404 video not found reload the page</h1>
            
        </div>
    )
}
