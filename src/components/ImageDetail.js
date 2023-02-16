import React from "react";
import { View, StyleSheet, Text } from 'react-native';

const ImageDetail = ({ title }) => {
    return (
        <View>
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