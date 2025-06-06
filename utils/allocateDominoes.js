import { useEffect } from "react";
import { dominoes } from "./dominoes.js";
let dominoesCopy=[...dominoes]

let dominoesUsed = [];

// Generate a Random Number within the range of available dominoes
function randomNumberDom() {
  return Math.floor(Math.random() * dominoesCopy.length);
}

// ✅ Custom Hook to allocate dominoes
function allocateDominoes(dominoesInHand, setDominoesInHand, gameStart) {
  console.log("allocateDominoes running")
  console.log("gameStart in allocateDominoes?", gameStart)


  if(gameStart){
    console.log("GAME START ACTIVE")
   dominoesUsed = []
   console.log("dominoesUsed in gameStart", dominoesUsed)

  }

  console.log("FIRST PART OF DOMINO ALLOCATION RUNNING")
  console.log("DOMINOESiNHAND", dominoesInHand)

if(dominoesInHand){
  console.log("LENGTH OF DOMINOESINHAND", dominoesInHand.length)
    if (dominoesInHand.length < 4) {
      console.log("ALLOCATING DOMINOES...");
      let copyDominoesInHand = [...dominoesInHand];

      while (copyDominoesInHand.length < 4 && dominoesCopy.length > 0) {

        const randDomino = dominoesCopy[randomNumberDom()];

        copyDominoesInHand.push(randDomino);

        // Remove the domino from available ones
        console.log("DOMINOES.LENGTH before splice", dominoesCopy.length)
        dominoesCopy.splice(dominoesCopy.indexOf(randDomino), 1);
        console.log("DOMINOES.LENGTH after splice", dominoesCopy.length)
        dominoesUsed.push(randDomino);
      }

      setDominoesInHand(copyDominoesInHand);
      console.log("UPDATED DOMINOES IN HAND IN ALLOCATE DOMINOESS", dominoesInHand)
      console.log("UPDATED DOMINOES USED", dominoesUsed)
    }
  }



}

export {allocateDominoes}

