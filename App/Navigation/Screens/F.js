import React, { Component } from 'react'
import { Text, View,Image,Button } from 'react-native'


class LogoTitle extends React.Component {
    static navigationOptions = {
        headerTitle: () => <LogoTitle />,
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#0000ff"
          />
        ),
      };
    render() {
      return (
        <Image
          source={require('../../../assets/headericon.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }

export default class F extends Component {  
    static navigationOptions = {
        headerTitle: () => <LogoTitle />,
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#0000ff"
          />
        ),
      };

    render() {
        return (
            <View>
                <Text> F </Text>
            </View>
        )
    }
}
