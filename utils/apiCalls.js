import { Alert } from "react-native";

//To ensure all words are included
const dictionary = ["is", "be", "was", "look", "dose", "door", "touch"];



function validateWord(validationInformation, letterString, wordLength, wordNumber, setWord1Success, setWord2Success, setTilePlaced, setValidationError) {
  // console.log("validationINformation", validationInformation);
  // console.log("wordNumber, wordNumber")

  // console.log("letterstringlength", letterString.length);


  if (
    //check valid word(length of response isn't equal to error message length) - valid word
    // or check that word in exception words(is / be) dictionary - valid word
    //check number of letters is correct

    (validationInformation != 14 || dictionary.includes(letterString)) &&
    letterString.length === Number(wordLength)
  ) {
    console.log("word is validated in validatewd function");
    if(wordNumber===1)
    {setWord1Success(true);
      //to ensure display domino doesn't disappear
      setTilePlaced(false);
   
    console.log("word1Successful in validate word function")}
    else if(wordNumber===2)
      {setWord2Success(true);
        setTilePlaced(false);
      }
    
  } else {
    console.log("word could not be validated in validate word");
    setValidationError(true)
  

  }
}

async function submitWordToAPI(letterString, wordLength, wordNumber, setWord1Success, setWord2Success, setTilePlaced, setValidationError) {

  console.log("inputString1 in submitWordToAPI:", letterString);

  const url = `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${letterString}`;
  console.log("url:", url);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695",
      "X-RapidAPI-Host": "lingua-robot.p.rapidapi.com",
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // ✅ Get response as text
    const responseText = await response.text();
    console.log("Raw API Response:", responseText);

    // ✅ Get length of response text
    let validationInformation = responseText.length;
    console.log(
      "Validation Information (Response Length):",
      validationInformation
    );

    // ✅ Parse response into JSON
    const data = JSON.parse(responseText);
    console.log("API Response (JSON):", data);

    // Call validation function
    validateWord(validationInformation, letterString, wordLength, wordNumber, setWord1Success, setWord2Success, setTilePlaced, setValidationError);
  } catch (error) {
    console.error("API Error:", error);
   
  }
}

export { submitWordToAPI };
