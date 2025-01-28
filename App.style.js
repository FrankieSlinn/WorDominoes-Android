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
    // marginTop: -50,
    // flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
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
  instructionBox: {
    margin: 20,
    // backgroundColor: "yellow",
    height: 50,
  },
  instructionText: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    // maxHeight: 40,
  },
  gridContainer: {
    alignItems: "center",
  },
  grid: {
    height: 200,
    width: 240,
  },
  horizontalDominoContainer: {
    justifyContent: "center",
    //  flex: 1,
    flexDirection: "row",
    //  justifyContent: "center",
  },
  domino: {
    borderWidth: 3,
    borderColor: "darkgrey",
    borderRadius: 10,
  },
  horizontalDomino: {
    height: 30,
    width: 60,
  },
  verticalDomino: {
    height: 60,
    width: 30,
  },
  verticalDominoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginTop: 30,
  },
  displayDominoContainer:{


    alignItems: "center",


  },
  displayDomino:{
    height: 80,
    width: 40,
    transform: [{ rotate: "135deg" }]


  },
  placeholder:{
    fontWeight: "normal", 
    fontSize: 17,
    color: "darkGrey",


  },
  input:{
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightyellow",
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  inputText:{
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.75,
   

  },

  lettersContainer:{

     flexDirection: "row", 
     flexWrap: "wrap", 
     marginTop: 15,
     marginBottom: 70,
     alignItems: "center",
     justifyContent: "center",


  },
  letter:{
    width: 35,
   
    fontWeight: "bold",
    padding: 10,
    margin: 4,
    // borderColor: "grey",
     borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    textAlign: "center",



  }
});
