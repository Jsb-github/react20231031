import { Button, useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: "저장 완료",
            description: "게시물이 저장되었습니다.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          })
        }
      >
        토스트 뛰우기
      </Button>

      <Button
        onClick={() =>
          toast({
            title: "저장 실패",
            description: "게시물이 저장되지 않아습니다..",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          })
        }
      >
        토스트 뛰우기
      </Button>
    </>
  );
}

export default App;
