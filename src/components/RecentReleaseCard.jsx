function RecentReleaseCard({ track, onPlay }) {
  return (
    <div className="w-[200px] border border-red-900 h-[250px] rounded-lg flex flex-col bg-center items-center bg-cover bg-no-repeat shadow-xl h-[120px] flex-shrink-0 cursor-pointer"
    style={{ backgroundImage: `url(${'/spidey7.jpg'})`}}
    onClick={() => onPlay(track)}>
      <img
        src={track.thumbnail}
        alt={track.title}
        className="w-45 h-40 mt-4 object-cover transition-transform duration-300 hover:brightness-80"
      />
      <h2 className="mt-2 w-full text-[10px] font-semibold truncate px-2">
        {track.title}
      </h2>
      <p className="text-sm w-full text-[10px] text-gray-400 truncate px-2">
        {track.artist}
      </p>
     </div>
  );
} 

export default RecentReleaseCard;