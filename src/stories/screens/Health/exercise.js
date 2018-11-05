import * as React from "react";
import {
  Container,
  Text,
} from "native-base";
import { Image, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import MyHeader from "../Header";
import Svg from "react-native-svg";
import {
    VictoryAxis,
    VictoryChart,
    VictoryGroup,
    VictoryStack,
    VictoryCandlestick,
    VictoryErrorBar,
    VictoryBar,
    VictoryLine,
    VictoryArea,
    VictoryScatter,
    VictoryTooltip,
    VictoryZoomContainer,
    VictoryVoronoiContainer,
    VictorySelectionContainer,
    VictoryBrushContainer,
    VictoryCursorContainer,
    VictoryPie,
    VictoryLabel,
    VictoryLegend,
    createContainer
  } from "victory-native";
  import { VictoryTheme } from "victory-core";
class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={styles.container}>
        <MyHeader {...this.props} />
        <VictoryBar
            data={[
            {x: 1, y: 3, label: "Alpha"},
            {x: 2, y: 4, label: "Bravo"},
            {x: 3, y: 6, label: "Charlie"},
            {x: 4, y: 3, label: "Delta"},
            {x: 5, y: 7, label: "Echo"},
            ]}
            labelComponent={
            <VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end"/>
            }
        />
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
        marginTop: 10,
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
export default Exercise;
