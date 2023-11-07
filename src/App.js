import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function Acomp() {
  // const value = useContext(MessageContext);
  const { setMessage } = useContext(MessageContext);
  return (
    <Button onClick={() => setMessage("변경된 메시지")}>
      메시지 변경하기!!!
    </Button>
  );
}

function Bcomp() {
  //3. context 사용하기 : useContext
  // const value = useContext(MessageContext);
  const { message } = useContext(MessageContext);
  return <Text>{message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("초기 상태 메세지");

  return (
    <div>
      {/*2 context에 state 넣기 :<MessageContext.prvider value={}>    </MessageContext.prvider> */}
      <MessageContext.Provider value={{ message, setMessage }}>
        <Acomp />
        <Bcomp />
      </MessageContext.Provider>
    </div>
  );
}

//1. context 만들기 : crateContext(null)
const MessageContext = createContext(null);
export default App;
