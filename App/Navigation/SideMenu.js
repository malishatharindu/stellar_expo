import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet,SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {DrawerItems } from 'react-navigation-drawer';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
    }
  
    render () {
      return (
        <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
        <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 1
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('C')}>
              Page1
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 2
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('A')}>
                Page2
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('B')}>
                Page3
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      );
    }
  }
  
  SideMenu.propTypes = {
    navigation: PropTypes.object
  };
  
  export default SideMenu;

  const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
})