import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        borderColor: 'red',
        borderWidth: 10,
        padding: 20,
    },
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 30,
        margin: 10,
    }
});

export default BoxScreen;