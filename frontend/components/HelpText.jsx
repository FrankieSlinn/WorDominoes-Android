import { Image, TouchableOpacity, View, ScrollView, Text } from "react-native";
import { s } from "../App.style.js";
import { SafeAreaView } from 'react-native-safe-area-context';

export function HelpText({ showHelpText, setShowHelpText }) {
  function closeHelpSection() {
    console.log("!!!close button pressed");
    setShowHelpText(false);
  }

  return (
    <>
      <View style={s.closeButtonContainer}>
        <TouchableOpacity 
        style={[s.closeButton, s.buttonBorders]} onPress={closeHelpSection}>
          <Text style={s.close}>Close</Text>
        </TouchableOpacity>
      </View>
{/* <SafeAreaView> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={s.statsHelpTextContainer}
      //   contentContainerStyle={{  flexGrow: 1, paddingBottom: 25,
      //     marginTop: -40,
      //    }
      // }
      >
              <View style={s.helpTextContainer}>
        <View style={s.helpTextContainerInner}>
     
        <Text style={s.helpText}>
          {"\n"}
          <Text style={s.popupHeading}>About WorDominoes</Text>
          {"\n"}
          {"\n"}
          Congratulations on choosing WorDominoes. It is truly an excellent game
          to play. Difficult and excellent at the same time (depending on how
          you define excellent).
          {"\n"}
          {"\n"}
          The obvious goal is to achieve WorDomination. You can do this by
          completing all the tiles of the dominoes grid. But it is difficult.
          You will not only need to be a master of word games but also an
          excellent dominoes strategist. If you possess both of these skills you
          have a chance at WorDomination.
          {"\n"}
          {"\n"}
          Even if you don’t get WorDomination you can still compare your score
          with the top players scores in an 80’s style (if you remember the
          80’s) Hall of Fame. Will you make it into the Hall of Fame? There’s
          only one way to find out: play the game!
          {"\n"}
          {"\n"}
          If you don’t make it into the Hall of Fame and you don’t achieve
          WorDomination you can still compete against yourself. The statistics
          section displays your average score which you can improve as you get
          better at the game. Of course the more you play the better you should
          get.
          {"\n"}
          {"\n"}
          Are you ready? If you'd rather read the instructions and game
          information first here they are:
          {"\n"}
          {"\n"}
          <Text style={s.popupHeading}>Instructions</Text>
          {"\n"}
          {"\n"}
          Instructions are displayed in the game below the dominoes grid. But if
          you like instructions a lot, here are some more:
          {"\n"}
          {"\n"}
          1. Click on one of the four dominoes.The more dots the domino has the
          harder this will be but the more points you will get.
          {"\n"}
          {"\n"}
          2. You will see that the domino will have some dots on the left and
          some more dots on the right.
          {"\n"}
          {"\n"}
          3. You will need to create one word that has the same amount of
          letters as dots on the left and another word with the same number of
          letters as dots on the right. Simple? Hopefully.
          {"\n"}
          {"\n"}
          4. To create a word you can click on or tap on the letters that appear
          below the word. If you make a mistake you can select the “Redo First
          Word” Button. To submit the word, yes, it is the submit button. If
          your word has the right amount of letters and is considered valid by
          the(sometimes dubious) intelligence of the computer you can move on to
          the next word for that tile.
          {"\n"}
          {"\n"}
          5. Once you have two valid words you have won a tile. Congratulations!
          You now place the domino on the grid. However you cannot just place it
          anywhere. The grid will only let you place a domino that has the same
          amount of dots on a side as the domino next to it. Or you can place
          your domino where there aren’t any dominoes next to it. Make sense?
          Hopefully. Otherwise there’s always good old trial and error. To make
          the game a bit easier to at least give people a slight chance at
          WorDomination it is also possible to rotate the domino by clicking on
          it.
          {"\n"}
          {"\n"}
          6. Once you have placed the domino it’s time to repeat the process
          using another domino. And so on and so forth…
          {"\n"}
          {"\n"}
          7. Are you stuck? If you can’t complete a word or place a domino you
          can press the “Give Up” Button. There’s no shame in it, it’s a tough
          game.
          {"\n"}
          {"\n"}
          8. f your score qualifies for the Hall of Fame you’ll be able to add
          your name to the score and be immortalised(at least for a while) among
          WorDominoes’ all time top players. This is a huge honour.
          {"\n"}
          {"\n"}
          ...and for those people who love precision (well done if you are such
          a person) here is a list of all the dominoes and tiles. Each letter
          tile and domino will only be used once in the game.
          {"\n"}
          {"\n"}
          <Text style={s.popupHeading}>Dominoes</Text>
          {"\n"}
          {"\n"}
          <Text style={s.bold}>
            Left and right values show the number of dots on each side of the
            tile:
          </Text>
          {"\n"}
          {"\n"}
          2|2, 2|3, 2|4, 2|5, 2|6, 3|2, 3|3, 3|4, 3|5, 3|6, 4|3, 4|4, 4|5, 4|6,
          5|5, 5|6, 6|6
          {"\n"}
          {"\n"}
          <Text style={s.popupHeading}>Letter Tiles</Text>
          {"\n"}
          {"\n"}
          <Text style={s.bold}>
            Letters with number showing how many there are:
          </Text>
          {"\n"}
          {"\n"}A – 18, B – 4, C – 4, D – 8, E – 24, F – 4, G – 6, H – 4,
          I – 18, J – 2, K – 2, L – 8, M – 4, N – 12, O – 16, P – 4, Q –
          2, R – 12,
        S – 8, T – 12, U – 8, V – 4, W – 4, X - 2, Y - 4, Z - 2
          {"\n"}
          {"\n"}
          Best of Luck on this incredibly challenging but (possibly)
          highly rewarding journey.
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>

        </View>
        </View>

      </ScrollView>
      {/* </SafeAreaView> */}

 
    </>
  );
}
