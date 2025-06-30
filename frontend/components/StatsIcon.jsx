import {Image, TouchableOpacity} from "react-native";
import {s} from "../App.style.js";


export function StatsIcon({showStats, setShowStats}){
    function handleStatsPress(){
        setShowStats(true)


}
return(<>

<TouchableOpacity onPress={handleStatsPress}>
<Image source={require('../assets/images/statsIcon.png')} style={s.icons} />
</TouchableOpacity>
</>

);
}