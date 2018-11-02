import * as React from "react";
import {
  Text,
  Button,
  Footer,
  FooterTab,
} from "native-base";
import { Image } from "react-native"
import { NavigationActions, StackActions } from "react-navigation";

export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
const resetAction = route => StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: route })],
});
class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => {
                this.toggleTab1()
                this.props.navigation.navigate('DrugStack')
                this.props.navigation.dispatch(resetAction('Drug'))         
              }
            }
              vertical
            >
              <Image 
              style={{ width: 30, height: 30}}
              source={require('../../../../assets/Medicine.png')} />
              <Text>ยา/แพ้ยา</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => {
              this.toggleTab2()
              this.props.navigation.navigate('HealthStack')
              this.props.navigation.dispatch(resetAction('Health'))              
              }}>
              <Image 
                style={{ width: 30, height: 30}}
                source={require('../../../../assets/Health.png')} />
              <Text>สุขภาพ</Text>
            </Button>
            <Button
              active={this.state.tab3}
              onPress={() => {this.toggleTab3()
                this.props.navigation.navigate('DigitalStack')
                this.props.navigation.dispatch(resetAction('Digital'))      
              }}
              vertical
            >
              <Image 
              style={{ width: 30, height: 30}}
              source={require('../../../../assets/Digital.png')} />
              <Text style={{ fontSize: 12}}>บริการดิจิทัล</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => {
                this.toggleTab4()
                this.props.navigation.navigate('Hospital')
              }}>
              <Image 
              style={{ width: 30, height: 30}}
              source={require('../../../../assets/Hospital.png')} />
              <Text style={{ fontSize: 10}}>สถานพยาบาล</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default Home;
