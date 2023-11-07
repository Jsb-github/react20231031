import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  console.log("useEffect 밖의 로그", number);
  // 컴포넌트 외부 시스템과 작업할 떄
  // 주로 ajax로 데이터를 가져올 때
  useEffect(() => {
    console.log("이펙트의 첫번째 파라미터 함수 실행됨", number);
  }, []);
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <p>{number}</p>
    </div>
  );
}

export default App;
