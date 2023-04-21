import React, { useState } from 'react';

const VideoContainer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="video-container" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <div className="video-overlay">
        <button className="play-button" />
      </div>
      <iframe
        className={`video-player ${isHovered ? 'hovered' : ''}`}
        src="https://www.youtube.com/embed/MVPTGNGiI-4"
        title="YouTube video player"
        allowFullScreen
      />
    </div>
  );
};

export default VideoContainer;
