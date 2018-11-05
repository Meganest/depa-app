import * as React from "react";
import {
  Container,
  Text,
} from "native-base";
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MyHeader from "../Header";
import { observer, inject } from "mobx-react/native";

const column = ['เลขประตัวประชาชน', 'หมายเลขประจำตัวผู้ป่วย', 'หมายเลย AN', 'รหัสหน่วยบริการ', 'ชื่อ', 'นามสกุล', 'วันเดือนปีเกิด', 'เพศ', 'กรุ๊ปเลือด', 'ที่อยู่ตามทะเบียนราษฎร์', 'โทรศัพท์มือถือ', 'อีเมล']
const value = ['013-6547-76543-3', 'DS24567', '667880', 'TH', 'รักชาติ', 'สามารถ', '15/06/1982', 'ชาย', 'B', '12/7 กรุงเทพ', '089-1111-111', 'demo@gmail.com']

@inject("loginForm")
@observer
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container style={styles.container}>
        <MyHeader {...this.props} />
        <ScrollView>
            <View style={styles.TopSection}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.row}>
                        <Image 
                        style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35
                        }}
                        source={require('../../../../assets/profile.png')}
                        />
                        <View style={{marginLeft: 10}}>
                            <Text style={styles.headerText}>
                                ข้อมูลส่วนตัว
                            </Text>
                            <Text style={styles.text}>รักชาติ สามารถ</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.circle}
                        onPress={() => {
                            this.props.loginForm.onLogOut()
                            this.props.navigation.navigate('Home')
                        }}
                    >
                        <Text style={styles.greyText}>ออกจากระบบ</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                value.map((item, index) => (
                <View key={index} style={styles.ContentSection}>
                    <View style={{ flex: 1 }}>
                        <Text style={{
                            fontFamily: 'PromptBold',
                            fontSize: 18,
                            color: '#001C64'
                        }}>
                            {column[index]}                       
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{fontFamily: 'Prompt', color: 'grey', fontSize:18 }}>
                            {item}
                        </Text>
                    </View>
                </View>
                ))
            }
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
		fontFamily: 'PromptBold',
		fontSize: 25,
        color: '#001C64',
    },
    text: {
		fontFamily: 'Prompt',
        fontSize: 18,
		color: '#001C64'
    },
    greyText: {
		fontFamily: 'PromptBold',
        fontSize: 15,
        color: 'grey',
        textAlign: 'center'
    },
    TopSection: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 1/2,
        borderColor: 'grey',
        paddingBottom: 20,
        marginTop: 20
    },
    ContentSection: { 
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        flexDirection: 'row',
    },
    circle: {
        borderRadius: 35,
        backgroundColor: "#f0f5f5",
        width: 70,
        height: 70,
        padding: 10,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row'
    }
});
export default Profile;
