import React, { useState } from 'react'

const Counter = () => {
  
    const [num, setNum] = useState(0);
    const [car, setCar] = useState({
        name: "Mercedes Benz",
        model: "MB2026",
        price: 129999,
        color: "Black"
    })

    const changeColor = ()=>{
        setCar( (prev) =>{
            return {...prev, color:"Blue"}
        })
        // setCar({color: "Blue"}); if you do this , all other properties would get lost and only blue remains.
    
    }
    function addNum(){
        return setNum(num + 1);
    }

    function subNum(){
        return setNum(num -1 );
    }
  
    return (
    <div>
        <h1>{num}</h1>
        <button onClick={addNum}>+</button>
        <button onClick={subNum}>-</button>
        <p>The details of car:</p>
        <h1>Car is {car.name}</h1>
        <h1>Car is {car.model}</h1>
        <h1>Car is {car.price}</h1>
        <h1>Car is {car.color}</h1>
        <button onClick={changeColor}>Car Details</button>
    </div>
  )
}

export default Counter