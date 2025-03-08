import { useEffect } from "react";
import { dominoes } from "./dominoes.js";

const dominoesUsed = [];

// Generate a Random Number within the range of available dominoes
function randomNumberDom() {
  return Math.floor(Math.random() * dominoes.length);
}

// ✅ Custom Hook to allocate dominoes
function allocateDominoes(dominoesInHand, setDominoesInHand) {

  console.log("FIRST PART OF DOMINO ALLOCATION RUNNING")
  console.log("DOMINOESiNHAND", dominoesInHand)
  console.log("RANDOMNUMBERDOM", randomNumberDom)
if(dominoesInHand){
  console.log("LENGTH OF DOMINOESINHAND", dominoesInHand.length)
    if (dominoesInHand.length < 4) {
      console.log("ALLOCATING DOMINOES...");
      let copyDominoesInHand = [...dominoesInHand];

      while (copyDominoesInHand.length < 4 && dominoes.length > 0) {
        console.log("length of dominoesInHand under 4!!!!!")
        const randDomino = dominoes[randomNumberDom()];
        console.log("RANDOM DOMINO", randDomino)
        copyDominoesInHand.push(randDomino);

        // Remove the domino from available ones
        console.log("DOMINOES.LENGTH before splice", dominoes.length)
        dominoes.splice(dominoes.indexOf(randDomino), 1);
        console.log("DOMINOES.LENGTH after splice", dominoes.length)
        dominoesUsed.push(randDomino);
      }

      setDominoesInHand(copyDominoesInHand);
      console.log("UPDATED DOMINOES IN HAND IN ALLOCATE DOMINOESS", dominoesInHand)
      console.log("UPDATED DOMINOES USED", dominoesUsed)
    }
  }



}

export {allocateDominoes}

