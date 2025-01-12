import React, { useState } from "react";

const VolumeSlider = () => {
  const [volume, setVolume] = useState(20);

  return (
    <div className="flex items-center cursor-pointer">
      {/* Icon */}
      <div
        className="mr-[var(--icon-margin)] text-[var(--icon-color)] w-[var(--icon-size)] h-[var(--icon-size)] flex justify-center items-center"
        style={{ color: "rgb(82, 82, 82)", fontSize: "25px" }}
      >
        🔊
      </div>
      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        className="w-full h-[var(--slider-height)] bg-[var(--slider-bg)] rounded-[var(--slider-border-radius)] overflow-hidden transition-all duration-100 hover:h-[calc(var(--slider-height)*2)]"
        style={{
          "--slider-width": "100%",
          "--slider-height": "6px",
          "--slider-bg": "rgb(82, 82, 82)",
          "--slider-border-radius": "999px",
          "--level-color": "#fff",
          "--icon-margin": "15px",
          "--icon-color": "rgb(82, 82, 82)",
          "--icon-size": "25px",
          "--level-transition-duration": "0.1s"
        }}
      />
    </div>
  );
};

export default VolumeSlider;
