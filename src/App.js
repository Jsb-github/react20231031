// export된 컴포넌트(변수 함수 객체)를 import 해서 사용

import { MyBox, MyElem, MyContainer } from "./component/MyBox";
import { name, address, person } from "./component/MyBox";

function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

export default App;
