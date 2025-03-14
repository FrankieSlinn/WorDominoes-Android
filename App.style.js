import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  app: {
    // flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#353839",
    fontSize: 30, // Roughly equivalent to 1.25rem (20px)
    backgroundColor: "white",
    fontFamily: "Arial",
    letterSpacing: -0.08,
    marginTop: 55,
  },
  body: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },
  bold:{
    fontWeight: "bold", 
  },
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 0.2,
    shadowColor: "#000",
    textAlign: "center",
  },
  icons: {
    height: 30,
    width: 30,
    margin: 20,
  },
  headerContainer: {
    backgroundColor: "lightBlue",
    height: 50,
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    // maxHeight: 65,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    marginTop: 10,
  },

  // popupHeadingContainer: {
  //   // flex: 1,
  //   // flexDirection: "column",
  //   // justifyContent: "space-around",
  //   alignItems: "center",
  //   marginTop: 30,
  //   marginBottom: -50,
  
    
  //   // textAlign: "center",

  // },

  // popupTop:{
  // //  marginBottom: -2,

  // },
  closeButtonContainer: {
    marginTop: 30,
    marginRight: 25,
    marginBottom: -35,
    flexDirection: "row",
    justifyContent: "flex-end", // Aligns the button to the right
  },
  closeButton: {
    padding: 8,
    backgroundColor: "#ADD8E6", // Light blue color
    borderRadius: 15,
  },
  close:{
    fontWeight: "bold",
  },
  popupHeading: {
    fontWeight: "bold",
    alignItems: "center",
    flexDirection:"row",
    fontSize: 22,
    marginBottom: -8,
   

  },
  helpTextContainer:{
    top: 10,
margin: 32,



  },

  helpText:{
    marginTop: -20,
    fontSize:17,

    textAlign: "center",
  },
  
  instructionBox: {
    margin: 20,
    // backgroundColor: "yellow",
    height: 65,
  },
  instructionText: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  errorMessageText: {
    backgroundColor: "lightorange",
  },
  gridContainer: {
    alignItems: "center",
  },
  grid: {
    height: 200,
    width: 240,
  },

  domino: {
    borderWidth: 3,
    borderColor: "darkgrey",
    borderRadius: 10,
  },
  selectedTile: {
    resizeMode: "stretch",
    borderRadius: 10,
    width: 26,
    height: 52,
  },
  selectedTileHorizontal: {
    width: 26,
    height: 52,
    color: "green",
  },
  selectedTileVertical: {
    width: 26,
    height: 52,
    transform: [{ rotate: "deg" }],
    color: "pink",
  },

  selectedHorizontalTileRotated: {
    transform: [{ rotate: "90deg" }],
  },
  selectedVerticalTileRotated: {
    transform: [{ rotate: "180deg" }],
  },
  selectedHorizontalTileUnrotated: {
    transform: [{ rotate: "270deg" }],
  },

  horizontalDominoContainer: {
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
  },
  horizontalDomino: {
    height: 30,
    width: 60,
    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden",
  },
  verticalDomino: {
    height: 60,
    width: 30,
  },
  verticalDominoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verticalDominoContainerRight: {
    //  flexDirection: "column",
    // justifyContent: "space-between",
  },
  handDominoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 70,
  },
  handDomino: {
    height: 70,
    width: 35,
    backgoundColor: "darkgrey",
    borderColor: "darkgrey",
    borderWidth: 3,
    borderRadius: 10,
    margin: 5,
  },
  instructionTextBelow: {
    marginTop: 20,
  },
  displayDominoContainer: {
    // height: 80,
    marginTop: 0,

    alignItems: "center",
  },
  displayDomino: {
    height: 80,
    width: 40,
  },
  displayDominoUnrotated: {
    transform: [{ rotate: "270deg" }],
  },
  displayDominoRotated: {
    transform: [{ rotate: "90deg" }],
  },
  placeholder: {
    fontWeight: "normal",
    fontSize: 17,
    color: "darkGrey",
  },
  input: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightyellow",
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
  inputText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.75,
  },

  lettersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
    marginBottom: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    width: 35,

    fontWeight: "bold",
    padding: 10,
    margin: 4,
    // borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",
  },
  selectedLetter: {
    color: "#777",
    borderStyle: "dashed",
    borderColor: "gray",
  },
  wordButtonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wordButton: {
    backgroundColor: "lightyellow",
    borderWidth: 2,
    borderColor: "darkgray",
    borderRadius: 10,
    padding: 10,

    marginTop: -10,
    margin: 10,
  },
  wordButtonText: {
    color: "#353839",
    fontWeight: "bold",
  },
});
