import { useState } from "react";
function Home() {
  const [name, setName] = useState("Somya");
  const [age, setAge] = useState(22);
  function changeNameAndAge() {
    console.log("Button Pressed");
    setName("Shekhar");
    setAge(23);
  }
  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>
        Hello all,{name} is {age} years old.
      </p>
      <button onClick={changeNameAndAge}>Press Me!</button>
    </div>
  );
}

export default Home;
