import React from "react";
import { Text, StyleSheet, View } from "react-native";

// View = Wrap elements into one.

const ComponentsScreen = () => {
    const greetings = 'Hello World!';
    const num = 59;
    const varElement = <Text style={subHeader.textStyle}>Hi! I am an element created in variable!</Text>;

    return (
        <View>
            <Text style={mainHeader.textStyle}>This is the component screen in inside View Element!</Text>
            <Text style={subHeader.textStyle}>{greetings}</Text>
            <Text style={subHeader.textStyle}>{num}</Text>
            {varElement}
        </View>
    );
};

// Inline CSS
// <Text style={{ fontSize: 30 }}>This is the component screen!</Text>;

//Using Style Sheet
// <Text style={styles.textStyle}>This is the component screen!</Text>;

const mainHeader = StyleSheet.create({
    textStyle: {
        fontSize: 40,
    }
});

const subHeader = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
});

export default ComponentsScreen;
