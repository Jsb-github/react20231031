import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  // const breakpoints = {
  //   base: "0em", // 0px
  //   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  //   md: "48em", // ~768px
  //   lg: "62em", // ~992px
  //   xl: "80em", // ~1280px
  //   "2xl": "96em", // ~1536px
  // };
  return (
    <>
      <SimpleGrid
        spacing={"10px"}
        columns={{ base: 2, md: 3, lg: 4, "2xl": 6 }}
      >
        {/*Box[bg="blue.300"]*30>lorem1*/}
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Distinctio!</Box>
        <Box bg="blue.300">Quae.</Box>
        <Box bg="blue.300">Reprehenderit.</Box>
        <Box bg="blue.300">Harum!</Box>
        <Box bg="blue.300">Fugiat!</Box>
        <Box bg="blue.300">Quo.</Box>
        <Box bg="blue.300">Repellendus.</Box>
        <Box bg="blue.300">Dicta.</Box>
        <Box bg="blue.300">Nemo.</Box>
        <Box bg="blue.300">Temporibus.</Box>
        <Box bg="blue.300">Obcaecati?</Box>
        <Box bg="blue.300">Veniam.</Box>
        <Box bg="blue.300">Cupiditate.</Box>
        <Box bg="blue.300">Quibusdam.</Box>
        <Box bg="blue.300">Totam.</Box>
        <Box bg="blue.300">Nihil.</Box>
        <Box bg="blue.300">Sint.</Box>
        <Box bg="blue.300">Ea!</Box>
        <Box bg="blue.300">Deleniti?</Box>
        <Box bg="blue.300">Vel.</Box>
        <Box bg="blue.300">Nesciunt.</Box>
        <Box bg="blue.300">Ipsum.</Box>
        <Box bg="blue.300">Enim.</Box>
        <Box bg="blue.300">Reiciendis?</Box>
        <Box bg="blue.300">Facere?</Box>
        <Box bg="blue.300">Enim!</Box>
        <Box bg="blue.300">Labore.</Box>
        <Box bg="blue.300">Dolore?</Box>
        <Box bg="blue.300">Doloremque!</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
