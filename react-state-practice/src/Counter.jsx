import { useState } from "react";

export default function Counter(){
    const[count, setCount] = useState(0); //initialization

    //console.log("component is render");
    //console.log(` count is ${count}`);

    function incCount(){
        setCount(count + 1); //updates in render stage
        console.log(`inside incCount count val = ${count}`); //first count = 0
    }
    return(
        <div>
            <h2>count = {count}</h2>
            <button onClick={incCount}>Increase count</button>
        </div>
    )
}