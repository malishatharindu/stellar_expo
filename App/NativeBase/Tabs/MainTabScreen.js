import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs, Left, Right, Body, Title} from 'native-base';
import TabA from './TabA';
import TabB from './TabB';
import TabC from './TabC';

export default class TabScreen extends Component { 
    
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#009387' }}  hasTabs>
                    <Left/>
                    <Body>
                    <Title style={{ color: 'white' }}>News App</Title>
                    </Body>
                    <Right/>
                </Header>

               <Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
                    <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="General">
                        <TabA/>
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }}   heading="Business">
                        <TabB/>
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }}  textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }}  heading="Technology">
                        <TabC/>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}