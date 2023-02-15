import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Hellow!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default ListScreen;