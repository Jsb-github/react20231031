import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { MessageContext } from "./App";
export function Acomp() {
  // const value = useContext(MessageContext);
  const { setMessage } = useContext(MessageContext);
  return (
    <Button onClick={() => setMessage("변경된 메시지")}>
      메시지 변경하기!!!
    </Button>
  );
}
