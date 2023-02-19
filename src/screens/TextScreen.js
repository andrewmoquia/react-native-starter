import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TextScreen = () => {

    const defaultNameValue = '';

    const [name, setName] = useState(defaultNameValue);

    const handleNameInputAction = (value) => {
        setName(value);
    };

    return (
        <View>
            <Text style={styles.textStyle}>Text Screen!</Text>

            <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter your name!"
                onChangeText={(value) => handleNameInputAction(value)}
            />

            <Text>Your name: {name}</Text>
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