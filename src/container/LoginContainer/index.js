// @flow
import * as React from "react";
import { Item, Input, Icon, Form, Toast, Text, View, CheckBox } from "native-base";
import { observer, inject } from "mobx-react/native";
import { StyleSheet, TouchableOpacity } from 'react-native'

import LoginForm from "../../stories/screens/Login/loginForm";

export interface Props {
	navigation: any,
	loginForm: any,
}
export interface State {}

@inject("loginForm")
@observer
export default class LoginContainer extends React.Component<Props, State> {
	emailInput: any;
	pwdinput: any;
	login() {
		// this.props.loginForm.validateForm();
		// if (this.props.loginForm.isValid) {
		// 	this.props.loginForm.clearStore();
		// 	this.props.navigation.navigate("Drawer");
		// } else {
		// 	Toast.show({
		// 		text: "Enter Valid Email & password!",
		// 		duration: 2000,
		// 		position: "top",
		// 		textStyle: { textAlign: "center" },
		// 	});
		// }
		this.props.loginForm.clearStore();
		this.props.loginForm.onLogIn();
		this.props.navigation.navigate("DrugStack");
	}
	render() {
		const form = this.props.loginForm;
		const Fields = (
			<Form>
				<View style={styles.container}>
					<Text style={styles.text}>เลขบัตรประชาชน</Text>
					<Item 
					// error={form.emailError ? true : false
					>
						<Input
							style={styles.input}
							keyboardType="numeric"
							// ref={c => (this.emailInput = c)}
							// value={form.email}
							// onBlur={() => form.validateEmail()}
							// onChangeText={e => form.emailOnChange(e)}
						/>
					</Item>
					<Text style={styles.text}>รหัสผ่าน</Text>
					<Item
					// error={form.passwordError ? true : false}
					>
						<Input
							// ref={c => (this.pwdinput = c)}
							// value={form.password}
							// onBlur={() => form.validatePassword()}
							// onChangeText={e => form.passwordOnChange(e)}
							secureTextEntry={true}
							style={styles.input}
						/>
					</Item>
					<Text style={styles.text}>วันเดือนปีเกิด</Text>
					<Item>
						<Input style={styles.input}/>
					</Item>
					<View style={{ flexDirection: 'row', marginTop: 20}}>
						<CheckBox style={{ borderColor: '#fde869'}} />
						<Text style={{marginLeft: 15, fontSize: 15,color: 'grey', fontFamily: 'Prompt'}}>ยอมรับเงื่อนไข</Text>
						<TouchableOpacity>
							<Text style={{marginLeft: 5, fontSize: 15,color: '#fcbb3a', fontFamily: 'Prompt'}}>ดูเงื่อนไข</Text>
						</TouchableOpacity>
					</View>
				</View>

			</Form>
		);
		return <LoginForm navigation={this.props.navigation} loginForm={Fields} onLogin={() => this.login()} />;
	}
}
const styles = StyleSheet.create({
	container: { width: '80%', alignSelf: "center"},
	text: {fontFamily: 'PromptBold', color: '#001C64', fontSize: 20, marginTop: 10},
    input: {borderWidth: 1, borderRadius: 5, borderColor: 'grey'}
});
