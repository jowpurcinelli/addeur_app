import React from "react";
import {useNavigation} from '@react-navigation/native';
import { Text, Image } from "react-native";
import { Header, Left, Body, Right, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import ColoredLogo from '../Icons/ColoredLogo';
import styles from "./styles";

function HeaderComponent({title}) {
	const navigation = useNavigation();

	function HandleGoMessages() {
		navigation.navigate('Messages')
	}
	return (
		<Header style={{backgroundColor:"white", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} iosBarStyle="dark-content">
			<Left>
				<Button transparent onPress={navigation.goBack}>
					<Icon name="chevron-left" style={styles.icon} />
				</Button>
			</Left>
			<Body style={{ paddingRight: 55, flexDirection: 'row'}}>
				<Image source={require('../../../images/coloredlogo.png')} style={{ width: 32, height: 34, resizeMode: 'contain'}} />
					<Text style={styles.headerText}>{title}</Text>
			</Body>

			<Right>
				<Button transparent>
					<Icon name="comments" style={styles.icon} />
				</Button>
			</Right>
		</Header>
	);
}

export default HeaderComponent;