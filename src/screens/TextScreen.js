import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TextScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Text Screen!</Text>
            <TextInput style={styles.inputStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    },
    inputStyle: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default TextScreen;