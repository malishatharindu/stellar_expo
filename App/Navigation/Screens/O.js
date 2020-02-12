import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Text } from 'native-base';
export default class FooterTabsIconExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ATab: this.props.tab === 'C',
      BTab: this.props.tab === 'E',
    }
  } 
    
  render() {
    return (
      <Container>
      <Header/>
      <Content/>

      <Footer>
      <FooterTab>
        <Button active={this.state.ATab}  onPress={() => this.props.navigation.navigate('C')}>
          
            <Icon name='ios-person' size={30} color='#900' />
        </Button> 
        <Button active={this.state.BTab}  onPress={() => this.props.navigation.navigate('E')}>
     
            <Icon name='ios-search' />
        </Button>
      </FooterTab>
      </Footer>
      </Container>
    )
  }
}