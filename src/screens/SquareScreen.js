import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
    switch (action.type) {
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

    const [state, dispatch] = useReducer(reducer, defaultColorsValue);

    const { red, green, blue } = state;

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

    const handleChangeColorVarReducer = (color, action) => {
        const colorIntensity = 255 * 0.05;
        const newIncValue = state[color] + colorIntensity;
        const newDecValue = state[color] - colorIntensity;

        switch (action) {
            case 'increment':
                newIncValue <= 255 && dispatch({ type: action, value: newIncValue, color });
                break;
            case 'decrement':
                newDecValue >= 0 && dispatch({ type: action, value: newDecValue, color });
                break;
            default:
                break;
        }
    };

    return (
        <View style={{ height: 2000 }}>
            <Text style={styles.textStyle}>Square Color Adjuster!</Text>

            <Text style={styles.textStyle}>Using Use State Hook!</Text>

            <ColorCounter color='Red' onChange={handleChangeColorsValue} />
            <ColorCounter color='Green' onChange={handleChangeColorsValue} />
            <ColorCounter color='Blue' onChange={handleChangeColorsValue} />

            <View style={{ width: 100, height: 100, backgroundColor: `rgba(${colors.red}, ${colors.green}, ${colors.blue}, 1)` }} />

            {/* <Text>Value: Red {colors.red}</Text>
            <Text>Value: Green {colors.green}</Text>
            <Text>Value: Blue {colors.blue}</Text> */}

            <Text style={styles.textStyle}>Using Reducer Hook!</Text>

            <ColorCounter color='Red' onChange={handleChangeColorVarReducer} />
            <ColorCounter color='Green' onChange={handleChangeColorVarReducer} />
            <ColorCounter color='Blue' onChange={handleChangeColorVarReducer} />

            <View style={{ width: 100, height: 100, backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)` }} />

            <Text>Value: Red {red}</Text>
            <Text>Value: Green {green}</Text>
            <Text>Value: Blue {blue}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default SquareScreen;