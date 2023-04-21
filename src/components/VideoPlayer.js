import React from 'react'

const VideoPlayer = ({ videoSrcURL, videoTitle }) => (
  <iframe
    width="200"
    height="200"
    src="https://www.youtube.com/embed/MVPTGNGiI-4"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
);

export default VideoPlayer;