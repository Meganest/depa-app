import * as React from "react";
import {
  Header,
  Text,
  Left,
  Body,
  Right,
} from "native-base";
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
const LogIn = props => {
  const { routeName } = props.navigation.state
  if(routeName === 'Login' || routeName === 'LoginForm' || routeName === 'Home'){
    return <Text></Text>
  } else {
    return <TouchableOpacity style={{
              alignItems: "center",
              justifyContent: "center",
            }}
              onPress={() => props.navigation.navigate('Profile')}
            >
                <Image 
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20
                }}
                  source={require('../../../../assets/profile.png')}
                />
                <Text style={styles.greyText}>ออกจากระบบ</Text>
            </TouchableOpacity>
  }
}
class MyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <SafeAreaView>
        <Header style={styles.header}>
          <Left style={{
            flex: 1,
          }}>
          {LogIn(this.props)}
          </Left>
          <Body style={{
            alignItems: "center",
            flex: 4
          }}>
            <Image
              source={require('../../../../assets/d-health_logo.png')}
              style={{width: 120, height: 60 }}
            />
            <Text style={{ fontSize: 20, color: '#001C64', fontFamily: 'Prompt' }}>
              <Text style={{ fontSize: 20,color: '#fcbb3a', fontFamily: 'Prompt' }}>สุขภาพดิจิตอล</Text>
              เพื่อทุกคน
            </Text>
          </Body>
          <Right style={{
            flex: 1,
          }}>
            <TouchableOpacity style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image 
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20
                }}
                  source={require('../../../../assets/emergency.png')}
                />
                <Text style={styles.greyText}>ฉุกเฉิน</Text>
            </TouchableOpacity>
          </Right>
        </Header>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
	header: {
		height: 110,
		backgroundColor: '#FBFAFA'
  },
  greyText: {
		fontFamily: 'Prompt',
    fontSize: 12,
    color: 'grey',
  }
})
export default MyHeader;
