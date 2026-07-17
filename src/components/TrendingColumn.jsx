import TrendingCard from "./TrendingCard";

function TrendingColumn({ songs, onPlay, saveSong, savedSongs }) {
  return (
    <div className="min-w-[320px] flex flex-col gap-2">
      {songs.map((song) => {
        const isSaved = savedSongs.some(saved => saved.id === song.id);

        return (
          <TrendingCard
            key={song.id}
            track={song}
            onPlay={onPlay}
            saveSong={saveSong}
            isSaved={isSaved}
          />
        );
      })}
    </div>
  );
}

export default TrendingColumn;