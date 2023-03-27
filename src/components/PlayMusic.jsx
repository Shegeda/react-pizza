import React, { useState } from "react";

import play from "../assets/play.svg";
import pause from "../assets/pause.svg";

export const PlayMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <div onClick={handleClick}>
        {isPlaying ? (
          <img width="38" src={pause} alt="Pause" />
        ) : (
          <img width="38" src={play} alt="Play" />
        )}
      </div>
      <audio className="audio-element">
        <source src="https://mp3fate.net/upload/KTagtNNF67I.mp3" />
        {/* <source src="https://dodo.dev/music.mp3" /> */}
      </audio>
    </div>
  );
};

export default PlayMusic;
