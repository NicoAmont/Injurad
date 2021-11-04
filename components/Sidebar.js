import SidebarRow from "./SidebarRow";

export default function Sidebar() {

    
    return (
        <div className= "fixed p-2 max-w-[310px] xl:min-w-[150px] text-base text-bd mt-28 md:mt-11 md:relative z-10 bg-transparent md:bg-white w-auto md:w-full">

            {/* PHOTO & DESCRIPTION */}
            <div className="h-20 md:h-40 grid grid-cols-1 md:grid-cols-2 text-xs items-center text-center justify-center">
                <div className="absolute w-8 h-8  left-6 animate-ping transition-all rounded-full duration-1000 md:ml-10 border-2 border-bd bg-rb items-center justify-center  ">    
                </div>

                <div className="flex w-12 h-12 md:w-28 md:h-28 rounded-full ml-2 md:ml-10 border-2 border-bl bg-bl items-center justify-center z-10">
                    <img className=" scale-110" src="/photoprofile.png" alt="" />    
                </div>
                
                <div className="hidden md:block">
                    <h1 className="text-lg">Sandra Conor</h1>
                    <h2 className="font-light italic">Compradora</h2>
                    <p className="font-extralight">Añade <span className="underline">suscripción</span> para descripción detallada </p>
                </div>    
            </div>

            {/* App Nav */}

            <div className="block bg-bd text-white w-20 md:h-full  md:w-72 absolute left-0 border-r-8 pl-2 md:pl-11  rounded-tr-3xl md:rounded-br-none rounded-br-3xl border-none">
                <div className="uppercase">

                    <h1 className="mt-5 mb-6 text-xl font-medium hidden md:block">menu</h1>

                    <div className="bg-white w-16 md:w-60 h-64 pt-2 ml-1 mt-4 md:mt-0 rounded-tr-3xl rounded-br-3xl rounded-tl-md rounded-bl-md justify-center text-bd ">
                        <div className="flex  px-4 items-center  h-12 border-b-2 border-gwhite">
                            <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3191 12.2193V25.0798H17.378V17.2842H12.9729V25.0798H4.68164V12.2193L15.0004 4.28223L25.3191 12.2193Z" fill="#4F95FF"/>
                                <path d="M25.7511 8.27086V2.83166H21.4054V4.92768L15 0L0 11.5395L3.14256 15.6242L15 6.50273L26.8574 15.6241L30 11.5395L25.7511 8.27086Z" fill="#FF3C3C"/>
                                <path d="M25.3187 12.2193V25.0798H17.3776V17.2842H15V4.28223L25.3187 12.2193Z" fill="#498CDA"/>
                                <path d="M30 11.5395L26.8574 15.6242L15 6.50273V0L21.4054 4.92768V2.83166H25.7511V8.27086L30 11.5395Z" fill="#63316D"/>
                            </svg>
                            <h2 className="pl-3 hidden md:block">home</h2>
                        </div>
                        
                        <div className="flex px-4 items-center h-12 border-b-2 border-gwhite opacity-30">
                            <svg className="" width="30" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.17188 4.65517C5.17188 7.22623 7.25599 9.31034 9.82705 9.31034V0C7.25599 0 5.17188 2.08412 5.17188 4.65517Z" fill="#2B3990"/>
                                <path d="M9.82715 0V9.31034C12.3982 9.31034 14.4823 7.22623 14.4823 4.65517C14.4823 2.08412 12.3982 0 9.82715 0Z" fill="#434F9C"/>
                                <path d="M6.2069 11.3799C2.77891 11.3799 0 14.1588 0 17.5868V22.1902C2.72284 24.5645 6.21498 25.8695 9.82758 25.8626V11.3799H6.2069Z" fill="#2B3990"/>
                                <path d="M13.4478 11.3799H9.82715V25.8626C13.4398 25.8695 16.9319 24.5645 19.6547 22.1902V17.5868C19.6547 14.1588 16.8758 11.3799 13.4478 11.3799Z" fill="#434F9C"/>
                            </svg>
                            <h2 className="pl-3 hidden md:block">perfil</h2>
                        </div>
                        <div className="flex px-4 items-center h-12 border-b-2 border-gwhite opacity-30">
                            <svg width="30" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3379 3.90667L25.3998 17.2718C25.4071 18.6395 24.3037 19.7538 22.936 19.7603L15.9963 19.7913L13.2542 24.3846C13.1927 24.4828 13.0851 24.5425 12.9693 24.5425C12.8535 24.5425 12.7459 24.4828 12.6844 24.3846L9.89873 19.8162L3.13273 19.8471C1.76503 19.8542 0.650498 18.751 0.643969 17.3833L0.582064 4.01791C0.575052 2.6502 1.67821 1.53591 3.04592 1.52938L22.8554 1.43652C24.2224 1.43507 25.3326 2.53969 25.3379 3.90667V3.90667Z" fill="#666BE4"/>
                                <path d="M12.9508 1.48535L3.04608 1.53492C1.67934 1.54 0.574481 2.65042 0.576174 4.01716L0.638079 17.3825C0.644608 18.7502 1.75889 19.8534 3.1266 19.8464L9.89284 19.8154L12.6786 24.3838C12.7586 24.5067 12.9083 24.564 13.05 24.5263L12.9508 1.48535Z" fill="#6C86E0"/>
                                <path d="M11.719 14.2323C11.5548 14.2318 11.3972 14.1674 11.2794 14.0528L7.91794 10.6913C7.67709 10.4503 7.67709 10.0595 7.91794 9.81864C8.15903 9.57755 8.5498 9.57755 8.79089 9.81864L11.7251 12.7528L17.2099 7.50954C17.4561 7.27353 17.8469 7.28199 18.0829 7.52816C18.3187 7.77433 18.3104 8.1651 18.0643 8.40087L12.1461 14.0591C12.0327 14.1716 11.8789 14.2339 11.719 14.2323Z" fill="white"/>
                                <path d="M22.9048 0.866211H3.09524C1.38609 0.866936 0.00072545 2.2523 0 3.96145V17.3266C0.00072545 19.036 1.38609 20.4213 3.09524 20.4218H9.50867L12.0961 24.6995C12.0961 24.7058 12.1024 24.7058 12.1024 24.7119C12.2787 24.9895 12.5846 25.1575 12.9134 25.1575C13.2421 25.1575 13.548 24.9895 13.7242 24.7119C13.7242 24.7058 13.7305 24.7058 13.7305 24.6995L16.3182 20.4218H22.9048C24.6139 20.4213 25.9993 19.036 26 17.3266V3.96145C25.9993 2.2523 24.6139 0.866936 22.9048 0.866211ZM24.7619 17.3266C24.759 18.3512 23.9291 19.1808 22.9048 19.1837H15.9651C15.7485 19.1845 15.547 19.2967 15.4329 19.4809L12.9071 23.6595L10.3814 19.4809C10.2682 19.2954 10.0663 19.1828 9.84914 19.1837H3.09524C2.07091 19.1808 1.241 18.3512 1.2381 17.3266V3.96145C1.241 2.93712 2.07091 2.10721 3.09524 2.10431H22.9048C23.9291 2.10721 24.759 2.93712 24.7619 3.96145V17.3266Z" fill="#63316D"/>
                            </svg>
                            <h2 className="pl-3 hidden md:block">mensajes</h2>
                        </div>
                        <div className="flex px-4 items-center h-12 border-b-2 border-gwhite opacity-30">
                            <svg width="30" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_371:119)">
                                    <path d="M23.1763 0.380859H2.8229C2.37329 0.380859 2.00879 0.745362 2.00879 1.19497V24.567C2.00879 25.4623 3.05766 25.9467 3.73924 25.3661L12.9996 17.4777L22.2599 25.3661C22.9415 25.9467 23.9904 25.4623 23.9904 24.567V1.19497C23.9904 0.745362 23.6259 0.380859 23.1763 0.380859V0.380859Z" fill="#7E9AFF"/>
                                    <path d="M2.8229 0.380859C2.37329 0.380859 2.00879 0.745362 2.00879 1.19497V24.567C2.00879 25.4623 3.05766 25.9467 3.73924 25.3661L12.9996 17.4777V0.380859H2.8229Z" fill="#5F82FF"/>
                                    <path d="M3.63672 0.380859V22.4327C3.63672 22.7799 4.04347 22.9677 4.30773 22.7425L11.9434 16.2382C12.2475 15.979 12.6234 15.8494 12.9992 15.8494C13.3751 15.8494 13.7509 15.979 14.0551 16.2382L21.6907 22.7425C21.955 22.9677 22.3617 22.7799 22.3617 22.4327V0.380859H3.63672Z" fill="#4482FB"/>
                                    <path d="M5.33106 19.6458C5.6264 19.7827 5.95201 19.7378 6.20048 19.5266L11.1521 15.3086C11.6669 14.8699 12.3232 14.6283 12.9998 14.6283C13.6768 14.6283 14.3327 14.87 14.8475 15.309L19.7991 19.5266C20.0476 19.7381 20.3731 19.7828 20.6685 19.6458C20.9643 19.5093 21.1412 19.233 21.1412 18.9068V0.380859H4.8584V18.9066C4.8584 19.2328 5.03532 19.509 5.33106 19.6458V19.6458Z" fill="#5F82FF"/>
                                    <path d="M23.1763 0H2.8229C2.16402 0 1.62793 0.53609 1.62793 1.19497V24.567C1.62793 25.1315 1.94627 25.6291 2.45875 25.8658C2.97118 26.1025 3.55652 26.0221 3.98623 25.6561L12.9996 17.978L22.013 25.6561C22.2792 25.8828 22.6052 26 22.9366 26C23.14 26 23.3455 25.9559 23.5405 25.8658C24.0529 25.6291 24.3713 25.1315 24.3713 24.567V1.19497C24.3713 0.53609 23.8352 0 23.1763 0V0ZM23.6096 24.567C23.6096 24.8349 23.4643 25.062 23.2211 25.1743C22.978 25.2865 22.711 25.25 22.5069 25.0762L13.2466 17.1877C13.1754 17.1271 13.0875 17.0968 12.9996 17.0968C12.9117 17.0968 12.8238 17.1271 12.7527 17.1877L3.49229 25.0762C3.2883 25.25 3.0213 25.2866 2.77811 25.1743C2.53487 25.0619 2.38964 24.8349 2.38964 24.567V1.19497C2.38964 0.956045 2.58403 0.761708 2.8229 0.761708H3.25621V4.04447C3.25621 4.25485 3.42673 4.42532 3.63706 4.42532C3.8474 4.42532 4.01792 4.25485 4.01792 4.04447V0.761708H21.9813V16.6635C21.9813 16.8739 22.1518 17.0444 22.3621 17.0444C22.5725 17.0444 22.743 16.8739 22.743 16.6635V0.761708H23.1763C23.4152 0.761708 23.6096 0.956096 23.6096 1.19497V24.567Z" fill="black"/>
                                    <path d="M22.3618 17.9111C22.1515 17.9111 21.9809 18.0816 21.9809 18.2919V22.4895L14.3021 15.9484C13.9391 15.639 13.4764 15.4686 12.9992 15.4686C12.522 15.4686 12.0594 15.639 11.6965 15.9483L4.01757 22.4895V5.67285C4.01757 5.46246 3.84705 5.29199 3.63671 5.29199C3.42638 5.29199 3.25586 5.46246 3.25586 5.67285V23.3143C3.25586 23.4628 3.34219 23.5978 3.47701 23.66C3.61193 23.7223 3.77062 23.7005 3.88366 23.6042L12.1904 16.5282C12.4158 16.3361 12.703 16.2304 12.9992 16.2304C13.2954 16.2304 13.5827 16.3362 13.8081 16.5283L22.1148 23.6042C22.1851 23.6641 22.273 23.6952 22.3619 23.6952C22.416 23.6952 22.4705 23.6836 22.5215 23.6601C22.6563 23.5978 22.7426 23.4629 22.7426 23.3143V18.292C22.7426 18.0816 22.5721 17.9111 22.3618 17.9111V17.9111Z" fill="black"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_371:119">
                                    <rect width="26" height="26" fill="white"/>
                                    </clipPath>
                                    </defs>
                            </svg>
                            <h2 className="pl-3 hidden md:block">publicaciones</h2>
                        </div>
                        <div className="flex px-4 items-center h-12 opacity-30">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.595 9.75C16.7354 10.5085 17.0334 11.229 17.47 11.865L15.99 13.345L17.405 14.76L18.885 13.28C19.521 13.7166 20.2415 14.0147 21 14.155V16.25H23V14.155C23.7585 14.0147 24.479 13.7166 25.115 13.28L26.595 14.76L28.01 13.345L26.53 11.865C26.9666 11.229 27.2646 10.5085 27.405 9.75H29.5V7.75H27.405C27.2646 6.99146 26.9666 6.271 26.53 5.63501L28.01 4.15503L26.595 2.73999L25.115 4.21997C24.479 3.78345 23.7585 3.48535 23 3.34497V1.25H21V3.34497C20.2415 3.48535 19.521 3.78345 18.885 4.21997L17.405 2.73999L15.99 4.15503L17.47 5.63501C17.0334 6.271 16.7354 6.99146 16.595 7.75H14.5V9.75H16.595Z" fill="white"/>
                                <path d="M18.5 8.75C18.5 10.6831 20.0669 12.25 22 12.25C23.9331 12.25 25.5 10.6831 25.5 8.75C25.5 6.81689 23.9331 5.25 22 5.25C20.0669 5.25 18.5 6.81689 18.5 8.75Z" fill="#E6E7E8"/>
                                <path d="M21 8.75C21 9.30225 21.4478 9.75 22 9.75C22.5522 9.75 23 9.30225 23 8.75C23 8.19775 22.5522 7.75 22 7.75C21.4478 7.75 21 8.19775 21 8.75Z" fill="#438EFF"/>
                                <path d="M12.145 24.75C12.2129 24.9807 12.3049 25.2036 12.4199 25.415L11.2549 26.5801L12.6699 27.9951L13.835 26.8301C14.0464 26.9451 14.2693 27.0371 14.5 27.105V28.75H16.5V27.105C16.7307 27.0371 16.9536 26.9451 17.165 26.8301L18.3301 27.9951L19.7451 26.5801L18.5801 25.415C18.6951 25.2036 18.7871 24.9807 18.855 24.75H20.5V22.75H18.855C18.7871 22.5193 18.6951 22.2964 18.5801 22.085L19.7451 20.9199L18.3301 19.5049L17.165 20.6699C16.9536 20.5549 16.7307 20.4629 16.5 20.395V18.75H14.5V20.395C14.2693 20.4629 14.0464 20.5549 13.835 20.6699L12.6699 19.5049L11.2549 20.9199L12.4199 22.085C12.3049 22.2964 12.2129 22.5193 12.145 22.75H10.5V24.75H12.145Z" fill="#2288FF"/>
                                <path d="M14 23.75C14 24.5784 14.6716 25.25 15.5 25.25C16.3284 25.25 17 24.5784 17 23.75C17 22.9216 16.3284 22.25 15.5 22.25C14.6716 22.25 14 22.9216 14 23.75Z" fill="white"/>
                                <path d="M2.62988 14.25C2.72461 14.6108 2.86767 14.9573 3.05493 15.28L1.55005 16.7849L2.96508 18.2L4.46997 16.6951C4.79272 16.8823 5.13916 17.0254 5.5 17.1201V19.25H7.5V17.1201C7.86084 17.0254 8.20727 16.8823 8.53003 16.6951L10.0349 18.2L11.45 16.7849L9.94507 15.28C10.1323 14.9573 10.2754 14.6108 10.3701 14.25H12.5V12.25H10.3701C10.2754 11.8892 10.1323 11.5427 9.94507 11.22L11.45 9.71509L10.0349 8.30005L8.53003 9.80493C8.20727 9.61768 7.86084 9.47461 7.5 9.37988V7.25H5.5V9.37988C5.13916 9.47461 4.79272 9.61768 4.46997 9.80493L2.96508 8.30005L1.55005 9.71509L3.05493 11.22C2.86767 11.5427 2.72461 11.8892 2.62988 12.25H0.499996V14.25H2.62988Z" fill="#438EFF"/>
                                <path d="M5 13.25C5 14.0784 5.67163 14.75 6.5 14.75C7.32837 14.75 8 14.0784 8 13.25C8 12.4216 7.32837 11.75 6.5 11.75C5.67163 11.75 5 12.4216 5 13.25Z" fill="white"/>
                                <path d="M20.5 16.25V14.5564C19.9568 14.418 19.436 14.2029 18.9536 13.9175L17.7576 15.114C17.5623 15.3091 17.2458 15.3091 17.0505 15.114L15.636 13.7C15.4409 13.5046 15.4409 13.1882 15.636 12.9929L16.832 11.7971C16.5469 11.3142 16.332 10.7932 16.1936 10.25H14.5C14.2239 10.25 14 10.0261 14 9.75V7.75C14 7.47388 14.2239 7.25 14.5 7.25H16.1936C16.332 6.70679 16.5469 6.18604 16.832 5.70361L15.636 4.50757C15.4409 4.31226 15.4409 3.99585 15.636 3.80054L17.05 2.38599C17.2454 2.19092 17.5618 2.19092 17.7571 2.38599L18.9529 3.58203C19.4358 3.29688 19.9568 3.08203 20.5 2.9436V1.25C20.5 0.973877 20.7239 0.75 21 0.75H23C23.2761 0.75 23.5 0.973877 23.5 1.25V2.9436C24.0432 3.08203 24.564 3.29688 25.0464 3.58203L26.2424 2.38599C26.4377 2.19092 26.7542 2.19092 26.9495 2.38599L28.364 3.80005C28.5591 3.99536 28.5591 4.31177 28.364 4.50708L27.168 5.70288C27.4531 6.18579 27.668 6.70679 27.8064 7.25H29.5C29.7761 7.25 30 7.47388 30 7.75V9.75C30 10.0261 29.7761 10.25 29.5 10.25H27.8064C27.668 10.7932 27.4531 11.314 27.168 11.7964L28.364 12.9924C28.5591 13.1877 28.5591 13.5042 28.364 13.6995L26.95 15.114C26.7546 15.3091 26.4382 15.3091 26.2429 15.114L25.0471 13.9175C24.5642 14.2029 24.0435 14.4182 23.5 14.5564V16.25C23.5 16.5261 23.2761 16.75 23 16.75H21C20.7239 16.75 20.5 16.5261 20.5 16.25ZM21.5 14.155V15.75H22.5V14.155C22.4998 13.9136 22.6721 13.7068 22.9094 13.6631C23.5996 13.5376 24.2551 13.2666 24.8325 12.8684C25.0312 12.7319 25.2991 12.7563 25.4695 12.927L26.5959 14.053L27.303 13.3459L26.177 12.219C26.0063 12.0486 25.9819 11.7808 26.1184 11.582C26.5168 11.0049 26.7876 10.3494 26.9131 9.65942C26.9568 9.42212 27.1636 9.24976 27.405 9.25H29V8.25H27.405C27.1636 8.25024 26.9568 8.07788 26.9131 7.84058C26.7876 7.15063 26.5168 6.49512 26.1184 5.91797C25.9819 5.71924 26.0063 5.45142 26.177 5.28101L27.303 4.15405L26.5959 3.44702L25.469 4.573C25.2986 4.74365 25.0308 4.76807 24.832 4.63159C24.2549 4.23315 23.5994 3.9624 22.9094 3.83691C22.6721 3.79321 22.4998 3.58643 22.5 3.34497V1.75H21.5V3.34497C21.5002 3.58643 21.3279 3.79321 21.0906 3.83691C20.4006 3.9624 19.7451 4.23315 19.168 4.63159C18.9692 4.76807 18.7014 4.74365 18.531 4.573L17.4041 3.44702L16.697 4.15405L17.823 5.28101C17.9937 5.45142 18.0181 5.71924 17.8816 5.91797C17.4832 6.49512 17.2124 7.15063 17.0869 7.84058C17.0432 8.07788 16.8364 8.25024 16.595 8.25H15V9.25H16.595C16.8364 9.24976 17.0432 9.42212 17.0869 9.65942C17.2124 10.3494 17.4832 11.0049 17.8816 11.582C18.0181 11.7808 17.9937 12.0486 17.823 12.219L16.697 13.3459L17.4041 14.053L18.5305 12.927C18.7009 12.7563 18.9688 12.7319 19.1675 12.8684C19.7449 13.2666 20.4004 13.5376 21.0906 13.6631C21.3279 13.7068 21.5002 13.9136 21.5 14.155Z" fill="black"/>
                                <path d="M22 4.75C24.2092 4.75 26 6.54077 26 8.75C26 10.9592 24.2092 12.75 22 12.75C19.7908 12.75 18 10.9592 18 8.75C18.0024 6.54199 19.792 4.75244 22 4.75ZM22 11.75C23.6567 11.75 25 10.4067 25 8.75C25 7.09326 23.6567 5.75 22 5.75C20.3433 5.75 19 7.09326 19 8.75C19.0017 10.4062 20.3438 11.7483 22 11.75Z" fill="black"/>
                                <path d="M22 7.25C22.8284 7.25 23.5 7.92163 23.5 8.75C23.5 9.57837 22.8284 10.25 22 10.25C21.1716 10.25 20.5 9.57837 20.5 8.75C20.5 7.92163 21.1716 7.25 22 7.25ZM22 9.25C22.2761 9.25 22.5 9.02612 22.5 8.75C22.5 8.47388 22.2761 8.25 22 8.25C21.7239 8.25 21.5 8.47388 21.5 8.75C21.5 9.02612 21.7239 9.25 22 9.25Z" fill="black"/>
                                <path d="M10.5 22.25H11.792L11.8174 22.1885L10.904 21.2749C10.7087 21.0798 10.7087 20.7632 10.904 20.5681L12.3181 19.1541C12.5132 18.9587 12.8298 18.9587 13.0249 19.1541L13.9385 20.0674L14 20.042V18.75C14 18.4739 14.2239 18.25 14.5 18.25H16.5C16.7761 18.25 17 18.4739 17 18.75V20.042L17.0615 20.0674L17.9751 19.1541C18.1702 18.9587 18.4868 18.9587 18.6819 19.1541L20.0959 20.5681C20.2913 20.7632 20.2913 21.0798 20.0959 21.2749L19.1826 22.1885L19.208 22.25H20.5C20.7761 22.25 21 22.4739 21 22.75V24.75C21 25.0261 20.7761 25.25 20.5 25.25H19.208L19.1826 25.3115L20.0959 26.2251C20.2913 26.4202 20.2913 26.7368 20.0959 26.9319L18.6819 28.3459C18.4868 28.5413 18.1702 28.5413 17.9751 28.3459L17.0615 27.4326L17 27.458V28.75C17 29.0261 16.7761 29.25 16.5 29.25H14.5C14.2239 29.25 14 29.0261 14 28.75V27.458L13.9385 27.4326L13.0249 28.3459C12.8298 28.5413 12.5132 28.5413 12.3181 28.3459L10.904 26.9319C10.7087 26.7368 10.7087 26.4202 10.904 26.2251L11.8174 25.3115L11.792 25.25H10.5C10.2239 25.25 10 25.0261 10 24.75V22.75C10 22.4739 10.2239 22.25 10.5 22.25ZM11 24.25H12.147C12.3679 24.25 12.5627 24.3953 12.626 24.6069C12.6843 24.8044 12.7629 24.9954 12.8606 25.1765C12.9661 25.3711 12.9311 25.6121 12.7744 25.7686L11.9646 26.5786L12.6714 27.2854L13.4814 26.4756C13.6379 26.3188 13.8789 26.2839 14.0735 26.3894C14.2546 26.4871 14.4456 26.5657 14.6431 26.624C14.8547 26.6873 15 26.8821 15 27.103V28.25H16V27.103C16 26.8821 16.1453 26.6873 16.3569 26.624C16.5544 26.5657 16.7454 26.4871 16.9265 26.3894C17.1211 26.2839 17.3621 26.3188 17.5186 26.4756L18.3286 27.2854L19.0354 26.5786L18.2256 25.7686C18.0688 25.6121 18.0339 25.3711 18.1394 25.1765C18.2371 24.9954 18.3157 24.8044 18.374 24.6069C18.4373 24.3953 18.6321 24.25 18.853 24.25H20V23.25H18.853C18.6321 23.25 18.4373 23.1047 18.374 22.8931C18.3157 22.6956 18.2371 22.5046 18.1394 22.3235C18.0339 22.1289 18.0688 21.8879 18.2256 21.7314L19.0354 20.9214L18.3286 20.2146L17.5186 21.0244C17.3621 21.1812 17.1211 21.2161 16.9265 21.1106C16.7454 21.0129 16.5544 20.9343 16.3569 20.876C16.1453 20.8127 16 20.6179 16 20.397V19.25H15V20.397C15 20.6179 14.8547 20.8127 14.6431 20.876C14.4456 20.9343 14.2546 21.0129 14.0735 21.1106C13.8789 21.2161 13.6379 21.1812 13.4814 21.0244L12.6714 20.2146L11.9646 20.9214L12.7744 21.7314C12.9311 21.8879 12.9661 22.1289 12.8606 22.3235C12.7629 22.5046 12.6843 22.6956 12.626 22.8931C12.5627 23.1047 12.3679 23.25 12.147 23.25H11V24.25Z" fill="black"/>
                                <path d="M15.5 21.75C16.6045 21.75 17.5 22.6455 17.5 23.75C17.5 24.8545 16.6045 25.75 15.5 25.75C14.3955 25.75 13.5 24.8545 13.5 23.75C13.5 22.6455 14.3955 21.75 15.5 21.75ZM15.5 24.75C16.0522 24.75 16.5 24.3022 16.5 23.75C16.5 23.1978 16.0522 22.75 15.5 22.75C14.9478 22.75 14.5 23.1978 14.5 23.75C14.5 24.3022 14.9478 24.75 15.5 24.75Z" fill="black"/>
                                <path d="M6.5 11.25C7.60449 11.25 8.5 12.1455 8.5 13.25C8.5 14.3545 7.60449 15.25 6.5 15.25C5.39551 15.25 4.5 14.3545 4.5 13.25C4.5 12.1455 5.39551 11.25 6.5 11.25ZM6.5 14.25C7.05225 14.25 7.5 13.8022 7.5 13.25C7.5 12.6978 7.05225 12.25 6.5 12.25C5.94776 12.25 5.5 12.6978 5.5 13.25C5.5 13.8022 5.94776 14.25 6.5 14.25Z" fill="black"/>
                                <path d="M0.499997 11.75H2.26098C2.31372 11.6013 2.37402 11.4558 2.44189 11.3135L1.19702 10.0681C1.00171 9.8728 1.00171 9.55615 1.19702 9.36108L2.61108 7.94702C2.80615 7.75171 3.1228 7.75171 3.31811 7.94702L4.56347 9.19189C4.70581 9.12402 4.85132 9.06372 5 9.01099V7.25C5 6.97388 5.22388 6.75 5.5 6.75H7.5C7.77612 6.75 8 6.97388 8 7.25V9.01099C8.14868 9.06372 8.29419 9.12402 8.43652 9.19189L9.68188 7.94702C9.8772 7.75171 10.1938 7.75171 10.3889 7.94702L11.803 9.36108C11.9983 9.55615 11.9983 9.8728 11.803 10.0681L10.5581 11.3135C10.626 11.4558 10.6863 11.6013 10.739 11.75H12.5C12.7761 11.75 13 11.9739 13 12.25V14.25C13 14.5261 12.7761 14.75 12.5 14.75H10.739C10.6863 14.8987 10.626 15.0442 10.5581 15.1865L11.803 16.4319C11.9983 16.6272 11.9983 16.9438 11.803 17.1389L10.3889 18.553C10.1938 18.7483 9.8772 18.7483 9.68188 18.553L8.43652 17.3081C8.29419 17.376 8.14868 17.4363 8 17.489V19.25C8 19.5261 7.77612 19.75 7.5 19.75H5.5C5.22388 19.75 5 19.5261 5 19.25V17.489C4.85132 17.4363 4.70581 17.376 4.56347 17.3081L3.31811 18.553C3.1228 18.7483 2.80615 18.7483 2.61108 18.553L1.19702 17.1389C1.00171 16.9438 1.00171 16.6272 1.19702 16.4319L2.44189 15.1865C2.37402 15.0442 2.31372 14.8987 2.26098 14.75H0.499997C0.223874 14.75 -2.86102e-06 14.5261 -2.86102e-06 14.25V12.25C-2.86102e-06 11.9739 0.223874 11.75 0.499997 11.75ZM0.999997 13.75H2.6311C2.85888 13.7502 3.05762 13.9045 3.1145 14.125C3.19653 14.4409 3.32226 14.7439 3.48804 15.0249C3.604 15.2217 3.57202 15.4717 3.4104 15.6331L2.25757 16.7859L2.9646 17.4929L4.11743 16.3401C4.27881 16.1785 4.52881 16.1465 4.72558 16.2625C5.00659 16.4285 5.30957 16.554 5.62549 16.636C5.84595 16.6929 6.00024 16.8918 6.00049 17.1194V18.75H7V17.1189C7.00024 16.8911 7.15454 16.6924 7.375 16.6355C7.69092 16.5535 7.9939 16.4277 8.2749 16.262C8.47168 16.146 8.72168 16.178 8.88306 16.3396L10.0359 17.4924L10.7429 16.7854L9.59009 15.6326C9.42847 15.4712 9.39648 15.2212 9.51245 15.0244C9.67847 14.7434 9.80395 14.4404 9.88599 14.1245C9.94287 13.9041 10.1418 13.7498 10.3694 13.7495H12V12.75H10.3689C10.1411 12.7498 9.94238 12.5955 9.8855 12.375C9.80347 12.0591 9.67773 11.7561 9.51196 11.4751C9.396 11.2783 9.42798 11.0283 9.5896 10.8669L10.7424 9.71411L10.0354 9.00708L8.88257 10.1599C8.72119 10.3215 8.47119 10.3535 8.27441 10.2375C7.99341 10.0715 7.69043 9.94604 7.37451 9.86401C7.15405 9.80713 6.99975 9.60815 6.99951 9.38062V7.75H5.99951V9.3811C5.99927 9.60889 5.84497 9.80762 5.62451 9.8645C5.30859 9.94653 5.00561 10.0723 4.72461 10.238C4.52783 10.354 4.27783 10.322 4.11645 10.1604L2.96338 9.00757L2.25659 9.7146L3.40942 10.8674C3.57104 11.0288 3.60303 11.2788 3.48706 11.4756C3.32104 11.7566 3.19531 12.0596 3.11352 12.3755C3.05664 12.5959 2.85766 12.7502 2.62988 12.7505H0.999997V13.75Z" fill="black"/>
                            </svg>
                            <h2 className="pl-3 hidden md:block">ajustes</h2>
                        </div>
                    </div>
                    
                </div>
            
                <div className="mt-5 mb-6 text-xl font-medium block items-center align-middle justify-center ">
                <h1 className="uppercase hidden md:block">suscripcion</h1>
                    <div className="w-12 h-12 md:w-40 md:h-7 mt-7 ml-3 md:ml-10 rounded-full bg-rb flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 801 801" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M497 0C329.1 0 193 136.1 193 304C193 374.3 216.9 439 256.9 490.5L215.8 531.6L153.5 469.3C151.977 467.81 149.931 466.975 147.8 466.975C145.669 466.975 143.623 467.81 142.1 469.3L102.3 509.1C100.81 510.623 99.9751 512.669 99.9751 514.8C99.9751 516.931 100.81 518.977 102.3 520.5L164.6 582.8L119.7 627.7L57.4 565.4C55.877 563.91 53.8308 563.075 51.7 563.075C49.5691 563.075 47.523 563.91 46 565.4L6.19997 605.2C4.70968 606.723 3.87514 608.769 3.87514 610.9C3.87514 613.031 4.70968 615.077 6.19997 616.6L68.5 678.9L3.19997 744.2C1.71115 745.704 0.875977 747.734 0.875977 749.85C0.875977 751.966 1.71115 753.996 3.19997 755.5L45.5 797.8C48.6 800.9 53.7 800.9 56.8 797.8L310.4 544.2C363.785 585.607 429.439 608.055 497 608C664.9 608 801 471.9 801 304C801 136.1 664.9 0 497 0ZM658.2 465.2C615.2 508.3 557.9 532 497 532C436.1 532 378.8 508.3 335.8 465.2C292.7 422.2 269 364.9 269 304C269 243.1 292.7 185.8 335.8 142.8C378.8 99.7 436.1 76 497 76C557.9 76 615.2 99.7 658.2 142.8C701.3 185.8 725 243.1 725 304C725 364.9 701.3 422.2 658.2 465.2Z" fill="white"/>
                        </svg>
                        <h1 className="ml-2 text-sm font-medium uppercase hidden md:block" >suscribete</h1>
                    </div>
                    <div className="w-44 text-sm font-light ml-8 mt-3 text-center hidden md:block ">
                        <h2 >Accede a beneficios, asesorias y más, solo tienes que elegir un plan de <u>suscripción</u>.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
