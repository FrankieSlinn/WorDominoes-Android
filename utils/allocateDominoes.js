import { dominoes } from "./dominoes.js";

const dominoHand = [];
const dominoesUsed = [];

// Generate a Random Number within the range of the dominoes available
function randomNumberDom() {
  return Math.abs(Math.floor(Math.random() * (dominoes.length - 1)));
}

// Allocate dominoes
function allocateDominoes() {
  for (let i = 0; i < 4; i++) {
    const randDomino = dominoes[randomNumberDom()];
    dominoHand.push(randDomino);
    dominoes.splice(dominoes.indexOf(randDomino), 1);
    dominoesUsed.push(randDomino);
  }
}

// Export getter functions for dominoes
export function getDominoHand() {
  return dominoHand;
}

export { dominoes, allocateDominoes, dominoesUsed};
