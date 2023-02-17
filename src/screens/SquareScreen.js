import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return { ...state, [action.color]: action.value };
        case 'decrement':
            return { ...state, [action.color]: action.value };
        default:
            return state;
    }
};

const SquareScreen = () => {

    const defaultColorsValue = {
        red: 0,
        green: 0,
        blue: 0,
    };

    const [colors, setColors] = useState(defaultColorsValue);

    const handleChangeColorsValue = (color, action) => {
        const colorIntensity = 255 * 0.05;
        const newIncValue = colors[color] + colorIntensity;
        const newDecValue = colors[color] - colorIntensity;

        switch (action) {
            case 'increment':
                newIncValue <= 255 && setColors({ ...colors, [color]: newIncValue });
                break;
            case 'decrement':
                newDecValue >= 0 && setColors({ ...colors, [color]: newDecValue });
                break;
            default:
                setColors(colors);
        }
    };

    const [state, dispatch] = useReducer(reducer, defaultColorsValue);

    return (
        <View>
            <Text style={styles.textStyle}>Square Color Adjuster!</Text>

            <Text style={styles.textStyle}>Using Use State Hook!</Text>

            <ColorCounter color='Red' onChange={handleChangeColorsValue} />
            <ColorCounter color='Green' onChange={handleChangeColorsValue} />
            <ColorCounter color='Blue' onChange={handleChangeColorsValue} />

            <View style={{ width: 100, height: 100, backgroundColor: `rgba(${colors.red}, ${colors.green}, ${colors.blue}, 1)` }} />

            <Text>Value: Red {colors.red}</Text>
            <Text>Value: Green {colors.green}</Text>
            <Text>Value: Blue {colors.blue}</Text>

            <Text style={styles.textStyle}>Using Reducer Hook!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default SquareScreen;