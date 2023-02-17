import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ColorScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Color Screen!</Text>
            <TouchableOpacity>
                <Text>Add a color!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default ColorScreen;