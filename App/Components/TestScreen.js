import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'
import Button_simple from './Button/Button_simple'
import {Button} from './Button/Button'
import {SampleComponent} from './SampleComponent'
import {ExpandableListItem} from './ExpandableListItem'

export default class TestScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
               
               
                <Button_simple onPress={()=>console.log("button Pressed")}>Button Component</Button_simple>
                <Button title="Click Me" color="green" onPress={()=>console.log("button Pressed")} />

                <SampleComponent name="Sameeha Rahman" role="Software Engineering Trainee"
                //  image={{ source: require("./assets/images/Sameeha.jpg") }}
                  />
                 <SampleComponent name="Devon Wijesinghe" role="Software Engineering Trainee" 
                //  image={{ source: require("./assets/images/Devon.jpg") }} 

                 />

                <ExpandableListItem title="Heading" description="Description"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
  });