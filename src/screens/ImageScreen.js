import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageScreen = () => {
    return (
        <View>
            <Text style={ styles.textStyle }>Image Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default ImageScreen;