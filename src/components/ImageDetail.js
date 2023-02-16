import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetail = ({ title }) => {
    return (
        <View>
            <Image source={require('../../assets/beach.jpg')} />
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default ImageDetail;