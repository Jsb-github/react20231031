import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "아메리카노", "카푸치노"];
  const arr4 = [
    { id: 0, name: "라뗴" },
    { id: 1, name: "아메리카노" },
    { id: 2, name: "카푸치노" },
  ];

  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));

  return (
    <div>
      <Box mb={3}>
        <List>
          {listItems}
          {/* 손흥민 이강인 김민재 */}
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {arr2.map((i, index) => (
            <ListItem key={index}>{i}</ListItem>
          ))}
          ;
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {arr3.map((e, i) => (
            <ListItem key={i}>{e}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
