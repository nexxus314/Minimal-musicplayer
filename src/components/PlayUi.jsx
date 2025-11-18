import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import SongList from "./SongList";
//import SongList from "../data/SongList.json";
import { useState, useEffect } from "react";

const PlayUi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery,setSearchQuery]=useState("");
  const [songs, setSongs] = useState([]);
  const [showList,setShowList] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);


  
    async function fetchSong(query="the weekend") {
      try {
       const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;
        const res = await fetch (proxy+url);
        const data = await res.json();


        if (!data.data) {
        console.error("Deezer returned empty results:", data);
        return;
      }

        const formatted = data.data.map((item) => ({
          title: item.title,
          artist: item.artist.name,
          thumbnail: item.album.cover_big, 
          audio: item.preview,
          duration:30,
        }));

        setSongs(formatted);
        setCurrentIndex(0)
      } catch (error) {
        console.error("Error fetching SongList:", error);
      }
    }
   
  useEffect(() => {
  fetchSong("weekend");
}, []);

  if (songs.length == 0) {
    return <div className="text-center p-10 font-mono">Loading SongList..</div>;
  }

  function nextSong() {
    setCurrentIndex((prev) => {
      if (prev === songs.length - 1) return 0;
      return prev + 1;
      
    });
  }

  function prevSong() {
    setCurrentIndex((prev) => {
      if (prev === 0) return songs.length - 1;
      return prev - 1;
    });
  }
  async function SearchSong(){

    await fetchSong(searchQuery)
    setCurrentIndex(0)


  }


  const currentSong = songs[currentIndex];
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Header 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      SearchSong={SearchSong}
      setShowList={setShowList}
      />

      <div className="flex-1 overflow-hidden-auto">
      {showList?(
        <SongList 
          songs={songs} 
          setCurrentIndex={setCurrentIndex}
          setShowList={setShowList}
          isPlaying={isPlaying}
  setIsPlaying={setIsPlaying}
        />):(
      
        <HeroSection
          song={currentSong}
          nextSong={nextSong}
          prevSong={prevSong}
            isPlaying={isPlaying}
  setIsPlaying={setIsPlaying}
        />
        )}
      </div>
    
      <Footer />
    </div>
  );
};

export default PlayUi;
