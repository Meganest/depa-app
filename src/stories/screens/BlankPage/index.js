import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Content padder>
					<Text>{param !== undefined ? param.name.item : "สุขภาพ"}</Text>
				</Content>
			</Container>
		);
	}
}

export default BlankPage;
