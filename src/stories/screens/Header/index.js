import * as React from "react";
import {
  Container,
  Button,
  Icon,
  Header,
  Text,
  Left,
  View,
  Body,
  Right,
} from "native-base";
import { Image } from 'react-native';
import MyText from '../../../shared'
import styles from "./styles";

export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
        <Header style={styles.header}>
          <Left>
            {/* <Button transparent>
              <Icon
                active
                name="ios-add-circle"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button> */}
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
          <Right />
        </Header>
    );
  }
}

export default Home;
