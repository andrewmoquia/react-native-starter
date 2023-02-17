import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CounterScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Counter Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default CounterScreen;