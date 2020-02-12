import React, { Component } from 'react'
import { Text, View,Button,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import DrawerIcon from '../DrawerIcon';


export default class A extends Component {
    static navigationOptions =  ({ navigation }) => ({
        headerLeft: <DrawerIcon navigation={navigation} />
      });


    render() {
        const {navigate} = this.props.navigation;
        return (

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>A</Text>
          <Text> normal navigation, pass params, go back, repeat same screen, go first screen </Text>
          
          {/* <DrawerIcon    onPress={() =>navigation.toggleDrawer() }/> */}


          <Button //Normal Stack Navigate
              title="Go to D"
              onPress={() => this.props.navigation.navigate('D',)}
          />
           <Button //Normal Stack Navigate
              title="native base footerTabs"
              onPress={() => this.props.navigation.navigate('O',)}
          />

          
        <Button //Normal Stack Navigate
              title="native base Tabs"
              onPress={() => this.props.navigation.navigate('MainTabScreen',)}
          />

          <Button //parameter passing
              title="Pass Params to D"
              onPress={() => this.props.navigation.navigate('D', {
                          itemId: 86,
                          otherParam: 'anything you want here',
                      })}
          />

   
          </View>
        )
    }
}
