import {Image, TouchableOpacity} from "react-native";
import {s} from "../App.style.js";


export function StatsIcon({onPress}){
return(<>

<TouchableOpacity onPress={onPress}>
<Image source={require('../assets/images/statsIcon.png')} style={s.icons} />
</TouchableOpacity>
</>

);
}