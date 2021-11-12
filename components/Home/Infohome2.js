import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Infohome2() {
    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() =>{
        console.log("use effect hook, inView = ", inView);

            if(inView){
                animation.start({
                    x:0,
                    transition: {
                        type: 'spring', duration:4, bounce: 0.3
                    }
                });
            }
                if(!inView){
                    animation.start({x:'100vw'})
                }
    }, [inView]);

    return (
        <div ref={ref} className=" font-heads bg-gradient-to-b from-thome to-thome2 w-full relative z-10 h-full" >
            <div >
            
            <svg className=" absolute w-full scale-110 opacity-60 bottom-36 z-0" width="1441" height="629" viewBox="0 0 1441 629" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2" clipPath="url(#clip0_37:2)">
                <path d="M18.4497 422.473C-91.1569 517.487 -316.696 709.412 -342 717L1453 701.525V422.473C1418.51 398.512 1343.22 341.603 1317.91 305.661C1286.28 260.733 1211.16 218.801 1147.9 209.815C1097.29 202.627 1023.58 244.759 993.048 266.724L819 371.5L683.997 401.507C604.922 408.496 435.57 402.705 390.761 323.632C345.952 244.559 285.108 264.727 260.287 284.695L18.4497 422.473Z" fill="#1E1F6F"/>
                <path d="M-374.051 504.645C-462.105 504.645 -555.311 489.657 -592 481.521V595H1492V419C1463.33 432.418 1376.98 460.452 1260.93 465.248C1115.87 471.243 1040.79 451.117 889.178 439.127C737.561 427.136 615.102 469.53 556.059 481.521C499.011 493.106 300.081 484.563 258.657 481.521C223.668 478.951 119.675 478.095 69.136 481.521C31.2319 486.231 -57.6971 494.881 -110.18 491.798C-175.783 487.944 -263.983 504.645 -374.051 504.645Z" fill="#4B4D94"/>
                <path d="M149.552 555.74C89.1312 555.74 25.1755 531.81 0 518.82V700H1430V419C1410.33 440.423 1351.07 485.182 1271.44 492.839C1171.91 502.411 1120.39 470.277 1016.36 451.134C912.319 431.99 828.29 499.676 787.775 518.82C748.63 537.317 612.129 523.677 583.704 518.82C559.696 514.718 488.337 513.35 453.659 518.82C427.65 526.341 366.628 540.151 330.616 535.229C285.6 529.076 225.079 555.74 149.552 555.74Z" fill="#1E1F6F"/>
                <path d="M45 537.536L-11 566.897V700H1426V524.487L1186.5 514.047V273.287L1162.5 258.933H1103V524.487C1079.67 521.659 1028.9 517.701 1012.5 524.487C992 532.969 981.5 537.536 964 549.28C950 558.676 913.5 545.365 897 537.536C875.333 541.451 830.7 549.28 825.5 549.28H743C731.833 549.28 705.2 552.804 688 566.897C670.8 580.99 664.5 572.769 663.5 566.897C655.833 561.025 638.1 549.28 628.5 549.28C616.5 549.28 576 586.471 556 604.087C540 618.181 525.667 609.96 520.5 604.087L473.5 586.471L467.5 316.5L440.5 305H397.5L403 604.087H182.5V196.948L143.5 118H119L45 172.807V537.536Z" fill="#1E1F6F"/>
                <path d="M762.5 484L737.5 506H797.5L762.5 484Z" fill="#FEFEFE"/>
                <rect width="56" height="45" transform="matrix(-1 0 0 1 793.5 506)" fill="#FBFEFB"/>
                <rect width="78" height="45" transform="matrix(-1 0 0 1 871.5 506)" fill="#E4F7FE"/>
                <rect width="12" height="29" transform="matrix(-1 0 0 1 862.5 522)" fill="#4B4D94"/>
                <rect width="35" height="29" transform="matrix(-1 0 0 1 837.5 514)" fill="#4B4D94"/>
                <rect width="26" height="26" transform="matrix(-1 0 0 1 781.5 517)" fill="#4B4D94"/>
                <path d="M848.882 484H762.5L794.827 510H877.5L848.882 484Z" fill="#1E1F6F"/>
                <path d="M760.5 484H762.5L737 506.5L736 505.5L760.5 484Z" fill="#1E1F6F"/>
                <rect x="1139" y="451" width="98" height="91" fill="#CDE7FC"/>
                <rect x="1230" y="451" width="58" height="91" fill="#FEFEFE"/>
                <rect x="1209" y="462" width="21" height="7" fill="#4B4D94"/>
                <rect x="1230" y="462" width="17" height="7" fill="#4B4D94"/>
                <rect x="1273" y="462" width="6" height="7" fill="#4B4D94"/>
                <rect x="1257" y="462" width="7" height="7" fill="#4B4D94"/>
                <rect x="1230" y="479" width="17" height="7" fill="#4B4D94"/>
                <rect x="1273" y="479" width="6" height="7" fill="#4B4D94"/>
                <rect x="1257" y="479" width="7" height="7" fill="#4B4D94"/>
                <rect x="1230" y="497" width="17" height="7" fill="#4B4D94"/>
                <rect x="1273" y="497" width="6" height="7" fill="#4B4D94"/>
                <rect x="1257" y="497" width="7" height="7" fill="#4B4D94"/>
                <rect x="1230" y="514" width="17" height="7" fill="#4B4D94"/>
                <rect x="1273" y="514" width="6" height="7" fill="#4B4D94"/>
                <rect x="1257" y="514" width="7" height="7" fill="#4B4D94"/>
                <rect x="1152" y="532" width="15" height="10" fill="#4B4D94"/>
                <rect x="1156" y="462" width="8" height="8" fill="#4B4D94"/>
                <rect x="1175" y="462" width="9" height="8" fill="#4B4D94"/>
                <rect x="1191" y="462" width="8" height="8" fill="#4B4D94"/>
                <rect x="1209" y="479" width="21" height="7" fill="#4B4D94"/>
                <rect x="1158" y="478" width="8" height="8" fill="#4B4D94"/>
                <rect x="1177" y="478" width="9" height="8" fill="#4B4D94"/>
                <rect x="1193" y="478" width="8" height="8" fill="#4B4D94"/>
                <rect x="1209" y="497" width="21" height="7" fill="#4B4D94"/>
                <rect x="1158" y="496" width="8" height="8" fill="#4B4D94"/>
                <rect x="1177" y="496" width="9" height="8" fill="#4B4D94"/>
                <rect x="1193" y="496" width="8" height="8" fill="#4B4D94"/>
                <rect x="1209" y="514" width="21" height="7" fill="#4B4D94"/>
                <rect x="1159" y="513" width="8" height="8" fill="#4B4D94"/>
                <rect x="1178" y="513" width="9" height="8" fill="#4B4D94"/>
                <rect x="1194" y="513" width="8" height="8" fill="#4B4D94"/>
                <line x1="1288.64" y1="451.346" x2="1264.64" y2="426.346" stroke="#4B4D94"/>
                <path d="M1264.5 426.334L1288 451.334H1228L1264.5 426.334Z" fill="#FEFEFE"/>
                <path d="M1163 426.5L1265 426L1235 453.5H1131L1163 426.5Z" fill="#1E1F6F"/>
                <path d="M24.0121 158.074H-11V629H1430V524.64H1386.99L1390.5 228.498C1390.5 203.998 1391.49 143.594 1369.48 85.6739C1347.47 27.7539 1292.5 20.9975 1285.5 28.4975L1289.45 524.64H1133.4V301.569L1095.88 282.002L1010.35 301.569V524.64H902.817C887.812 524.64 859.802 547.469 824.79 547.469H759.767C735.426 539.859 680.24 524.64 654.231 524.64C628.222 524.64 616.384 539.859 613.717 547.469C591.209 553.991 540.191 563.123 516.183 547.469C492.175 531.815 477.503 540.946 473.168 547.469L282.602 524.64V177.641L260.094 158.074H197.072C185.068 158.074 178.733 184.164 177.065 197.209V524.64H51.5217V177.641L24.0121 158.074Z" fill="#4B4D94"/>
                <path d="M125 191L199 148V532H120L125 191Z" fill="#777EB9"/>
                <path d="M129 197.471L203 194V225H124L129 197.471Z" fill="#777EB9"/>
                <path d="M233.658 191L199 148V532H236L233.658 191Z" fill="#FBFEFF"/>
                <path d="M125 191L199 148V532H120L125 191Z" fill="#777EB9"/>
                <path d="M129 197.471L203 194V225H124L129 197.471Z" fill="#777EB9"/>
                <path d="M233.658 191L199 148V532H236L233.658 191Z" fill="#FBFEFF"/>
                <rect x="136" y="202" width="8" height="9" fill="#4B4D94"/>
                <rect x="136" y="217" width="8" height="9" fill="#4B4D94"/>
                <rect x="136" y="235" width="8" height="9" fill="#4B4D94"/>
                <rect x="136" y="250" width="8" height="9" fill="#4B4D94"/>
                <rect x="179" y="174" width="8" height="9" fill="#4B4D94"/>
                <rect x="179" y="189" width="8" height="9" fill="#4B4D94"/>
                <rect x="179" y="207" width="8" height="9" fill="#4B4D94"/>
                <rect x="179" y="222" width="8" height="9" fill="#4B4D94"/>
                <rect x="179" y="174" width="8" height="9" fill="#4B4D94"/>
                <rect x="179" y="189" width="8" height="9" fill="#4B4D94"/>
                <rect x="179" y="207" width="8" height="9" fill="#4B4D94"/>
                <rect x="179" y="222" width="8" height="9" fill="#4B4D94"/>
                <rect x="156" y="188" width="8" height="9" fill="#4B4D94"/>
                <rect x="156" y="203" width="8" height="9" fill="#4B4D94"/>
                <rect x="156" y="221" width="8" height="9" fill="#4B4D94"/>
                <rect x="156" y="236" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="484" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="499" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="456" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="489" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="504" width="8" height="9" fill="#4B4D94"/>
                <rect x="158" y="470" width="8" height="9" fill="#4B4D94"/>
                <rect x="158" y="518" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="413" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="428" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="446" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="461" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="385" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="418" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="433" width="8" height="9" fill="#4B4D94"/>
                <rect x="158" y="399" width="8" height="9" fill="#4B4D94"/>
                <rect x="158" y="447" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="342" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="357" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="375" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="390" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="314" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="347" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="362" width="8" height="9" fill="#4B4D94"/>
                <rect x="158" y="328" width="8" height="9" fill="#4B4D94"/>
                <rect x="158" y="376" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="272" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="287" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="305" width="8" height="9" fill="#4B4D94"/>
                <rect x="138" y="320" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="244" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="277" width="8" height="9" fill="#4B4D94"/>
                <rect x="181" y="292" width="8" height="9" fill="#4B4D94"/>
                <rect x="158" y="258" width="8" height="9" fill="#4B4D94"/>
                <rect x="158" y="306" width="8" height="9" fill="#4B4D94"/>
                <rect x="129" y="487" width="98" height="91" fill="#CDE7FC"/>
                <rect x="223" y="487" width="58" height="91" fill="#FEFEFE"/>
                <rect x="202" y="498" width="9" height="9" fill="#4B4D94"/>
                <rect x="233" y="498" width="7" height="7" fill="#4B4D94"/>
                <rect x="266" y="498" width="6" height="7" fill="#4B4D94"/>
                <rect x="250" y="498" width="7" height="7" fill="#4B4D94"/>
                <rect x="233" y="515" width="7" height="7" fill="#4B4D94"/>
                <rect x="266" y="515" width="6" height="7" fill="#4B4D94"/>
                <rect x="250" y="515" width="7" height="7" fill="#4B4D94"/>
                <rect x="233" y="533" width="7" height="7" fill="#4B4D94"/>
                <rect x="266" y="533" width="6" height="7" fill="#4B4D94"/>
                <rect x="250" y="533" width="7" height="7" fill="#4B4D94"/>
                <rect x="233" y="550" width="7" height="7" fill="#4B4D94"/>
                <rect x="266" y="550" width="6" height="7" fill="#4B4D94"/>
                <rect x="250" y="550" width="7" height="7" fill="#4B4D94"/>
                <rect x="246" y="568" width="15" height="10" fill="#4B4D94"/>
                <rect x="135" y="498" width="8" height="9" fill="#4B4D94"/>
                <rect x="187" y="498" width="9" height="9" fill="#4B4D94"/>
                <rect x="154" y="498" width="9" height="9" fill="#4B4D94"/>
                <rect x="170" y="498" width="8" height="9" fill="#4B4D94"/>
                <rect x="202" y="513" width="9" height="9" fill="#4B4D94"/>
                <rect x="135" y="513" width="8" height="9" fill="#4B4D94"/>
                <rect x="187" y="513" width="9" height="9" fill="#4B4D94"/>
                <rect x="154" y="513" width="9" height="9" fill="#4B4D94"/>
                <rect x="170" y="513" width="8" height="9" fill="#4B4D94"/>
                <rect x="202" y="531" width="9" height="9" fill="#4B4D94"/>
                <rect x="135" y="531" width="8" height="9" fill="#4B4D94"/>
                <rect x="187" y="531" width="9" height="9" fill="#4B4D94"/>
                <rect x="154" y="531" width="9" height="9" fill="#4B4D94"/>
                <rect x="170" y="531" width="8" height="9" fill="#4B4D94"/>
                <rect x="202" y="546" width="9" height="9" fill="#4B4D94"/>
                <rect x="135" y="546" width="8" height="9" fill="#4B4D94"/>
                <rect x="187" y="546" width="9" height="9" fill="#4B4D94"/>
                <rect x="154" y="546" width="9" height="9" fill="#4B4D94"/>
                <rect x="170" y="546" width="8" height="9" fill="#4B4D94"/>
                <line x1="281.639" y1="487.346" x2="257.639" y2="462.346" stroke="#4B4D94"/>
                <path d="M257.5 462.334L281 487.334H221L257.5 462.334Z" fill="#FEFEFE"/>
                <path d="M156 462.5L258 462L228 489.5H124L156 462.5Z" fill="#1E1F6F"/>
                <path d="M922 509L947 531H887L922 509Z" fill="#FEFEFE"/>
                <rect x="891" y="531" width="56" height="45" fill="#FBFEFB"/>
                <rect x="813" y="531" width="78" height="45" fill="#E4F7FE"/>
                <rect x="818" y="539" width="19" height="29" fill="#4B4D94"/>
                <rect x="844" y="547" width="12" height="29" fill="#4B4D94"/>
                <rect x="863" y="539" width="19" height="29" fill="#4B4D94"/>
                <rect x="901" y="542" width="35" height="26" fill="#4B4D94"/>
                <path d="M835.618 509H922L889.673 535H807L835.618 509Z" fill="#1E1F6F"/>
                <path d="M924 509H922L947.5 531.5L948.5 530.5L924 509Z" fill="#1E1F6F"/>
                <path d="M848 521L856.5 514L866 521V529H848V521Z" fill="#FEFEFE"/>
                <rect x="383" y="510" width="84" height="91" fill="#CDE7FC"/>
                <rect x="463" y="510" width="58" height="91" fill="#FEFEFE"/>
                <rect x="473" y="521" width="7" height="7" fill="#4B4D94"/>
                <rect x="506" y="521" width="6" height="7" fill="#4B4D94"/>
                <rect x="490" y="521" width="7" height="7" fill="#4B4D94"/>
                <rect x="392" y="591" width="15" height="10" fill="#4B4D94"/>
                <rect x="428" y="591" width="15" height="10" fill="#4B4D94"/>
                <rect x="434" y="529" width="9" height="9" fill="#4B4D94"/>
                <rect x="404" y="529" width="8" height="9" fill="#4B4D94"/>
                <rect x="388" y="535" width="9" height="9" fill="#4B4D94"/>
                <rect x="419" y="535" width="8" height="9" fill="#4B4D94"/>
                <rect x="437" y="556" width="9" height="9" fill="#4B4D94"/>
                <rect x="407" y="556" width="8" height="9" fill="#4B4D94"/>
                <rect x="391" y="562" width="9" height="9" fill="#4B4D94"/>
                <rect x="422" y="562" width="8" height="9" fill="#4B4D94"/>
                <path d="M514.5 472L521 510.334H461L514.5 472Z" fill="#FEFEFE"/>
                <path d="M436.65 472.518L516 471L467.7 513H378L436.65 472.518Z" fill="#1E1F6F"/>
                <rect x="161" y="556" width="33" height="31" fill="#CDE7FC"/>
                <rect x="193" y="556" width="20" height="31" fill="#FEFEFE"/>
                <rect x="196" y="565" width="3" height="3" fill="#4B4D94"/>
                <rect x="208" y="565" width="2" height="3" fill="#4B4D94"/>
                <rect x="202" y="565" width="2" height="3" fill="#4B4D94"/>
                <rect x="201" y="579" width="5" height="8" fill="#4B4D94"/>
                <rect x="166" y="563" width="4" height="4" fill="#4B4D94"/>
                <rect x="178" y="563" width="10" height="6" fill="#4B4D94"/>
                <rect x="166" y="577" width="21" height="8" fill="#4B4D94"/>
                <line x1="212.639" y1="556.068" x2="204.437" y2="547.523" stroke="#4B4D94"/>
                <path d="M204.775 547L213 556H192L204.775 547Z" fill="#FEFEFE"/>
                <path d="M169.985 547.182L205 547L194.701 557H159L169.985 547.182Z" fill="#1E1F6F"/>
                <path d="M56.5 588.5C15.7 600.1 2.16667 593.333 0.5 588.5V633.5H1440.5V552.5C1438.83 546.667 1453.7 514 1440.5 500C1424 482.5 1327.65 496.739 1316 500C1253.5 517.5 1201.5 509.5 1140.5 517.5C1079.5 525.5 1014.5 565.5 994 565.5C977.6 565.5 906.833 580.833 873.5 588.5C840 594.5 754.3 604.2 679.5 595C586 583.5 581 588.5 558.5 588.5C536 588.5 507 597 487.5 606.5C468 616 411.5 612 401 606.5C390.5 601 356.5 581 339.5 581H288.5C267.667 583.5 221.3 588.5 202.5 588.5C183.7 588.5 163 583.5 155 581C139.167 578.667 97.3 576.9 56.5 588.5Z" fill="#777EB9"/>
                <rect x="1" y="624" width="1440" height="1735" fill="#4B4D94"/>
                <rect x="1" y="618" width="1440" height="1741" fill="#4B4D94"/>
                </g>
                <defs>
                <clipPath id="clip0_37:2">
                <rect width="1441" height="629" fill="white"/>
                </clipPath>
                </defs>
            </svg>


            </div>
            <div className="flex flex-col max-w-4xl mx-auto items-center  relative z-10 px-4 text-bd "
                
                animate={animation}
                
                >
                <h1 className="text-5xl font-semibold text-bd pt-10 text-center">Unete a esta <span className="text-bttl">comunidad,</span> y aprovecha sus ventajas.</h1>
                
                <div className="grid sm:grid-cols-3  mt-20 gap-20 ">
                    <div className="border-r pr-4" >
                        <h1 className="mb-4 font-semibold text-bttl uppercase text-xl ">Compradores</h1>
                            <ul className=" max-w-sm list-none"  >
                                <div className="flex flex-row  relative mb-3 list-none">
                                    <h2 className="text-sm "><span className="text-bd font-semibold uppercase">Oferta mas ajustada</span>. <br /> El vendedor tiene más capacidad para ver que su casa cumple tu perfil, no pierdes tiempo</h2>
                                </div>
                                <div className="flex flex-row  relative mb-3">
                                    <h2  className="text-sm"><span className="text-bd font-semibold uppercase">Más oferta</span>. <br />Te pueden llegar propiedades que no están publicadas en portales</h2>
                                </div>
                                <div className="flex flex-row text- relative mb-3">
                                    <h2  className="text-sm"><span className="text-bd font-semibold uppercase">Información correcta</span>. <br />Las inmobiliarias y vendedores deben tener la información al dia bajo pena de exclusión</h2>
                                </div>
                                <div className="flex flex-row text- relative mb-3">
                                    <h2 className="text-sm"><span className="text-bd font-semibold uppercase">La ubicación</span>. <br />Siendo miembros de la comunidad es mas lógico que te dirán la ubicación</h2>
                                </div>
                                <div className="flex flex-row text- relative mb-3">
                                    <h2 className="text-sm"><span className="text-bd font-semibold uppercase">Anónimo</span>. <br />Vendedores no pueden ver tus datos. Eres tu quien decide con quien contactar por una cita o pedir más información</h2>
                                </div>
                            </ul>
                        
                    </div>
                    <div className="border-r pr-4" >
                        <h1 className="mb-4 font-semibold text-bttl uppercase text-xl ">Inmobiliarias</h1>
                            <ul className=" max-w-sm ">
                                <div className="flex flex-row  relative mb-3 ">
                                    <h2 className="text-sm"><span className="text-bd font-semibold uppercase">Exclusividad </span>. <br /> Los propiedades se publica una sola vez, lo tienes en exclusiva, así reduces la competencia</h2>
                                </div>
                                <div className="flex flex-row  relative mb-3">
                                    <h2  className="text-sm"><span className="text-bd font-semibold uppercase">Profesional </span>. <br />Como inmobiliaria puedes cumplir tu papel de encontrar un comprador de manera más eficiente, más eficiente significa casi siempre más facturación</h2>
                                </div>
                                <div className="flex flex-row text- relative mb-3">
                                    <h2  className="text-sm"><span className="text-bd font-semibold uppercase">Distinguirte de la fuerte competencia</span>. <br />Siendo parte de esta comunidad te distingues de la enorme cantidad de inmobiliarias</h2>
                                </div>
                                <div className="flex flex-row text- relative mb-3">
                                    <h2 className="text-sm"><span className="text-bd font-semibold uppercase">Compradores más seguros</span>. <br />No pierdes más tiempo con compradores que solo se están orientando o realmente no van a comprar</h2>
                                </div>
                            </ul>
                        
                    </div>
                    <div>
                        <h1 className="mb-4 font-semibold text-bttl uppercase text-xl ">Vendedores</h1>
                            <ul className=" max-w-sm ">
                                <div className="flex flex-row  relative mb-3 ">
                                    <h2 className="text-sm"><span className="text-bd font-semibold uppercase">Conseguir compradores</span>. <br /> Al contrario de portales con Buscamos puedes buscar el comprador tu mismo para no perder opciones</h2>
                                </div>
                                <div className="flex flex-row  relative mb-3">
                                    <h2  className="text-sm"><span className="text-bd font-semibold uppercase">Compradores más seguros</span>. <br />Siendo miembro de esta comunidad se puede deducir que se trata de compradores que ya están listos para comprar</h2>
                                </div>
                                <div className="flex flex-row text- relative mb-3">
                                    <h2  className="text-sm"><span className="text-bd font-semibold uppercase">Vender más rápido</span>. <br />Poder encontrar compradores de forma pro activo puede resultar en una venta más rápida</h2>
                                </div>
                                <div className="flex flex-row text- relative mb-3">
                                    <h2 className="text-sm"><span className="text-bd font-semibold uppercase">Posibilidad de vender con o sin intermediarios</span>. <br />El vendedor elige si quiere la intermediación de un profesional o no.</h2>
                                </div>
                            </ul>
                        
                    </div>
                    
                    
                    
                </div>
                

                <button className="w-32 font-semibold rounded-lg px-8 py-2 shadow-lg uppercase mt-10 md:text-white text-bgr md:bg-bd bg-bd hover:scale-105 transition-all duration-1000 ease-out">unete</button>

            </div>
            <div className="h-full pb-40">
            
                <svg className="w-full  left-0 sm:bottom-0 bottom-0 absolute" xmlns="http://www.w3.org/2000/svg" version="1.1"  width="1440" height="300" preserveAspectRatio="none" viewBox="0 0 1440 560">
                    
                        <path d="M 0,259 C 144,276.2 432,347.6 720,345 C 1008,342.4 1296,265.8 1440,246L1440 560L0 560z" fill="#4B4D94"></path>
                    
                </svg>    
            </div>
        </div>
    )
}
