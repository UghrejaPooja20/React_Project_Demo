import React from "react";
import { useState } from "react";
import Box from "./box";
import '../App.css';

const Grid =() => {
 const [state , setState] = useState(Array(9).fill(null));
 const [isXTurn , setIsXTurn] = useState(true);

 const checkWinner = () =>
 {
    const winnerLogic =[
        [0, 1, 2],
        [3, 4 ,5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let logic of winnerLogic){
        const[a, b, c] = logic;
        if(state[a] !== null && state[a] === state[b] && state[a] === state[c])
        {
                     return state[a];
        }
        
    }
    if(!state.includes(null)) {
        return "Game Draw";
      } 
    return false;
 
 };

 const isWinner = checkWinner();

 const handleClick = (index) =>{
    if(state[index] !== null) {
        return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "x" : "0" ;
    setState(copyState);
    setIsXTurn(!isXTurn);
}

const restartGame =() =>{
    setState(Array(9).fill(null))
}

return(
    <div className="grid_container">
       {isWinner ? (
            <>The Winner is : {isWinner}  <button style ={{height :'40px', width : "100px", padding :"10px"}} onClick={() => restartGame()}>Play Again</button> </>
         ): (
       <> 
       <h4>player {isXTurn ? "x" : "0"} please move</h4>
       <div className="Grid-row">
            <Box onClick = {() =>handleClick(0)} value = {state[0]}/>
            <Box onClick = {() =>handleClick(1)} value = {state[1]}/>
            <Box onClick = {() =>handleClick(2)} value = {state[2]}/>
        </div>
        <div className="Grid-row">
            <Box onClick = {() =>handleClick(3)} value = {state[3]}/>
            <Box onClick = {() =>handleClick(4)} value = {state[4]}/>
            <Box onClick = {() =>handleClick(5)} value = {state[5]}/>
        </div>
        <div className="Grid-row">
            <Box onClick = {() =>handleClick(6)} value = {state[6]}/>
            <Box onClick = {() =>handleClick(7)} value = {state[7]}/>
            <Box onClick = {() =>handleClick(8)} value = {state[8]}/>
        </div>
        </>)
        }

    </div>
)
}
export default Grid;