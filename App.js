import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Select from './Select';

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <Select />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
