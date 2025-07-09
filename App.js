import React from 'react';
import { StyleSheet, useColorScheme, View,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainActivity from './MainActivity/MainActivity'

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#001234" barStyle="dark-content" animated={true} />
      <MainActivity />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
