interface Song {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  album: string;
  audio: string;
  duration: number;
}

interface DownloadUrl {
  quality: string;
  url: string;
}

interface Image {
  url: string;
}

interface Artist {
  name: string;
}

interface ApiSong {
  id: string;
  name: string;
  downloadUrl?: DownloadUrl[];
  image?: Image[];
  artists?: {
    primary?: Artist[];
  };
  album: {
    name: string;
  };
  duration?: number;
}

interface ApiResponse {
  data?: {
    results: ApiSong[];
  };
}

export async function fetchSongs(query = "the weeknd"): Promise<Song[]> {
  try {
    const baseUrl =
      "https://jiosaavn-c451wwyru-sumit-kolhes-projects-94a4846a.vercel.app";

    const url = `${baseUrl}/api/search/songs?query=${encodeURIComponent(
      query,
    )}&limit=40`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.data || !data.data.results) return [];

    const formatted = data.data.results.map((song: ApiSong) => {
      const bestAudio =
        song.downloadUrl?.find((x) => x.quality === "320kbps") ||
        song.downloadUrl?.find((x) => x.quality === "160kbps") ||
        song.downloadUrl?.[0];

      const highResImage =
        song.image?.[song.image.length - 1]?.url || song.image?.[0]?.url || "";
      const artistNames =
        song.artists?.primary?.map((a) => a.name).join(", ") ||
        "Unknown Artist";
      return {
        id: song.id,
        title: song.name || "Unknown Title",
        artist: artistNames || "Unknown Artist",
        thumbnail: highResImage,
        album: song.album.name,
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
