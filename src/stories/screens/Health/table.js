import * as React from "react";
import {
  Container,
  Text,
} from "native-base";
import { View, StyleSheet, ScrollView } from 'react-native';
import MyHeader from "../Header";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const data = [
  {
    type: ['ชีพจร', '8867-4'],
    detail: [[
        'สถาบันโรคทรวงอก',
        'xxxxx',
        '12/08/17',
        'xxxxxxxx'
      ],
      [
        'สถาบันมะเร็งแห่งชาติ',
        'xxxxx',
        '19/02/16',
        'xxxxxxxx'
      ],
      [
        'สถาบันโรคทรวงอก',
        'xxxxx',
        '26/04/15',
        'xxxxxxxx'
      ]
    ]
  },
  {
    type: ['BMI', '39156-5'],
    detail: [[
      'สถาบันโรคทรวงอก',
      'xxxxx',
      '12/08/17',
      'xxxxxxxx'
    ],
    [
      'สถาบันมะเร็งแห่งชาติ',
      'xxxxx',
      '19/02/16',
      'xxxxxxxx'
    ],
    [
      'สถาบันโรคทรวงอก',
      'xxxxx',
      '26/04/15',
      'xxxxxxxx'
    ]
  ]
  },
  {
    type: ['ความดัน', '8867-4'],
    detail: [[
      'สถาบันโรคทรวงอก',
      'xxxxx',
      '12/08/17',
      'xxxxxxxx'
    ],
    [
      'สถาบันมะเร็งแห่งชาติ',
      'xxxxx',
      '19/02/16',
      'xxxxxxxx'
    ],
    [
      'สถาบันโรคทรวงอก',
      'xxxxx',
      '26/04/15',
      'xxxxxxxx'
    ]
  ]
  }
]

const customCol = item => (
  <View style={{padding: 10, alignItems: 'center' }}>
    <Text style={{fontFamily: 'PromptBold', color: '#001C64'}}>{item[0]}</Text>
    <Text style={{fontFamily: 'Prompt', color: 'grey'}}>{item[1]}</Text>
  </View>
)

class HealthTable extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.container}>
        <MyHeader {...this.props} />
        <ScrollView>
          <View style={styles.hilightBox}>
            <Text style={styles.text}>
                สุขภาพ
            </Text>
          </View>
          <Text style={styles.headerText}>ตารางผลตรวจสุขภาพ</Text>
          <Table borderStyle={{borderWidth: 1, borderColor: '#f0f5f5'}}>
          <Row data={['การตรวจ', 'รายละเอียด']} style={styles.head} flexArr={[2, 8]} textStyle={{
                fontFamily: 'PromptBold',
                paddingTop: 5,
                paddingBottom: 5,
                alignSelf: 'center',
          }}/>
          {
            data.map((item, index) => (
              <TableWrapper key={index} style={{flexDirection: 'row'}}>
                <Col data={[customCol(item.type)]} style={{ flex: 2}} heightArr={[120]} textStyle={styles.text} />
                <TableWrapper style={{ flex: 8}}>
                  <Row data={['โรงพยาบาล', 'ชนิดของการตรวจ', 'วันที่', 'ผลการตรวจ']} style={{backgroundColor: '#f0f5f5'}} textStyle={{
                    fontFamily: 'Prompt',
                    padding: 5,
                    textAlign: 'center',
                    color: '#001C64'
                    }}/>
                  <Rows data={item.detail} textStyle={{
                        fontFamily: 'Prompt',
                        textAlign: 'center',
                        color: 'grey'
                  }}/>
                </TableWrapper>
              </TableWrapper>
            ))
          }
          </Table>
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
        width: '90%',
        alignSelf: 'center'
    },
    headerText: {
        fontFamily: 'Prompt',
        fontSize: 30,
        marginTop: 15,
        marginBottom: 15,
        color: '#001C64',
        alignSelf: 'center'
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
    head: { backgroundColor: '#fde869' }
});
export default HealthTable;
