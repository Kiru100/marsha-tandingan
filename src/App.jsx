import ReactPlayer from "react-player";
import video from "./assets/marsha-tandingan.mp4";
import { Flex } from "@chakra-ui/react";

function App() {

  return (
    <Flex height="100vh">
  
      <ReactPlayer url={video} controls="true" width="100%"/>
    </Flex>
  )
}

export default App
