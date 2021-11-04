import Image from "next/image"


export default function Rol() {
    return (
        <div className="bg-bd w-full flex z-30 h-full  sm:mb-0" >
            <div className="relative w-screen h-full">
            <div className="block max-w-xl mx-auto text-center items-center justify-center relative z-10  text-bd">
                <h1 className="text-4xl font-medium mb-28 mt-10 text-white uppercase tracking-widest sm:pl-10 pt-10 sm:pt-0 px-3">Elige el rol que quieras</h1>
                <div className="grid w-full h-full bg-bd sm:grid-cols-2 gap-40 mt-10 place-content-center max-w-6xl px-3 sm:px-0">
                        <div className="relative w-full h-80 cursor-pointer hover:scale-105 transition-all duration-150">

                            <div className="absolute z-10 top-0 left-3 h-24 w-60 rounded-3xl bg-bgr">
                                    <h1 className=" font-semibold text-bd uppercase mt-2">Comprador</h1>
                                </div>
                            
                            <div className="bg-bl  rounded-3xl w-60 h-96 pt-5 px-3 absolute left-0 z-30 top-10 ">
                                
                                <div className="absolute z-30 h-full top-10 left-0">
                                    <Image src="/buyersicon.png" width="143" height="143" />
                                    <h1 className="text-white font-medium text-normal mt-4">RECIBE OFERTAS O BUSCA PROPIEDADES</h1>
                                    <p className="text-bgr font-light text-sm mt-4">Solamente agrega tus preferencias y recibirás ofertas de propiedades </p>
                                    <button className=" font-medium w-32 rounded-lg px-8 py-2 shadow-lg uppercase mt-6 text-bd border-bgr bg-bgr border hover:scale-110 transition-all  ease-out z-20">unete</button>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="relative z-30 w-72 h-96 cursor-pointer hover:scale-105 transition-all duration-150">

                            <div className="absolute top-0 left-3 h-24 w-60 rounded-3xl bg-bgr">
                                    <h1 className=" font-semibold text-bd uppercase mt-2">Vendedor</h1>
                                </div>
                            
                            <div className="bg-bl  rounded-3xl w-60 h-96 pt-5 px-3 absolute left-0 top-10 ">
                                
                                <div className="absolute z-30 h-full top-10 left-0">
                                    <Image src="/sellersicon.png" width="143" height="143" />
                                    <h1 className="text-white font-medium text-normal mt-4">RECIBE OFERTAS O BUSCA PROPIEDADES</h1>
                                    <p className="text-bgr font-light text-sm mt-4">Solamente agrega tus preferencias y recibirás ofertas de propiedades </p>
                                    <button className="font-semibold w-32 rounded-lg px-8 py-2 shadow-lg uppercase mt-6 text-bd border-bgr bg-bgr border hover:scale-110 transition-all  ease-out z-20">unete</button>
                                </div>
                                
                            </div>
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
