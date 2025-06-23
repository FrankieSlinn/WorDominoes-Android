import { useEffect } from "react";
import { dominoes } from "./dominoes.js";
let dominoesCopy;


let dominoesUsed = [];
// Generate a Random Number within the range of available dominoes
function randomNumberDom() {
  return Math.floor(Math.random() * dominoesCopy.length);
}

// ✅ Custom Hook to allocate dominoes
function allocateDominoes(dominoesInHand, setDominoesInHand, turnStart, gameStart, dominoesUsed,setDominoesUsed) {
  console.log("function to allocate dominoes running")
  console.log("turnStart", turnStart)
 
if(turnStart===true){


   let dominoesInHandCopy =dominoesInHand.map(obj => ({ ...obj }));
  resetDominoesNewGame(gameStart);
  console.log("allocateDominoes running");
  console.log("gameStart in allocateDominoes?", gameStart);
  allocateDominoesToHand(dominoesInHandCopy, dominoesCopy, setDominoesInHand, dominoesUsed, setDominoesUsed);

console.log("DOMINOESiNHAND", dominoesInHand)

  
  console.log("UPDATED DOMINOES IN HAND IN ALLOCATE DOMINOESS", dominoesInHand);
  console.log("UPDATED DOMINOES USED", dominoesUsed);
}


    }

function resetDominoesNewGame(gameStart) {
  if (gameStart) {
    console.log("GAME START ACTIVE");
    dominoesCopy =dominoes.map(obj => ({ ...obj }));
    console.log("dominoes", dominoes)
    console.log("dominoesCopy", dominoesCopy)
    dominoesUsed = [];
    console.log("dominoesUsed in gameStart", dominoesUsed);
  }
}

function allocateDominoesToHand(dominoesInHandCopy, dominoesCopy, setDominoesInHand, dominoesUsed, setDominoesUsed) {
  if (dominoesInHandCopy) {
    console.log("LENGTH OF DOMINOESINHAND", dominoesInHandCopy.length);
   while (dominoesInHandCopy.length < 4) {
      console.log("ALLOCATING DOMINOES...");
   

      while (dominoesInHandCopy.length < 4 && dominoesCopy.length > 0) {
        console.log("dominoesUsed in allocation", dominoesUsed)
        console.log("dominoes in allocate to hand", dominoes)
        console.log("copy dominoes in allocate to hand", dominoesCopy)
        const randDomino = dominoesCopy[randomNumberDom()];
        
        console.log("radDomino", randDomino)
if(dominoesUsed){
        if (!dominoesUsed.includes(randDomino)){dominoesInHandCopy.push(randDomino);}
        setDominoesInHand(dominoesInHandCopy);
        console.log("dominoesInHand in allocatedominoesToHand", dominoesInHandCopy)

        // Remove the domino from available ones

        dominoesCopy.splice(dominoesCopy.indexOf(randDomino), 1);
        let copyDominoesUsed = dominoesUsed
        copyDominoesUsed.push(randDomino);
        setDominoesUsed(copyDominoesUsed)}
      }
  }
}
}

export { allocateDominoes };
