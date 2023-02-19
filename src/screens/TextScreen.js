import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TextScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Text Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default TextScreen;