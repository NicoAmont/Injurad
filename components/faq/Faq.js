import { useTranslation } from "next-i18next";
import React, {useState} from "react";

export default function Faq() {
    const { t } = useTranslation('common');


    const [content, setContent] = useState();
    
    const generaldata = [
        {
            question : "Pregunta 1",
            answer : "Respuesta 1 Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum."
        },
        {
            question : "Pregunta 2",
            answer : "Respuesta 1 Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum."
        },
        {
            question : "Pregunta 3",
            answer : "Respuesta 1 Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum."
        },
        {
            question : "Pregunta 4",
            answer : "Respuesta 1 Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum."
        },
    ]

    let list = "";
    if (content === "general"){
        list = "f"
                
    } else if (content === "profesionales"){
        list = <p>Hola chamo2</p>
    } else if ( content === "servicios"){
        list = <p>Hola chamo3</p>
    }else{
        list = <p>Hola chamo4</p>
    }
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected === i){
            return setSelected(null);
        }
        setSelected(i)
    }

    return (
        <div className="w-full h-auto bg-bgr">
            <div className="w-full h-full  flex pt-24 sm:pt-36 ">
                <div className="w-full max-w-6xl  mx-auto px-8">

                    <h1 className="text-bg2 font-bold text-2xl sm:text-4xl m-auto mb-10 uppercase">Todo lo que cualquier comprador debe saber para entender el mercado inmobiliario español</h1>
                    <p className="w-auto h-auto font-heads mb-10">Recomendamos leer las preguntas mas frecuentes de compradores. Es importante estar bien preparado ante argumentos y explicaciones de profesionales que intervienen durante el proceso de compraventa.</p>
                    <div className="w-full h-auto grid grid-flow-row md:grid-flow-col md:grid-cols-4 gap-10">
                        <div className="w-full md:w-60 text-left flex flex-col">
                            <h2 className="text-xl text-sl font-semibold mb-5 border-sl border-b-2 ">Temas</h2>
                            <button  className=" text-left text hover:font-medium hover:text-sl mb-2" onClick={ () => {setContent(content = "general"); console.log(content)} }>General</button>
                            <button className=" text-left text hover:font-medium hover:text-sl mb-2" onClick={ () => {setContent(content = "profesionales"); console.log(content)} }>Profesionales</button>
                            <button className=" text-left text hover:font-medium hover:text-sl mb-2" onClick={ () => {setContent(content = "servicios"); console.log(content)} }>Servicios</button>
                            <button className=" text-left text hover:font-medium hover:text-sl mb-2" onClick={ () => {setContent(content = "injurad"); console.log(content)} }>Sobre INJURAD</button>
                        </div>
                        <div className=" w-full h-auto col-span-3">
                            <div className="w-3/4 m-auto h-auto">
                                <h2 className="text-bg2 text-4xl text-center font-medium w-full mb-10 ">General</h2>
                                {generaldata.map( (item, i) =>(
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="item">
                                        <div className="title  " onClick={ () => toggle(i)}>
                                            <h2 className="text-xl font-medium text-bg2">{item.question}</h2>
                                            <span>{selected === i ? "-" : "+"}</span>
                                        </div>
                                        <div >
                                            <h2 className={selected === i ? "content show" : "content"} >{item.answer}</h2>
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
