import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { fetchSongs } from "../api/jioSaavn";
import ExploreCard from "../components/ExploreCard";
import TrendingColumn from "../components/TrendingColumn";
import RecentReleaseCard from "../components/RecentReleaseCard";
import EveryoneCard from "../components/EveroneCard";
import Player from "../components/Player"
import spidey from "../assets/spidey.jpg";

function ExplorePage() {
  const [newSong, setNewSong] = useState([]);
  const [trendingSongs, setTrendingSongs] = useState([]);
  const [recentReleases, setRecentReleases] = useState([]);
  const [everyoneChoice, setEveryoneChoice] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [savedSongs, setSavedSongs] = useState(() => {
    return JSON.parse(localStorage.getItem("savedSongs")) || [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function loadSongs() {
      const newResults = await fetchSongs("New Releases");
      const trendingResults = await fetchSongs("Trending Songs");
      const recentResults = await fetchSongs("English Songs");
      const everyoneResults = await fetchSongs("popular songs");
      setTrendingSongs(trendingResults);
      setNewSong(newResults);
      setRecentReleases(recentResults);
      setEveryoneChoice(everyoneResults);
    }

    loadSongs();
  }, []);

  function saveSong(track) {
    const exists = savedSongs.some(song => song.id === track.id);

    let updatedSongs;

    if (exists) {
      updatedSongs = savedSongs.filter(song => song.id !== track.id);
    } else {
      updatedSongs = [...savedSongs, track];
    }

    setSavedSongs(updatedSongs);
    localStorage.setItem("savedSongs", JSON.stringify(updatedSongs));
  }
  const columns = [];
  for (let i = 0; i < trendingSongs.length; i += 4) {
    columns.push(trendingSongs.slice(i, i + 4));
  }

  function playSong(song) {
    console.log("Playing song:", song);

    setCurrentSong(song);
    setIsPlaying(true);
  }

  return (
    <div
      className="flex h-screen w-screen gap-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${'/spidey.jpg'})`,
      }}
    >


      <div
        className="w-60 h-[530px] bg-white/5 backdrop-blur-3xl translate-y-[14px] flex flex-col gap-5 
        px-6
        backdrop-blur-3xl border border-black/10
        shadow-2xl rounded-2xl ml-2"
      >
        <h1 className="text-[45px] font-[Bungee] text-blue-950">
          SPIDEY
        </h1>

        <h1 className="group text-[13px] font-semibold text-blue-950 cursor-pointer hover:text-black transition" 
        onClick={() => navigate("/")}>
          <span className="group-hover:hidden mr-1">✰</span>
          <span className="hidden group-hover:inline mr-1">✭</span>
          Search
        </h1>

        <h1 className="group text-[13px] font-semibold text-blue-950 cursor-pointer hover:text-black transition "
          onClick={() => navigate("/saved")}>
          <span className="group-hover:hidden mr-1">✰</span>
          <span className="hidden group-hover:inline mr-1">✭</span>
          Saved
        </h1>
      </div>


      <div className="pt-5 pb-5 flex-1 overflow-y-auto ">
        <h1 className="tracking-tighter font-[Poppins] text-[28px] font-bold text-blue-950 mb-3">
          New
        </h1>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {newSong.map((song) => (
            <ExploreCard
              key={song.id}
              track={song}
              saveSong={saveSong}
              onPlay={playSong}
              isSaved={savedSongs.some(saved => saved.id === song.id)}
            />
          ))}
        </div>


        <h1 className="text-[20px] font-[Poppins] font-bold text-blue-950 mt-8 mb-2 tracking-tighter">
          trending
        </h1>

        <div className="flex gap-9 overflow-x-auto pb-6 scrollbar-hide">
          {columns.map((group, index) => (
            <TrendingColumn
              key={index}
              songs={group}
              onPlay={playSong}
              saveSong={saveSong}
              savedSongs={savedSongs}
            />
          ))}
        </div>

        <h1 className="tracking-tighter font-[Poppins] text-[20px] font-bold text-blue-950 mb-2">
          everyone's choice
        </h1>

        <div className="mb-10 flex gap-6 overflow-x-auto scrollbar-hide">
          {everyoneChoice.map((song) => (
            <EveryoneCard
              key={song.id}
              track={song}
              onPlay={playSong}
            />
          ))}
        </div>

        <h1 className="tracking-tighter font-[Poppins] text-[20px] font-bold text-blue-950 mb-2">
          recent releases
        </h1>

        <div className="mb-10 flex gap-6 overflow-x-auto scrollbar-hide">
          {recentReleases.map((song) => (
            <RecentReleaseCard
              key={song.id}
              track={song}
              onPlay={playSong}
            />
          ))}
        </div>

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

export default ExplorePage;