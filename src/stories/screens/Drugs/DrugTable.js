import * as React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const drugDetail = item => (
    <View style={{padding: 10 }}>
      <Text style={{fontFamily: 'Prompt'}}>{item.name}</Text>
      <Text style={{fontFamily: 'Prompt', color: 'grey'}}>TMT Code : {item.TMTCode}</Text>
      <Text style={{fontFamily: 'Prompt', color: 'grey'}}>เลขที่ยา : {item.DrugNo}</Text>
      <Text style={{fontFamily: 'Prompt', color: 'grey'}}>รหัสหน่วยรับ : {item.Unit}</Text>
      <Text style={{fontFamily: 'Prompt', color: 'grey'}}>รหัสวิธีการใช้ยา : {item.Practise}</Text>
      <Text style={{fontFamily: 'Prompt', color: 'grey'}}>รหัสเวลาที่ใช้ยา : {item.Time}</Text>
    </View>
)
class DrugTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['ที่', 'ชื่อยา', 'จำนวน', 'หน่วย'],
        widthArr: [40, 200, 60, 60]
      }
    }
    render() {
      const state = this.state;
      return (
        <View style={styles.drugInfoTable}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#f0f5f5'}}>
            <Row data={state.tableHead} style={styles.head} flexArr={[1, 5, 2, 2]} textStyle={{
                fontFamily: 'Prompt',
                paddingTop: 5,
                paddingBottom: 5,
                alignSelf: 'center'
                }}/>
            
                <TableWrapper style={{flexDirection: 'row'}}>
                    {
                    this.props.data.map((cellData, cellIndex) => (
                        <Cell key={cellIndex}
                        style={
                            cellIndex === 0 && {width: '10%'} ||                              
                            cellIndex === 1 && {width: '50%'} ||
                            cellIndex === 2 && {width: '20%'} ||
                            cellIndex === 3 && {width: '20%'}
                        }
                        data={cellIndex === 1 ? drugDetail(cellData) : cellData}
                        textStyle={{fontFamily: 'Prompt', color: 'grey', alignSelf: 'center'}}
                        />
                    ))
                    }
                </TableWrapper>
                
            
            </Table>
        </View>      
)}}
const styles = StyleSheet.create({
  drugInfoTable: {
    backgroundColor: '#fff',
    margin: 10,
  },
  head: { backgroundColor: '#fde869' },
});
export default DrugTable;
