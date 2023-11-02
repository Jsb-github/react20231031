import {
  Box,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          {/*Table>Thead>Tr>Th*4^^^Tbody>Tr*5>Td*4>lorem1*/}
          <Table>
            <Thead>
              <Tr>
                <Th>Lorem ipsum dolor.</Th>
                <Th>Doloremque, illum, quidem!</Th>
                <Th>Fugiat, soluta, velit.</Th>
                <Th>Dicta, vero, voluptate!</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Quae.</Td>
                <Td>Sequi!</Td>
                <Td>Iusto?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Repellendus?</Td>
                <Td>Molestias!</Td>
                <Td>Fuga.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Sequi!</Td>
                <Td>Eum?</Td>
                <Td>Delectus?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Quidem!</Td>
                <Td>Officiis?</Td>
                <Td>Aliquam.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Rem!</Td>
                <Td>Eius!</Td>
                <Td>Ipsa?</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/*Box>Table[variant=striped]>Thead>Tr>Th*4>lorem1^^^Tbody>Tr**/}
        <Box>
          <Table variant="striped" colorScheme="red" size="lg">
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Culpa.</Th>
                <Th>Quam.</Th>
                <Th isNumeric>Hic.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Molestias.</Td>
                <Td>Animi?</Td>
                <Td isNumeric>Laudantium.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Molestias.</Td>
                <Td>Animi?</Td>
                <Td isNumeric>Laudantium.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Molestias.</Td>
                <Td>Animi?</Td>
                <Td isNumeric>Laudantium.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Molestias.</Td>
                <Td>Animi?</Td>
                <Td isNumeric>Laudantium.</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
