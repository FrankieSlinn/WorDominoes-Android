import AsyncStorage from '@react-native-async-storage/async-storage'; 


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
  


