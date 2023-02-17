import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SquareScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Square Color Adjuster!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default SquareScreen;