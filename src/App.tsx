import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

const TogglePlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <button onClick={async () => {
      isPlaying
        ? await invoke("pause_media", {})
        : await invoke("play_media", {})
    }}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  )
}

function App () {
  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <TogglePlaying />
    </div>
  )
}

export default App
