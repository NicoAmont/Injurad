import Image from "next/image"
import Link from "next/link"


function Header() {
    return (
        <nav className=" flex fixed top-0 left-0 place-items-center  justify-between w-screen bg-white z-50  ">
            <div className="flex items-center text-base w-full h-28 px-5 lg:px-20 justify-between">

                {/* Left */}
                <div className="flex items-center  lg:ml-44">
                    <video className="w-48 absolute  sm:left-20" autoPlay muted id="videoHero">
                        <source  src="/video/WhatsApp Video 2021-11-12 at 11.25.33 PM.mp4" type="video/mp4"/>
                        Your Browser does not support mp4 videos, change browser!
                    </video>
                </div>
                <div className="hidden lg:inline-flex w-full text-sm lg:text-base">

                    {/* Center */}
                    <div className="flex justify-center flex-grow font-heads font-normal   ">
                        <div className="flex place-items-center  cursor-pointer lg:px-10 uppercase text-bl transition-colors ">
                            <Link  href="/"><div className="flex flex-col place-items-center text-center justify-center w-24 h-28 hover:bg-thome2">
                                <svg className="" width="23" height="20" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3191 12.2193V25.0798H17.378V17.2842H12.9729V25.0798H4.68164V12.2193L15.0004 4.28223L25.3191 12.2193Z" fill="#628ddf"/>
                                <path d="M25.7511 8.27086V2.83166H21.4054V4.92768L15 0L0 11.5395L3.14256 15.6242L15 6.50273L26.8574 15.6241L30 11.5395L25.7511 8.27086Z" fill="#628ddf"/>
                                <path d="M25.3187 12.2193V25.0798H17.3776V17.2842H15V4.28223L25.3187 12.2193Z" fill="#498CDA"/>
                                <path d="M30 11.5395L26.8574 15.6242L15 6.50273V0L21.4054 4.92768V2.83166H25.7511V8.27086L30 11.5395Z" fill="#628ddf"/>
                                </svg>
                                <a className=" transition-colors delay-150 text-sm font-normal">inicio</a>
                            </div></Link>
                            <Link  href="/profile"><div className="flex flex-col place-items-center text-center justify-center w-24 h-28 hover:bg-thome2">
                                <svg className="" width="23" height="20" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.17188 4.65517C5.17188 7.22623 7.25599 9.31034 9.82705 9.31034V0C7.25599 0 5.17188 2.08412 5.17188 4.65517Z" fill="#628ddf"/>
                                    <path d="M9.82715 0V9.31034C12.3982 9.31034 14.4823 7.22623 14.4823 4.65517C14.4823 2.08412 12.3982 0 9.82715 0Z" fill="#628ddf"/>
                                    <path d="M6.2069 11.3799C2.77891 11.3799 0 14.1588 0 17.5868V22.1902C2.72284 24.5645 6.21498 25.8695 9.82758 25.8626V11.3799H6.2069Z" fill="#628ddf"/>
                                    <path d="M13.4478 11.3799H9.82715V25.8626C13.4398 25.8695 16.9319 24.5645 19.6547 22.1902V17.5868C19.6547 14.1588 16.8758 11.3799 13.4478 11.3799Z" fill="#628ddf"/>
                                </svg>
                                <a className=" transition-colors delay-150 text-sm font-normal
                                 ">perfil</a>
                            </div></Link>
                            <Link  href="/"><div className="flex flex-col place-items-center text-center justify-center w-24 h-28 hover:bg-thome2">
                                <svg width="23" height="20" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.2742 5.32818C28.8087 4.28552 28.1376 3.34067 27.2983 2.54652C26.4584 1.75 25.4681 1.11702 24.3813 0.682001C23.2543 0.229118 22.0456 -0.0026936 20.8253 2.36135e-05C19.1133 2.36135e-05 17.443 0.453555 15.9914 1.31023C15.6442 1.51516 15.3143 1.74024 15.0017 1.98549C14.6892 1.74024 14.3593 1.51516 14.012 1.31023C12.5605 0.453555 10.8901 2.36135e-05 9.17813 2.36135e-05C7.94535 2.36135e-05 6.75077 0.228469 5.62217 0.682001C4.53177 1.11874 3.54902 1.74696 2.70517 2.54652C1.86479 3.33977 1.19346 4.28485 0.72925 5.32818C0.246556 6.4133 0 7.56561 0 8.75151C0 9.87022 0.236138 11.036 0.704942 12.2219C1.09735 13.2129 1.65991 14.2409 2.37874 15.279C3.51776 16.9218 5.08392 18.6351 7.02858 20.372C10.2512 23.2511 13.4425 25.2399 13.5779 25.3205L14.401 25.8312C14.7656 26.0563 15.2344 26.0563 15.599 25.8312L16.422 25.3205C16.5575 25.2366 19.7453 23.2511 22.9714 20.372C24.916 18.6351 26.4822 16.9218 27.6212 15.279C28.3401 14.2409 28.9061 13.2129 29.295 12.2219C29.7638 11.036 30 9.87022 30 8.75151C30.0034 7.56561 29.7569 6.4133 29.2742 5.32818Z" fill="#628ddf"/>
                                    <rect x="8.53125" y="9.64307" width="4.5" height="8" fill="#fff"/>
                                    <rect x="19.9551" y="8.60303" width="3.78455" height="11.4235" transform="rotate(89.8332 19.9551 8.60303)" fill="#fff"/>
                                    <rect x="16.5312" y="8.64307" width="4.5" height="9" fill="#fff"/>
                                    <path d="M15 5.5L21.0233 8.64307H8.53125L15 5.5Z" fill="#fff"/>
                                </svg>


                                <a className=" transition-colors delay-150 text-sm font-normal ">red</a>
                            </div></Link>
                            <Link  href="/"><div className="flex flex-col place-items-center text-center justify-center w-24 h-28 hover:bg-thome2">
                                <svg width="23" height="20" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M22.8536 9.77121H15.7286V12.6152C15.7286 14.6314 14.2145 16.2718 12.3536 16.2718C10.4927 16.2718 8.97859 14.6314 8.97859 12.6152V6.43968L5.93641 8.42031C5.03172 9.00435 4.4786 10.0658 4.4786 11.2034V13.6055L0.728607 15.9518C0.0114206 16.3987 -0.237016 17.3941 0.18017 18.1711L3.93016 25.21C4.34266 25.987 5.26141 26.2511 5.9786 25.8042L10.8255 22.7723H17.2286C18.8833 22.7723 20.2286 21.3148 20.2286 19.522H20.9786C21.8083 19.522 22.4786 18.7958 22.4786 17.8969V14.6466H22.8536C23.477 14.6466 23.9786 14.1032 23.9786 13.4278V10.9901C23.9786 10.3146 23.477 9.77121 22.8536 9.77121ZM29.777 7.87183L26.027 0.832954C25.6145 0.0559356 24.6958 -0.208149 23.9786 0.238764L19.1317 3.27066H14.3411C13.7786 3.27066 13.2301 3.44333 12.752 3.76328L11.1817 4.8247C10.7411 5.11925 10.4786 5.64234 10.4786 6.20099V12.6152C10.4786 13.7376 11.3176 14.6466 12.3536 14.6466C13.3895 14.6466 14.2286 13.7376 14.2286 12.6152V8.14607H22.8536C24.302 8.14607 25.4786 9.42079 25.4786 10.9901V12.4374L29.2286 10.0912C29.9457 9.63917 30.1895 8.64885 29.777 7.87183V7.87183Z" fill="#628ddf"/>
                                </svg>

                                <a className=" transition-colors delay-150 text-sm font-normal ">soporte</a>
                            </div></Link>
                            {/* <Link href="/profile"><a className=" transition-colors delay-150 " >perfil</a></Link>
                            <Link href="#"><a className=" transition-colors delay-150 " >red</a></Link>
                            <Link href="#"><a className=" transition-colors delay-150 " >soporte</a></Link> */}
                            
                            
                            
                        </div>
                    </div>
                    
                    {/* Rigth */}
                    <div>
                        
                    </div>
                    <div className="flex ">
                        
                        <div className=" w-full h-ful flex items-center space-x-2 lg:space-x-6 cursor-pointer uppercase text-bl">
                        <Link  href="/login"><button className="hover:bg-thome2 border-none border-bl  hover:border-bl hover:transition-colors hover:delay-75 hover:ease-linear font-base hover:shadow-lg flex uppercase  rounded px-6 py-1.5 w-100">
                                <svg className="mt-0.5 mr-2 " width="20" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_48:6687)">
                                        <path d="M6.99967 7.95536C8.6105 7.95536 9.91634 6.65172 9.91634 5.0436C9.91634 3.43548 8.6105 2.13184 6.99967 2.13184C5.38884 2.13184 4.08301 3.43548 4.08301 5.0436C4.08301 6.65172 5.38884 7.95536 6.99967 7.95536Z" stroke="#628ddf"/>
                                        <path d="M9.91654 9.12012H10.1219C10.5483 9.12024 10.9601 9.27582 11.2797 9.55763C11.5994 9.83944 11.805 10.2281 11.8579 10.6505L12.086 12.4698C12.1065 12.6337 12.0918 12.8001 12.043 12.9579C11.9942 13.1157 11.9123 13.2613 11.8028 13.3851C11.6933 13.509 11.5587 13.6081 11.4079 13.676C11.257 13.7439 11.0935 13.779 10.928 13.7789H3.07171C2.90626 13.779 2.7427 13.7439 2.59188 13.676C2.44106 13.6081 2.30643 13.509 2.19692 13.3851C2.08742 13.2613 2.00554 13.1157 1.95673 12.9579C1.90791 12.8001 1.89327 12.6337 1.91379 12.4698L2.14129 10.6505C2.1942 10.2279 2.39995 9.83908 2.71986 9.55724C3.03977 9.27541 3.45179 9.11995 3.87846 9.12012H4.08321" stroke="#628ddf" strokeLinecap="round" strokeLinejoin="round"/>
                                        <rect width="0.699915" height="2.79564" transform="matrix(0.963049 -0.269328 0.27017 0.962813 7 8.14355)" fill="#628ddf"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_48:6687">
                                    <rect width="14" height="13.9765" fill="white" transform="translate(0 0.966797)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                login
                            </button></Link>

                            <button className=" font-normal hover:bg-thome2 hover:border-thome2 transition-colors duration-1000  hover:animate-pulse flex uppercase border rounded px-6 py-1.5 w-154 text-bl">
                            <svg className="mt-1 mr-2" width="15" height="15" viewBox="0 0 801 801" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M497 0C329.1 0 193 136.1 193 304C193 374.3 216.9 439 256.9 490.5L215.8 531.6L153.5 469.3C151.977 467.81 149.931 466.975 147.8 466.975C145.669 466.975 143.623 467.81 142.1 469.3L102.3 509.1C100.81 510.623 99.9751 512.669 99.9751 514.8C99.9751 516.931 100.81 518.977 102.3 520.5L164.6 582.8L119.7 627.7L57.4 565.4C55.877 563.91 53.8308 563.075 51.7 563.075C49.5691 563.075 47.523 563.91 46 565.4L6.19997 605.2C4.70968 606.723 3.87514 608.769 3.87514 610.9C3.87514 613.031 4.70968 615.077 6.19997 616.6L68.5 678.9L3.19997 744.2C1.71115 745.704 0.875977 747.734 0.875977 749.85C0.875977 751.966 1.71115 753.996 3.19997 755.5L45.5 797.8C48.6 800.9 53.7 800.9 56.8 797.8L310.4 544.2C363.785 585.607 429.439 608.055 497 608C664.9 608 801 471.9 801 304C801 136.1 664.9 0 497 0ZM658.2 465.2C615.2 508.3 557.9 532 497 532C436.1 532 378.8 508.3 335.8 465.2C292.7 422.2 269 364.9 269 304C269 243.1 292.7 185.8 335.8 142.8C378.8 99.7 436.1 76 497 76C557.9 76 615.2 99.7 658.2 142.8C701.3 185.8 725 243.1 725 304C725 364.9 701.3 422.2 658.2 465.2Z" fill="#628ddf"/>
                            </svg>
                                suscribete
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex relative right-0 hover:text-bl">
                    <svg width="28" height="30" viewBox="0 0 66 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 26C0 23.2386 2.23858 21 5 21H61C63.7614 21 66 23.2386 66 26V72H0V26Z" fill="#628ddf"/>
                        <path d="M27.7347 3.08194C31.1118 1.17112 35.2459 1.1809 38.6139 3.10767L60.9656 15.8946C64.079 17.6757 66 20.9878 66 24.5746V31H0V25.1894C0 21.2253 2.13291 17.5678 5.58304 15.6157L27.7347 3.08194Z" fill="#628ddf"/>
                        <rect x="12" y="28" width="42" height="7" rx="3.5" fill="#ffff"/>
                        <rect x="12" y="41" width="42" height="7" rx="3.5" fill="#ffff"/>
                        <rect x="12" y="53" width="42" height="7" rx="3.5" fill="#ffff"/>
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Header
