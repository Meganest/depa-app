import * as React from "react";
import {
  Container,
  Text,
} from "native-base";
import { View, ScrollView, StyleSheet } from 'react-native';
import MyHeader from "../Header";

const drugInfo_column = ['เลข HN', 'รหัสยาของโรงพยาบาล', 'รหัส TMT Code', 'รหัสกลุ่มยา', 'อาการไม่พึงประสงค์', 'ผลการประเมิน', 'วันที่ประเมิน', 'ผู้ประเมิน', 'สถานพยาบาล']
const drugInfo_value = ['HN119765', 'DEi1223', 'TMTC333', 'THD', '-', '-', '12/03/2018', 'นพ.องอาจ', 'สถาบันโรคทรวงอก']
const drugName = ['เพนิซิลลิน', 'ไดไพโรน', 'สเตรปโตมัยซิน', 'โปรเคน', 'แอมพิซิลลิน']

class Drug extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container style={styles.container}>
        <MyHeader {...this.props} />
        <ScrollView>
            <Text style={styles.headerText}>ยาที่แพ้</Text>
            {
                drugName.map((item, index) => (
                <View key={index} style={styles.drugInfo}>
                    <View style={styles.drugInfoHeader}>
                        <View style={{ flexDirection: 'row'}}>
                            <View style={styles.circle}>
                                <Text>{index+1}</Text>
                            </View>
                            <Text style={{fontFamily: 'Prompt', fontSize: 20, color: '#001C64'}}>ชื่อยาที่แพ้</Text>
                        </View>
                        <Text style={{fontFamily: 'Prompt', fontSize: 20}}>{item}</Text>
                    </View>
                    <View style={styles.drugInfoContent}>
                        <View style={{ flex: 1 }}>
                        {
                            drugInfo_column.map((item, index) => (
                            <Text key={index} style={{fontFamily: 'Prompt'}}>
                                {item}
                            </Text>
                            ))
                        }
                        </View>
                        <View style={{ flex: 1 }}>
                        {
                            drugInfo_value.map((item, index) => (
                            <Text key={index} style={{fontFamily: 'Prompt', color: 'grey'}}>
                                {item}
                            </Text>
                            ))
                        }
                        </View>
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
    hilightBox: { 
        borderWidth: 1,
        borderRadius: 50,
        width: "90%",
        backgroundColor: '#f0f5f5',
        borderColor: '#fff',
        marginTop: 20,
        padding:10,
    },
	headerText: {
		fontFamily: 'Prompt',
		fontSize: 30,
        marginTop: 15,
        marginBottom: 20,
        color: '#001C64',
		alignSelf: "center",
	},
    drugInfo: { 
		alignSelf: "center",
        width: "90%",
        marginBottom: 20,
        borderColor: '#fcbb3a',
        backgroundColor: '#f0f5f5',
        borderColor: '#fcbb3a',
        borderWidth: 2,
        borderRadius: 5,
    },
    drugInfoHeader: { 
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    drugInfoContent: { 
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        margin: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    circle: {
        borderRadius: 50,
        backgroundColor: "#fcbb3a",
        width: 30,
        height: 30,
        padding: 10,
        justifyContent: 'center',
        marginRight: 10,
    }
});
export default Drug;
