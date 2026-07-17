import { useEffect, useRef } from "react";

function Player({ song, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, song]);

  return (
    <div className="fixed bottom-3 right-110 w-[350px] h-15 bg-white/5 shadow-2xl backdrop-blur-3xl rounded-full flex items-center justify-between px-6">

      <div className="flex items-center gap-3">
        <img
          src={song.thumbnail}
          className="w-10 h-10 rounded-lg"
        />

        <div>
          <h2 className="text-[10px] font-semibold truncate max-w-[150px]">{song.title}</h2>
          <p className="text-[10px] text-gray-500 font-semibold truncate max-w-[150px]">{song.artist}</p>
        </div>
      </div>

      <button
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>

      <audio
        ref={audioRef}
        src={song.audio}
      />
    </div>
  );
}

export default Player;