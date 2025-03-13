import { View, Text, TextInput} from "react-native";
import {useEffect, useState} from "react";
import { s } from "../App.style";


export function TextAbove({tileFullError, wrongTileError, tilePlaced}) {


  return (
    <>
        <View style={s.instructionBox}>
          {tileFullError===false&&wrongTileError===false&&tilePlaced===false?
          <Text style={s.instructionText}>
            Fill the grid with dominoes to achieve Word Domination.
          </Text>
          :!tileFullError===true&&!wrongTileError===true&&tilePlaced===true?
          <Text style={s.instructionText}>
          Congratulations, you placed a tile!!!
        </Text>
        :wrongTileError===true?
        <Text style={s.instructionText}>
        The tile does not have the same amount of dots as the tile next to it. Try somewhere else.
      </Text>
      :
      tileFullError===true?

        <Text style={s.instructionText}>
        This space is already taken. Try somewhere else.
      </Text>
      :null

}

        </View>
       
 
   
    </>
  );
}