import React, { useState } from "react";
import Squre from "./Squre";
import Winner from "./Winner";

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
 let won = Winner(square)
 console.log(won);
  if(won){
    alert("Winner is "+ won)
}
  const handleClick = (i)=>{
   
    if(square[i] || won){
        return
    }
    const nextSquare = square.slice();
    if(turn){
            nextSquare[i] = "X";
    }
    else{
        nextSquare[i] = "O";
    }
    setSquare(nextSquare);
    setTurn(!turn);
}

  return (
    <div>
      <div>
        <Squre value={square[0]} handleClick= {() => handleClick(0)}></Squre>
        <Squre value={square[1]} handleClick= {() => handleClick(1)}></Squre>
        <Squre value={square[2]} handleClick= {() => handleClick(2)}></Squre>
      </div>
      <div>
        <Squre value={square[3]} handleClick= {() => handleClick(3)}></Squre>
        <Squre value={square[4]} handleClick= {() => handleClick(4)}></Squre>
        <Squre value={square[5]} handleClick= {() => handleClick(5)}></Squre>
      </div>
      <div>
        <Squre value={square[6]} handleClick= {() => handleClick(6)}></Squre>
        <Squre value={square[7]} handleClick= {() => handleClick(7)}></Squre>
        <Squre value={square[8]} handleClick= {() => handleClick(8)}></Squre>
      </div>
    </div>
  );
}
