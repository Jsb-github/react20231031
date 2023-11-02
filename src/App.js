import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { EmailIcon, NotAllowedIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div>
      <Center>
        <Box w="480px">
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
            <FormHelperText>띄어쓰기 없이 입력하세요</FormHelperText>
          </FormControl>
        </Box>
      </Center>
      <Center mt="30px">
        <Box w="480px">
          <FormControl>
            <FormLabel>하나만 선택하세요</FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">lorem.</Radio>
                <Radio value="value2">Lorem.</Radio>
                <Radio value="value3">Id.</Radio>
                <Radio value="value4">Aliquid.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>

      <Center>
        <Box w="480px">
          <FormControl>
            <CheckboxGroup>
              <Flex>
                <Checkbox colorScheme="blue">lorem</Checkbox>
                <Checkbox colorScheme="facebook">Lorem ipsum.</Checkbox>
                <Checkbox colorScheme="teal">Ducimus, quo!</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;
