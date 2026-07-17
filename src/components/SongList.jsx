import React from "react";
import Header from "./Header";
import Card from "./Card";
import Snowfall from 'react-snowfall'

const SongList = ({ songs, setCurrentIndex, setShowList, setIsPlaying, isPlaying }) => {

  const handleSongClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    setShowList(false);
  }


  return (
    <>

      <Snowfall color="white" />

      <div
        className="relative h-screen bg-[#ccd5ae] bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: "url('/spidey.jpg')",
        }}
      >
        <h1 className="text-blue-950 text-[250px] font-bold font-[Bungee] tracking-tighter leadin-[0.8] absolute right-0 translate-y-25" >SEARCH</h1>

        <div className="flex-1 overflow-y-auto pt-25 z-10 lg:pt-20">
          {songs.map((track, index) => (
            <Card
              key={index}
              track={track}
              onClick={() => handleSongClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SongList;
