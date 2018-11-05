import * as React from "react";
import {
  Text,
  Button,
  Footer,
  FooterTab,
} from "native-base";
import { Image, StyleSheet } from "react-native"
import { NavigationActions, StackActions, SafeAreaView } from "react-navigation";
import { observer, inject } from "mobx-react/native";

export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
const resetAction = route => StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: route })],
});
@inject("loginForm")
@observer
class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { isLoggedIn } = this.props.loginForm
    const { routeName } = this.props.navigation.state.routes[this.props.navigation.state.index]
    return(
      <SafeAreaView>
        <Footer>
          <FooterTab>
            <Button
              active={routeName === 'DrugStack'}
              onPress={() => {
                if(isLoggedIn) {
                  this.props.navigation.navigate('DrugStack')
                  this.props.navigation.dispatch(resetAction('Drug'))
                } else {
                  this.props.navigation.navigate('Login')
                }    
              }
            }
              vertical
            >
              <Image 
                style={{ width: 30, height: 30}}
                source={require('../../../../assets/Medicine.png')} />
              <Text style={[{ fontSize: 12}, styles.text]}>
                ยา/แพ้ยา
              </Text>
            </Button>
            <Button active={routeName === 'HealthStack'} 
              onPress={() => {
                if(isLoggedIn) {
                  this.props.navigation.navigate('HealthStack')
                  this.props.navigation.dispatch(resetAction('Health'))
                } else {
                  this.props.navigation.navigate('Login')
                }    
              }}>
              <Image 
                style={{ width: 30, height: 30}}
                source={require('../../../../assets/Health.png')} />
              <Text style={styles.text}>สุขภาพ</Text>
            </Button>
            <Button
              active={routeName === 'DigitalStack'} 
              onPress={() => {
                if(isLoggedIn) {
                  this.props.navigation.navigate('DigitalStack')
                  this.props.navigation.dispatch(resetAction('Digital'))
                } else {
                  this.props.navigation.navigate('Login')
                } 
              }}
              vertical
            >
              <Image 
              style={{ width: 30, height: 30}}
              source={require('../../../../assets/Digital.png')} />
              <Text style={[{ fontSize: 12}, styles.text]}>บริการดิจิทัล</Text>
            </Button>
            <Button active={routeName === 'Hospital'} 
              onPress={() => {
                if(isLoggedIn) {
                  this.props.navigation.navigate('Hospital')
                } else {
                  this.props.navigation.navigate('Login')
                } 
              }}>
              <Image 
              style={{ width: 30, height: 30}}
              source={require('../../../../assets/Hospital.png')} />
              <Text style={[{ fontSize: 10}, styles.text]}>สถานพยาบาล</Text>
            </Button>
          </FooterTab>
        </Footer>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
	text: {
		fontFamily: 'Prompt',
  },
})
export default Home;
