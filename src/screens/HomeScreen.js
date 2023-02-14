import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>HomeScreen Test</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    color: 'red',
  },
});

export default HomeScreen;
