import * as React from "react";
import {
  Container,
  Text,
  Icon
} from "native-base";
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Table from './DrugTable'
import MyHeader from "../Header";

const drugs_allergy = ['1. เพนิซิลลิน', '2. ไดไพโรน', '3. สเตรปโตมัยซิน', '4. โปรเคน', '5. แอมพิซิลลิน']
const drugInfo_column = ['วันที่จ่ายใบสั่งยา', 'เลขที่ HN ผู้ป่วย', 'เลขที่ใบสั่งยา', 'วันที่สั่งยา', 'ปี ค.ศ.']

const main_data = [{
    hospital: 'โรงพยาบาล สถาบันโรคทรวงอก',
    drug_detail: ['12/02/2018', '1233330989333', '0987JH', '12/02/2018', '2018'],
    tableData: [
      '1',
      {
        name: 'พาราเซตามอล',
        TMTCode: '1244r99',
        DrugNo: '543332',
        Unit: '5098848',
        Practise: 'rtt44r9',
        Time: 'DDd24'
      },
      '6',
      'แผง'
    ]
  },
  {
    hospital: 'โรงพยาบาล สถาบันมะเร็งแห่งชาติ',
    drug_detail: ['12/02/2018', '1233330989333', '0987JH', '12/02/2018', '2018'],
    tableData: 
      ['2', 
        {
          name: 'Amoxicillin',
          TMTCode: '1244r99',
          DrugNo: '543332',
          Unit: '5098848',
          Practise: 'rtt44r9',
          Time: 'DDd24'
        },
        '6',
        'แผง'
      ]
  }
]
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
          <View style={{ alignItems: 'center'}}>
            <View style={styles.hilightBox}>
                  <Text style={styles.text}>
                      ยา/แพ้ยา
                  </Text>
            </View>
            <Text style={styles.headerText}>ยาที่แพ้</Text>
            <View style={styles.drugAllergy}>
              <View style={{ flex: 1 }}>
                {
                  drugs_allergy.map((item, index) => (
                    <Text key={index} style={{fontFamily: 'Prompt'}}>
                      {item}
                    </Text>
                  ))
                }
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{fontFamily: 'Prompt', color: '#fcbb3a', fontSize: 20, textAlign: 'center',
                  paddingLeft: 20, paddingRight: 20}}>คลิกอ่านรายละเอียดการแพ้ยา</Text>
                <TouchableOpacity style={styles.greyCircle}
                  onPress={() => this.props.navigation.navigate('DrugAllergyInfo')}
                >
                  <Icon name="ios-arrow-forward" style={{color: '#d0d0e1'}} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.headerText}>ข้อมูลยา</Text>
            {
              main_data.map((item, index) => (
                <View key={index} style={styles.drugInfo}>
                  <View style={styles.drugInfoHeader}>
                    <View style={styles.circle}>
                      <Text>{index+1}</Text>
                    </View>
                    <Text style={{fontFamily: 'Prompt', fontSize: 20}}>{item.hospital}</Text>
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
                        item.drug_detail.map((item, index) => (
                          <Text key={index} style={{fontFamily: 'Prompt', color: 'grey'}}>
                            {item}
                          </Text>
                        ))
                      }
                    </View>
                  </View>
                  <Table data={item.tableData}/>
                </View>
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
    marginBottom: 15,
		color: '#001C64'
	},
	text: {
		fontFamily: 'Prompt',
		fontSize: 20,
		alignSelf: "center",
		color: '#001C64'
  },
  drugAllergy: { 
    borderWidth: 2,
    borderRadius: 5,
    width: "90%",
    backgroundColor: '#f0f5f5',
    borderColor: '#fcbb3a',
    padding:20,
    flexDirection: 'row'
  },
  drugInfo: { 
    width: "90%",
    marginBottom: 20,
    backgroundColor: '#f0f5f5',
  },
  drugInfoHeader: { 
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#fde869',
    padding: 10,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: "center"
  },
  drugInfoContent: { 
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
  },
  circle: {
    borderRadius: 50,
    backgroundColor: "#fcbb3a",
    width: 30,
    height: 30,
    padding: 10,
    justifyContent: 'center',
    marginRight: 10,
  },
  greyCircle: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#d0d0e1',
    backgroundColor: "white",
    width: 40,
    height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Drug;
