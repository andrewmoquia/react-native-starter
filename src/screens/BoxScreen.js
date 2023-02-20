import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Box Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default BoxScreen;