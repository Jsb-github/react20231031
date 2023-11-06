import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "아메리카노", "카푸치노"];

  const listItems = arr.map((item) => <ListItem>{item}</ListItem>);

  return (
    <div>
      <Box mb={3}>
        <List>
          <ListItem>{listItems}</ListItem>
          {/* 손흥민 이강인 김민재 */}
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {arr2.map((i) => (
            <ListItem>{i}</ListItem>
          ))}
          ;
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {arr3.map((e) => (
            <ListItem>{e}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
