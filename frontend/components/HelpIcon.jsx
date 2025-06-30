import {Image, TouchableOpacity} from "react-native";
import{HelpText} from "./HelpText";
import {s} from "../App.style.js";


export function HelpIcon({onPress, showHelpText, setShowHelpText}){

function handlePress(){
    setShowHelpText(true)


}



return(<>

<TouchableOpacity onPress={handlePress}>
<Image source={require('../assets/images/helpIcon.png')} style={s.icons} />
</TouchableOpacity>
</>

);
}