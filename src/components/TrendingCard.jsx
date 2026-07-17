function TrendingCard({ track, onPlay, saveSong, isSaved }) {

  return (
    <div className="flex border-t border-gray-200  items-center gap-4 py-2 cursor-pointer w-full" onClick={() => onPlay(track)}>
      <img
        src={track.thumbnail}
        className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
      />

      <div className="flex-1 min-w-0">
        <div className="flex flex-row justify-between items-baseline">
          <h2 className="font-semibold text-[10px] truncate text-black">
            {track.title}
          </h2>
          <button className="text-md mr-2 cursor-pointer text-blue-950 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            saveSong(track);
          }}>
            {isSaved ? "✭" : "✰"}
          </button>
        </div>

        <p className="text-sm text-gray-400 text-[10px] truncate`">
          {track.artist}
        </p>
      </div>


    </div>
  );
}

export default TrendingCard;