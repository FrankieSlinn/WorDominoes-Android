import {Text, View } from "react-native";
import {s} from "../App.style.js";

import {Logo} from "./Logo";
import {HelpIcon} from "./HelpIcon";
import {StatsIcon} from "./StatsIcon";
export function Header(){
    


return( <>
<View style={s.header}>
 
    <HelpIcon/>
    <Logo/>
    <StatsIcon/>

{/* <HelpIcon/>
// content = {content}
// setContent = {setContent}
// onPress={() => setIcon("help")}
/>
<Logo/>
<StatsIcon
content = {content}
setContent = {setContent}
onPress={() => setIcon("stats")} */}


</View>

</>
)

}