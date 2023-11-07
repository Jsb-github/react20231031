import React, { createContext, useState } from "react";
import { Bcomp } from "./Bcomp";
import { Acomp } from "./Acomp";

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
export const MessageContext = createContext(null);
export default App;
