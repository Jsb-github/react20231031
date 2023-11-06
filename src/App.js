import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  // Hook : use로 시작하는 함수
  // hook은 컴포넌트 상단에 작성해야함
  // 조건문이나, 반복문, 중첩된 함수안에 작성하면 안됨

  if (true) {
    // hook 호출 코드 작성 불가
  }

  for (let i = 0; i < 3; i++) {
    // hook 호출 코드 작성 불가
  }

  function handel() {
    // hook 호출 코드 작성 불가
  }

  return (
    <div>
      <Button></Button>
    </div>
  );
}

export default App;
