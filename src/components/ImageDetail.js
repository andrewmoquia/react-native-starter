import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetail = ({ props }) => {

    const { title, imgeSrc, imgScore } = props;

    return (
        <View>
            <Image source={imgeSrc} />
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}>Image Score - {imgScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default ImageDetail;