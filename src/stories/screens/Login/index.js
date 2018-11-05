import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, CheckBox } from "native-base";
import { StyleSheet, TouchableOpacity} from "react-native";

export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Header style={{ height: 200, backgroundColor: 'white' }}>
					<Body style={{ alignItems: "center" }}>
						<Image
						source={require('../../../../assets/d-health_logo.png')}
						style={{width: 150, height: 80 }}
						/>
						<Text style={{ fontSize: 30, color: '#001C64', fontFamily: 'Prompt' }}>
						<Text style={{ fontSize: 30,color: '#fcbb3a', fontFamily: 'Prompt' }}>สุขภาพดิจิตอล</Text>
						เพื่อทุกคน
						</Text>
					</Body>
				</Header>
				<Content>
					<TouchableOpacity style={styles.facebook}>
						<Image 
							style={{
							width: 30,
							height: 30,
							marginRight: 15,
							marginTop: 5,
							marginBottom: 5,
							bottom: 2
							}}
						source={require('../../../../assets/facebook.png')}
						/>
						<Text style={styles.facebookText}>เข้าสู่ระบบด้วย Facebook</Text>
					</TouchableOpacity>
					<Text style={{
						fontSize: 20,
						color: '#001C64',
						fontFamily: 'PromptBold',
						textAlign: 'center',
						marginTop: 20
					}}>
						หรือ
					</Text>
					<View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', marginTop: 20}}>
						<CheckBox style={{ borderColor: '#fde869'}} checked={false} />
						<Text style={{marginLeft: 15, fontSize: 15,color: 'grey', fontFamily: 'Prompt'}}>ยอมรับเงื่อนไข</Text>
						<TouchableOpacity>
							<Text style={{marginLeft: 5, fontSize: 15,color: '#fcbb3a', fontFamily: 'Prompt'}}>ดูเงื่อนไข</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.Button}
						onPress={() => this.props.navigation.navigate('LoginForm')}
					>
						<Text style={styles.ButtonText}>เข้าใช้งานโดยไม่ใช้ Facebook</Text>
					</TouchableOpacity>
				</Content>
			</Container>
		);
	}
}
const styles: any = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#FBFAFA",
	},
	facebook: {
		backgroundColor: '#3B5998',
		width: '80%',
		marginTop: 30,
		alignSelf: 'center',
		borderRadius: 10,
		padding:10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	facebookText: {
		fontSize: 20,
		color: 'white',
		fontFamily: 'Prompt',
		textAlign: 'center'
	},
	Button: {
		backgroundColor: '#fde869',
		width: '80%',
		alignSelf: 'center',
		borderRadius: 50,
		padding:10,
		marginTop: 10
	},
	ButtonText: {
		fontSize: 20,
		color: '#001C64',
		fontFamily: 'PromptBold',
		textAlign: 'center'
	}
});
export default Login;
