import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'

const Button_simple = (props) => {
    return (
        <View>
        <TouchableOpacity onPress={props.onPress}>
            <Text>{props.children}</Text>
        </TouchableOpacity>
        </View>
    )
}
export default Button_simple
