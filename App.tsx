import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from "./src/screens/Home";
import { Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <HomeScreen />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
