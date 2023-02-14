import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const FirstExercise = () => {
    const name = 'John Andrew';

    return (
        <View>
            <Text style={style.header}>Getting started with React Native!</Text>
            <Text style={style.subHeader}>My name is {name}!</Text>
        </View>
    );
};

const style = StyleSheet.create({
    header: {
        fontSize: 45,
    },
    subHeader: {
        fontSize: 20,
    },
});

export default FirstExercise;