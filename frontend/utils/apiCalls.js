
import {
  storeWord1Success,
  storeWord2Success
} from "./asynchStorageUtils";

// Words that should be accepted
const dictionary = [
  "is",
  "be",
  "was",
  "look",
  "dose",
  "door",
  "touch",
  "kite",
  "our",
  "tow"
];


function validateWord(
  isValid,
  letterString,
  wordLength,
  wordNumber,
  setWord1Success,
  setWord2Success,
  setTilePlaced,
  setValidationError
) {
  const word = letterString.toLowerCase().trim();

  // Word is valid if:
  // 1. WordSoHard says it is playable
  // OR it is in our exception dictionary
  // AND
  // 2. It has the correct number of letters

  const validWord =
    (isValid || dictionary.includes(word)) &&
    word.length === Number(wordLength);

  if (validWord) {

    console.log("Word is valid:", word);

    if (wordNumber === 1) {

      storeWord1Success(true);
      setWord1Success(true);

      // Keep tile/domino displayed correctly
      setTilePlaced(false);

      console.log("Word 1 successful");

    } else if (wordNumber === 2) {

      storeWord2Success(true);
      setWord2Success(true);

      setTilePlaced(false);

      console.log("Word 2 successful");
    }

  } else {

    console.log("Word is not valid:", word);

    setValidationError(true);
  }
}


async function submitWordToAPI(
  letterString,
  wordLength,
  wordNumber,
  setWord1Success,
  setWord2Success,
  setTilePlaced,
  setValidationError
) {

  console.log("Word being checked:", letterString);

  // Clean up the word before sending it
  const word = letterString.toLowerCase().trim();

  const url =
    `https://wordsohard.com/api/v1/define/${encodeURIComponent(word)}`;

  console.log("URL:", url);

  try {

    const response = await fetch(url);

    console.log("Response status:", response.status);

    // Get the response as JSON
    const data = await response.json();

    console.log("WordSoHard response:", data);

    if (!response.ok) {

      throw new Error(
        `API request failed (${response.status})`
      );
    }

    // WordSoHard tells us whether the word
    // is playable in its word-game dictionary.
    const isValid = data.scrabble?.valid === true;

    console.log("Is valid word:", isValid);

    // Validate the word
    validateWord(
      isValid,
      word,
      wordLength,
      wordNumber,
      setWord1Success,
      setWord2Success,
      setTilePlaced,
      setValidationError
    );

  } catch (error) {

    console.error("API Error:", error);

    // API failure is different from an invalid word,
    // but for now we'll show the validation error.
    setValidationError(true);
  }
}

export { submitWordToAPI };
