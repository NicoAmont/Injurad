import Image from "next/image"


export default function Rol() {
    return (
        <div className="bg-white w-full flex place-content-center text-center z-30 h-full  sm:mb-0" >
            <div className="relative w-screen h-full">
            <div className="block max-w-7xl mx-auto text-center items-center justify-center relative z-10  text-bd h-full">
                <div className="grid grid-cols-1  sm:grid-cols-4 gap-5 w-full h-full">
                    
                    <div className="bg-gwhite w-full h-full  ">
                        <img className="w-full h-full object-cover  opacity-90 hover:opacity-100  transition-all duration-150" src="/WhatsApp Image 2021-11-05 at 8.26.53 AM.jpeg" alt="" />
                    </div>
                    <div className="bg-bl w-full h-full  ">
                        <img className="w-full h-full object-cover  opacity-90 hover:opacity-100  transition-all duration-150" src="/pexels-kindel-media-7578904.jpg" alt="" />
                    </div>
                   
                    <div className="bg-thome w-full h-full  ">
                        <img className="w-full h-full object-cover  opacity-90 hover:opacity-100  transition-all duration-150" src="/pexels-blue-bird-7218596.jpg" alt="" />
                    </div>
                    <div className="bg-subs2 w-full h-full  ">
                        <img className="w-full h-full object-cover  opacity-90 hover:opacity-100  transition-all duration-150" src="/pexels-cottonbro-4569294.jpg" alt="" />
                    </div>
                    
                </div>


            </div>
            <div className="h-full">
            <svg className="w-full relative z-0  left-0 sm:bottom-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#DEE6FF" fillOpacity="1" d="M0,256L120,250.7C240,245,480,235,720,197.3C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>    
            </div>


            </div>
        </div>
    )
}
