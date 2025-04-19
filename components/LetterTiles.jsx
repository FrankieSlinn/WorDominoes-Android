import { View, Text, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {letters} from "../utils/letters";
import {getLetterHand, storeLetterHand, getSelectedLetters1, storeSelectedLetters1, getSelectedLetters2, storeSelectedLetters2} from "../utils/asynchStorageUtils"
import { s } from "../App.style";


export function LetterTiles({inputString1, setInputString1, inputString2, setInputString2,  wordLength1, wordLength2, turnStart, setTurnStart, 
  selectedLetters1, setSelectedLetters1, selectedLetters2, setSelectedLetters2,
  wordNum, setWordNum, gameStart
}) {
    const [letterHand, setLetterHand] = useState([]);
    const[letterHandAllocated, setLetterHandAllocated] = useState(false)
    const letterHandLength = 15;
    // console.log("letter Tiles element");
    console.log("letterHand in letters", letterHand)
    console.log("SelectedLetterTiles1 in beginning of LetterTiles Component", selectedLetters1)

    useEffect(() => {
     const getSelectedLetterTiles = async()=>{
      const storedLetterTiles1= await getSelectedLetters1();
      const storedLetterTiles2= await getSelectedLetters2();
      setSelectedLetters1(storedLetterTiles1)
      setSelectedLetters2(storedLetterTiles2)



     }
     getSelectedLetterTiles();

},[])



    useEffect(() => {
      console.log("gameStart in LetterTiles", gameStart)
      
      const clearLetterTiles = async () => {
        if(gameStart ===true){
          console.log("gameStart is true? ", gameStart)
          console.log("function to")
     storeSelectedLetters1([]);
      storeSelectedLetters2([]);
      storeLetterHand([]);
        }
      };
    
      clearLetterTiles();
    }, [gameStart]);
    

    useEffect(() => {
      console.log("turnStart in allocate Letters", turnStart)
      const loadOrCreateLetterHand = async () => {
        const storedLetterHand = await getLetterHand();
    //reset letter hand 
        if (turnStart===false) {
          console.log("storedLetterHand", storedLetterHand)
          setLetterHand(storedLetterHand);
          console.log("letterHand when turnStart is false", letterHand)
          // setLetterHandAllocated(true);
        } else if (turnStart ===true) {

          const newLetterHand = [];
          const availableLetters = [...letters];
    
          for (let i = 0; i < letterHandLength; i++) {
            const randomIndex = Math.floor(Math.random() * availableLetters.length);
            newLetterHand.push(availableLetters[randomIndex]);
            availableLetters.splice(randomIndex, 1);
          }
    
          const sortedHand = newLetterHand.sort();
          storeLetterHand(sortedHand)
          setLetterHand(sortedHand);
          console.log("storedLetterHand after first allocated", storedLetterHand)
          
          // setLetterHandAllocated(true);
          setTurnStart(false);
        }
      };
    
      loadOrCreateLetterHand();
    }, []);


      function handlePress(letter, index) {
   
     
    
           let inputString =wordNum===1?inputString = inputString1:inputString = inputString2;
           let wordLength = wordNum===1?wordLength = wordLength1: wordLength = wordLength2;
          //  console.log("inputstring in lettertiles", inputString)
          //  console.log("wordLength in Lettertiles", wordLength)
    
        if (inputString.length < wordLength && !selectedLetters1.includes(index) &&  !selectedLetters2.includes(index)) {
          if(wordNum===1){
          setInputString1((prevInputString1) => [...prevInputString1, letter]);}
          
          else if (wordNum===2){
            setInputString2((prevInputString2) => [...prevInputString2, letter]);}
            console.log("inputString2", inputString2)
          
        } else {
          console.log("Max word length reached, here is the full string:", inputString1);
        }

        const loadOrCreateSelectedLetters= async () => {
          const storedSelectedLetters1= await getSelectedLetters1();
          const storedSelectedLetters2= await getSelectedLetters2();
        
if(wordNum===1){
  let copyStoredSelectedLetters1 = [...storedSelectedLetters1]
  console.log("copyStoredSelectedLetters", copyStoredSelectedLetters1)


        copyStoredSelectedLetters1.push(index);
        console.log("copyStoredSelectedLetters1 AFTER LETTER ADDED", copyStoredSelectedLetters1)
        
        setSelectedLetters1(copyStoredSelectedLetters1)
        storeSelectedLetters1(copyStoredSelectedLetters1)
        console.log("copyStoredSelectedLetters1 after push", selectedLetters1)
        console.log("STORED copyStoredSelectedLetters1 after push", copyStoredSelectedLetters1)
        console.log("sTORED SELECTED LETTERS1", await getSelectedLetters1())
      
      }
        else{
          let copyStoredSelectedLetters2 = [...storedSelectedLetters2]
          console.log("copyStoredSelectedLetters2", copyStoredSelectedLetters2)
          console.log("sTORED SELECTED LETTERS2", await getSelectedLetters2())
          
          copyStoredSelectedLetters2.push(index)
  
          setSelectedLetters2(copyStoredSelectedLetters2)
          storeSelectedLetters2(copyStoredSelectedLetters2)
          console.log("copyStoredSelectedLetters2", copyStoredSelectedLetters2)

        }
     
  
        console.log("selectedletters1 in LetterTiles", selectedLetters1)
        console.log("selectedletters2 in LetterTiles", selectedLetters2)
    
          console.log("Input string 1", [...inputString1, letter]);
          console.log("Updated letterHand after selection:", letterHand);
      }
      loadOrCreateSelectedLetters()


    }
 
      

      
  return (
 
    <View style={s.lettersContainer}>
{letterHand.map((letter, index) => (
    <TouchableOpacity key={index} onPress={() => handlePress(letter, index)}>
  <Text style={[s.letter, selectedLetters1.includes(index)||selectedLetters2.includes(index) ? s.selectedLetter : null]}>{letter}</Text>
  </TouchableOpacity>
))}
</View>

 
  );
}