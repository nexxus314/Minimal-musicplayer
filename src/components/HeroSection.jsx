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
      // 80px threshold
      setShowList(true); // 👈 OPEN SONG LIST
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

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [song]);

  return (
    <>
      <audio
        ref={audioRef}
        src={song.audio}
        onTimeUpdate={updateSeekBar}
        onEnded={nextSong}
      />

      <section
        className="text-gray-700 body-font bg-[white] dark:bg-[0f1108] "
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="
  mx-auto max-w-screen-xl w-full 
  flex md:flex-row flex-col 
  items-center 
  gap-12
  py-10
  min-h-screen
  dark:text-white
  pt-3
  
"
        >
          <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6 flex flex-col gap-5 justify-center relative lg:pl-15 ">
            <img
              className="object-cover object-center lg:rounded-xl lg:ml-10 rounded-b-full w-full shadow-xl max-w-[380px] hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="hero"
              src={song.thumbnail}
            />

            <div
              className="flex  lg:mb-30 justify-center items-center gap-5 mb-10  ml-13 lg:ml-25
             bg-[white] rounded-full shadow-xl backdrop-blur-xl  w-60 h-20 hover:scale-105 text-black transition-transform duration-200 ease-in-out absolute bottom-[-70px] lg:bottom-[-160px] "
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
          <div className="flex flex-col w-full px-10 items-start text-2xl font-absans pt-15 lg:pb-[20] lg:pl-50">
            <div className="flex flex-row justify-between gap-50 ">
              <div className="text-gray-600 ">Album</div>
              <button className="text-black lg:ml-50">
                <CiCircleChevDown
                className="hover:scale-110 transition-transform duration-400 ease-in-out"
                  size={40}
                  onClick={() => {
                    setShowList(true);
                  }}
                />
              </button>
            </div>

            <h2 className="text-black">{song.album}</h2>
          </div>

          <div className="lg:flex-grow w-full px-10 lg:px-0 flex flex-col md:items-start md:text-left text-black lg:items-start text-left  dark:text-white lg:mt-20 mt-40 lg:pl-50">
            <p className=" font-absans text-gray-600 text-xl">{song.artist}</p>
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-black font-poppins whitespace-nowrap overflow-hidden dark:text-black">
              {song.title}
            </h1>

            
            </div>
            <div className="flex flex-col justify-start">
              <div className="w-full px-10 pt-10 mb-8 lg:pl-[100] ">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={seekBar}
                  onChange={handleSeek}
                  className="w-full h-1 bg-gray-300 rounded-full  appearance-none cursor-pointer
      accent-[#368f8b]"
                />
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
