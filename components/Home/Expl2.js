import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Expl2() {
    
    const {ref, inView} = useInView({
        threshold: 0.1
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
        <div ref={ref}  className="bg-thome2 h-full text-bd">
            <motion.div animate={animation} className="w-full mx-auto h-full pt-10">
                <div className="max-w-6xl mx-auto">
                    
                    <h1   className="text-bd font-semibold text-3xl mb-10 px-2 "><span className="text-5xl"> Vendedores!</span> <br /> Encontrar compradores es <span className="text-bttl text-4xl ">fácil</span>  </h1>
                </div>
                <div  className=" w-full h-full pt-5 pb-5 flex flex-col place-content-center relative z-20 ">

                    <div   className="grid sm:grid-cols-2 lg:grid-cols-3  place-center gap-10 max-w-6xl mx-auto">
                        
                        <div  className="flex flex-col items-center rounded-3xl p-6">
                            <div className="bg-bl w-64 h-52 flex place-content-center rounded-full">
                                <svg className="w-60 hover:animate-wiggle " viewBox="0 0 547 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 135C22 122.85 31.8497 113 44 113H503C515.15 113 525 122.85 525 135V403H22V135Z" fill="#3269A1"/>
                                    <rect y="402" width="547" height="51" rx="23" fill="#D0D4D6"/>
                                    <path d="M76 55C76 42.8497 85.8497 33 98 33H448C460.15 33 470 42.8497 470 55V402H76V55Z" fill="#3E8CC7"/>
                                    <path d="M268.5 215.344L431.936 40.6792C445.569 26.1091 470 35.7566 470 55.7106V403H76L268.5 215.344Z" fill="#98C7EB"/>
                                    <rect x="343" y="63" width="53" height="17" fill="#DC0000"/>
                                    <rect x="414" y="63" width="18" height="17" fill="#DC0000"/>
                                    <circle cx="279" cy="196" r="63" fill="#6C86E0"/>
                                    <circle cx="279" cy="179" r="17" fill="#345B82"/>
                                    <path d="M254 221.5C254 207.417 265.417 196 279.5 196V196C293.583 196 305 207.417 305 221.5V250H254V221.5Z" fill="#345B82"/>
                                    <rect x="136" y="273" width="284" height="75" fill="#DEE6FF"/>
                                    <rect x="161" y="286" width="233" height="50" fill="#6C86E0"/>
                                </svg>

                            </div>
                            
                            <div className="w-12/12">
                                <h1 className="text-3xl font-semibold text-bd mt-10">1. Registrate</h1>
                                <h2 className="mt-3 font-body">Regístrate y agrega la propiedad que quieres vender.</h2>
                            </div>
                            
                        </div>

                        <div className="flex flex-col items-center rounded-xl p-6">
                            <div className="bg-bl w-64 h-52 flex place-content-center rounded-full">
                                <svg className="w-60 hover:animate-wiggle " viewBox="0 0 547 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 135C22 122.85 31.8497 113 44 113H503C515.15 113 525 122.85 525 135V403H22V135Z" fill="#3269A1"/>
                                    <rect y="402" width="547" height="51" rx="23" fill="#D0D4D6"/>
                                    <path d="M76 55C76 42.8497 85.8497 33 98 33H448C460.15 33 470 42.8497 470 55V402H76V55Z" fill="#3E8CC7"/>
                                    <path d="M268.5 215.344L431.936 40.6792C445.569 26.1091 470 35.7566 470 55.7106V403H76L268.5 215.344Z" fill="#98C7EB"/>
                                    <rect x="343" y="63" width="53" height="17" fill="#DC0000"/>
                                    <rect x="414" y="63" width="18" height="17" fill="#DC0000"/>
                                    <circle cx="383" cy="153" r="31" fill="#6C86E0"/>
                                    <circle cx="278" cy="153" r="31" fill="#6C86E0"/>
                                    <circle cx="155" cy="153" r="31" fill="#6C86E0"/>
                                    <circle cx="383" cy="231" r="31" fill="#6C86E0"/>
                                    <circle cx="278" cy="231" r="31" fill="#6C86E0"/>
                                    <circle cx="155" cy="231" r="31" fill="#6C86E0"/>
                                    <circle cx="383" cy="313" r="31" fill="#6C86E0"/>
                                    <circle cx="278" cy="313" r="31" fill="#6C86E0"/>
                                    <circle cx="155" cy="313" r="31" fill="#6C86E0"/>
                                    <ellipse cx="383" cy="144.5" rx="8" ry="8.5" fill="#345B82"/>
                                    <ellipse cx="278" cy="144.5" rx="8" ry="8.5" fill="#345B82"/>
                                    <ellipse cx="155" cy="144.5" rx="8" ry="8.5" fill="#345B82"/>
                                    <ellipse cx="383" cy="222.5" rx="8" ry="8.5" fill="#345B82"/>
                                    <ellipse cx="278" cy="222.5" rx="8" ry="8.5" fill="#345B82"/>
                                    <ellipse cx="155" cy="222.5" rx="8" ry="8.5" fill="#345B82"/>
                                    <ellipse cx="383" cy="304.5" rx="8" ry="8.5" fill="#345B82"/>
                                    <ellipse cx="278" cy="304.5" rx="8" ry="8.5" fill="#345B82"/>
                                    <ellipse cx="155" cy="304.5" rx="8" ry="8.5" fill="#345B82"/>
                                    <path d="M371 165.5C371 158.596 376.596 153 383.5 153V153C390.404 153 396 158.596 396 165.5V180H371V165.5Z" fill="#345B82"/>
                                    <path d="M266 165.5C266 158.596 271.596 153 278.5 153V153C285.404 153 291 158.596 291 165.5V180H266V165.5Z" fill="#345B82"/>
                                    <path d="M143 165.5C143 158.596 148.596 153 155.5 153V153C162.404 153 168 158.596 168 165.5V180H143V165.5Z" fill="#345B82"/>
                                    <path d="M371 243.5C371 236.596 376.596 231 383.5 231V231C390.404 231 396 236.596 396 243.5V258H371V243.5Z" fill="#345B82"/>
                                    <path d="M266 243.5C266 236.596 271.596 231 278.5 231V231C285.404 231 291 236.596 291 243.5V258H266V243.5Z" fill="#345B82"/>
                                    <path d="M143 243.5C143 236.596 148.596 231 155.5 231V231C162.404 231 168 236.596 168 243.5V258H143V243.5Z" fill="#345B82"/>
                                    <path d="M371 325.5C371 318.596 376.596 313 383.5 313V313C390.404 313 396 318.596 396 325.5V340H371V325.5Z" fill="#345B82"/>
                                    <path d="M266 325.5C266 318.596 271.596 313 278.5 313V313C285.404 313 291 318.596 291 325.5V340H266V325.5Z" fill="#345B82"/>
                                    <path d="M143 325.5C143 318.596 148.596 313 155.5 313V313C162.404 313 168 318.596 168 325.5V340H143V325.5Z" fill="#345B82"/>
                                    <path d="M300.12 190.629C299.334 188.809 298.201 187.16 296.784 185.774C295.366 184.384 293.694 183.279 291.859 182.52C289.956 181.729 287.915 181.325 285.854 181.329C282.964 181.329 280.143 182.121 277.692 183.616C277.106 183.974 276.549 184.367 276.021 184.795C275.494 184.367 274.937 183.974 274.35 183.616C271.899 182.121 269.079 181.329 266.188 181.329C264.107 181.329 262.09 181.728 260.184 182.52C258.343 183.282 256.683 184.378 255.259 185.774C253.84 187.158 252.706 188.808 251.922 190.629C251.107 192.523 250.691 194.534 250.691 196.604C250.691 198.556 251.09 200.591 251.881 202.661C252.544 204.391 253.494 206.185 254.707 207.997C256.631 210.864 259.275 213.854 262.559 216.886C268 221.911 273.389 225.382 273.617 225.523L275.007 226.414C275.623 226.807 276.414 226.807 277.03 226.414L278.419 225.523C278.648 225.376 284.031 221.911 289.478 216.886C292.762 213.854 295.406 210.864 297.329 207.997C298.543 206.185 299.499 204.391 300.155 202.661C300.947 200.591 301.346 198.556 301.346 196.604C301.352 194.534 300.935 192.523 300.12 190.629V190.629Z" fill="#DC0000"/>
                                    <circle cx="276.251" cy="201.251" r="42.2505" stroke="white" strokeWidth="6"/>
                                    <rect x="294.883" y="240.995" width="3.54906" height="15.9708" transform="rotate(-26.6177 294.883 240.995)" fill="white"/>
                                    <rect x="297.738" y="257.006" width="13.6612" height="44.0772" transform="rotate(-26.6177 297.738 257.006)" fill="white"/>
                                    <path d="M300.852 251.745L302.773 255.072L297.746 257.068L300.852 251.745Z" fill="white"/>
                                    <path d="M300.852 251.745L302.773 255.072L297.746 257.068L300.852 251.745Z" fill="white"/>
                                    <path d="M302.424 250.495L309.966 250.939L304.642 253.601L302.424 250.495Z" fill="white"/>
                                    <path d="M302.424 250.495L309.966 250.939L304.642 253.601L302.424 250.495Z" fill="white"/>
                                    <rect x="320.431" y="294.368" width="7.19987" height="2.99317" transform="rotate(-26.7516 320.431 294.368)" fill="white"/>
                                    <path d="M320.319 293.859L321.888 296.964L317.509 296.19L320.319 293.859Z" fill="white"/>
                                    <path d="M325.092 291.627L329.043 290.421L328.156 293.971L325.092 291.627Z" fill="white"/>
                                </svg>
                            </div>
                        
                            <div className="w-12/12">
                                <h1 className="text-3xl font-semibold text-bd mt-10">2.Recibe y analiza</h1>
                                <h2 className="mt-3 font-body">Recibe perfiles de compradores pre-seleccionados por el sistema, analízalos y verifica que tu propiedad coincide con el máximo de requisitos del comprador.</h2>
                            </div>
                        </div>

                        <div className="flex flex-col items-center  rounded-xl p-6">
                            <div className="bg-bl w-64 h-52 flex place-content-center rounded-full" >
                                <svg className="w-60 hover:animate-wiggle " viewBox="0 0 547 485" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 135C22 122.85 31.8497 113 44 113H503C515.15 113 525 122.85 525 135V403H22V135Z" fill="#3269A1"/>
                                        <rect y="402" width="547" height="51" rx="23" fill="#D0D4D6"/>
                                        <path d="M76 55C76 42.8497 85.8497 33 98 33H448C460.15 33 470 42.8497 470 55V402H76V55Z" fill="#3E8CC7"/>
                                        <path d="M268.5 215.344L431.936 40.6792C445.569 26.1091 470 35.7566 470 55.7106V403H76L268.5 215.344Z" fill="#98C7EB"/>
                                        <rect x="343" y="63" width="53" height="17" fill="#DC0000"/>
                                        <rect x="414" y="63" width="18" height="17" fill="#DC0000"/>
                                        <circle cx="383" cy="156" r="31" fill="#0CBA86"/>
                                        <circle cx="383" cy="234" r="31" fill="#DC0000"/>
                                        <circle cx="383" cy="316" r="31" fill="#0CBA86"/>
                                        <ellipse cx="383" cy="147.5" rx="8" ry="8.5" fill="#345B82"/>
                                        <ellipse cx="383" cy="225.5" rx="8" ry="8.5" fill="#345B82"/>
                                        <ellipse cx="383" cy="307.5" rx="8" ry="8.5" fill="#345B82"/>
                                        <path d="M371 168.5C371 161.596 376.596 156 383.5 156V156C390.404 156 396 161.596 396 168.5V183H371V168.5Z" fill="#345B82"/>
                                        <path d="M371 246.5C371 239.596 376.596 234 383.5 234V234C390.404 234 396 239.596 396 246.5V261H371V246.5Z" fill="#345B82"/>
                                        <path d="M371 328.5C371 321.596 376.596 316 383.5 316V316C390.404 316 396 321.596 396 328.5V343H371V328.5Z" fill="#345B82"/>
                                        <ellipse cx="206" cy="214" rx="101" ry="100" fill="#6C86E0"/>
                                        <path d="M116.343 249.395L115.888 249.293C120.959 226.889 133.702 206.544 151.77 192.006C165.429 181.032 181.676 173.692 198.979 170.678C216.282 167.664 234.072 169.075 250.675 174.778C267.277 180.481 282.146 190.288 293.881 203.277C305.615 216.265 313.83 232.007 317.751 249.02L317.297 249.123C306.563 202.298 265.258 169.595 216.851 169.595C169.078 169.595 126.808 203.156 116.343 249.395Z" fill="#3F3D56"/>
                                        <path d="M155.766 168.087H153.691V249.518H155.766V168.087Z" fill="#3F3D56"/>
                                        <path d="M174.915 178.464C175.047 206.939 154.884 230.114 154.884 230.114C154.884 230.114 134.506 207.124 134.374 178.65C134.242 150.176 154.405 127 154.405 127C154.405 127 174.783 149.99 174.915 178.464Z" fill="#6C63FF"/>
                                        <path d="M300.142 215.805H139.557V249.614H300.142V215.805Z" fill="#F2F2F2"/>
                                        <path d="M134.43 219.51L151.91 183.155H291.519L304.57 219.51H134.43Z" fill="#3F3D56"/>
                                        <path d="M242.807 185.47H178.014V206.774H242.807V185.47Z" fill="#F2F2F2"/>
                                        <path d="M182.209 168.103L171.954 189.407H248.867L242.807 168.103H182.209Z" fill="#3F3D56"/>
                                        <path d="M234.883 222.521H183.724V249.614H234.883V222.521Z" fill="#CCCCCC"/>
                                        <path d="M173.119 223.447H145.85V249.614H173.119V223.447Z" fill="#CCCCCC"/>
                                        <path d="M257.84 225.068H243.739V249.614H257.84V225.068Z" fill="#3F3D56"/>
                                        <path d="M352 249.498H87V249.961H352V249.498Z" fill="#3F3D56"/>
                                        <path d="M130.3 195.789H128.93V249.524H130.3V195.789Z" fill="#3F3D56"/>
                                        <path d="M142.936 202.637C143.023 221.426 129.718 236.72 129.718 236.72C129.718 236.72 116.271 221.549 116.184 202.759C116.096 183.969 129.402 168.676 129.402 168.676C129.402 168.676 142.849 183.847 142.936 202.637Z" fill="#6C63FF"/>
                                        <path opacity="0.1" d="M142.936 202.637C143.023 221.426 129.718 236.72 129.718 236.72C129.718 236.72 116.271 221.549 116.184 202.759C116.096 183.969 129.402 168.676 129.402 168.676C129.402 168.676 142.849 183.847 142.936 202.637Z" fill="black"/>
                                        <path d="M112.499 195.789H111.13V249.524H112.499V195.789Z" fill="#3F3D56"/>
                                        <path d="M125.136 202.637C125.223 221.426 111.918 236.72 111.918 236.72C111.918 236.72 98.4706 221.549 98.3835 202.759C98.2963 183.969 111.602 168.676 111.602 168.676C111.602 168.676 125.049 183.847 125.136 202.637Z" fill="#6C63FF"/>
                                        <path d="M279.982 226.457H273.106V232.825H279.982V226.457Z" fill="#3F3D56"/>
                                        <path d="M289.188 226.457H282.312V232.825H289.188V226.457Z" fill="#3F3D56"/>
                                        <path d="M279.982 235.141H273.106V241.74H279.982V235.141Z" fill="#3F3D56"/>
                                        <path d="M289.188 235.141H282.312V241.74H289.188V235.141Z" fill="#3F3D56"/>
                                        <path d="M189.338 191.3H183.957V196.283H189.338V191.3Z" fill="#3F3D56"/>
                                        <path d="M196.543 191.3H191.162V196.283H196.543V191.3Z" fill="#3F3D56"/>
                                        <path d="M189.338 198.095H183.957V203.26H189.338V198.095Z" fill="#3F3D56"/>
                                        <path d="M196.543 198.095H191.162V203.26H196.543V198.095Z" fill="#3F3D56"/>
                                        <path d="M229.659 191.3H224.278V196.283H229.659V191.3Z" fill="#3F3D56"/>
                                        <path d="M236.864 191.3H231.483V196.283H236.864V191.3Z" fill="#3F3D56"/>
                                        <path d="M229.659 198.095H224.278V203.26H229.659V198.095Z" fill="#3F3D56"/>
                                        <path d="M236.864 198.095H231.483V203.26H236.864V198.095Z" fill="#3F3D56"/>
                                        <path d="M209.615 191.3H204.234V196.283H209.615V191.3Z" fill="#3F3D56"/>
                                        <path d="M216.82 191.3H211.439V196.283H216.82V191.3Z" fill="#3F3D56"/>
                                        <path d="M209.615 198.095H204.234V203.26H209.615V198.095Z" fill="#3F3D56"/>
                                        <path d="M216.82 198.095H211.439V203.26H216.82V198.095Z" fill="#3F3D56"/>
                                        <path d="M250.274 227.555H246.886V230.693H250.274V227.555Z" fill="#F2F2F2"/>
                                        <path d="M254.81 227.555H251.422V230.693H254.81V227.555Z" fill="#F2F2F2"/>
                                        <path d="M250.274 231.833H246.886V235.085H250.274V231.833Z" fill="#F2F2F2"/>
                                        <path d="M254.81 231.833H251.422V235.085H254.81V231.833Z" fill="#F2F2F2"/>
                                        <path d="M255.976 240.004C256.49 240.004 256.908 239.589 256.908 239.077C256.908 238.566 256.49 238.151 255.976 238.151C255.461 238.151 255.043 238.566 255.043 239.077C255.043 239.589 255.461 240.004 255.976 240.004Z" fill="#F2F2F2"/>
                                        <path d="M234.999 225.415H183.724V225.878H234.999V225.415Z" fill="#F2F2F2"/>
                                        <path d="M234.999 227.499H183.724V227.962H234.999V227.499Z" fill="#F2F2F2"/>
                                        <path d="M234.999 229.583H183.724V230.046H234.999V229.583Z" fill="#F2F2F2"/>
                                        <path d="M234.999 231.667H183.724V232.131H234.999V231.667Z" fill="#F2F2F2"/>
                                        <path d="M234.999 233.752H183.724V234.215H234.999V233.752Z" fill="#F2F2F2"/>
                                        <path d="M234.999 235.835H183.724V236.299H234.999V235.835Z" fill="#F2F2F2"/>
                                        <path d="M234.999 237.92H183.724V238.383H234.999V237.92Z" fill="#F2F2F2"/>
                                        <path d="M234.999 240.004H183.724V240.467H234.999V240.004Z" fill="#F2F2F2"/>
                                        <path d="M234.999 242.088H183.724V242.551H234.999V242.088Z" fill="#F2F2F2"/>
                                        <path d="M234.999 244.172H183.724V244.635H234.999V244.172Z" fill="#F2F2F2"/>
                                        <path d="M234.999 246.256H183.724V246.719H234.999V246.256Z" fill="#F2F2F2"/>
                                        <path d="M173.119 225.415H145.85V225.878H173.119V225.415Z" fill="#F2F2F2"/>
                                        <path d="M173.119 227.499H145.85V227.962H173.119V227.499Z" fill="#F2F2F2"/>
                                        <path d="M173.119 229.583H145.85V230.046H173.119V229.583Z" fill="#F2F2F2"/>
                                        <path d="M173.119 231.667H145.85V232.131H173.119V231.667Z" fill="#F2F2F2"/>
                                        <path d="M173.119 233.752H145.85V234.215H173.119V233.752Z" fill="#F2F2F2"/>
                                        <path d="M173.119 235.835H145.85V236.299H173.119V235.835Z" fill="#F2F2F2"/>
                                        <path d="M173.119 237.92H145.85V238.383H173.119V237.92Z" fill="#F2F2F2"/>
                                        <path d="M173.119 240.004H145.85V240.467H173.119V240.004Z" fill="#F2F2F2"/>
                                        <path d="M173.119 242.088H145.85V242.551H173.119V242.088Z" fill="#F2F2F2"/>
                                        <path d="M173.119 244.172H145.85V244.635H173.119V244.172Z" fill="#F2F2F2"/>
                                        <path d="M173.119 246.256H145.85V246.719H173.119V246.256Z" fill="#F2F2F2"/>
                                        <rect x="121" y="275" width="176" height="47" rx="23.5" fill="#DEE6FF"/>
                                        <rect x="128" y="281" width="163" height="35" rx="17.5" fill="#0CBA86"/>
                                        <path d="M175.502 302.176V307H172.074V292.781H177.748C178.835 292.781 179.796 292.983 180.629 293.387C181.469 293.784 182.117 294.354 182.572 295.096C183.035 295.831 183.266 296.668 183.266 297.605C183.266 298.992 182.768 300.102 181.771 300.936C180.782 301.762 179.421 302.176 177.689 302.176H175.502ZM175.502 299.529H177.748C178.412 299.529 178.917 299.363 179.262 299.031C179.613 298.699 179.789 298.23 179.789 297.625C179.789 296.961 179.61 296.43 179.252 296.033C178.894 295.636 178.406 295.434 177.787 295.428H175.502V299.529ZM205.443 300.184C205.443 301.57 205.185 302.798 204.671 303.865C204.157 304.933 203.424 305.757 202.474 306.336C201.53 306.909 200.452 307.195 199.241 307.195C198.03 307.195 196.956 306.919 196.019 306.365C195.081 305.805 194.349 305.008 193.821 303.973C193.301 302.938 193.027 301.749 193.001 300.408V299.607C193.001 298.214 193.255 296.987 193.763 295.926C194.277 294.858 195.01 294.035 195.96 293.455C196.917 292.876 198.004 292.586 199.222 292.586C200.426 292.586 201.501 292.872 202.445 293.445C203.389 294.018 204.121 294.835 204.642 295.896C205.169 296.951 205.436 298.162 205.443 299.529V300.184ZM201.956 299.588C201.956 298.175 201.719 297.104 201.243 296.375C200.775 295.639 200.101 295.271 199.222 295.271C197.503 295.271 196.595 296.561 196.497 299.139L196.487 300.184C196.487 301.577 196.719 302.648 197.181 303.396C197.643 304.145 198.33 304.52 199.241 304.52C200.107 304.52 200.775 304.152 201.243 303.416C201.712 302.68 201.95 301.622 201.956 300.242V299.588ZM222.844 303.221C222.844 302.719 222.665 302.329 222.307 302.049C221.955 301.769 221.334 301.479 220.442 301.18C219.55 300.88 218.821 300.59 218.254 300.311C216.412 299.406 215.491 298.162 215.491 296.58C215.491 295.792 215.718 295.099 216.174 294.5C216.636 293.895 217.287 293.426 218.127 293.094C218.967 292.755 219.911 292.586 220.959 292.586C221.982 292.586 222.896 292.768 223.704 293.133C224.517 293.497 225.149 294.018 225.598 294.695C226.047 295.366 226.272 296.134 226.272 297H222.854C222.854 296.421 222.675 295.971 222.317 295.652C221.965 295.333 221.487 295.174 220.881 295.174C220.269 295.174 219.784 295.311 219.426 295.584C219.075 295.851 218.899 296.193 218.899 296.609C218.899 296.974 219.094 297.306 219.485 297.605C219.875 297.898 220.562 298.204 221.545 298.523C222.528 298.836 223.336 299.174 223.967 299.539C225.504 300.424 226.272 301.645 226.272 303.201C226.272 304.445 225.803 305.421 224.866 306.131C223.928 306.84 222.642 307.195 221.008 307.195C219.856 307.195 218.811 306.99 217.873 306.58C216.942 306.163 216.239 305.597 215.764 304.881C215.295 304.158 215.061 303.328 215.061 302.391H218.498C218.498 303.152 218.694 303.715 219.084 304.08C219.482 304.438 220.123 304.617 221.008 304.617C221.575 304.617 222.021 304.497 222.346 304.256C222.678 304.008 222.844 303.663 222.844 303.221ZM247.492 295.428H243.224V307H239.796V295.428H235.607V292.781H247.492V295.428Z" fill="#DEE6FF"/>
                                        <rect x="260.457" y="381.067" width="140.099" height="96.0677" fill="#FEC9A3"/>
                                        <rect x="292.48" y="365.053" width="36.0254" height="40.0282" rx="18.0127" fill="#FEC9A3"/>
                                        <rect x="260.457" y="288" width="36.0254" height="117.082" rx="18.0127" fill="#FEC9A3"/>
                                        <rect x="193" y="425.778" width="36.0254" height="96.673" rx="18" transform="rotate(-52.8179 193 425.778)" fill="#FEC9A3"/>
                                        <rect x="328.504" y="365.053" width="36.0254" height="40.0282" rx="18.0127" fill="#FEC9A3"/>
                                        <rect x="364.529" y="365.053" width="36.0254" height="40.0282" rx="18.0127" fill="#FEC9A3"/>
                                        <path d="M349.611 428.601L362.62 417.593L372.627 407.086L400.556 381.067V477.135H260.457L300.076 461.624L321.091 450.116L335.601 440.609L349.611 428.601Z" fill="#FEC093"/>
                                </svg>
                            </div>
                            <div className="w-12/12">
                                <h1 className="text-3xl font-semibold text-bd mt-10">3. Ofrece y espera</h1>
                                <h2 className="mt-3 font-body">Ofrece tu propiedad. Te llegarán solicitudes para más información o una visita.</h2>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full flex  place-content-center h-full">
                <button className="w-42 font-semibold bg-bd text-white mt-1 rounded-lg px-8 py-2 shadow-lg uppercase mb-7  hover:bg-bd hover:scale-105 transition-all duration-1000 ease-out">Unete gratis</button>

                </div>
                <img className=" w-3/5 h-full" src="/pexels-mart-production-7415015.jpg" alt="" />
            </motion.div>
            
            <div className="h-full">
                <svg className="w-full  left-0 sm:bottom-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity="1" d="M0,256L120,250.7C240,245,480,235,720,197.3C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>    
            </div>
        </div>
    )
}
