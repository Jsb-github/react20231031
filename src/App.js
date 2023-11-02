import { Box, Center, Circle, Square } from "@chakra-ui/react";
import { DeleteIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"red"} h={"200px"}>
        <Square bg={"gray"} w={"100px"} h={"100px"}>
          <DeleteIcon />
        </Square>
      </Center>

      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"blue.200"} w={"100px"} h={"100px"}>
          <PhoneIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
