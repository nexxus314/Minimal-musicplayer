import React from "react";
import { BsPauseCircle } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import { BiSkipNext } from "react-icons/bi";

const MiniPlayer = ({
  songs,
  isplaying,
  setShowList,
  setIsPlaying,
  nextSong,
}) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-[99] bg-gray-500/30 p-5 text-black rounded-full backdrop-blur-sm shadow-xl m-5"
    >
      <div className="flex items-center justify-between">
        <img
          src={songs.thumbnail}
          sizes=""
          alt="thumbnail"
          className="w-12 h-12 rounded-xl shadow-lg"
        />
        <div className="flex flex-col">
        <h1 className="text-sm font-semibold lg:text-xl text-black truncate w-[150px] sm:w-[220px] ">
          {songs.title}
        </h1>
        <p className="text-sm  lg:text-xl text-black">{songs.artist}</p>
        </div>
        <div className="flex flex-row justify-end align-center">
          <button
            onClick={() => {
              setIsPlaying(false);
            }}
          >
            {isplaying ? (
              <BsPauseCircle size={30} />
            ) : (
              <BsPlayCircle size={30} />
            )}
          </button>

          <button onClick={nextSong}>
            <BiSkipNext size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;
