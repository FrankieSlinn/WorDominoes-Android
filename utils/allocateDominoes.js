import { useEffect } from "react";
import { dominoes } from "./dominoes.js";
let dominoesCopy;


let dominoesUsed = [];

// Generate a Random Number within the range of available dominoes
function randomNumberDom() {
  return Math.floor(Math.random() * dominoesCopy.length);
}

// ✅ Custom Hook to allocate dominoes
function allocateDominoes(dominoesInHand, setDominoesInHand, gameStart) {
  let copyDominoesInHand = [...dominoesInHand];
  resetDominoesNewGame(gameStart);
  console.log("allocateDominoes running");
  console.log("gameStart in allocateDominoes?", gameStart);
  allocateDominoesToHand(copyDominoesInHand, dominoesCopy, setDominoesInHand);

  // console.log("FIRST PART OF DOMINO ALLOCATION RUNNING")
console.log("DOMINOESiNHAND", dominoesInHand)

  
  console.log("UPDATED DOMINOES IN HAND IN ALLOCATE DOMINOESS", dominoesInHand);
  console.log("UPDATED DOMINOES USED", dominoesUsed);
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

function allocateDominoesToHand(copyDominoesInHand, dominoesCopy, setDominoesInHand) {
  if (copyDominoesInHand) {
    console.log("LENGTH OF DOMINOESINHAND", copyDominoesInHand.length);
    if (copyDominoesInHand.length < 4) {
      console.log("ALLOCATING DOMINOES...");
   

      while (copyDominoesInHand.length < 4 && dominoesCopy.length > 0) {
        console.log("dominoes in allocate to hand", dominoes)
        console.log("copy dominoes in allocate to hand", dominoesCopy)
        const randDomino = dominoesCopy[randomNumberDom()];
        
        console.log("radDomino", randDomino)

        copyDominoesInHand.push(randDomino);
        setDominoesInHand(copyDominoesInHand);
        console.log("dominoesInHand in allocatedominoesToHand", copyDominoesInHand)

        // Remove the domino from available ones
        console.log("DOMINOES.LENGTH before splice", dominoesCopy.length);
        dominoesCopy.splice(dominoesCopy.indexOf(randDomino), 1);
        console.log("DOMINOES.LENGTH after splice", dominoesCopy.length);
        dominoesUsed.push(randDomino);
      }
    }
  }
}

export { allocateDominoes };
