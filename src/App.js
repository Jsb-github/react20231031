import React from "react";
import { Box, Image, Img } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt="그림1" />
      </Box>

      <Box>
        <Image boxSize="100px" src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image boxSize="200px" src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image
          borderRadius="full"
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
        ></Image>
      </Box>
      <Box>
        <Image
          src="https://bit.ly/dan-abramo"
          fallbackSrc="https://via.placeholder.com/150"
        ></Image>
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
}

export default App;
