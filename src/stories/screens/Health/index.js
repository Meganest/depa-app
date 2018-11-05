import * as React from "react";
import {
  Container,
  Text,
  Icon,
  Form,
  Picker
} from "native-base";
import { Image, View, StyleSheet, TouchableOpacity,  TouchableHighlight, Dimensions, ScrollView, Animated } from 'react-native';
import MyHeader from "../Header";
const { width, height } = Dimensions.get('window');
var isHidden = false;

class Health extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),  //This is the initial position of the subview
      buttonText: "Show Subview",
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
    if(value === 'key4'){ this.props.navigation.navigate('Exercise') }
  }
  
  _toggleSubview() {    
    this.setState({
      buttonText: !isHidden ? "Show Subview" : "Hide Subview"
    });

    var toValue = -width/1.5;

    if(isHidden) {
      toValue = 0;
    }

    //This will animate the transalteY of the subview between 0 & 100 depending on its current state
    //100 comes from the style below, which is the height of the subview.
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
      }
    ).start();

    isHidden = !isHidden;
  }
  render() {
    return (
      <Container style={styles.container}>
          <MyHeader {...this.props} />
          <View style={styles.hilightBox}>
            <Text style={styles.text}>
                บริการดิจิทัล
            </Text>
          </View>
          <ScrollView>
            <View style={{
                    height: height-150
                }}>
              <Image
                  style={{
                    width: width,
                    height: width/1.35
                }}
                  source={require('../../../../assets/main_body.png')}
                />
            </View>
            <View style={{
              alignSelf: 'flex-end',
              top: 20,
              position: 'absolute',
              }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Table')}>
                <Image
                  style={{
                    width: 100,
                    height: 20
                }}
                  source={require('../../../../assets/health_table.png')}
                />
              </TouchableOpacity>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  style={{ width: 120 }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="ออกกำลังกาย" value="key4" />
                </Picker>
              </Form>
            </View>
            <TouchableHighlight underlayColor="white" style={{position: 'absolute', top: width/1.6 }} onPress={() => this._toggleSubview()}>
              <Animated.View
                style={[{},
                  {transform: [{translateY: this.state.bounceValue}]}]}
              >
                <Image
                    style={{
                      width: width,
                      height: width*1.23,
                    }}
                    source={require('../../../../assets/health_detail.png')}
                  />
                <View style={{
                  alignSelf: 'flex-end',
                  position: 'absolute'
                }}>
                  
                </View>
              </Animated.View>
            </TouchableHighlight>
          </ScrollView>
      </Container>
    );
  }
}
const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
	},
	hilightBox: { 
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#f0f5f5',
    borderColor: '#fff',
    marginTop: 10,
    padding:5,
    width: '90%',
    alignSelf: 'center'
  },
  headerText: {
    fontFamily: 'Prompt',
    fontSize: 18,
      margin: 15,
      marginBottom: 0
  },
  text: {
    fontFamily: 'Prompt',
    fontSize: 20,
    textAlign: "center",
    color: '#001C64'
  },
});
export default Health;
