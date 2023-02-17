import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ColorScreen = () => {

    const defaultColorsVal = [];

    const [colors, setColors] = useState(defaultColorsVal);

    const randomRGB = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgba(${red}, ${green}, ${blue}, 1)`
    };

    const handleAddColorAction = () => setColors([...colors, randomRGB()]);

    return (
        <View>
            <Text style={styles.textStyle}>Color Screen!</Text>

            <TouchableOpacity onPress={() => handleAddColorAction()}>
                <Text>Add a color!</Text>
            </TouchableOpacity>

            <View style={{ height: 100, width: 100, backgroundColor: randomRGB() }} />
        </View>
    );
};



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default ColorScreen;