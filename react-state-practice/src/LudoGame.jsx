import { useState } from "react"

export default function LudoGame(){
let [moves,setMoves] = useState({blue:0,yellow:0,red:0,green:0});

let updateBlue = ()=>{
    setMoves((prevMoves) =>{
        return {...prevMoves,blue: prevMoves.blue +1 }
    });
};
    return(
        <div>
            <h2>Basic ludo game !</h2>
            <p>Blue : {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>
                +1
            </button>
        </div>
    )
}