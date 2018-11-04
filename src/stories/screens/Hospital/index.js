import * as React from "react";
import {
  Container,
  Text,
} from "native-base";
import { View, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { MapView } from 'expo'
import markers from './places'
import MyHeader from "../Header";

const { width} = Dimensions.get('window')
const hospital_list = [
    'รพ.เมตตาประชารักษ์', 'สถาบันโรคทรวงอก', 'สถาบันโรคผิวหนัง', 'สถาบันทันตกรรม', 'สถาบันประสาทวิทยา', 'สถาบันมะเร็งแห่งชาติ'
]
class Hospital extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        markers,
        region: {
            latitude: 13.7394689,
            longitude: 100.2556832,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
    };
  }
  onChange = (region) => {
    this.setState({ region });
  }  
  render() {
    return (
      <Container style={styles.container}>
        <MyHeader {...this.props} />
        <ScrollView>
            <View style={styles.TopSection}>
                <View style={styles.hilightBox}>
                    <Text style={styles.text}>
                        สถานพยาบาล
                    </Text>
                </View>
                <Text style={styles.headerText}>
                    ปัจจุบันได้มีการเชื่อมโยงข้อมูลสุขภาพจากสถานพยาบาลดังรายชื่อต่อไปนี้
                </Text>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap',  padding: 20, alignSelf: 'center' }}>
                {
                    this.state.markers.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.card}
                            onPress={() => this.onChange(
                                {
                                    latitude: item.latitude,
                                    longitude: item.longitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }
                            )}
                        >
                            <Text style={styles.greyText}>{index+1} {item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <MapView
                style={{ flex: 1, width: width*0.9, height: 250, alignSelf: 'center' }}
                region={this.state.region}
            >
                {this.state.markers.map((marker, index) => {
                    const coords = {
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                    };
                    return (
                        <MapView.Marker
                            key={index}
                            coordinate={coords}
                            title={marker.name}
                            description={marker.description}
                        />
                    );
                })}
            </MapView>
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
        marginLeft: 15,
    },
    TopSection: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 1/2,
        borderColor: 'grey',
        paddingBottom: 20
    },
    map: { flex: 1, width: width*0.9, height: 250, alignSelf: 'center'},
    card: { width: '50%' }
});
export default Hospital;
