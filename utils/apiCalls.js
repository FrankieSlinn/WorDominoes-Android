import { Alert } from "react-native";

const dictionary = ["is", "be", "was", "look"];

function validateWord(validationInformation, letterString, wordLength) {
    console.log("validationINformation", validationInformation)
    console.log("wordLength", wordLength);
    console.log("type of wordLength", typeof wordLength);
    console.log("letterString", letterString)
    console.log("letterstringlength", letterString.length)
    console.log("letterstringlength=wordlength", letterString.length === wordLength);

    if (
      //check valid word(length of response isn't equal to error message length) - valid word
      // or check that word in exception words(is / be) dictionary - valid word
      //check number of letters is correct

  
      (validationInformation != 14 ||
        dictionary.includes(letterString)) 
        &&
      letterString.length === Number(wordLength)
    ) {
        console.log("word is validated in validatewd function")
      //if conditions met the word is valid
      //firstWordCompleteDisplayChanges();
    //   wordNumber = 2;
    }
    else{
        console.log("word could not be validated in validate word")
    }
    // } else if (
    //   //check if first word has the same amount of letters as the side of the domino tile(lettersWord1)
    //   document.querySelector(".wordText1").innerHTML.length !==
    //   Number(lettersWord1)
    // ) {
    //   //scenario letter numbers entered doesn't match domino value
    //   wordLengthIncorrect(1);
    //   wordNumber = 1;
    //   // wordNotCorrect(1);
    // } else {
    //   //The first word isn't valid
    //   invalidWord(1);
    //   wordNumber = 1;
    //   // wordNotCorrect(1);
    // }
  }


async function submitWordToAPI(letterString, wordLength) {
    console.log("wordLength", wordLength)
  console.log("inputString1 in submitWordToAPI:", letterString);

  // ✅ FIXED: Correct URL format
  const url = `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${letterString}`;
  console.log("url:", url);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695",
      "X-RapidAPI-Host": "lingua-robot.p.rapidapi.com",
      "Accept": "application/json", // ✅ Correct header
    },
  };

  console.log("headers:", options.headers); // ✅ FIXED: Correct logging

  try {
    const response = await fetch(url, options);
    
    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response (JSON):", data);

    // ✅ Check if word exists in response
    let validationInformation = data.entries && data.entries.length > 0;

    // Call validation function (uncomment if needed)
    validateWord(validationInformation, letterString, wordLength);
  } catch (error) {
    console.error("API Error:", error);
    Alert.alert("Error", `Failed to validate the word: ${error.message}`);
  }
}




  
export { submitWordToAPI };

// const data = null;
// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// //use api response to check word
// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     var parser = new DOMParser();
//     doc = parser.parseFromString(this.responseText, "text/xml");
//     //length to determine if error message
//     let validationInformation = this.responseText.length;
//     //validate word
//     validateWord(validationInformation);
//   }
// });

// //after submit button clicked api get request initiated for word validation
// function submitWordToAPI(inputString1) {
//     console.log("inputstring1", inputString1)
//     //Run validation API after first word submit button clicked
//     xhr.open(
//       "GET",
//       `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${
//         inputString1.toLowerCase()
//       }`
//     );
//     xhr.setRequestHeader(
//       "X-RapidAPI-Key",
//       "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695"
//     );
//     xhr.setRequestHeader("X-RapidAPI-Host", "lingua-robot.p.rapidapi.com");

//     xhr.send(data);
//   };
//   export {submitWordToAPI};
