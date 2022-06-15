import React, { useState, useRef, useEffect } from 'react'
import styles from "../../styles/AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { useTranslation } from "next-i18next";
import {useRouter} from "next/router"

export default function MediaPlayerAbout () {
    const { t } = useTranslation('common');
    const {push, pathname, locale} = useRouter();
    
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPath, setIsPath] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    if(audioPlayer){
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }else{
        
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    if(pathname == "/about"){
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 5);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + progressBar.current.value);
    changeRange();
  }

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioPlayer} src={t("audioabout")} preload="metadata"></audio>
      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <FaPause className="pl-1.5" /> : <FaPlay className={styles.play} />}
      </button>
      

      {/* current time */}
      <div className="font-medium text-bgr ml-8 overflow-hidden w-12">{calculateTime(currentTime)}</div>

      {/* progress bar */}
      <div>
        <input type="range" className="font-medium text-bgr ml-2" defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>

      {/* duration */}
      <div className="font-medium text-bgr ml-2">{(duration && !isNaN(duration))? calculateTime(duration): "00:00" }</div>
    </div>
  )
}
