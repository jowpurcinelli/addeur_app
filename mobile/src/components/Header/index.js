import React from "react";
import { Text, Image } from "react-native";
import { Header, Left, Body, Right, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export const HeaderComponent =  ({logo})=>{
	return (
		<Header style={{backgroundColor:"white"}} iosBarStyle="light-content">
			<Left>
				<Button transparent>
					<Icon name="chevron-left" style={styles.icon} />
				</Button>
			</Left>
			<Body>{logo &&
					<Image resizeMode="contain" style={styles.logo} source={logo}/>
					||
					<Text style={styles.headerText}></Text>
				}
			</Body>

			<Right>
				<Button transparent>
					<Icon name="gift" style={styles.icon} />
				</Button>
			</Right>
		</Header>
	);
}

export default HeaderComponent;