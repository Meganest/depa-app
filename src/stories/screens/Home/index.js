import * as React from "react";
import {
  Container,
  Text,
} from "native-base";
import { Image, View, TouchableWithoutFeedback, ScrollView, StyleSheet, Dimensions } from 'react-native'
import MyHeader from "../Header";

const { width} = Dimensions.get('window');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={styles.container}>
		    <MyHeader {...this.props}/>
        <ScrollView>
          <Text style={styles.headerText}>
            แนะนำบริการ dHealth
          </Text>
          <Text style={styles.text}>
            dHealth คือบริการข้อมูลสุขภาพของท่านจากโรงพยาบาลที่เข้าร่วมโครงการ
          </Text>
          <View style={styles.banner}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('DrugStack')}
              >
                <Image
                  style={{
                    width: width*0.9,
                    height: width*0.9/1.9 //1.9 picture w/h ratio
                }}
                  source={require('../../../../assets/Home-Banner.png')}
                />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.sub_banner}>
              <Image
                  style={{
                    width: width*0.44,
                    height: width*0.44/1.5,
                }}
                  source={require('../../../../assets/Left-Banner.png')}
                />
              <Image
              style={{
                width: width*0.44,
                height: width*0.44/1.5,
              }}
              source={require('../../../../assets/Right-Banner.png')}
              />
          </View>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text style={{ fontSize: 13, color: 'red', fontFamily: 'Prompt' }}>*
                <Text style={{ fontSize: 13, color: 'grey', fontFamily: 'Prompt' }}> บริการที่ต้องลงทะเบียน ณ สถานพยาบาลก่อน</Text>
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
    flex: 1,
	},
	headerText: {
		fontFamily: 'Prompt',
		fontSize: 35,
		marginTop: 15,
		alignSelf: "center"
	},
	text: {
		fontFamily: 'Prompt',
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
		textAlign: "center",
		color: '#001C64'
  },
  banner: {
    width: '90%',
    alignSelf: "center",
    marginTop: 20,
  },
  sub_banner: {
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
export default Home;
