import {Image, TouchableOpacity} from "react-native";
import {s} from "../App.style.js";


export function HelpIcon({onPress}){
return(<>

<TouchableOpacity onPress={onPress}>
<Image source={require('../assets/images/helpIcon.png')} style={s.icons} />
</TouchableOpacity>
</>

);
}