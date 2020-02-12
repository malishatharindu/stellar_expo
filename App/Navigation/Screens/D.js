import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class D extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text> D </Text>
                <Text>
                itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
            </Text>
            <Text>
                otherParam:
                 {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
                 {/* We recommend that the params you pass are JSON-serializable. That way, 
                 you'll be able to use state persistence and your screen components will
                 have the right contract for implementing deep linking. */}
            </Text>
                <Button //Normal Repeat navigation of Same screen 
                     title="Go to D again"
                     onPress={() => this.props.navigation.push('D')} //Each time call push we add a new route to the navigation stack
                 />


                <Button // Go Back
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
                />

                <Button // Go First Screen
                title="Go Top First in stack"
                onPress={() => this.props.navigation.popToTop()}
                />

            </View>
        )
    }
}
