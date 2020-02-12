import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {HeaderBackButton } from 'react-navigation-stack';

export default class G extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'G',
          headerLeft:(<HeaderBackButton  tintColor='red' onPress={()=>{navigation.goBack()}}/>)
        };
      };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> G </Text>
                <Text> Custom Back Button </Text>
            </View>
        )
    }
}
