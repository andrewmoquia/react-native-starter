import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const ColorScreen = () => {

    const randomRGB = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgba(${red}, ${green}, ${blue}, 1)`
    };

    const defaultColorsVal = [randomRGB()];

    const [colors, setColors] = useState(defaultColorsVal);

    const handleAddColorAction = () => setColors([...colors, randomRGB()]);

    return (
        <View>
            <Text style={styles.textStyle}>Color Screen!</Text>

            <TouchableOpacity onPress={() => handleAddColorAction()}>
                <Text>Add a color!</Text>
            </TouchableOpacity>

            <FlatList
                vertical={true}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item, index) => item + index}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default ColorScreen;