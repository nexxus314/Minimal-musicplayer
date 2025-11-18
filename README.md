
## **🎵 Minimal — A Clean & Simple React Music Player**

Minimal is a lightweight, modern music player built using **React + Tailwind CSS**.
It supports searching tracks using the **Deezer API**, displays a clean “Now Playing” screen, provides basic playback controls, and includes an expandable **Song List** view.

This project focuses on learning React fundamentals, audio control handling, state management, UI responsiveness, and API integration — all while keeping the design minimal.

---

## **✨ Features**

### 🎧 **Now Playing Screen**

* Displays song title, artist, and album art
* Play / Pause / Next / Previous controls
* Smoothly updating seek bar
* Auto-play the selected song
* Auto-play next song when the current preview ends

### 🔍 **Search Handling**

* Search bar in the header
* Fetches tracks from the **Deezer Search API**
* Clicking the search icon opens the **Song List view**

### 📃 **Song List View**

* Displays all search results
* Clicking a song updates the current track
* Automatically switches back to the Now Playing UI
* Fully dynamic — no hardcoded data

### 📱 **Responsive UI**

* Custom mobile header with icon logo
* Clean layout for mobile, tablet, and desktop
* Fluid album art scaling

---

## **🧩 Tech Stack**

* **React (Vite)**
* **Tailwind CSS v4**
* **React Icons**
* **Deezer API** (via proxy due to CORS restrictions)

---

## **⚙️ Installation & Setup**

Clone the repository:

```bash
git clone https://github.com/nexxus314/Minimal-musicplayer.git
cd Minimal-musicplayer
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

> ⚠️ **Deezer API requires a CORS proxy.**
> This project currently uses a public temporary proxy.
> For stable usage, host your own proxy server or switch to a different backend.

---

## **📡 API Information**

The project currently uses:

```
https://api.deezer.com/search?q={query}
```

Due to CORS limitations, requests are routed through:

```
https://cors-anywhere.herokuapp.com/
```

This proxy is strictly for development and will rate-limit requests (429 errors).
Future versions will replace it with a self-hosted or alternative backend.

---

## **🚀 Future Improvements**

* Replace Deezer with a stable backend
* Add a custom local proxy server
* Add playlists
* Add favorites / saved songs
* Add animations using Framer Motion
* Add a mini-player footer
* Add dark mode
* Add waveform visualizer
* Add offline caching

---

## **📄 License**

This project is open-source under the **MIT License**.

---

## **👤 Author**

**Nexxus (Adhithyan)**
Minimalist React Developer
Built with love & frustration over CORS.

