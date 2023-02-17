import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ColorCounter = ({ color, onChange }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <TouchableOpacity onPress={() => onChange(color.toLowerCase(), 'increment')}>
                <Text style={styles.buttonStyle}>Increase {color}!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onChange(color.toLowerCase(), 'decrement')}>
                <Text style={styles.buttonStyle}>Decrease {color}!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        marginTop: 10,
    },
    buttonStyle: {
        fontSize: 17,
    }
});

export default ColorCounter;