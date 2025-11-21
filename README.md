⸻

🎵 Minimal — A Clean React Music Player (JioSaavn API)

A beautifully simple, lightweight music player built using React + Tailwind, powered by the unofficial JioSaavn API, streaming high-quality MP4/AAC audio directly — with search, play/pause, next/previous controls, and a mobile-friendly UI.

⸻

🌟 Features

✔ Search Songs (English + Hindi + all regional languages supported)
✔ High-quality streaming (automatically selects 320kbps or next best)
✔ Song List View + Player View
✔ Minimal clean UI (header, hero section, footer)
✔ Responsive design (mobile + desktop)
✔ Album cover auto-fetch (highest resolution available)
✔ State management using React Hooks
✔ No backend needed – purely frontend powered

⸻

🛠 Tech Stack
	•	React.js (Vite)
	•	Tailwind CSS
	•	React Icons
	•	JioSaavn Unofficial API
	•	Native HTML5 Audio

⸻

⚡ How It Works
	1.	User enters a search query →
	2.	App calls:

https://jiosaavn-c451wwyru-sumit-kolhes-projects-94a4846a.vercel.app/api/search/songs?query=

	3.	Response is parsed →
	4.	Best audio URL is selected (320kbps → 160kbps → fallback)
	5.	Song list loads →
	6.	Player UI displays the current song, album art & controls

⸻

📸 Screenshots### 
🎧 **Now Playing Screen**
<img width="1909" height="906" alt="Screenshot 2025-11-19 171751" src="https://github.com/user-attachments/assets/acd82012-60b8-4987-9189-5ff279b98971" />
<img width="265" height="593" alt="Screenshot 2025-11-19 171817" src="https://github.com/user-attachments/assets/5581cbb5-4992-4d84-99c8-2e6fbed3e860" />
<img width="270" height="593" alt="Screenshot 2025-11-19 171829" src="https://github.com/user-attachments/assets/28107ebd-d209-4026-8807-907d0ef9271a" />
<img width="1906" height="908" alt="Screenshot 2025-11-19 171733" src="https://github.com/user-attachments/assets/1b7d7d5e-aabe-4cea-b391-fc3aff1b2497" />

🎧 Home / Player UI

📜 Song List

(Create a folder /screenshots and drop your images there — use the same names.)

⸻

🚀 Run Locally

1. Clone Repo

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install Dependencies

npm install

3. Start Dev Server

npm run dev

4. Build for Production

npm run build
npm run preview


⸻

🔍 API Used

This project uses the open public proxy of JioSaavn:

https://jiosaavn-c451wwyru-sumit-kolhes-projects-94a4846a.vercel.app/api

Endpoints used:

Endpoint	Purpose
/search/songs?query=	Get songs by search keyword
Fetches image, downloadUrl, duration, artists	For player UI


⸻

📁 Project Structure

src/
│
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── SongList.jsx
│   ├── Footer.jsx
│
├── App.jsx
└── main.jsx


⸻

🎮 Controls
	•	Play / Pause
	•	Next Song
	•	Previous Song
	•	Tap on a song to play
	•	Switch between List view ↔ Player view

⸻

🧩 Future Improvements

🔹 Lyrics Support (JioSaavn has a lyrics endpoint)
🔹 Playlist support
🔹 UI themes (dark/light)
🔹 Save recently played songs
🔹 Offline local playlists

⸻

🏆 Why This Project Is Good for a Resume
	•	Uses real-time API integration
	•	Handles media streaming
	•	Clean React component architecture
	•	Uses hooks & state management
	•	Good demonstration of frontend problem-solving
	•	Works on mobile, nice for interviewer demo

⸻

🙌 Credits
	•	JioSaavn Unofficial API used for educational purposes
	•	Built with ❤ by Adhithyan (nexxus314)

