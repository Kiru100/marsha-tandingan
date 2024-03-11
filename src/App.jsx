import ReactPlayer from "react-player";
import video from "./assets/marsha-tandingan.mp4";
import { Flex } from "@chakra-ui/react";
import "./app.css";

function App() {

  return (
        <ReactPlayer url={video} controls={true} height="100vh" width="100%"  />
  )
}

export default App
