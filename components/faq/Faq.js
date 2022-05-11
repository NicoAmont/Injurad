import { useTranslation } from "next-i18next";
import React, {useState, useRef, useEffect} from "react";

export default function Faq( {track} ) {

    const { t } = useTranslation('common');
    const [content, setContent] = useState("General");
    const [counter, setCounter] = useState(0);
    const [selected, setSelected] = useState(null);
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    /*general content*/
    const generaldata = [
        {
            question : t("Faq_1_question1"),
            answer : <div><h2>{t("Faq_1_answer1a")}</h2><h2 className="mt-4">{t("Faq_1_answer1b")}</h2><h2 className="mt-4">{t("Faq_1_answer1c")}</h2><h2 className="mt-4">{t("Faq_1_answer1d")}</h2></div>  , 
            audio : "./audios/R1.mp3"
        },
        {
            question : t("Faq_1_question2"),
            answer : <div><h2>{t("Faq_1_answer2a")}</h2><h2 className="mt-4">{t("Faq_1_answer2b")}</h2><h2 className="mt-4">{t("Faq_1_answer2c")}</h2></div>,
            audio : "./audios/5.01.mp3"
        },
        {
            question : t("Faq_1_question3"),
            answer : <div><h2>{t("Faq_1_answer3a")}</h2></div>,
            audio : "./audios/5.03.mp3"
        },
        {
            question : t("Faq_1_question4"),
            answer : <div><h2>{t("Faq_1_answer4a")}</h2><h2 className="mt-4">{t("Faq_1_answer4b")}</h2></div>,
            audio : "./audios/5.02.mp3"
        },
    ]
    /*professional content*/
    const professionaldata = [
        {
            question : t("Faq_2_question1"),
            answer : <div><h2>{t("Faq_2_answer1a")}</h2></div>  , 
            audio : "./audios/R1.mp3"
        },
        {
            question : t("Faq_2_question2"),
            answer : <div><h2>{t("Faq_2_answer2a")}</h2><h2 className="mt-4">{t("Faq_2_answer2b")}</h2></div>,
            audio : "./audios/5.01.mp3"
        },
        {
            question : t("Faq_2_question3"),
            answer : <div><h2>{t("Faq_2_answer3a")}</h2></div>,
            audio : "./audios/5.03.mp3"
        },
        {
            question : t("Faq_2_question3"),
            answer : <div><h2>{t("Faq_2_answer3a")}</h2></div>,
            audio : "./audios/5.03.mp3"
        },
    ]
    /*professional content*/
    const servicedata = [
        {
            question : t("Faq_3_question1"),
            answer : <div><h2>{t("Faq_3_answer1a")}</h2><h2 className="mt-4">{t("Faq_3_answer1b")}</h2><h2 className="mt-4">{t("Faq_3_answer1c")}</h2><h2 className="mt-4">{t("Faq_3_answer1d")}</h2></div>  , 
            audio : "./audios/R1.mp3"
        },
        {
            question : t("Faq_3_question2"),
            answer : <div><h2>{t("Faq_3_answer2a")}</h2><h2 className="mt-4">{t("Faq_3_answer2b")}</h2><h2 className="mt-4">{t("Faq_3_answer2c")}</h2></div>,
            audio : "./audios/5.01.mp3"
        },
        {
            question : t("Faq_3_question3"),
            answer : <div><h2>{t("Faq_3_answer3a")}</h2></div>,
            audio : "./audios/5.03.mp3"
        },
        {
            question : t("Faq_3_question4"),
            answer : <div><h2>{t("Faq_3_answer4a")}</h2><h2 className="mt-4">{t("Faq_3_answer4b")}</h2></div>,
            audio : "./audios/5.02.mp3"
        },
    ]
    /*professional content*/
    const aboutdata = [
        {
            question : t("Faq_4_question1"),
            answer : <div><h2>{t("Faq_4_answer1a")}</h2><h2 className="mt-4">{t("Faq_4_answer1b")}</h2><h2 className="mt-4">{t("Faq_4_answer1c")}</h2><h2 className="mt-4">{t("Faq_4_answer1d")}</h2></div>  , 
            audio : "./audios/R1.mp3"
        },
        {
            question : t("Faq_4_question2"),
            answer : <div><h2>{t("Faq_4_answer2a")}</h2><h2 className="mt-4">{t("Faq_4_answer2b")}</h2><h2 className="mt-4">{t("Faq_4_answer2c")}</h2></div>,
            audio : "./audios/5.01.mp3"
        },
        {
            question : t("Faq_4_question3"),
            answer : <div><h2>{t("Faq_4_answer3a")}</h2></div>,
            audio : "./audios/5.03.mp3"
        },
        {
            question : t("Faq_4_question4"),
            answer : <div><h2>{t("Faq_4_answer4a")}</h2><h2 className="mt-4">{t("Faq_4_answer4b")}</h2></div>,
            audio : "./audios/5.02.mp3"
        },
    ]

    const toggle = (i) => {
        if (selected === i){
            return setSelected(null);
        }
        setSelected(i)
    }

    
    function setPlayingState(state) {
        setIsPlaying(state)
    }
    function toggleIsPlaying() {
        setIsPlaying(!isPlaying)
    }

    useEffect(()=> {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    let contentKey = generaldata
    if ( content == "General"){
        contentKey = generaldata
    }else if( content == "Profesionales"){
        contentKey = professionaldata
    }else if (content == "Servicios"){
        contentKey = servicedata
    }else {
        contentKey = aboutdata
    }
    console.log(contentKey.length -1)

    const handleNextAudio = () => {
        const maxAudios = contentKey.length - 1 
        counter != maxAudios  ? setCounter( counter + 1): setCounter( counter = 0);
        isPlaying ? setIsPlaying(!isPlaying) : null
    }

    const handlePreviousAudio = () => {
        counter != 0 ?  setCounter( counter - 1) : setCounter( counter = contentKey.length - 1);
        isPlaying ? setIsPlaying(!isPlaying) : null
    }


    const generalcontent = <div className=" w-11/12 sm:w-3/4 m-auto h-auto">
    <h2 className="text-bg2 text-3xl text-left  font-bold w-full mb-10 ">{content}</h2>

    <div className="w-full h-auto">
        <div className="shadow-lg p-4 mb-10 h-60 group container player rounded-md bg-bgr  max-w-sm flex flex-col justify-center items-center  mx-auto content-divplayer">
            
            <div className="w-11/12">
                <h2 className="text-bgr h-32 text-xl text-left  font-medium mb-10">{generaldata[counter].question}</h2>
            
            <div className="flex flex-row justify-evenly py-1 items-center player w-2/4  mx-auto text-xl text-bgr ">

                <button onClick={handlePreviousAudio}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.929 17.0707C6.834 20.9764 13.166 20.9764 17.071 17.0707C20.9763 13.1657 20.9763 6.83375 17.071 2.92875C13.166 -0.97625 6.834 -0.97625 2.929 2.92875C-0.976334 6.83375 -0.976334 13.1657 2.929 17.0707V17.0707ZM3.33333 5.33342H5.073V10.0001L10.8697 5.33342V10.0001L16.6667 5.33342V14.6667L10.8693 10.0001V14.6667L5.07267 10.0001V14.6667H3.33333V5.33342Z" fill="white"/>
                    </svg>
                </button>

                {isPlaying ? (
                <button onClick={toggleIsPlaying}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.625 0C28.7723 0 37 8.22773 37 18.375C37 28.5223 28.7723 36.75 18.625 36.75C8.47773 36.75 0.25 28.5223 0.25 18.375C0.25 8.22773 8.47773 0 18.625 0ZM21.9062 24.6094C21.9062 24.7898 22.0539 24.9375 22.2344 24.9375H24.2031C24.3836 24.9375 24.5312 24.7898 24.5312 24.6094V12.1406C24.5312 11.9602 24.3836 11.8125 24.2031 11.8125H22.2344C22.0539 11.8125 21.9062 11.9602 21.9062 12.1406V24.6094ZM12.7188 24.6094C12.7188 24.7898 12.8664 24.9375 13.0469 24.9375H15.0156C15.1961 24.9375 15.3438 24.7898 15.3438 24.6094V12.1406C15.3438 11.9602 15.1961 11.8125 15.0156 11.8125H13.0469C12.8664 11.8125 12.7188 11.9602 12.7188 12.1406V24.6094Z" fill="white"/>
                    </svg>
                </button>
                ): (
                <button onClick={toggleIsPlaying}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.375 0C8.22773 0 0 8.22773 0 18.375C0 28.5223 8.22773 36.75 18.375 36.75C28.5223 36.75 36.75 28.5223 36.75 18.375C36.75 8.22773 28.5223 0 18.375 0ZM24.2854 18.658L15.3275 25.1754C15.2784 25.2107 15.2205 25.2317 15.1602 25.2363C15.0999 25.2408 15.0395 25.2286 14.9857 25.2011C14.9319 25.1735 14.8867 25.1317 14.8551 25.0801C14.8235 25.0285 14.8067 24.9693 14.8066 24.9088V11.8822C14.8064 11.8216 14.823 11.7622 14.8546 11.7104C14.8861 11.6587 14.9313 11.6167 14.9853 11.5891C15.0392 11.5615 15.0997 11.5493 15.1602 11.554C15.2206 11.5587 15.2785 11.58 15.3275 11.6156L24.2854 18.1289C24.3277 18.1588 24.3622 18.1985 24.386 18.2445C24.4098 18.2905 24.4223 18.3416 24.4223 18.3935C24.4223 18.4453 24.4098 18.4964 24.386 18.5424C24.3622 18.5884 24.3277 18.6281 24.2854 18.658V18.658Z" fill="white"/>
                    </svg>
                </button>
                )
                }
                <button onClick={handleNextAudio}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.071 2.92925C13.166 -0.976417 6.834 -0.976417 2.929 2.92925C-0.976333 6.83425 -0.976333 13.1662 2.929 17.0713C6.834 20.9763 13.166 20.9763 17.071 17.0713C20.9763 13.1662 20.9763 6.83425 17.071 2.92925V2.92925ZM16.6667 14.6666H14.927V9.99992L9.13033 14.6666V9.99992L3.33333 14.6666V5.33325L9.13067 9.99992V5.33325L14.9273 9.99992V5.33325H16.6667V14.6666Z" fill="white"/>
                    </svg>
                </button>
            </div>
            </div>
        </div>
    </div>

    <audio 
        src={generaldata[counter].audio}
        ref={audioRef}
        onPlay={() => setPlayingState(true)}
        onPause={() => setPlayingState(false)}
    />


    {generaldata.map( (item, i) =>(
        // eslint-disable-next-line react/jsx-key
        <div className="item  m-auto">
            <div className="title  " onClick={ () => toggle(i)}>
                <h2 className=" font-normal text-bg2">{item.question}</h2>
                <span className="text-bg2 font-medium">{selected === i ? "-" : "+"}</span>
            </div>
            <div className=" border-l-2 border-sl pl-2 ">
                <h2 className={selected === i ? "content show" : "content"} >{item.answer}</h2>
                
            </div>
        </div>
    ))}
                            </div>
    const professionalcontent = <div className=" w-11/12 sm:w-3/4 m-auto h-auto">
    <h2 className="text-bg2 text-3xl text-left  font-bold w-full mb-10 ">{content}</h2>

    <div className="w-full h-auto">
        <div className="shadow-lg p-4 mb-10 h-60 group container player rounded-md bg-bgr  max-w-sm flex flex-col justify-center items-center  mx-auto content-divplayer">
            
            <div className="w-11/12">
                <h2 className="text-bgr h-32 text-xl text-left  font-medium mb-10">{professionaldata[counter].question}</h2>
            
            <div className="flex flex-row justify-evenly py-1 items-center player w-2/4  mx-auto text-xl text-bgr ">

                <button onClick={handlePreviousAudio}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.929 17.0707C6.834 20.9764 13.166 20.9764 17.071 17.0707C20.9763 13.1657 20.9763 6.83375 17.071 2.92875C13.166 -0.97625 6.834 -0.97625 2.929 2.92875C-0.976334 6.83375 -0.976334 13.1657 2.929 17.0707V17.0707ZM3.33333 5.33342H5.073V10.0001L10.8697 5.33342V10.0001L16.6667 5.33342V14.6667L10.8693 10.0001V14.6667L5.07267 10.0001V14.6667H3.33333V5.33342Z" fill="white"/>
                    </svg>
                </button>

                {isPlaying ? (
                <button onClick={toggleIsPlaying}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.625 0C28.7723 0 37 8.22773 37 18.375C37 28.5223 28.7723 36.75 18.625 36.75C8.47773 36.75 0.25 28.5223 0.25 18.375C0.25 8.22773 8.47773 0 18.625 0ZM21.9062 24.6094C21.9062 24.7898 22.0539 24.9375 22.2344 24.9375H24.2031C24.3836 24.9375 24.5312 24.7898 24.5312 24.6094V12.1406C24.5312 11.9602 24.3836 11.8125 24.2031 11.8125H22.2344C22.0539 11.8125 21.9062 11.9602 21.9062 12.1406V24.6094ZM12.7188 24.6094C12.7188 24.7898 12.8664 24.9375 13.0469 24.9375H15.0156C15.1961 24.9375 15.3438 24.7898 15.3438 24.6094V12.1406C15.3438 11.9602 15.1961 11.8125 15.0156 11.8125H13.0469C12.8664 11.8125 12.7188 11.9602 12.7188 12.1406V24.6094Z" fill="white"/>
                    </svg>
                </button>
                ): (
                <button onClick={toggleIsPlaying}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.375 0C8.22773 0 0 8.22773 0 18.375C0 28.5223 8.22773 36.75 18.375 36.75C28.5223 36.75 36.75 28.5223 36.75 18.375C36.75 8.22773 28.5223 0 18.375 0ZM24.2854 18.658L15.3275 25.1754C15.2784 25.2107 15.2205 25.2317 15.1602 25.2363C15.0999 25.2408 15.0395 25.2286 14.9857 25.2011C14.9319 25.1735 14.8867 25.1317 14.8551 25.0801C14.8235 25.0285 14.8067 24.9693 14.8066 24.9088V11.8822C14.8064 11.8216 14.823 11.7622 14.8546 11.7104C14.8861 11.6587 14.9313 11.6167 14.9853 11.5891C15.0392 11.5615 15.0997 11.5493 15.1602 11.554C15.2206 11.5587 15.2785 11.58 15.3275 11.6156L24.2854 18.1289C24.3277 18.1588 24.3622 18.1985 24.386 18.2445C24.4098 18.2905 24.4223 18.3416 24.4223 18.3935C24.4223 18.4453 24.4098 18.4964 24.386 18.5424C24.3622 18.5884 24.3277 18.6281 24.2854 18.658V18.658Z" fill="white"/>
                    </svg>
                </button>
                )
                }
                <button onClick={handleNextAudio}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.071 2.92925C13.166 -0.976417 6.834 -0.976417 2.929 2.92925C-0.976333 6.83425 -0.976333 13.1662 2.929 17.0713C6.834 20.9763 13.166 20.9763 17.071 17.0713C20.9763 13.1662 20.9763 6.83425 17.071 2.92925V2.92925ZM16.6667 14.6666H14.927V9.99992L9.13033 14.6666V9.99992L3.33333 14.6666V5.33325L9.13067 9.99992V5.33325L14.9273 9.99992V5.33325H16.6667V14.6666Z" fill="white"/>
                    </svg>
                </button>
            </div>
            </div>
        </div>
    </div>

    <audio 
        src={professionaldata[counter].audio}
        ref={audioRef}
        onPlay={() => setPlayingState(true)}
        onPause={() => setPlayingState(false)}
    />


    {professionaldata.map( (item, i) =>(
        // eslint-disable-next-line react/jsx-key
        <div className="item  m-auto">
        
            <div className="title  " onClick={ () => toggle(i)}>
                <h2 className=" font-normal text-bg2">{item.question}</h2>
                <span className="text-bg2 font-medium">{selected === i ? "-" : "+"}</span>
            </div>
            <div className=" border-l-2 border-sl pl-2 ">
                <h2 className={selected === i ? "content show" : "content"} >{item.answer}</h2>
                
            </div>
        </div>
    ))}
                            </div>
    const servicecontent = <div className=" w-11/12 sm:w-3/4 m-auto h-auto">
    <h2 className="text-bg2 text-3xl text-left  font-bold w-full mb-10 ">{content}</h2>

    <div className="w-full h-auto">
        <div className="shadow-lg p-4 mb-10 h-60 group container player rounded-md bg-bgr  max-w-sm flex flex-col justify-center items-center  mx-auto content-divplayer">
            
            <div className="w-11/12">
                <h2 className="text-bgr h-32 text-xl text-left  font-medium mb-10">{servicedata[counter].question}</h2>
            
            <div className="flex flex-row justify-evenly py-1 items-center player w-2/4  mx-auto text-xl text-bgr ">

                <button onClick={handlePreviousAudio}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.929 17.0707C6.834 20.9764 13.166 20.9764 17.071 17.0707C20.9763 13.1657 20.9763 6.83375 17.071 2.92875C13.166 -0.97625 6.834 -0.97625 2.929 2.92875C-0.976334 6.83375 -0.976334 13.1657 2.929 17.0707V17.0707ZM3.33333 5.33342H5.073V10.0001L10.8697 5.33342V10.0001L16.6667 5.33342V14.6667L10.8693 10.0001V14.6667L5.07267 10.0001V14.6667H3.33333V5.33342Z" fill="white"/>
                    </svg>
                </button>

                {isPlaying ? (
                <button onClick={toggleIsPlaying}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.625 0C28.7723 0 37 8.22773 37 18.375C37 28.5223 28.7723 36.75 18.625 36.75C8.47773 36.75 0.25 28.5223 0.25 18.375C0.25 8.22773 8.47773 0 18.625 0ZM21.9062 24.6094C21.9062 24.7898 22.0539 24.9375 22.2344 24.9375H24.2031C24.3836 24.9375 24.5312 24.7898 24.5312 24.6094V12.1406C24.5312 11.9602 24.3836 11.8125 24.2031 11.8125H22.2344C22.0539 11.8125 21.9062 11.9602 21.9062 12.1406V24.6094ZM12.7188 24.6094C12.7188 24.7898 12.8664 24.9375 13.0469 24.9375H15.0156C15.1961 24.9375 15.3438 24.7898 15.3438 24.6094V12.1406C15.3438 11.9602 15.1961 11.8125 15.0156 11.8125H13.0469C12.8664 11.8125 12.7188 11.9602 12.7188 12.1406V24.6094Z" fill="white"/>
                    </svg>
                </button>
                ): (
                <button onClick={toggleIsPlaying}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.375 0C8.22773 0 0 8.22773 0 18.375C0 28.5223 8.22773 36.75 18.375 36.75C28.5223 36.75 36.75 28.5223 36.75 18.375C36.75 8.22773 28.5223 0 18.375 0ZM24.2854 18.658L15.3275 25.1754C15.2784 25.2107 15.2205 25.2317 15.1602 25.2363C15.0999 25.2408 15.0395 25.2286 14.9857 25.2011C14.9319 25.1735 14.8867 25.1317 14.8551 25.0801C14.8235 25.0285 14.8067 24.9693 14.8066 24.9088V11.8822C14.8064 11.8216 14.823 11.7622 14.8546 11.7104C14.8861 11.6587 14.9313 11.6167 14.9853 11.5891C15.0392 11.5615 15.0997 11.5493 15.1602 11.554C15.2206 11.5587 15.2785 11.58 15.3275 11.6156L24.2854 18.1289C24.3277 18.1588 24.3622 18.1985 24.386 18.2445C24.4098 18.2905 24.4223 18.3416 24.4223 18.3935C24.4223 18.4453 24.4098 18.4964 24.386 18.5424C24.3622 18.5884 24.3277 18.6281 24.2854 18.658V18.658Z" fill="white"/>
                    </svg>
                </button>
                )
                }
                <button onClick={handleNextAudio}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.071 2.92925C13.166 -0.976417 6.834 -0.976417 2.929 2.92925C-0.976333 6.83425 -0.976333 13.1662 2.929 17.0713C6.834 20.9763 13.166 20.9763 17.071 17.0713C20.9763 13.1662 20.9763 6.83425 17.071 2.92925V2.92925ZM16.6667 14.6666H14.927V9.99992L9.13033 14.6666V9.99992L3.33333 14.6666V5.33325L9.13067 9.99992V5.33325L14.9273 9.99992V5.33325H16.6667V14.6666Z" fill="white"/>
                    </svg>
                </button>
            </div>
            </div>
        </div>
    </div>

    <audio 
        src={servicedata[counter].audio}
        ref={audioRef}
        onPlay={() => setPlayingState(true)}
        onPause={() => setPlayingState(false)}
    />


    {servicedata.map( (item, i) =>(
        // eslint-disable-next-line react/jsx-key
        <div className="item  m-auto">
        
            <div className="title  " onClick={ () => toggle(i)}>
                <h2 className=" font-normal text-bg2">{item.question}</h2>
                <span className="text-bg2 font-medium">{selected === i ? "-" : "+"}</span>
            </div>
            <div className=" border-l-2 border-sl pl-2 ">
                <h2 className={selected === i ? "content show" : "content"} >{item.answer}</h2>
                
            </div>
        </div>
    ))}
                            </div>
    const aboutcontent = <div className=" w-11/12 sm:w-3/4 m-auto h-auto">
    <h2 className="text-bg2 text-3xl text-left  font-bold w-full mb-10 ">{content}</h2>

    <div className="w-full h-auto">
        <div className="shadow-lg p-4 mb-10 h-60 group container player rounded-md bg-bgr  max-w-sm flex flex-col justify-center items-center  mx-auto content-divplayer">
            
            <div className="w-11/12">
                <h2 className="text-bgr h-32 text-xl text-left  font-medium mb-10">{aboutdata[counter].question}</h2>
            
            <div className="flex flex-row justify-evenly py-1 items-center player w-2/4  mx-auto text-xl text-bgr ">

                <button onClick={handlePreviousAudio}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.929 17.0707C6.834 20.9764 13.166 20.9764 17.071 17.0707C20.9763 13.1657 20.9763 6.83375 17.071 2.92875C13.166 -0.97625 6.834 -0.97625 2.929 2.92875C-0.976334 6.83375 -0.976334 13.1657 2.929 17.0707V17.0707ZM3.33333 5.33342H5.073V10.0001L10.8697 5.33342V10.0001L16.6667 5.33342V14.6667L10.8693 10.0001V14.6667L5.07267 10.0001V14.6667H3.33333V5.33342Z" fill="white"/>
                    </svg>
                </button>

                {isPlaying ? (
                <button onClick={toggleIsPlaying}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.625 0C28.7723 0 37 8.22773 37 18.375C37 28.5223 28.7723 36.75 18.625 36.75C8.47773 36.75 0.25 28.5223 0.25 18.375C0.25 8.22773 8.47773 0 18.625 0ZM21.9062 24.6094C21.9062 24.7898 22.0539 24.9375 22.2344 24.9375H24.2031C24.3836 24.9375 24.5312 24.7898 24.5312 24.6094V12.1406C24.5312 11.9602 24.3836 11.8125 24.2031 11.8125H22.2344C22.0539 11.8125 21.9062 11.9602 21.9062 12.1406V24.6094ZM12.7188 24.6094C12.7188 24.7898 12.8664 24.9375 13.0469 24.9375H15.0156C15.1961 24.9375 15.3438 24.7898 15.3438 24.6094V12.1406C15.3438 11.9602 15.1961 11.8125 15.0156 11.8125H13.0469C12.8664 11.8125 12.7188 11.9602 12.7188 12.1406V24.6094Z" fill="white"/>
                    </svg>
                </button>
                ): (
                <button onClick={toggleIsPlaying}>
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.375 0C8.22773 0 0 8.22773 0 18.375C0 28.5223 8.22773 36.75 18.375 36.75C28.5223 36.75 36.75 28.5223 36.75 18.375C36.75 8.22773 28.5223 0 18.375 0ZM24.2854 18.658L15.3275 25.1754C15.2784 25.2107 15.2205 25.2317 15.1602 25.2363C15.0999 25.2408 15.0395 25.2286 14.9857 25.2011C14.9319 25.1735 14.8867 25.1317 14.8551 25.0801C14.8235 25.0285 14.8067 24.9693 14.8066 24.9088V11.8822C14.8064 11.8216 14.823 11.7622 14.8546 11.7104C14.8861 11.6587 14.9313 11.6167 14.9853 11.5891C15.0392 11.5615 15.0997 11.5493 15.1602 11.554C15.2206 11.5587 15.2785 11.58 15.3275 11.6156L24.2854 18.1289C24.3277 18.1588 24.3622 18.1985 24.386 18.2445C24.4098 18.2905 24.4223 18.3416 24.4223 18.3935C24.4223 18.4453 24.4098 18.4964 24.386 18.5424C24.3622 18.5884 24.3277 18.6281 24.2854 18.658V18.658Z" fill="white"/>
                    </svg>
                </button>
                )
                }
                <button onClick={handleNextAudio}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.071 2.92925C13.166 -0.976417 6.834 -0.976417 2.929 2.92925C-0.976333 6.83425 -0.976333 13.1662 2.929 17.0713C6.834 20.9763 13.166 20.9763 17.071 17.0713C20.9763 13.1662 20.9763 6.83425 17.071 2.92925V2.92925ZM16.6667 14.6666H14.927V9.99992L9.13033 14.6666V9.99992L3.33333 14.6666V5.33325L9.13067 9.99992V5.33325L14.9273 9.99992V5.33325H16.6667V14.6666Z" fill="white"/>
                    </svg>
                </button>
            </div>
            </div>
        </div>
    </div>

    <audio 
        src={aboutdata[counter].audio}
        ref={audioRef}
        onPlay={() => setPlayingState(true)}
        onPause={() => setPlayingState(false)}
    />


    {aboutdata.map( (item, i) =>(
        // eslint-disable-next-line react/jsx-key
        <div className="item  m-auto">
        
            <div className="title  " onClick={ () => toggle(i)}>
                <h2 className=" font-normal text-bg2">{item.question}</h2>
                <span className="text-bg2 font-medium">{selected === i ? "-" : "+"}</span>
            </div>
            <div className=" border-l-2 border-sl pl-2 ">
                <h2 className={selected === i ? "content show" : "content"} >{item.answer}</h2>
                
            </div>
        </div>
    ))}
                            </div>
    let list = "";
    if (content === "General"){
        list = generalcontent
    } else if (content === "Profesionales"){
        list = professionalcontent
    } else if ( content === "Servicios"){
        list = servicecontent
    }else{
        list = aboutcontent
    }

    return (
        <div className="w-full h-auto bg-bgr pb-20">
            <div className="w-full h-full  flex pt-24 sm:pt-36 ">
                <div className="w-full max-w-6xl  mx-auto px-8">

                    <h1 className="text-bg2 font-bold text-2xl sm:text-4xl m-auto mb-10 uppercase">Todo lo que cualquier comprador debe saber para entender el mercado inmobiliario español</h1>
                    <p className="w-auto h-auto font-heads mb-10">Recomendamos leer las preguntas mas frecuentes de compradores. Es importante estar bien preparado ante argumentos y explicaciones de profesionales que intervienen durante el proceso de compraventa.</p>
                    <div className="w-full h-auto max-w-4xl m-auto grid grid-flow-row md:grid-flow-col md:grid-cols-4 gap-16">
                        <div className="w-full md:w-60 text-left flex flex-col">
                            <h2 className="text-2xl text-sl font-semibold mb-5  ">Temas</h2>
                            <button  className=" text-left text hover:font-medium hover:text-sl mb-2" onClick={ () => {setContent(content = "General"); console.log(content)} }>General</button>
                            <button className=" text-left text hover:font-medium hover:text-sl mb-2" onClick={ () => {setContent(content = "Profesionales"); console.log(content)} }>Profesionales</button>
                            <button className=" text-left text hover:font-medium hover:text-sl mb-2" onClick={ () => {setContent(content = "Servicios"); console.log(content)} }>Servicios</button>
                            <button className=" text-left text hover:font-medium hover:text-sl mb-2" onClick={ () => {setContent(content = "Injurad"); console.log(content)} }>Sobre INJURAD</button>
                        </div>
                        <div className=" w-full  h-auto col-span-3 border-bgrS2 border-l">
                            {list}

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
