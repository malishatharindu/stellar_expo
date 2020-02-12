import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class E extends Component {
        //Adjusting header styles
        static navigationOptions = {
            title: 'E',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> E </Text>
                <Text> Header Styled </Text>
            </View>
        )
    }
}
