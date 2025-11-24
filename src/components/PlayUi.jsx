import React, { useState, useEffect } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SongList from "./SongList";

const PlayUi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [showList, setShowList] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  async function fetchSongs(query = "the weeknd") {
    try {
      const baseUrl =
        "https://jiosaavn-c451wwyru-sumit-kolhes-projects-94a4846a.vercel.app";

      const url = `${baseUrl}/api/search/songs?query=${encodeURIComponent(
        query
      )}&limit=40`;

      const res = await fetch(url);
      const data = await res.json();

      if (!data.data || !data.data.results) return [];

      const formatted = data.data.results.map((song) => {
        const bestAudio =
          song.downloadUrl?.find((x) => x.quality === "320kbps") ||
          song.downloadUrl?.find((x) => x.quality === "160kbps") ||
          song.downloadUrl?.[0];

        const highResImage =
          song.image?.[song.image.length - 1]?.url ||
          song.image?.[0]?.url ||
          "";
        const artistNames = 
          song.artists?.primary?.map(a => a.name).join(', ') || 
          "Unknown Artist";
        return {
          id: song.id,
          title: song.name || "Unknown Title",
          artist: artistNames || "Unknown Artist",
          thumbnail: highResImage,
          album:song.album.name,
          audio: bestAudio?.url || "",
          duration: song.duration || 0,
        };
      });

      return formatted;
    } catch (err) {
      console.error("Error fetching songs:", err);
      return [];
    }
  }

  useEffect(() => {
    async function loadInitialSong() {
      const initial = await fetchSongs("Charlie-Puth-Howlong");
      if (initial.length > 0) {
        setSongs(initial);
        setCurrentIndex(0);
      }
    }
    loadInitialSong();
  }, []);

  
  async function SearchSong() {
    if (!searchQuery.trim()) return;

    const results = await fetchSongs(searchQuery);

    if (results.length > 0) {
      setSongs(results);
      setCurrentIndex(0);
      setIsPlaying(true);
      setShowList(true);
    } else {
      alert("No songs found!");
    }
  }


  function nextSong() {
    setCurrentIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
  }

  function prevSong() {
    setCurrentIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
  }


  if (songs.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <div className="animate-spin w-10 h-10 border-4 border-gray-300 border-t-transparent rounded-full"></div>
        <p className="font-mono text-gray-600">Loading player...</p>
      </div>
    );
  }

  const currentSong = songs[currentIndex];

  return (
  <div className="relative h-screen w-full overflow-hidden">

      {/* HERO – always on top */}
      <div
        className={`absolute inset-0 z-20 transition-transform duration-500 
                    ${showList ? "translate-y-full" : "translate-y-0"}`}
      >
        <HeroSection
          song={currentSong}
          nextSong={nextSong}
          prevSong={prevSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setShowList={setShowList}
        />
      </div>

      {/* SONG LIST – underneath */}
      <div
        className={`absolute inset-0 z-10 overflow-y-auto bg-white 
                    transition-transform duration-500
                    ${showList ? "translate-y-0" : "translate-y-full"}`}
      >
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          SearchSong={SearchSong}
          setShowList={setShowList}
        />

        <SongList
          songs={songs}
          setCurrentIndex={setCurrentIndex}
          setShowList={setShowList}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
  </div>
);

};

export default PlayUi;
