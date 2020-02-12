import React, {Component} from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

    export default  class DrawerIcon extends Component {
        toggleDrawer = () => {
          this.props.navigation.toggleDrawer();
        };
        render() {
          return (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={this.toggleDrawer.bind(this)}
               style={{
            width: 44,
            height: 44,
            marginLeft: 20
               }}>
                <Icon name='menu' size={20} color='black'/>
              </TouchableOpacity>
            </View>
          );
        }
      }
       

    //   static navigationOptions =  ({ navigation }) => ({
    //     headerLeft: <DrawerIcon navigationProps={navigation} />,
    //   });