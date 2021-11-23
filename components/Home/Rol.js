import { useTranslation } from "next-i18next";



export default  function Rol(props) {
    const { t } = useTranslation('common');

    return (
    <div className="bg-white w-full z-30 h-full  top-20 sm:mb-0 relative overflow-hidden "  >
            
            {/* <div className="absolute w-full h-full z-30 md:bottom-0 xl:top-64 left-20 ">
                <h1 className="text-xl md:text-6xl  leading-relaxed ml-2 mt-44 text-left text-white"> Encuentra tu <span className="text-xl hover:text-rb md:text-6xl hover: transition-all duration-1000 ease-out ">casa ideal</span></h1>
                <div className="flex items-left h-full w-full relative left-2">

                    <svg className="mt-2 lg:mt-9 hover:animate-wiggle absolute  sm:mt-9 animate__animated animate__jackInTheBox transition-all delay-1000 duration-1000 infinite w-6 sm:w-14 mb-3" width="42" height="60" viewBox="0 0 41 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="11.0293" y="14.7061" width="5.5147" height="11.0294" fill="#DC0000"/>
                        <rect x="26.3994" y="14.6934" width="4.26117" height="15.3696" transform="rotate(89.8332 26.3994 14.6934)" fill="#DC0000"/>
                        <rect x="21.5625" y="14.375" width="5.5147" height="11.0294" fill="#DC0000"/>
                        <path d="M18.7499 9.55908L26.4705 14.7061H11.0293L18.7499 9.55908Z" fill="#DC0000"/>
                        <circle cx="18.75" cy="18.75" r="17.25" stroke="white" strokeWidth="3"/>
                        <rect x="26.4707" y="35.2178" width="1.47059" height="6.61764" transform="rotate(-26.6177 26.4707 35.2178)" fill="white"/>
                        <rect x="27.6533" y="41.8525" width="5.66063" height="18.2638" transform="rotate(-26.6177 27.6533 41.8525)" fill="white"/>
                        <path d="M28.944 39.6729L29.74 41.0515L27.6572 41.8787L28.944 39.6729Z" fill="white"/>
                        <path d="M28.944 39.6729L29.74 41.0515L27.6572 41.8787L28.944 39.6729Z" fill="white"/>
                        <path d="M29.5957 39.1543L32.7207 39.3381L30.5148 40.4411L29.5957 39.1543Z" fill="white"/>
                        <path d="M29.5957 39.1543L32.7207 39.3381L30.5148 40.4411L29.5957 39.1543Z" fill="white"/>
                        <rect x="37.0566" y="57.3335" width="2.98334" height="1.24025" transform="rotate(-26.7516 37.0566 57.3335)" fill="white"/>
                        <path d="M37.0102 57.1226L37.6602 58.4093L35.8457 58.0884L37.0102 57.1226Z" fill="white"/>
                        <path d="M38.9875 56.1982L40.6249 55.6986L40.2572 57.1692L38.9875 56.1982Z" fill="white"/>
                    </svg>
                    <h2 className=" text-5xl ml-14 sm:text-6xl sm:mt-4 pb-10 text-white">vendela</h2>
                </div>
            </div> */}
            <div className="absolute w-full h-full z-30 md:bottom-0 xl:top-72 ">
                <h1 className="bg-gblue text-xl md:text-4xl  leading-relaxed max-w-2xl h-24 pl-28 mt-44 text-left text-white">{t('title')}</h1>
                <h1 className="bg-white text-xl md:text-xl  leading-relaxed max-w-2xl h-8 pl-28  text-left text-bl">{t('subtitle')}</h1>
                
                
            </div>
            
            <img className="w-full h-full object-contain" src="/foto-portada-buskamos.jpg" width="1661" height="767.15" alt="" />
            
    </div>
            
            
    )
}
