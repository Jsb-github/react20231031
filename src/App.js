import age, { city } from "./component/MyElem";
import Box, { country, person } from "./component/MyBox";

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{age}</h1>
      <Box />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
