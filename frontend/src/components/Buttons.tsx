import { View, Button, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native';

const NavigatorButton = ({navigation, screenName}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <Button title="Hey there!"
      onPress={() => navigation.navigate(screenName)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  }
});

export default App;