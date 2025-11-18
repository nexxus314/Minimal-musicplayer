import React, { useEffect, useRef, useState } from "react";
import { BsPauseCircle } from "react-icons/bs";
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";
import { BsPlayCircle } from "react-icons/bs";

const HeroSection = ({ song, prevSong, nextSong, isPlaying,setIsPlaying }) => {
  const [seekBar, setSeekBar] = useState(0);

  const audioRef = useRef(null);

  

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

  useEffect(()=>{
  if (isPlaying){
    audioRef.current.play();
  }
},[song])

  return (
    <>
      <audio ref={audioRef} src={song.audio} onTimeUpdate={updateSeekBar} onEnded={nextSong} />

      <section className="text-gray-700 body-font bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div
          className="
  mx-auto max-w-screen-xl w-full 
  flex md:flex-row flex-col 
  items-center justify-center 
  gap-12
  py-10
  min-h-[calc(100vh-80px)]
"
        >
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
            <img
              className="object-cover object-center rounded-xl shadow-xl w-full max-w-[380px]"
              alt="hero"
              src={song.thumbnail}
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-medium text-gray-900 font-mono">
              {song.title}
            </h1>

            <p className="mb-8 leading-relaxed font-mono text-gray-600">
              {song.artist}
            </p>
            <div className="flex flex-col justify-center">
              <div className="w-full sm:max-w-[400px] mb-8">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={seekBar}
                  onChange={handleSeek}
                  className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer
      accent-indigo-500"
                />
              </div>

              <div className="flex justify-center gap-10 mb-10">
                <button onClick={prevSong}>
                  <GiFastBackwardButton size={60} />
                </button>

                <button onClick={ToggleMusic}>
                  {isPlaying ? (
                    <BsPauseCircle size={60} />
                  ) : (
                    <BsPlayCircle size={60} />
                  )}
                </button>

                <button onClick={nextSong}>
                  <GiFastForwardButton size={60} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
