import React from "react";
import {useNavigation} from '@react-navigation/native';
import { Text, Image } from "react-native";
import { Header, Left, Body, Right, Button} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import ColoredLogo from '../Icons/ColoredLogo';
import styles from "./styles";

function HeaderComponent({title}) {
	const navigation = useNavigation();

	function HandleGoMessages() {
		navigation.navigate('Messages')
	}
	return (
		<Header style={{backgroundColor:"white", flexDirection: 'row', alignItems: 'right', justifyContent: 'space-between', }} iosBarStyle="dark-content">
			<Left>
				<Button transparent onPress={navigation.goBack}>
					<Icon name="arrow-back-outline" style={styles.icon}  />
				</Button>
			</Left>
			<Body style={{ flex: 3, flexDirection: 'row', paddingLeft: 35}}>
				<Image source={require('../../../images/coloredlogo.png')} style={{ width: 32, height: 34, resizeMode: 'contain'}} />
					<Text 
						numberOfLines={1}
						style={styles.headerText}>{title}</Text>
			</Body>

			<Right>
				<Button transparent>
					<Icon name="chatbubble-ellipses-sharp" style={{color: '#0382EB', fontSize: 29}} />
				</Button>
			</Right>
		</Header>
	);
}

export default HeaderComponent;