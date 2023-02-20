import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Box with padding, margin, and width!</Text>
            <View style={styles.boxViewStyle}>
                <Text style={styles.boxViewTextStyle}>Box Screen!</Text>
            </View>

            <Text style={styles.textStyle}>Flexbox!</Text>
            <View style={styles.flexboxViewStyle}>
                <Text style={{ ...styles.flexboxViewTextStyle, ...styles.flexChildOne }}>Child #1</Text>
                <Text style={{ ...styles.flexboxViewTextStyle, ...styles.flexChildTwo }}>Child #2</Text>
                <Text style={{ ...styles.flexboxViewTextStyle, ...styles.flexChildThree }}>Child #3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        marginBottom: 10,
        marginTop: 10,
    },
    boxViewTextStyle: {
        fontSize: 24,
        borderColor: 'red',
        borderWidth: 10,
        padding: 20,
    },
    boxViewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 30,
        margin: 10,
    },
    flexboxViewStyle: {
        borderColor: 'blue',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        alignItems: 'stretch',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        // justifyContent: 'space-evenly',
    },
    flexboxViewTextStyle: {
        fontSize: 20,
        borderWidth: 2,
        borderColor: 'black',
        margin: 2,
        padding: 2,
        paddingLeft: 5,
    },
    flexChildOne: {
        flex: 0, // 30%
        alignSelf: 'flex-start',
    },
    flexChildTwo: {
        flex: 0, // 30%
        alignSelf: 'flex-end',
    },
    flexChildThree: {
        flex: 0, // 40%
        left: '50%',
        position: 'absolute',
    },
});

export default BoxScreen;