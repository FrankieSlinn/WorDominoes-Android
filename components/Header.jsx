import {Text, View } from "react-native";
import {s} from "../App.style.js";

import {Logo} from "./Logo";
import {HelpIcon} from "./HelpIcon";
import {StatsIcon} from "./StatsIcon";
export function Header({showHelpText, setShowHelpText}){
    


return( <>
<View style={s.header}>
 
    <HelpIcon
    showHelpText={showHelpText}
    setShowHelpText={setShowHelpText}
    />
    <Logo/>
    <StatsIcon/>




</View>

</>
)

}