import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from "./Elemente/Button";
// noinspection JSUnusedGlobalSymbols
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo Sarah 2!</Text>
      <Button text={"Click me!"} action={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: 'blue'
  },

  button: {

  }

});
