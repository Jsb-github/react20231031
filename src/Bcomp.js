import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { MessageContext } from "./App";
export function Bcomp() {
  //3. context 사용하기 : useContext
  // const value = useContext(MessageContext);
  const { message } = useContext(MessageContext);
  return <Text>{message}</Text>;
}
