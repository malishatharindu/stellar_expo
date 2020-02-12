import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button_simple from '../../Components/Button/Button_simple';

export default class C extends Component {
    static navigationOptions = {
        title: 'A',
      };  
    render() {
        return (
            <View>
                <Text> C </Text>
            </View>
        )
    }
}
