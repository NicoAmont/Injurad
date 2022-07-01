import React from 'react'
import Link from "next/link"
import { useTranslation } from "next-i18next";



function Footer() {
    const { t } = useTranslation('common');
  return (
    <div className="w-auto  flex flex-col m-auto items-center  bg-bgf pt-10 place-content-center relative ">
        <div className="flex flex-col lg:flex-row w-full m-auto items-center justify-evenly">
            {/* <div className="flex w-auto px-4 "> 
                <div className="w-full flex m-auto relative">

                    <div className=" flex m-auto h-80  videof">
                        <iframe className=" w-full h-full  m-auto border-2 border-sl rounded-lg shadow-2xl" src="https://www.youtube.com/embed/yDiD8F9ItX0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <button className="absolute bottom-4 left-1/5 sm:left-1/2 bg-bgr shadow-md hover:bg-sl text-bg w-60 h-6 uppercase text-lg font-medium  py-2 flex items-center justify-center mt-16  transition-all duration-150">
                        Conocenos
                        <svg className="pl-2 hover:ml-2 transition-all duration-150 hover:scale-125 " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M2.05762 9.65033C2.05762 9.50313 2.11609 9.36195 2.22018 9.25786C2.32427 9.15377 2.46545 9.0953 2.61265 9.0953H15.7038L12.2104 5.603C12.1061 5.49878 12.0476 5.35743 12.0476 5.21004C12.0476 5.06264 12.1061 4.92129 12.2104 4.81707C12.3146 4.71285 12.4559 4.6543 12.6033 4.6543C12.7507 4.6543 12.8921 4.71285 12.9963 4.81707L17.4366 9.25737C17.4883 9.30893 17.5293 9.37018 17.5573 9.43761C17.5853 9.50504 17.5997 9.57733 17.5997 9.65033C17.5997 9.72334 17.5853 9.79563 17.5573 9.86306C17.5293 9.93049 17.4883 9.99174 17.4366 10.0433L12.9963 14.4836C12.8921 14.5878 12.7507 14.6464 12.6033 14.6464C12.4559 14.6464 12.3146 14.5878 12.2104 14.4836C12.1061 14.3794 12.0476 14.238 12.0476 14.0906C12.0476 13.9432 12.1061 13.8019 12.2104 13.6977L15.7038 10.2054H2.61265C2.46545 10.2054 2.32427 10.1469 2.22018 10.0428C2.11609 9.93872 2.05762 9.79754 2.05762 9.65033Z" fill="#203D46"/>
                        </svg>
                    </button>
                </div>
            </div> */}

            <div className="flex w-auto">
                <div className="w-full h-full flex flex-col m-auto relative ">

                    <svg className=" w-60 max-w-sm mb-10 sm:mb-10    " viewBox="40 0 378 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M107.931 36.381L61.6906 90.0876L36.2558 53.6537L61.6906 72.9015L107.931 36.381Z" fill="#2EA153"/>
                        <path d="M107.931 36.381L61.6906 90.0876L36.2558 53.6537L61.6906 72.9015L107.931 36.381Z" fill="#2EA153"/>
                        <path d="M78.5533 53.596L100.551 35.0352L53.8057 35.0353L38.5001 52.2212L55.8678 38.4726L78.5533 53.596Z" fill="white"/>
                        <path d="M78.5533 53.596L100.551 35.0352L53.8057 35.0353L38.5001 52.2212L55.8678 38.4726L78.5533 53.596Z" fill="white"/>
                        <path d="M136.511 36.7666V44.0908H132.995V71.4541H136.511V78.7783H120.017V71.4541H123.532V44.0908H120.017V36.7666H136.511ZM180.368 78.7783H170.817L153.503 52.3818C152.487 50.8389 151.784 49.6768 151.394 48.8955H151.276C151.433 50.3799 151.511 52.6455 151.511 55.6924V78.7783H142.575V36.7666H152.771L169.44 62.3428C170.202 63.4951 170.905 64.6377 171.55 65.7705H171.667C171.511 64.7939 171.433 62.8701 171.433 59.999V36.7666H180.368V78.7783ZM207.497 62.1084C207.497 67.7334 206.188 72.04 203.571 75.0283C200.974 78.0166 197.204 79.5107 192.263 79.5107C190.056 79.5107 188.015 79.1299 186.14 78.3682V69.4912C187.761 70.7217 189.577 71.3369 191.589 71.3369C195.905 71.3369 198.063 68.1338 198.063 61.7275V36.7666H207.497V62.1084ZM250.944 60.585C250.944 73.2021 245.065 79.5107 233.308 79.5107C221.901 79.5107 216.198 73.3486 216.198 61.0244V36.7666H225.69V61.1416C225.69 67.9385 228.347 71.3369 233.659 71.3369C238.874 71.3369 241.481 68.0557 241.481 61.4932V36.7666H250.944V60.585ZM295.358 78.7783H284.489L277.956 67.9678C277.468 67.1475 276.999 66.415 276.55 65.7705C276.101 65.126 275.642 64.5791 275.173 64.1299C274.724 63.6611 274.245 63.3096 273.737 63.0752C273.249 62.8213 272.712 62.6943 272.126 62.6943H269.577V78.7783H260.114V36.7666H275.114C285.31 36.7666 290.407 40.5752 290.407 48.1924C290.407 49.6572 290.183 51.0146 289.733 52.2646C289.284 53.4951 288.649 54.6084 287.829 55.6045C287.009 56.6006 286.013 57.46 284.841 58.1826C283.688 58.9053 282.399 59.4717 280.974 59.8818V59.999C281.599 60.1943 282.204 60.5166 282.79 60.9658C283.376 61.3955 283.942 61.9033 284.489 62.4893C285.036 63.0752 285.554 63.71 286.042 64.3936C286.55 65.0576 287.009 65.7119 287.419 66.3564L295.358 78.7783ZM269.577 43.8564V55.5459H273.679C275.71 55.5459 277.341 54.96 278.571 53.7881C279.821 52.5967 280.446 51.1221 280.446 49.3643C280.446 45.6924 278.249 43.8564 273.854 43.8564H269.577ZM336.257 78.7783H325.944L322.956 69.4326H308.015L305.056 78.7783H294.802L310.095 36.7666H321.315L336.257 78.7783ZM320.788 62.167L316.276 48.0459C315.944 46.9912 315.71 45.7314 315.573 44.2666H315.339C315.241 45.4971 314.997 46.7178 314.606 47.9287L310.036 62.167H320.788ZM341.501 78.7783V36.7666H356.384C371.306 36.7666 378.767 43.5928 378.767 57.2451C378.767 63.7881 376.726 69.0127 372.644 72.9189C368.581 76.8252 363.161 78.7783 356.384 78.7783H341.501ZM350.964 44.4717V71.1025H355.651C359.753 71.1025 362.966 69.8721 365.29 67.4111C367.634 64.9502 368.806 61.6006 368.806 57.3623C368.806 53.3584 367.644 50.2139 365.319 47.9287C363.015 45.624 359.772 44.4717 355.593 44.4717H350.964Z" fill="white"/>
                        <rect x="117" y="34" width="7" height="49" fill="#072317"/>
                        <rect x="132" y="34" width="7" height="49" fill="#072317"/>
                    </svg>

                    <div className="w-full h-full  grid grid-cols-1 md:grid-cols-4 place-items-center m-auto gap-10 ">
                        <div className="w-full h-full flex flex-col text-left sm:text-left ">
                            <h1 className="font-medium text-xl mb-4  uppercase  text-sl ">{t("footer_tittle1")}</h1>
                            <Link href="/about" passHref><a className="font-light  pb-2  text-base   text-bgr ">{t("footer_info1_1")}</a></Link>
                            <Link href="/about" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info1_2")}</a></Link>
                            <Link href="/about" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info1_3")}</a></Link>
                        </div>
                        <div className="w-full h-full flex flex-col text-left sm:text-left mt-10 sm:mt-0">
                            <h1 className="font-medium text-xl mb-4  uppercase  text-sl">{t("footer_tittle3")}</h1>
                            <Link href="/formdoc" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info3_1")}</a></Link>
                            <Link href="/formreserva" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info3_2")}</a></Link>
                            <Link href="/formigp" passHref><a className="font-light  text-base   text-bgr">{t("footer_info3_3")}</a></Link>
                            <Link href="/" passHref><a className="font-light  text-base   text-bgr">{t("footer_info3_4")}</a></Link>
                        </div>
                        <div className="w-full h-full flex flex-col text-left sm:text-left mt-10 sm:mt-0">
                            <h1 className="font-medium text-xl mb-4  uppercase  text-sl">{t("footer_tittle4")}</h1>
                            <Link href="/" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info4_1")}</a></Link>
                            <Link href="/" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info4_2")}</a></Link>
                            <Link href="/" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info4_3")}</a></Link>
                            <Link href="/" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info4_4")}</a></Link>
                        </div>
                        <div className="w-full h-full flex flex-col text-left sm:text-left mt-10 sm:mt-0">
                            <h1 className="font-medium text-xl mb-4  uppercase  text-sl">{t("footer_tittle5")}</h1>
                            <Link href="/contact" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info5_2")}</a></Link>
                            <Link href="/contact" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info5_3")}</a></Link>
                            <Link href="/contact" passHref><a className="font-light  pb-2 text-base   text-bgr">{t("footer_info5_4")}</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="w-full col-span-2 relative m-auto mt-12 bg-bgr flex">
            <div className="w-full h-auto py-2  flex flex-col sm:flex-row text-center items-center max-w-5xl gap-2 m-auto text-sm font-medium ">
                <h1 className="w-full">Politicas de privacidad</h1>
                <h1 className="w-full">Terminos y condiciones</h1>
                <div className="w-full flex text-center items-center justify-center">
                    

                    <h1 className="flex m-auto text-center items-center gap-1 w-96 text-xs">
                    &copy; COPYRIGHT. INJURAD 2022 TODOS LOS DERECHOS RESERVADOS</h1>

                </div>
            </div>
        </div>

    </div>
    
  )
}

export default Footer