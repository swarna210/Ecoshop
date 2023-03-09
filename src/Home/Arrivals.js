import React from 'react';
import { StyleSheet, View, Text,ScrollView,Image } from 'react-native';

export default function App() {
  return (
    <View style={Styles.container}>
        




      <View style={Styles.bottom}>
        <Text>Bottom View Component</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
