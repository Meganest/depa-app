import * as React from "react";
import {
  Container,
  Text,
} from "native-base";
import { Image, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import MyHeader from "../Header";
const data = [
    {
        url: require('../../../../assets/Phamasafe.png'),
        text: 'จัดการกินยา'
    },
    {
        url: require('../../../../assets/Telemedicine.png'),
        text: 'พบแพทย์ทางไกล'
    },
    {
        url: require('../../../../assets/Diamate.png'),
        text: 'ดูแลเบาหวาน'
    },
    {
        url: require('../../../../assets/wearable.png'),
        text: 'อุปกรณ์สวมใส่'
    },
    {
        url: require('../../../../assets/Medisee.png'),
        text: 'ข้อมูลผลเลือด'
    },
    {
        url: require('../../../../assets/ZeekDoc.png'),
        text: 'คลินิกใกล้บ้าน'
    },
]
const Card = (item, index) => (
    <View key={index} style={styles.card}>
        <TouchableOpacity
        // onPress={() => this.props.navigation.navigate('DrugStack')}
        >
            <Image
                style={{
                height: 100,
            }}
                resizeMode='contain'
                source={item.url}
            />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Prompt', color: 'grey' }}>{item.text}</Text>
    </View>
)
class Digital extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={styles.container}>
        <MyHeader {...this.props} />
        <ScrollView>
            <View style={styles.TopSection}>
                <View style={styles.hilightBox}>
                    <Text style={styles.text}>
                        บริการดิจิทัล
                    </Text>
                </View>
                <Text style={styles.headerText}>
                    กรุณาเลือกบริการดิจิทัล ด้านการแพทย์ หรือสุขภาพที่ท่านต้องการ
                </Text>
                <Text style={styles.greyText}>บางบริการอาจมีค่าใช้จ่าย</Text>
            </View>
            <View style={styles.BottomSection}>
                {
                    data.map((item, index) => (
                        Card(item, index)
                    ))
                }
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
    hilightBox: { 
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#f0f5f5',
        borderColor: '#fff',
        marginTop: 20,
        padding:5,
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
    greyText: {
		fontFamily: 'Prompt',
        fontSize: 15,
        color: 'grey',
        marginLeft: 15
    },
    TopSection: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 1/2,
        borderColor: 'grey',
        paddingBottom: 20
    },
    BottomSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 150
    }
});
export default Digital;
