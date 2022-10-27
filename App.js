
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BoottomSheet from './components/BoottomSheet';


export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={styles.container}>
     <StatusBar style ="light" />
    <BoottomSheet/>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
