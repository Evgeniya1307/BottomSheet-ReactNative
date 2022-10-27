
import { View, StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <View style={styles.container}>
     <StatusBar style ="light" />
    </View>
    <BootomSheet/>
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
