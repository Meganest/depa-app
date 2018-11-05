import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import MyHeader from "../Header";


export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<MyHeader {...this.props} />
				<Content>
					<Text style={styles.headerText}>ยืนยันการเชื่อมโยงข้อมูลกับโรงพยาบาล</Text>
					<Text style={styles.text}>เพื่อเข้าถึงข้อมูล ยา/การแพ้ยา และข้อมูลสุขภาพ</Text>
					{this.props.loginForm}
					<TouchableOpacity style={styles.Button}
						onPress={() => {
							this.props.onLogin()
						}}
					>
						<Text style={styles.ButtonText}>เข้าสู่ระบบ</Text>
					</TouchableOpacity>
				</Content>
			</Container>
		);
	}
}
const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
    	flex: 1,
	},
	headerText: {
		fontFamily: 'PromptBold',
		fontSize: 25,
		marginTop: 15,
		alignSelf: "center"
	},
	text: {
		fontFamily: 'Prompt',
		fontSize: 20,
		marginLeft: 15,
		marginRight: 15,
		alignSelf: "center",
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
