import * as React from "react";
import {
  Container,
  Text,
} from "native-base";
import { Image, View } from 'react-native';

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.container}>
          <View style={{ borderWidth: 1,borderRadius: 50, width: "90%", backgroundColor: '#e2e2e2', borderColor: '#fff', marginTop: 20,
        padding:10,
        }}>
                <Text style={styles.text}>
                    Table
                </Text>
          </View>
          <Image
              style={{
                width: '100%',
                marginTop: -210,
            }}
              resizeMode='contain'
              source={require('../../../../assets/body.png')}
            />
      </Container>
    );
  }
}

export default Home;
