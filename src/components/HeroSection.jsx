import React, { useEffect, useRef, useState } from "react";
import { BsPauseCircle } from "react-icons/bs";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import { CiCircleChevDown } from "react-icons/ci";

const HeroSection = ({
  song,
  prevSong,
  nextSong,
  isPlaying,
  setIsPlaying,
  setShowList,
}) => {
  const [seekBar, setSeekBar] = useState(0);
  const [currentTime,setCurrentTime] =useState(0);
  const [totalTime,setTotalTime] = useState(0);

  const audioRef = useRef(null);
  const startY = useRef(0);
  const endY = useRef(0);

  function onTouchStart(e) {
    startY.current = e.touches[0].clientY;
  }

  function onTouchMove(e) {
    endY.current = e.touches[0].clientY;
  }

  function onTouchEnd() {
    const swipeDistance = endY.current - startY.current;

    if (swipeDistance > 80) {
      
      setShowList(true); 
    }

    startY.current = 0;
    endY.current = 0;
  }

  function ToggleMusic() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }
  function updateSeekBar() {
    const currentTime = audioRef.current.currentTime;
    const totalTime = audioRef.current.duration;
    setSeekBar((currentTime / totalTime) * 100);
  }
  function handleSeek(e) {
    const value = e.target.value;
    const total = audioRef.current.duration;
    audioRef.current.currentTime = (value / 100) * total;
    setSeekBar(value);
  }
    function formatTime(seconds){
    if(!seconds) return "0:00";
    const minutes = Math.floor(seconds/60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs<10?"0"+secs:secs}`;
    }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [song]);
  

  return (
    <>
    <div className="relative w-full h-full">
      <audio
        ref={audioRef}
        src={song.audio}
        onTimeUpdate={()=>{
          const audio = audioRef.current;
          setCurrentTime(audio.currentTime)
          setTotalTime(audio.duration)
          updateSeekBar();

        }}
        onLoadedMetadata={() => {
    setTotalTime(audioRef.current.duration);
  }}
        onEnded={nextSong}
      />

    
      <div
  className="
    absolute inset-0 
    w-full h-full 
    blur-3xl scale-125 opacity-50
    -z-10 
  "
  style={{
    backgroundImage: `url(${song.thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>
<div className="absolute inset-0 bg-black/40 -z-[5]"></div>


      <section
        className="relative z-10 text-gray-700 body-font bg-transparent dark:bg-transparent "
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="
  mx-auto max-w-screen-xl w-full 
  flex md:flex-row flex-col 

  lg:grid grid-cols-2 gap-4
  items-center 
  gap-12
  py-10
  min-h-screen
  dark:text-white
  pt-0
  
"
        >
          <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6 flex flex-col gap-5 justify-center relative lg:pl-15 ">
          <p className="font-[Poppins] hidden lg:block lg:text-center text-[#e9edc9]">Now Playing</p>
            <img
              className="object-cover object-center lg:rounded-xl lg:ml-10 rounded-b-full w-full shadow-xl max-w-[380px] hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="hero"
              src={song.thumbnail}
            />

            <div
              className="flex lg:mb-30 justify-center items-center gap-5 mb-10  ml-13 lg:ml-28
             bg-[#faedcd]/50 rounded-full shadow-xl backdrop-blur-xl  w-60 h-20 hover:scale-105 text-[#white] transition-transform duration-200 ease-in-out absolute bottom-[-70px] lg:bottom-[-160px] "
            >
              <button
                onClick={prevSong}
                className="hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                <BiSkipPrevious size={25} />
              </button>

              <button
                onClick={ToggleMusic}
                className="hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                {isPlaying ? (
                  <BsPauseCircle size={45} />
                ) : (
                  <BsPlayCircle size={45} />
                )}
              </button>

              <button
                onClick={nextSong}
                className="hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                <BiSkipNext size={25} />
              </button>
            </div>
          </div>
          <div>
          <div className="flex flex-col w-full px-10 items-start text-2xl font-[Poppins] pt-15 mb-40">
            <div className="flex flex-row justify-between gap-50 ">
              <div className="text-[#e9edc9] ">Album</div>
              <button className="text-[#e9edc9] lg:ml-50">
                <CiCircleChevDown
                className="hover:scale-110 transition-transform duration-400 ease-in-out"
                  size={40}
                  onClick={() => {
                    setShowList(true);
                  }}
                />
              </button>
            </div>

            <h2 className="text-[#fefae0]">{song.album}</h2>
          </div>

          <div className="lg:flex-grow w-full px-10 lg:px-0 flex flex-col md:items-start md:text-left text-black lg:items-start text-left  dark:text-white lg:pl-10 font-[Poppins]">
            <p className=" font-[Poppins] text-[#e9edc9] text-xl">{song.artist}</p>
            <h1 className="title-font sm:text-2xl lg:text-6xl text-4xl mb-4 font-medium text-[#fefae0] font-[Poppins] ">
              {song.title}
            </h1>

            
            </div>
            <div className="flex flex-col justify-start">
              <div className="w-full px-10 pt-10 mb-8 ">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={seekBar}
                  onChange={handleSeek}
                  className="w-full 
      max-w-full 
      lg:max-w-[800px] 
      h-1 bg-[#fefae0] rounded-full 
      appearance-none cursor-pointer 
      accent-[#a5a58d]"
                />
                <div className="flex justify-between w-full max-w-full lg:max-w-[800px] px-6 mt-1 text-[#fefae0] text-sm">
  <span>{formatTime(currentTime)}</span>
  <span>{formatTime(totalTime)}</span>
</div>


                </div>
              </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default HeroSection;
