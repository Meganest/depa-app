import * as React from "react";
import {
  Button,
  Header,
  Text,
  Left,
  View,
  Right,
} from "native-base";
import { Image, StyleSheet, Dimensions } from 'react-native';

const { height} = Dimensions.get('window');

class MyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
        <Header style={styles.header}>
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <View style={{
                alignItems: 'center'
              }}>
                <Image 
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20
                }}
                  source={require('../../../../assets/profile.png')}
                />
                <Text style={styles.greyText}>ออกจากระบบ</Text>
              </View>
            </Button>
          </Left>
          <View style={{
            alignItems: 'center'
          }}>
            <Image
              source={require('../../../../assets/d-health_logo.png')}
              style={{width: 120, height: 60 }}
            />
            <Text style={{ fontSize: 20, color: '#001C64', fontFamily: 'Prompt' }}>
              <Text style={{ fontSize: 20,color: '#fcbb3a', fontFamily: 'Prompt' }}>สุขภาพดิจิตอล</Text>
              เพื่อทุกคน
            </Text>
          </View>
          <Right>
            <Button transparent>
                <View style={{
                  alignItems: 'center'
                }}>
                  <Image 
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20
                  }}
                    source={require('../../../../assets/emergency.png')}
                  />
                  <Text style={styles.greyText}>ฉุกเฉิน</Text>
                </View>
              </Button>
          </Right>
        </Header>
    );
  }
}
const styles = StyleSheet.create({
	header: {
		height: height*0.15,
		backgroundColor: '#FBFAFA'
  },
  greyText: {
		fontFamily: 'Prompt',
    fontSize: 12,
    color: 'grey',
  }
})
export default MyHeader;
