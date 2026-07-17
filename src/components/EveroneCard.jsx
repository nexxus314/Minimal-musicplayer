function EveryoneCard({ track, onPlay }) {
  return (
    <div className="w-64 h-31 flex-shrink-0 cursor-pointer" onClick={() => onPlay(track)}>
      <img
        src={track.thumbnail}
        alt={track.title}
        className="w-64 h-25 object-cover rounded-lg transition-transform duration-300 hover:brightness-80"
      />
      <h2 className="mt-2 text-[10px] w-full text-black font-semibold truncate">
        {track.title}
      </h2>
  
    </div>
  );
}

export default EveryoneCard;