import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetail = ({ title, imageSource }) => {
    return (
        <View>
            <Image source={imageSource} />
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