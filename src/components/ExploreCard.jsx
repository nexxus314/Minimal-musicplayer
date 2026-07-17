function ExploreCard({ track, onPlay, saveSong, isSaved }) {

  return (
    <div className="w-120 flex-shrink-0 cursor-pointer relative" onClick={() => onPlay(track)}>
      <img
        src={track.thumbnail}
        alt={track.title}
        className="w-120 h-80 object-cover shadow-xl rounded-lg transition-transform duration-300 hover:brightness-80"
      />
      <button className="absolute top-0 right-2 text-2xl text-blue-950 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          saveSong(track);
        }}
      >
        {isSaved ? "✭" : "✰"}
      </button>

      <h2 className="mt-2 text-[12px] font-semibold truncate text-black">
        {track.title}
      </h2>

      <p className="text-sm text-[10px] text-gray-400 w-max-[30px] truncate">
        {track.artist}
      </p>
    </div>
  );
}

export default ExploreCard;