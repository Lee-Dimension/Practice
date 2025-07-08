import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import MainActivity from './MainActivity/MainActivity'

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <MainActivity/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
