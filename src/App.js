import { Box, FormControl, Select } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box w="480px">
        <FormControl>
          <Select placeholder="선택하세요." multiple h="120px">
            <option value="value1">Lorem.</option>
            <option value="value2">Vitae?</option>
            <option value="value3">Velit.</option>
            <option value="value4">Deleniti.</option>
            <option value="value5">Adipisci?</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
