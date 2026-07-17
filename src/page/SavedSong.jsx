import { useEffect, useState } from "react";
import ExploreCard from "../components/ExploreCard";
import Player from "../components/Player";
import "../index.css";
import { useNavigate } from "react-router-dom";

function SavedSong() {

  const navigate = useNavigate();
  const [songs, setSongs] = useState(() => {
    return JSON.parse(localStorage.getItem("savedSongs")) || [];
  });
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playSong(song) {
    console.log("Playing song:", song);

    setCurrentSong(song);
    setIsPlaying(true);
  }

  function removeSong(song) {
    const updatedSongs = songs.filter(
      savedSong => savedSong.id !== song.id
    );

    setSongs(updatedSongs);
    setSavedSongs(updatedSongs);
    localStorage.setItem("savedSongs", JSON.stringify(updatedSongs));
  }



  return (
    <div className="relative bg-cover bg-no-repeat bg-center bg-[#f2f0ef] h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${'/spidey.jpg'})`,

      }}>

      <h1
        className="absolute top-3 left-3
             px-2 py-2 z-20
             text-sm font-extrabold text-blue-950
             bg-white/15 backdrop-blur-xl
             rounded-xl border border-white/30 cursor-pointer
             shadow-[8px_8px_20px_rgba(0,0,0,0.25),-4px_-4px_12px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-200 ease-in-out" 
             onClick={() => navigate("/explore")}>
        HOME
      </h1>
      <h1 className="text-[330px] tracking-tighter leading-[0.8] absolute text-blue-950 top-3 left-15 z-0 font-bold mb-4 font-[Bungee]">Saved <br /> Songs</h1>

      <div className="translate-y-20 flex gap-5 z-10 overflow-x-auto scrollbar-hide">
        {songs.map(song => (
          <ExploreCard
            key={song.id}
            track={song}
            onPlay={playSong}
            saveSong={removeSong}
            isSaved={true}
          />
        ))}
      </div>
      {currentSong && (
        <Player
          song={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
    </div>
  );
}

export default SavedSong;