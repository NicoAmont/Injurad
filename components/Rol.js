import Image from "next/image"


export default function Rol() {
    return (
        <div className="bg-bd w-full flex z-10 h-full mb-60 sm:mb-0" >
            <div className="relative w-screen h-screen">
            <div className="block max-w-xl mx-auto text-center pt-10 items-center justify-center relative z-10  text-bd">
                <h1 className="text-4xl font-medium mb-20 text-white">Elige el rol que quieras</h1>
                <div className="grid h-full bg-bd sm:grid-cols-2 gap-40 mt-20 place-content-center max-w-6xl">
                        <div className="relative w-72 h-80 cursor-pointer hover:scale-105 transition-all duration-150">

                            <div className="absolute z-10 top-0 left-3 h-24 w-60 rounded-3xl bg-bgr">
                                    <h1 className=" font-semibold text-bd uppercase mt-2">Comprador</h1>
                                </div>
                            
                            <div className="bg-bl  rounded-3xl w-60 h-80 pt-5 px-3 absolute left-0 z-20 top-10 ">
                                
                                <div className="absolute z-30 h-full top-10">
                                    <Image src="/buyersicon.png" width="143" height="143" />
                                    <h1 className="text-bgr font-medium text-normal mt-4">RECIBE OFERTAS O BUSCA PROPIEDADES</h1>
                                    <p className="text-bgr font-light text-sm mt-4">Solamente agrega tus preferencias y recibirás ofertas de propiedades </p>
                                    <button className="rounded-lg px-8 py-2 shadow-lg uppercase mt-6 text-bgr border-bgr bg-bl border hover:bg-bd hover:scale-105  ease-out z-20">unete</button>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="relative w-72 h-80 cursor-pointer hover:scale-105 transition-all duration-150">

                            <div className="absolute z-10 top-0 left-3 h-24 w-60 rounded-3xl bg-bgr">
                                    <h1 className=" font-semibold text-bd uppercase mt-2">Vendedor</h1>
                                </div>
                            
                            <div className="bg-bl  rounded-3xl w-60 h-80 pt-5 px-3 absolute left-0 z-20 top-10 ">
                                
                                <div className="absolute z-30 h-full top-10">
                                    <Image src="/sellersicon.png" width="143" height="143" />
                                    <h1 className="text-bgr font-medium text-normal mt-4">RECIBE OFERTAS O BUSCA PROPIEDADES</h1>
                                    <p className="text-bgr font-light text-sm mt-4">Solamente agrega tus preferencias y recibirás ofertas de propiedades </p>
                                    <button className="rounded-lg px-8 py-2 shadow-lg uppercase mt-6 text-bgr border-bgr bg-bl border hover:bg-bd hover:scale-105  ease-out z-20">unete</button>
                                </div>
                                
                            </div>
                        </div>
                   

                </div>
            </div>
            <div className="h-full">
            <svg className="w-full absolute z-0  left-0 sm:bottom-0 bottom-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#DEE6FF" fillOpacity="1" d="M0,256L120,250.7C240,245,480,235,720,197.3C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>    
            </div>


            </div>
        </div>
    )
}
