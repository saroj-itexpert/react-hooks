import React, { useState } from 'react'

const Home = () => {

    const [pi, setPi] = useState(3.14); 

    let [age, setAge] = useState(32);

    function increaseAge(){
        setAge(age + 1);
        return age;
    }   

    function decreaseAge(){
        setAge(age - 1);
        return age;
    }

  return (
    <div>
        <h1>{}</h1>
        <button>+</button>
        <button>-</button>
    </div>
  )
}

export default Home