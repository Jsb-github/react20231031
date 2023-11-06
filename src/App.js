import { useState } from "react";
import { Input, Text } from "@chakra-ui/react";
import { useImmer } from "use-immer";

function App() {
  const [person, setPerson] = useState({ name: "son", city: "seoul" });
  const [user, updateUser] = useImmer({ name: "lee", city: "jeju" });
  function handleNameChange(e) {
    const nextPerons = { ...person };
    nextPerons.name = e.target.value;
    setPerson(nextPerons);
  }

  function hanldeUSerNameChange(e) {
    updateUser((draft) => {
      draft.name = e.target.value;
    });
  }

  function hanldeUSerCityChange(e) {
    updateUser((draft) => {
      draft.city = e.target.value;
    });
  }

  function handleCityChange(e) {
    const nextPerson = { ...person };
    nextPerson.city = e.target.value;
    setPerson(nextPerson);
  }

  return (
    <div>
      <Input value={person.name} onChange={handleNameChange} />
      <Input value={person.city} onChange={handleCityChange} />
      <Text>
        {person.name}은 {person.city}에 삽니다
      </Text>

      <hr />

      <Input value={user.name} onChange={hanldeUSerNameChange} />
      <Input value={user.city} onChange={hanldeUSerCityChange} />
      <Text>
        {user.name}은 {user.city}에 삽니다
      </Text>
    </div>
  );
}

export default App;
