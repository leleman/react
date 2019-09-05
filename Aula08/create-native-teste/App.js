import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text>Mudando</Text>
      </View>
      <View style={styles.view2}>
        <Text>Mudando2</Text>
      </View>
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
  view1: {
    flex: 0.85,
    backgroundColor: '#ff0000',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex:0.15,
    backgroundColor: '#00ff00',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
