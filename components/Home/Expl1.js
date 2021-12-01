import 'animate.css';
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Expl1() {

    const { t } = useTranslation('common');
    
    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() =>{
        console.log("use effect hook, inView = ", inView);

            if(inView){
                animation.start({
                    display:"visible",
                    scale:1 , 
                    opacity: 1,
                    transition: {
                        type: 'spring', duration:2, bounce: 0.3, 
                    }
                });
            }
                if(!inView){
                    animation.start({
                        display:"hidden",
                        scale: 0.4,
                        opacity: 0
                    })
                }
    }, [inView]);




    return (
        <div ref={ref} className="bg-white text-subs1">
            <div  className="w-full mx-auto h-ful">
                <div className="max-w-6xl mx-auto pl-3">
                    
                    <h1   className="text-bd font-bold text-5xl mb-10 px-2 "><span className="text-4xl">{t('adv_subtitlea')}</span> <br /> {t('adv_subtitlea2')} <span className="text-bttl text-5xl">{t('adv_subtitlea2b')}</span>  </h1>
                </div>
                <div  className=" w-full h-full pt-5 pb-5 flex flex-col place-content-center ">

                    <motion.div animate={animation} className="grid sm:grid-cols-3 place-center gap-10 max-w-6xl mx-auto">
                        
                        <div  className="flex flex-col items-left rounded-3xl p-6">
                            <div className="bg-bl w-56 h-52 flex place-content-center ml-10 sm:ml-0 rounded-full">
                                <svg className="w-48 hover:animate-wiggle " viewBox="0 0 547 386" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 22C44 9.84973 53.8497 0 66 0H482C494.15 0 504 9.84974 504 22V335H44V22Z" fill="#3269A1"/>
                                    <path d="M77 56C77 43.8497 86.8497 34 99 34H449C461.15 34 471 43.8497 471 56V335H77V56Z" fill="#3E8CC7"/>
                                    <path d="M269.5 182.5L434.574 39.1352C448.816 26.7664 471 36.8823 471 55.7454V335H77L269.5 182.5Z" fill="#98C7EB"/>
                                    <rect x="351" y="55" width="53" height="17" fill="#DC0000"/>
                                    <rect x="422" y="55" width="18" height="17" fill="#DC0000"/>
                                    <circle cx="274" cy="168" r="63" fill="#6C86E0"/>
                                    <circle cx="274" cy="151" r="17" fill="#345B82"/>
                                    <path d="M249 193.5C249 179.417 260.417 168 274.5 168V168C288.583 168 300 179.417 300 193.5V222H249V193.5Z" fill="#345B82"/>
                                    <rect y="335" width="547" height="51" rx="23" fill="#E9EEF9"/>
                                    <rect x="131" y="245" width="284" height="75" fill="#DEE6FF"/>
                                    <rect x="156" y="258" width="233" height="50" fill="#6C86E0"/>
                                </svg>
                            </div>
                            
                            <div className="w-12/12 ">
                                <h1 className="text-2xl sm:text-3xl font-semibold text-subs1 mt-10">{t('adv_titlestepsa1')}</h1>
                                <h2 className="mt-3 font-body text-lg">{t('adv_infostepsa1')}</h2>
                            </div>
                            
                        </div>

                        <div className="flex flex-col items-center rounded-3xl p-6">
                            <div className="bg-bl w-56 h-52 flex place-content-center rounded-full">
                                <svg className="w-48 hover:animate-wiggle" viewBox="0 0 547 386" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 22C44 9.84973 53.8497 0 66 0H482C494.15 0 504 9.84974 504 22V335H44V22Z" fill="#3269A1"/>
                                    <path d="M77 56C77 43.8497 86.8497 34 99 34H449C461.15 34 471 43.8497 471 56V335H77V56Z" fill="#3E8CC7"/>
                                    <path d="M269.5 182.5L434.574 39.1352C448.816 26.7664 471 36.8823 471 55.7454V335H77L269.5 182.5Z" fill="#98C7EB"/>
                                    <rect x="351" y="55" width="53" height="17" fill="#DC0000"/>
                                    <rect x="422" y="55" width="18" height="17" fill="#DC0000"/>
                                    <circle cx="273" cy="195" r="115" fill="#6C86E0"/>
                                    <rect y="335" width="547" height="51" rx="23" fill="#E9EEF9"/>
                                    <path d="M170.551 236.307L170.031 236.19C175.828 210.507 190.399 187.185 211.057 170.519C226.676 157.939 245.252 149.525 265.036 146.07C284.82 142.615 305.162 144.233 324.145 150.77C343.129 157.308 360.129 168.55 373.547 183.439C386.964 198.328 396.357 216.374 400.84 235.877L400.321 235.994C388.048 182.317 340.82 144.829 285.471 144.829C230.848 144.829 182.517 183.301 170.551 236.307Z" fill="#3F3D56"/>
                                    <path d="M215.626 143.1H213.254V236.447H215.626V143.1Z" fill="#3F3D56"/>
                                    <path d="M237.522 154.996C237.673 187.637 214.618 214.204 214.618 214.204C214.618 214.204 191.319 187.85 191.167 155.209C191.016 122.567 214.071 96 214.071 96C214.071 96 237.371 122.355 237.522 154.996Z" fill="#6C63FF"/>
                                    <path d="M380.706 197.801H197.094V236.557H380.706V197.801Z" fill="#F2F2F2"/>
                                    <path d="M191.231 202.048L211.218 160.372H370.846L385.769 202.048H191.231Z" fill="#3F3D56"/>
                                    <path d="M315.149 163.027H241.065V187.449H315.149V163.027Z" fill="#F2F2F2"/>
                                    <path d="M245.862 143.118L234.136 167.54H322.078L315.149 143.118H245.862Z" fill="#3F3D56"/>
                                    <path d="M306.088 205.499H247.594V236.557H306.088V205.499Z" fill="#CCCCCC"/>
                                    <path d="M235.468 206.561H204.289V236.557H235.468V206.561Z" fill="#CCCCCC"/>
                                    <path d="M332.338 208.419H316.215V236.557H332.338V208.419Z" fill="#3F3D56"/>
                                    <path d="M440 236.425H137V236.955H440V236.425Z" fill="#3F3D56"/>
                                    <path d="M186.509 174.855H184.943V236.454H186.509V174.855Z" fill="#3F3D56"/>
                                    <path d="M200.957 182.705C201.057 204.245 185.843 221.776 185.843 221.776C185.843 221.776 170.468 204.385 170.368 182.845C170.269 161.306 185.482 143.774 185.482 143.774C185.482 143.774 200.858 161.165 200.957 182.705Z" fill="#6C63FF"/>
                                    <path opacity="0.1" d="M200.957 182.705C201.057 204.245 185.843 221.776 185.843 221.776C185.843 221.776 170.468 204.385 170.368 182.845C170.269 161.306 185.482 143.774 185.482 143.774C185.482 143.774 200.858 161.165 200.957 182.705Z" fill="black"/>
                                    <path d="M166.156 174.855H164.591V236.454H166.156V174.855Z" fill="#3F3D56"/>
                                    <path d="M180.605 182.705C180.704 204.245 165.491 221.776 165.491 221.776C165.491 221.776 150.116 204.385 150.016 182.845C149.916 161.306 165.13 143.774 165.13 143.774C165.13 143.774 180.505 161.165 180.605 182.705Z" fill="#6C63FF"/>
                                    <path d="M357.654 210.012H349.793V217.312H357.654V210.012Z" fill="#3F3D56"/>
                                    <path d="M368.181 210.012H360.319V217.312H368.181V210.012Z" fill="#3F3D56"/>
                                    <path d="M357.654 219.966H349.793V227.532H357.654V219.966Z" fill="#3F3D56"/>
                                    <path d="M368.181 219.966H360.319V227.532H368.181V219.966Z" fill="#3F3D56"/>
                                    <path d="M254.013 169.709H247.86V175.422H254.013V169.709Z" fill="#3F3D56"/>
                                    <path d="M262.251 169.709H256.098V175.422H262.251V169.709Z" fill="#3F3D56"/>
                                    <path d="M254.013 177.5H247.86V183.421H254.013V177.5Z" fill="#3F3D56"/>
                                    <path d="M262.251 177.5H256.098V183.421H262.251V177.5Z" fill="#3F3D56"/>
                                    <path d="M300.116 169.709H293.963V175.422H300.116V169.709Z" fill="#3F3D56"/>
                                    <path d="M308.354 169.709H302.201V175.422H308.354V169.709Z" fill="#3F3D56"/>
                                    <path d="M300.116 177.5H293.963V183.421H300.116V177.5Z" fill="#3F3D56"/>
                                    <path d="M308.354 177.5H302.201V183.421H308.354V177.5Z" fill="#3F3D56"/>
                                    <path d="M277.197 169.709H271.045V175.422H277.197V169.709Z" fill="#3F3D56"/>
                                    <path d="M285.435 169.709H279.283V175.422H285.435V169.709Z" fill="#3F3D56"/>
                                    <path d="M277.197 177.5H271.045V183.421H277.197V177.5Z" fill="#3F3D56"/>
                                    <path d="M285.435 177.5H279.283V183.421H285.435V177.5Z" fill="#3F3D56"/>
                                    <path d="M323.687 211.27H319.813V214.867H323.687V211.27Z" fill="#F2F2F2"/>
                                    <path d="M328.873 211.27H325V214.867H328.873V211.27Z" fill="#F2F2F2"/>
                                    <path d="M323.687 216.175H319.813V219.903H323.687V216.175Z" fill="#F2F2F2"/>
                                    <path d="M328.873 216.175H325V219.903H328.873V216.175Z" fill="#F2F2F2"/>
                                    <path d="M330.206 225.541C330.795 225.541 331.272 225.065 331.272 224.479C331.272 223.893 330.795 223.417 330.206 223.417C329.617 223.417 329.14 223.893 329.14 224.479C329.14 225.065 329.617 225.541 330.206 225.541Z" fill="#F2F2F2"/>
                                    <path d="M306.222 208.817H247.594V209.348H306.222V208.817Z" fill="#F2F2F2"/>
                                    <path d="M306.222 211.207H247.594V211.737H306.222V211.207Z" fill="#F2F2F2"/>
                                    <path d="M306.222 213.595H247.594V214.126H306.222V213.595Z" fill="#F2F2F2"/>
                                    <path d="M306.222 215.985H247.594V216.516H306.222V215.985Z" fill="#F2F2F2"/>
                                    <path d="M306.222 218.374H247.594V218.905H306.222V218.374Z" fill="#F2F2F2"/>
                                    <path d="M306.222 220.763H247.594V221.294H306.222V220.763Z" fill="#F2F2F2"/>
                                    <path d="M306.222 223.152H247.594V223.683H306.222V223.152Z" fill="#F2F2F2"/>
                                    <path d="M306.222 225.541H247.594V226.072H306.222V225.541Z" fill="#F2F2F2"/>
                                    <path d="M306.222 227.93H247.594V228.461H306.222V227.93Z" fill="#F2F2F2"/>
                                    <path d="M306.222 230.319H247.594V230.85H306.222V230.319Z" fill="#F2F2F2"/>
                                    <path d="M306.222 232.708H247.594V233.239H306.222V232.708Z" fill="#F2F2F2"/>
                                    <path d="M235.468 208.817H204.289V209.348H235.468V208.817Z" fill="#F2F2F2"/>
                                    <path d="M235.468 211.207H204.289V211.737H235.468V211.207Z" fill="#F2F2F2"/>
                                    <path d="M235.468 213.595H204.289V214.126H235.468V213.595Z" fill="#F2F2F2"/>
                                    <path d="M235.468 215.985H204.289V216.516H235.468V215.985Z" fill="#F2F2F2"/>
                                    <path d="M235.468 218.374H204.289V218.905H235.468V218.374Z" fill="#F2F2F2"/>
                                    <path d="M235.468 220.763H204.289V221.294H235.468V220.763Z" fill="#F2F2F2"/>
                                    <path d="M235.468 223.152H204.289V223.683H235.468V223.152Z" fill="#F2F2F2"/>
                                    <path d="M235.468 225.541H204.289V226.072H235.468V225.541Z" fill="#F2F2F2"/>
                                    <path d="M235.468 227.93H204.289V228.461H235.468V227.93Z" fill="#F2F2F2"/>
                                    <path d="M235.468 230.319H204.289V230.85H235.468V230.319Z" fill="#F2F2F2"/>
                                    <path d="M235.468 232.708H204.289V233.239H235.468V232.708Z" fill="#F2F2F2"/>
                                    <g clipPath="url(#clip0_144:613)">
                                    <rect x="355" y="147" width="42" height="42" fill="white"/>
                                    </g>
                                    <path d="M368.5 134C371.323 134 374.119 134.556 376.728 135.637C379.336 136.717 381.706 138.301 383.703 140.297C385.699 142.294 387.283 144.664 388.363 147.272C389.444 149.881 390 152.677 390 155.5C390 161.202 387.735 166.671 383.703 170.703C379.671 174.735 374.202 177 368.5 177C365.677 177 362.881 176.444 360.272 175.363C357.664 174.283 355.294 172.699 353.297 170.703C349.265 166.671 347 161.202 347 155.5C347 149.798 349.265 144.329 353.297 140.297C357.329 136.265 362.798 134 368.5 134ZM359.9 146.276V153.458L375.251 155.5L359.9 157.542V164.724L381.4 155.5L359.9 146.276Z" fill="#DC0000"/>
                                    <circle cx="126" cy="87" r="32" fill="#6C86E0"/>
                                    <ellipse cx="126" cy="78.5" rx="9" ry="8.5" fill="#345B82"/>
                                    <path d="M113 100C113 92.8203 118.82 87 126 87C133.18 87 139 92.8203 139 100V114H113V100Z" fill="#345B82"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M164.302 149.298C165.384 148.926 166.555 148.902 167.651 149.229C168.748 149.556 169.715 150.219 170.417 151.124L208.843 200.623C209.593 201.589 210 202.777 210 204C210 205.224 209.593 206.412 208.843 207.377L170.417 256.877C169.714 257.781 168.748 258.443 167.652 258.769C166.556 259.096 165.385 259.072 164.304 258.7C163.222 258.328 162.284 257.627 161.619 256.695C160.954 255.763 160.597 254.646 160.596 253.5V231.555C131.068 232.171 116.883 237.787 109.758 243.892C102.984 249.694 101.743 256.52 100.453 263.67L100.118 265.512C99.8721 266.83 99.1534 268.013 98.0976 268.838C97.0417 269.662 95.7215 270.072 94.3853 269.99C93.0491 269.907 91.789 269.338 90.8421 268.39C89.8952 267.442 89.3268 266.18 89.2438 264.841C88.2996 249.727 89.7159 227.826 100.371 209.506C110.713 191.725 129.334 178.052 160.596 176.622V154.501C160.596 153.355 160.953 152.237 161.617 151.305C162.281 150.372 163.22 149.67 164.302 149.298V149.298Z" fill="#DC0000"/>
                                    <defs>
                                    <clipPath id="clip0_144:613">
                                    <rect width="70" height="62" fill="white" transform="translate(311 107)"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        
                            <div className="w-12/12">
                                <h1 className="text-2xl sm:text-3xl font-semibold text-subs1 mt-10">{t('adv_titlestepsa2')}</h1>
                                <h2 className="mt-3 font-body text-lg">{t('adv_infostepsa2')}</h2>
                            </div>
                        </div>

                        <div className="flex flex-col items-center  rounded-xl p-6">
                            <div className="bg-bl w-56 h-52 flex place-content-center rounded-full" >
                                <svg className="w-48 hover:animate-wiggle" viewBox="0 0 548 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.0308 22C44.0308 9.84973 53.8805 0 66.0308 0H482.355C494.505 0 504.355 9.84974 504.355 22V335.236H44.0308V22Z" fill="#3269A1"/>
                                    <path d="M77.0533 56.0247C77.0533 43.8744 86.9031 34.0247 99.0533 34.0247H449.331C461.481 34.0247 471.331 43.8744 471.331 56.0247V335.237H77.0533V56.0247Z" fill="#3E8CC7"/>
                                    <path d="M269.689 182.629L434.905 39.1414C449.147 26.7725 471.331 36.8884 471.331 55.7515V335.237H77.0533L269.689 182.629Z" fill="#98C7EB"/>
                                    <rect x="351.248" y="55.0396" width="53.0374" height="17.012" fill="#DC0000"/>
                                    <rect x="422.298" y="55.0396" width="18.0127" height="17.012" fill="#DC0000"/>
                                    <circle cx="273.192" cy="195.137" r="115.081" fill="#6C86E0"/>
                                    <rect y="335.238" width="547.386" height="51.036" rx="23" fill="#E9EEF9"/>
                                    <g clipPath="url(#clip0_144:614)">
                                    <path d="M170.67 236.474L170.15 236.357C175.952 210.656 190.532 187.318 211.206 170.64C226.835 158.051 245.424 149.632 265.222 146.174C285.021 142.717 305.376 144.335 324.373 150.877C343.37 157.42 360.383 168.67 373.81 183.569C387.236 198.469 396.636 216.527 401.122 236.044L400.602 236.161C388.321 182.447 341.06 144.932 285.672 144.932C231.01 144.932 182.645 183.431 170.67 236.474Z" fill="#3F3D56"/>
                                    <path d="M215.778 143.202H213.403V236.615H215.778V143.202Z" fill="#3F3D56"/>
                                    <path d="M237.688 155.106C237.84 187.77 214.769 214.357 214.769 214.357C214.769 214.357 191.453 187.983 191.302 155.319C191.151 122.655 214.221 96.0688 214.221 96.0688C214.221 96.0688 237.537 122.442 237.688 155.106Z" fill="#6C63FF"/>
                                    <path d="M380.974 197.942H197.232V236.725H380.974V197.942Z" fill="#F2F2F2"/>
                                    <path d="M191.365 202.192L211.366 160.487H371.107L386.041 202.192H191.365Z" fill="#3F3D56"/>
                                    <path d="M315.371 163.143H241.234V187.582H315.371V163.143Z" fill="#F2F2F2"/>
                                    <path d="M246.034 143.22L234.3 167.659H322.304L315.371 143.22H246.034Z" fill="#3F3D56"/>
                                    <path d="M306.304 205.646H247.768V236.726H306.304V205.646Z" fill="#CCCCCC"/>
                                    <path d="M235.634 206.708H204.432V236.725H235.634V206.708Z" fill="#CCCCCC"/>
                                    <path d="M332.572 208.568H316.438V236.726H332.572V208.568Z" fill="#3F3D56"/>
                                    <path d="M440.31 236.592H137.096V237.123H440.31V236.592Z" fill="#3F3D56"/>
                                    <path d="M186.639 174.979H185.073V236.622H186.639V174.979Z" fill="#3F3D56"/>
                                    <path d="M201.098 182.835C201.198 204.39 185.973 221.934 185.973 221.934C185.973 221.934 170.587 204.531 170.488 182.976C170.388 161.421 185.612 143.877 185.612 143.877C185.612 143.877 200.998 161.28 201.098 182.835Z" fill="#6C63FF"/>
                                    <path opacity="0.1" d="M201.098 182.835C201.198 204.39 185.973 221.934 185.973 221.934C185.973 221.934 170.587 204.531 170.488 182.976C170.388 161.421 185.612 143.877 185.612 143.877C185.612 143.877 200.998 161.28 201.098 182.835Z" fill="black"/>
                                    <path d="M166.272 174.979H164.706V236.622H166.272V174.979Z" fill="#3F3D56"/>
                                    <path d="M180.731 182.835C180.831 204.39 165.607 221.934 165.607 221.934C165.607 221.934 150.221 204.531 150.121 182.976C150.021 161.421 165.246 143.877 165.246 143.877C165.246 143.877 180.632 161.28 180.731 182.835Z" fill="#6C63FF"/>
                                    <path d="M357.906 210.162H350.039V217.467H357.906V210.162Z" fill="#3F3D56"/>
                                    <path d="M368.44 210.162H360.573V217.467H368.44V210.162Z" fill="#3F3D56"/>
                                    <path d="M357.906 220.123H350.039V227.694H357.906V220.123Z" fill="#3F3D56"/>
                                    <path d="M368.44 220.123H360.573V227.694H368.44V220.123Z" fill="#3F3D56"/>
                                    <path d="M254.191 169.83H248.034V175.547H254.191V169.83Z" fill="#3F3D56"/>
                                    <path d="M262.435 169.83H256.278V175.547H262.435V169.83Z" fill="#3F3D56"/>
                                    <path d="M254.191 177.626H248.034V183.551H254.191V177.626Z" fill="#3F3D56"/>
                                    <path d="M262.435 177.626H256.278V183.551H262.435V177.626Z" fill="#3F3D56"/>
                                    <path d="M300.326 169.83H294.17V175.547H300.326V169.83Z" fill="#3F3D56"/>
                                    <path d="M308.57 169.83H302.414V175.547H308.57V169.83Z" fill="#3F3D56"/>
                                    <path d="M300.326 177.626H294.17V183.551H300.326V177.626Z" fill="#3F3D56"/>
                                    <path d="M308.57 177.626H302.414V183.551H308.57V177.626Z" fill="#3F3D56"/>
                                    <path d="M277.392 169.83H271.235V175.547H277.392V169.83Z" fill="#3F3D56"/>
                                    <path d="M285.636 169.83H279.479V175.547H285.636V169.83Z" fill="#3F3D56"/>
                                    <path d="M277.392 177.626H271.235V183.551H277.392V177.626Z" fill="#3F3D56"/>
                                    <path d="M285.636 177.626H279.479V183.551H285.636V177.626Z" fill="#3F3D56"/>
                                    <path d="M323.914 211.42H320.037V215.02H323.914V211.42Z" fill="#F2F2F2"/>
                                    <path d="M329.104 211.42H325.228V215.02H329.104V211.42Z" fill="#F2F2F2"/>
                                    <path d="M323.914 216.329H320.037V220.06H323.914V216.329Z" fill="#F2F2F2"/>
                                    <path d="M329.104 216.329H325.228V220.06H329.104V216.329Z" fill="#F2F2F2"/>
                                    <path d="M330.438 225.702C331.027 225.702 331.505 225.226 331.505 224.639C331.505 224.052 331.027 223.577 330.438 223.577C329.849 223.577 329.371 224.052 329.371 224.639C329.371 225.226 329.849 225.702 330.438 225.702Z" fill="#F2F2F2"/>
                                    <path d="M306.437 208.966H247.768V209.497H306.437V208.966Z" fill="#F2F2F2"/>
                                    <path d="M306.437 211.356H247.768V211.888H306.437V211.356Z" fill="#F2F2F2"/>
                                    <path d="M306.437 213.747H247.768V214.278H306.437V213.747Z" fill="#F2F2F2"/>
                                    <path d="M306.437 216.138H247.768V216.67H306.437V216.138Z" fill="#F2F2F2"/>
                                    <path d="M306.437 218.528H247.768V219.059H306.437V218.528Z" fill="#F2F2F2"/>
                                    <path d="M306.437 220.92H247.768V221.451H306.437V220.92Z" fill="#F2F2F2"/>
                                    <path d="M306.437 223.311H247.768V223.842H306.437V223.311Z" fill="#F2F2F2"/>
                                    <path d="M306.437 225.701H247.768V226.232H306.437V225.701Z" fill="#F2F2F2"/>
                                    <path d="M306.437 228.093H247.768V228.624H306.437V228.093Z" fill="#F2F2F2"/>
                                    <path d="M306.437 230.482H247.768V231.013H306.437V230.482Z" fill="#F2F2F2"/>
                                    <path d="M306.437 232.873H247.768V233.405H306.437V232.873Z" fill="#F2F2F2"/>
                                    <path d="M235.634 208.966H204.432V209.497H235.634V208.966Z" fill="#F2F2F2"/>
                                    <path d="M235.634 211.356H204.432V211.888H235.634V211.356Z" fill="#F2F2F2"/>
                                    <path d="M235.634 213.747H204.432V214.278H235.634V213.747Z" fill="#F2F2F2"/>
                                    <path d="M235.634 216.138H204.432V216.67H235.634V216.138Z" fill="#F2F2F2"/>
                                    <path d="M235.634 218.528H204.432V219.059H235.634V218.528Z" fill="#F2F2F2"/>
                                    <path d="M235.634 220.92H204.432V221.451H235.634V220.92Z" fill="#F2F2F2"/>
                                    <path d="M235.634 223.311H204.432V223.842H235.634V223.311Z" fill="#F2F2F2"/>
                                    <path d="M235.634 225.701H204.432V226.232H235.634V225.701Z" fill="#F2F2F2"/>
                                    <path d="M235.634 228.093H204.432V228.624H235.634V228.093Z" fill="#F2F2F2"/>
                                    <path d="M235.634 230.482H204.432V231.013H235.634V230.482Z" fill="#F2F2F2"/>
                                    <path d="M235.634 232.873H204.432V233.405H235.634V232.873Z" fill="#F2F2F2"/>
                                    <path d="M299.292 160.732C298.506 158.912 297.373 157.263 295.956 155.877C294.538 154.487 292.866 153.382 291.031 152.622C289.128 151.832 287.087 151.427 285.027 151.432C282.136 151.432 279.315 152.224 276.865 153.719C276.278 154.077 275.721 154.469 275.193 154.898C274.666 154.469 274.109 154.077 273.522 153.719C271.071 152.224 268.251 151.432 265.36 151.432C263.279 151.432 261.262 151.831 259.356 152.622C257.515 153.385 255.856 154.481 254.431 155.877C253.012 157.261 251.878 158.911 251.094 160.732C250.279 162.626 249.863 164.637 249.863 166.707C249.863 168.659 250.262 170.694 251.053 172.764C251.716 174.493 252.666 176.288 253.88 178.099C255.803 180.967 258.447 183.957 261.731 186.988C267.172 192.013 272.561 195.485 272.789 195.625L274.179 196.517C274.795 196.909 275.586 196.909 276.202 196.517L277.592 195.625C277.82 195.479 283.203 192.013 288.65 186.988C291.934 183.957 294.578 180.967 296.501 178.099C297.715 176.288 298.671 174.493 299.328 172.764C300.119 170.694 300.518 168.659 300.518 166.707C300.524 164.637 300.107 162.626 299.292 160.732V160.732Z" fill="#DC0000"/>
                                    </g>
                                    <rect x="379.677" y="280.201" width="140.099" height="96.0677" fill="#FEC9A3"/>
                                    <rect x="411.7" y="264.187" width="36.0254" height="40.0282" rx="18.0127" fill="#FEC9A3"/>
                                    <rect x="379.677" y="187.133" width="36.0254" height="117.082" rx="18.0127" fill="#FEC9A3"/>
                                    <rect x="312.22" y="324.911" width="36.0254" height="96.673" rx="18" transform="rotate(-52.8179 312.22 324.911)" fill="#FEC9A3"/>
                                    <rect x="447.724" y="264.187" width="36.0254" height="40.0282" rx="18.0127" fill="#FEC9A3"/>
                                    <rect x="483.749" y="264.187" width="36.0254" height="40.0282" rx="18.0127" fill="#FEC9A3"/>
                                    <path d="M468.831 327.734L481.84 316.726L491.847 306.219L519.776 280.201V376.268H379.677L419.296 360.757L440.311 349.249L454.821 339.743L468.831 327.734Z" fill="#FEC093"/>
                                    <circle cx="276.414" cy="170.339" r="42.2505" stroke="white" strokeWidth="6"/>
                                    <rect x="295.046" y="210.083" width="3.54906" height="15.9708" transform="rotate(-26.6177 295.046 210.083)" fill="white"/>
                                    <rect x="297.901" y="226.095" width="13.6612" height="44.0772" transform="rotate(-26.6177 297.901 226.095)" fill="white"/>
                                    <path d="M301.015 220.833L302.936 224.161L297.909 226.157L301.015 220.833Z" fill="white"/>
                                    <path d="M301.015 220.833L302.936 224.161L297.909 226.157L301.015 220.833Z" fill="white"/>
                                    <path d="M302.588 219.584L310.129 220.028L304.806 222.689L302.588 219.584Z" fill="white"/>
                                    <path d="M302.588 219.584L310.129 220.028L304.806 222.689L302.588 219.584Z" fill="white"/>
                                    <rect x="320.595" y="263.457" width="7.19987" height="2.99317" transform="rotate(-26.7516 320.595 263.457)" fill="white"/>
                                    <path d="M320.483 262.948L322.051 266.053L317.672 265.279L320.483 262.948Z" fill="white"/>
                                    <path d="M325.255 260.716L329.207 259.51L328.319 263.059L325.255 260.716Z" fill="white"/>
                                    <defs>
                                    <clipPath id="clip0_144:614">
                                    <rect width="303.214" height="141.099" fill="white" transform="translate(137.096 96.0688)"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <div className="w-12/12">
                                <h1 className="text-2xl sm:text-3xl font-semibold text-subs1 mt-10">{t('adv_titlestepsa3')}</h1>
                                <h2 className="mt-3 font-body text-lg">{t('adv_infostepsa3')}</h2>
                            </div>
                        </div>

                    </motion.div>
                </div>
                <div className="w-full flex mt-10  place-content-center">
                <button  className="w-42 font-semibold bg-white border text-subs1 mt-1 rounded-lg px-8 py-2  uppercase hover:scale-105 transition-all duration-1000 ease-out">Unete gratis</button>

                </div>
            </div>
            <div className="">
            
                <svg className="w-full  left-0 sm:bottom-0 bottom-0" xmlns="http://www.w3.org/2000/svg" version="1.1"  width="1440" height="200" preserveAspectRatio="none" viewBox="0 0 1440 560">
                    
                        <path d="M 0,259 C 144,276.2 432,347.6 720,345 C 1008,342.4 1296,265.8 1440,246L1440 560L0 560z" fill="#DEE6FF"></path>
                    
                </svg>    
            </div>
        </div>
    )
}
