// @flow
import React from "react";
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./stories/screens/Login";
import LoginForm from './container/LoginContainer'
import Home from "./container/HomeContainer";
import Profile from './stories/screens/Profile'

//Drugs Stack
import Drug from "./stories/screens/Drugs";
import DrugAllergyInfo from "./stories/screens/Drugs/DrugAllergy"

//Health Stack
import Health from "./stories/screens/Health";
import Table from "./stories/screens/Health/table"
import Exercise from "./stories/screens/Health/exercise"

//Digital Stack
import Digital from "./stories/screens/Digital"
import TeleMed from "./stories/screens/Digital/teleMed"
import Wearable from "./stories/screens/Digital/wearable"

//Hospital
import Hospital from './stories/screens/Hospital'

//Layouts
import FooterTab from "./stories/screens/FooterTab" 

const DrugStack = createStackNavigator(
	{
		Drug: { screen: Drug },
		DrugAllergyInfo: { screen: DrugAllergyInfo },
	},
	{
		headerMode: 'none',
	}
)
const HealthStack = createStackNavigator(
	{
		Health: { screen: Health },
		Table: { screen: Table },
		Exercise: { screen: Exercise },
	},
	{
		headerMode: 'none',
	}
)
const DigitalStack = createStackNavigator(
	{
		Digital: { screen: Digital },
		TeleMed: { screen: TeleMed },
		Wearable: { screen: Wearable },
	},
	{
		headerMode: 'none',
	}
)
const App = createBottomTabNavigator(
	{
		Home: { screen: Home },
		HealthStack: { screen: HealthStack },
		DrugStack: { screen: DrugStack },
		DigitalStack: { screen: DigitalStack },
		Hospital:  { screen: Hospital },
		Profile: { screen: Profile },
		Login: { screen: Login},
		LoginForm: { screen: LoginForm },
	},
	{
	  tabBarPosition: "bottom",
	  initialRouteName: "Home",
	  tabBarComponent: props => (<FooterTab {...props} />),
	}
  );

export default () => (
	<Root>
		<App />
	</Root>
);
