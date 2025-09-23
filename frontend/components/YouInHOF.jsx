
import { View, Text, TouchableOpacity, Alert} from "react-native";
import {s} from "../App.style";

export function YouInHOF(){


return <>
<View style={s.youInHOFContainer}>
<Text style={[s.instructionText, s.youInHOFText, s.bold]} >You Are Now In The Hall Of Fame! </Text>
</View>

</>

}