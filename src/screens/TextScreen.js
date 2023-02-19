import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

const TextScreen = () => {

    const defaultNameValue = '';
    const defaultIsPasswordShow = true;
    const defaultPassswordValid = false;

    const [name, setName] = useState(defaultNameValue);
    const [isPasswordShow, showPassword] = useState(defaultIsPasswordShow);
    const [isPasswordValid, setIsPasswordValid] = useState(defaultPassswordValid);

    const handleNameInputAction = (value) => setName(value);
    const handleEnterPasswordAction = (value) => value.length > 5 ? setIsPasswordValid(true) : setIsPasswordValid(false);
    const handleShowPasswordAction = () => showPassword(!isPasswordShow);

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

            <Text style={styles.textStyle}>Enter Password!</Text>

            <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
                secureTextEntry={isPasswordShow}
                onChangeText={(value) => handleEnterPasswordAction(value)}
            />

            <TouchableOpacity
                onPress={handleShowPasswordAction}
            >
                <Text>Show Password!</Text>
            </TouchableOpacity>

            {!isPasswordValid && <Text>Password must be longer than 5 characters!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        marginTop: 10,
    },
    inputStyle: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default TextScreen;