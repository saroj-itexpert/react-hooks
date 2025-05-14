import React, { useEffect, useState } from "react";

const Home = () => {
  const [pi, setPi] = useState(3.14);

  let [age, setAge] = useState(32);

  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((serverkodata) => serverkodata.json())
      .then((actualjoke) =>
        setJoke(`${actualjoke.setup} : ${actualjoke.punchline}`)
      );
  }, []);

  function increaseAge() {
    setAge(age + 1);
    return age;
  }

  function decreaseAge() {
    setAge(age - 1);
    return age;
  }

  return (
    <div>
      <h1>{joke}</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default Home;
