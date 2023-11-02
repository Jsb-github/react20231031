import { Button } from "@chakra-ui/react";
import { EmailIcon, NotAllowedIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Maiores?</Button>
      <Button colorScheme="yellow">Iste?</Button>
      <Button colorScheme="orange">Saepe!</Button>
      <Button size={"sm"} colorScheme="teal">
        Quasi.
      </Button>
      <Button colorScheme="messenger" size={"lg"}>
        Neque!
      </Button>
      <Button colorScheme="telegram" variant="outline">
        Voluptate!
      </Button>
      <Button colorScheme="orange" variant="ghost">
        Alias?
      </Button>
      <Button variant="link">Nulla.</Button>
      <Button leftIcon={<EmailIcon />}>Ratione.</Button>
      <Button rightIcon={<NotAllowedIcon />}>Ratione.</Button>
      <Button isLoading>Quasi.</Button>
      <Button isLoading loadingText={"전송중"}>
        Ipsam.
      </Button>
      <Button>Molestiae.</Button>
      <Button>Architecto!</Button>
      <Button>Dolor!</Button>
      <Button>Obcaecati.</Button>
      <Button>Quia.</Button>
      <Button>Molestias!</Button>
      <Button>Maxime.</Button>
      <Button>Repellat.</Button>
      <Button>Provident!</Button>
      <Button>Est!</Button>
      <Button>Quos.</Button>
      <Button>Illum?</Button>
      <Button>Delectus.</Button>
      <Button>Similique.</Button>
      <Button>Beatae!</Button>
      <Button>Iste.</Button>
      <Button>Nisi.</Button>
    </>
  );
}

export default App;
