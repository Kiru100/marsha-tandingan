import ReactPlayer from "react-player";
import video from "./assets/marsha-tandingan.mp4";

function App() {

  return (
    <>
  
      <ReactPlayer url={video} controls="true" />
    </>
  )
}

export default App
