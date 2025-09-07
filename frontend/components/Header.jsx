import {Text, View } from "react-native";
import {s} from "../App.style.js";

import {Logo} from "./Logo";
import {HelpIcon} from "./HelpIcon";
import {StatsIcon} from "./StatsIcon";
export function Header({showHelpText, setShowHelpText, showStats, setShowStats}){
    


return( <>
      < View style={s.headerContainer}>

<View style={[s.header, s.headerWorDominoes]}>
 
    <HelpIcon
    showHelpText={showHelpText}
    setShowHelpText={setShowHelpText}
    
    />
    <Logo/>
    <StatsIcon
          showStats={showStats}
          setShowStats={setShowStats}
    />




</View>
</View>

</>
)

}