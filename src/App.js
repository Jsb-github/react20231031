import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={"5"}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Minus?</Box>
        <Box bg={"gray"}>Corporis.</Box>
        <Box bg={"blue"}>Sit!</Box>
        <Box bg={"green"}>Doloremque!</Box>
      </Flex>
    </>
  );
}

export default App;
