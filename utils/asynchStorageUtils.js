import AsyncStorage from '@react-native-async-storage/async-storage'; 
//for All Games

export const storeGamesArray = async (gamesArray) => {
    try {
      const jsonValue = JSON.stringify(gamesArray); // Convert array to JSON string
      await AsyncStorage.setItem("gamesArray", jsonValue);
      console.log("gamesArray saved:", gamesArray);
    } catch (error) {
      console.error("Error saving gamesArray:", error);
    }
  };
  

  export const getGamesArray = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("gamesArray");
      return jsonValue != null ? JSON.parse(jsonValue) : []; // Convert JSON to array
    } catch (error) {
      console.error("Error loading gamesArray:", error);
      return [];
    }
  };

  export const storeLetterHand= async (letterHand) => {
    try {
      const jsonValue = JSON.stringify(letterHand); // Convert array to JSON string
      await AsyncStorage.setItem("letterHand", jsonValue);
      console.log("letterHand saved:", letterHand);
    } catch (error) {
      console.error("Error saving letterHand:", error);
    }
  };
  

  export const getLetterHand= async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("letterHand");
      return jsonValue != null ? JSON.parse(jsonValue) : []; // Convert JSON to array
    } catch (error) {
      console.error("Error loading letterHand:", error);
      return [];
    }
  };


  export const storeSelectedLetters1= async (selectedLetters1) => {
    try {
      const jsonValue = JSON.stringify(selectedLetters1); // Convert array to JSON string
      await AsyncStorage.setItem("selectedLetters1", jsonValue);
      console.log("selectedLetters1 saved:", selectedLetters1);
    } catch (error) {
      console.error("Error saving selectedLetters1:", error);
    }
  };
  

  export const getSelectedLetters1= async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("selectedLetters1");
      return jsonValue != null ? JSON.parse(jsonValue) : []; // Convert JSON to array
    } catch (error) {
      console.error("Error loading selectedLetters1:", error);
      return [];
    }
  };

  export const storeSelectedLetters2= async (selectedLetters2) => {
    try {
      const jsonValue = JSON.stringify(selectedLetters2); // Convert array to JSON string
      await AsyncStorage.setItem("selectedLetters2", jsonValue);
      console.log("selectedLetters2 saved:", selectedLetters2);
    } catch (error) {
      console.error("Error saving selectedLetters1:", error);
    }
  };
  

  export const getSelectedLetters2= async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("selectedLetters2");
      return jsonValue != null ? JSON.parse(jsonValue) : []; // Convert JSON to array
    } catch (error) {
      console.error("Error loading selectedLetters2:", error);
      return [];
    }
  };

  //for One Game ???Needed?

export const storeAllScores = async (scoreArray) => {
    try {
        await AsyncStorage.setItem("scoreArray", JSON.stringify(scoreArray));
        console.log("scoreArray stored successfully!");
    } catch (error) {
        console.error("Error saving scoreArray", error);
    }
};

export const getAllStoredScores = async () => {
    try {
      const scoreArray = await AsyncStorage.getItem("scoreArray");
      console.log("Raw scoreArray from AsyncStorage:", scoreArray); // Log what AsyncStorage returns
      return scoreArray ? JSON.parse(scoreArray) : [];  // Return empty array if null
    } catch (error) {
      console.error("Error fetching scoreArray:", error);
      return [];
    }
  };
  


