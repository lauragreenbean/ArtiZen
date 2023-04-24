import React from 'react'

class VideoPlayer extends React.Component {
  render() {
    return (
  <iframe
   
    src="https://www.youtube.com/embed/MVPTGNGiI-4"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   
  />
    );

}
}
export default VideoPlayer;