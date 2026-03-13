import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flash Neon Keyboard Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  text: {
    color: '#FF007F',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
