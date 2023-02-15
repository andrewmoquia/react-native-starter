import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListExercise = () => {
    return (
        <View>
            <Text style={ styles.textStyle }>List Exercise!</Text>
            <FlatList />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default ListExercise;