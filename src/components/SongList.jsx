import React from "react";
import Header from "./Header";
import Card from "./Card";

const SongList = ({songs,setCurrentIndex,setShowList,setIsPlaying,isPlaying}) => {
  return (
    <>
    <div>
      <h1 className="font-absans p-5 text-xl pt-25 lg:pt-20"> 
SONGS
      </h1>
      <div>
        {songs.map((track,index)=>(
          <Card
          key={index}
          track={track}
          onClick={()=>{
            setCurrentIndex(index);
            setIsPlaying(true);
            setShowList(false);
            
          }}
          />
        ))}
      </div>
    </div>
    
    </>
  );
};

export default SongList;
