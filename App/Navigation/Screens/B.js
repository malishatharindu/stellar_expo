import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class B extends Component {
 

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'B'),
    };
  };

    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text> B</Text>
            <Text>  B </Text>
                
            <Button //Updating navigationOptions with setParams
             title="Update header title"
             onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
            />
             <Button //custom header components
                 title="GO to F/component for header title"
                 onPress={() => this.props.navigation.navigate('F')}
             />

             <Button //Custom Back button
                 title="GO to G/custom Back button"
                 onPress={() => this.props.navigation.navigate('G')}
             />

            </View>
        )
    }
}
