import React from "react";
import { View, StyleSheet } from "react-native";

const BoxScreenExercise = () => {
    return (
        <View style={styles.container}>

            <View style={styles.boxWrapperOne}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>

            <View style={styles.boxWrapperTwo}>
                <View style={styles.box}></View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    boxWrapperOne: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxWrapperTwo: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
    },
});

export default BoxScreenExercise;