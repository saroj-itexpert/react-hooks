import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
    //Type 1 of useEffect Hook:
  //  useEffect(()=>{
      //  console.log("Hello World Haha");
        //fetch courses from backend - get- localhost:3000/api/books yesto get garera data load garda useEffect use huncha
        
   // },[] )         // yo function le arko function ko 1st argument ma magirako huncha , 2nd ma dependency array magchha
//[] = dependency array empty hunu bhannale function bhitra j code cha yo component load huda matrai execute hunchha


//Type 2: of useEffect Hook:
//dependency array is different []
const [number, setNumber] = useState(0);
const [number2, setNumber2] = useState(100);

useEffect(()=>{
    console.log("useEffect is triggered!");
}, [number, number2])    //component/page load huda trigger hune nai vayo + number vanne state ma change huda ni trigger huncha

//Type 3 of useEffect
useEffect(()=>{
    console.log("Executes everywhere");
    
})// there are no dependency array [] which causes to be executed whenever it's possible, page load, button clicks every actions.

function increaseNumber(){
    setNumber(number + 1);
}

function increaseNumber2(){
    setNumber2(number2 + 1);
}


  return (
    <div>
        <h1>I am learning useEffect hook today.</h1>
        <h3>{number}</h3>
        <button onClick={increaseNumber}>Change Number 1 +</button>
        <h3>{number2}</h3>
        <button onClick={increaseNumber2}>Change Number 2 +</button>

    </div>

)
}

export default LearnUseEffect