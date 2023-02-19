import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_COUNT_VALUE':
            return { ...state, count: payload.count };
        default:
            return state;
    }
};

const CounterScreenWithReducer = () => {

    const defaultCounterVal = {
        count: 0,
    };

    const [state, dispatch] = useReducer(reducer, defaultCounterVal);
    const { count } = state;

    const handleCounterAction = (action) => {
        switch (action) {
            case 'increment':
                dispatch({ type: 'CHANGE_COUNT_VALUE', payload: { count: count + 1 } });
                break;
            case 'decrement':
                dispatch({ type: 'CHANGE_COUNT_VALUE', payload: { count: count - 1 } });
                break;
            default:
                break;
        }
    };

    return (
        <View>
            <Text style={styles.textStyle}>Counter Screen!</Text>

            <TouchableOpacity onPress={() => handleCounterAction('increment')}>
                <Text>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCounterAction('decrement')}>
                <Text>Decrease</Text>
            </TouchableOpacity>

            <Text>Count: {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default CounterScreenWithReducer;