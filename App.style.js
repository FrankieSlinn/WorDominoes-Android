import {StyleSheet} from "react-native"

export const s= StyleSheet.create({
    app: {
        flex: 1,
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
    logo:{
        fontSize: 35,
        fontWeight: "bold",
        letterSpacing: 0.2,
        shadowColor: "#000",
        textAlign: "center"
    },
    icons:{
        height: 30,
        width: 30,
        margin:20,

    }, 

  header: {
    flex: 1,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    marginTop: 10,
  },


  body: {
    marginTop: -50,
    flex: 6,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },
      


});