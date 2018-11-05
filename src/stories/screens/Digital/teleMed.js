import * as React from "react";
import {
  Container,
  Text,
  Icon
} from "native-base";
import { Image, View, ScrollView, StyleSheet } from 'react-native'
import MyHeader from "../Header";
const data = [
    {
        url: require('../../../../assets/for_girls.png'),
    },
    {
        url: require('../../../../assets/sharmble.png'),
    },
    {
        url: require('../../../../assets/OOCA.png'),
    },
    {
        url: require('../../../../assets/seedoc.png'),
    },
]
const Card = (item, index) => (
    <View key={index} style={styles.card}>
        <Image
            style={{
            height: 60,
        }}
            resizeMode='contain'
            source={item.url}
        />
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
                <Image
                    style={{
                    height: 70,
                }}
                    resizeMode='contain'
                    source={require('../../../../assets/Telemedicine.png')}
                />
                <Text style={{ fontFamily: 'Prompt', color: 'grey' }}>พบแพทย์ทางไกล</Text>
                <Icon name="ios-arrow-down" style={{color: '#d0d0e1'}} />
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
		backgroundColor: "white",
        flex: 1,
    },
    hilightBox: { 
        width: '90%',
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#f0f5f5',
        borderColor: '#fff',
        marginBottom: 10,
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
    TopSection: {
        alignItems: 'center',
        marginTop: 10
    },
    BottomSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 100,
    }
});
export default Digital;
