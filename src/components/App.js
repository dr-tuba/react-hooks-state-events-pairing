import video from "../data/video.js";
import { useState } from 'react';

//Component Imports
import VideoInfo from "./VideoInfo.js";
import VideoComments from "./VideoComments.js";

function App() {
  const [show, setShow] = useState(true)
    
  function toggleComments() {
    setShow(!show)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <VideoInfo 
        title = {video.title}
        views = {video.views}
        createdAt = {video.createdAt}
        toggleComments = {toggleComments}
        show = {show}
      />
      <hr />
      <VideoComments 
        comments = {video.comments}
        show = {show}
       /> 
    </div>
  );
}

export default App;
