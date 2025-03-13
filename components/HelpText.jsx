import {Image, TouchableOpacity, View, ScrollView, Text} from "react-native";
import {s} from "../App.style.js";



export function HelpText({showHelpText, setShowHelpText}){

    function closeHelpSection(){
        console.log("!!!close button pressed")
        setShowHelpText(false);
    }

return(<>
<View style={s.popupTop}>
<View style={s.closeButtonContainer}>
<TouchableOpacity 
style={s.closeButton}
onPress={closeHelpSection}
>
<Text style={s.close}>Close</Text>
</TouchableOpacity>
</View>

<View style={s.popupHeadingContainer}>

  <Text style={s.popupHeading}>About WorDominoes
  </Text>
  </View>
  </View>


<ScrollView 
showsVerticalScrollIndicator={false} 

style={s.helpTextContainer}>

<Text style={s.helpText}>






{"\n"}

Congratulations on choosing WorDominoes. It is truly an excellent game to play. Difficult and excellent at the same time (depending on how you define excellent).


The obvious goal is to achieve WorDomination. You can do this by completing all the tiles of the dominoes grid. But it is difficult. You will not only need to be a master of word games but also an excellent dominoes strategist. If you possess both of these skills you have a chance at WorDomination.


Even if you don’t get WorDomination you can still compare your score with the top players scores in an 80’s style (if you remember the 80’s) Hall of Fame. Will you make it into the Hall of Fame? There’s only one way to find out: play the game!


If you don’t make it into the Hall of Fame and you don’t achieve WorDomination you can still compete against yourself. The statistics section displays your average score which you can improve as you get better at the game. Of course the more you play the better you should get. If you don’t that could be worrying.


Are you ready? If you'd rather read the instructions and game information first here they are:


Instructions

Instructions are actually displayed in the game below the dominoes grid. But if you like instructions a lot, here are some more:


Click on one of the four dominoes.The more dots the domino has the harder this will be but the more points you will get.
You will see that the domino will have some dots on the left and some more dots on the right.
You will need to create one word that has the same amount of letters as dots on the left and another word with the same number of letters as dots on the right. Simple? Hopefully.
To create a word you can click on or tap on the letters that appear below the word. If you make a mistake you can select the “Redo First Word” Button. To submit the word, yes, it is the submit button. If your word has the right amount of letters and is considered valid by the(sometimes dubious) intelligence of the computer you can move on to the next word for that tile.
Once you have two valid words you have won a tile. Congratulations! You now place the domino on the grid. However you cannot just place it anywhere. The grid will only let you place a domino that has the same amount of dots on a side as the domino next to it. Or you can place your domino where there aren’t any dominoes next to it. Make sense? Hopefully. Otherwise there’s always good old trial and error. To make the game a bit easier to at least give people a slight chance at WorDomination it is also possible to rotate the domino by clicking on it.
Once you have placed the domino it’s time to repeat the process using another domino. And so on and so forth…
Are you stuck? If you can’t complete a word or place a domino you can press the “Give Up” Button. There’s no shame in it, it’s a tough game.
If your score qualifies for the Hall of Fame you’ll be able to add your name to the score and be immortalised(at least for a while) among WorDominoes’ all time top players. This is a huge honour.
...and for those people who love precision (well done if you are such a person) an inventory section has been added. Each letter tile and domino will only be used once in the game.


Dominoes

Left and right values show the number of dots on each side of the tile:

2|2, 2|3, 2|4, 2|5, 2|6, 3|2, 3|3, 3|4, 3|5, 3|6, 4|3, 4|4, 4|5, 4|6, 5|5, 5|6, 6|6


Letter Tiles

Letters with number showing how many there are:

A – 18, B – 4, C – 4, D – 8, E – 24, F – 4, G – 6, H – 4, I – 18, J – 2, K – 2, L – 8, M – 4, N – 12, O – 16, P – 4, Q – 2, R – 12, S – 8. T – 12. U – 8, V – 4, W – 4, X - 2, Y - 4, Z - 2


Best of Luck my friend on this incredibly challenging but (possibly) highly rewarding journey.







</Text>
</ScrollView>

</>
)
}