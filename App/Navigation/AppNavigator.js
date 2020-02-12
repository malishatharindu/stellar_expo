import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


import A from './Screens/A';
import B from './Screens/B';
import C from './Screens/C';
import D from './Screens/D';
import E from './Screens/E';
import F from './Screens/F';
import G from './Screens/G';
import H from './Screens/H';
import I from './Screens/M';
import O from './Screens/O';
import MainTabScreen from '../NativeBase/Tabs/MainTabScreen'

import HomeIconWithBadge from './HomeIconWithBadge';
import SideMenu from './SideMenu';

const StackNavigatorOne = createStackNavigator({
        A,
        D,
        O,
        MainTabScreen
  },{
    initialRouteName: 'A',
  
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#00ffdd',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
  });

  const StackNavigatorTwo = createStackNavigator({
    B,
    E,
    F,  
    G,
});

  const TabNavigator = createBottomTabNavigator({
    StackNavigatorOne,
    StackNavigatorTwo,
    C,
    E,

  } ,{
     animationEnabled:true
    }, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'StackNavigatorOne') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'StackNavigatorTwo') {
          iconName = `ios-options`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
        }
    },);


    TabNavigator.navigationOptions = ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
      
        // You can do whatever you like here to pick the title based on the route name
        const headerTitle = routeName;
      
        return {
          headerTitle,
        };
      };

      TabNavigator.navigationOptions = {
        // Hide the header from AppNavigator stack
        headerShown: false,
       
      };

 const HomeStackNavigator = createStackNavigator({
    TabNavigator,
    });


    const MyDrawerNavigator = createDrawerNavigator({
        StackNavigatorOne,
        HomeStackNavigator,
        G
    },{
  contentComponent: SideMenu,
  drawerWidth: 300
    });

const AppNavigator = createAppContainer(MyDrawerNavigator);
export default AppNavigator;