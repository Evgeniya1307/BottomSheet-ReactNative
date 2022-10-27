import { StyleSheet, Text, View } from "react-native";
import React from "react";


const {} =Demensions.get() // размеры Api
const BoottomSheet = () => {
  return <View style={styles.boottomShettContainer} />;
};
const styles = StyleSheet.create({
  boottomShettContainer: {
    height: 500,
    width: "100%",
    backgroundColor: "white",
  },
});

export default BoottomSheet;
