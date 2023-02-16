import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetail = ({ props }) => {

    const { title, imageSrc } = props;

    return (
        <View>
            <Image source={imageSrc} />
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