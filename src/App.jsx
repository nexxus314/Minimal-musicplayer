import { Routes , Route } from "react-router-dom";
import PlayUi from "./components/PlayUi";
import ExplorePage from "./page/ExplorePage";
import SavedSong from "./page/SavedSong";


import React from 'react'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PlayUi />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/saved" element={<SavedSong />} />
    </Routes>
  )
}

export default App