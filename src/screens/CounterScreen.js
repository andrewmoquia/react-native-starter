import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CounterScreen = () => {

    const defaultCounterVal = 0;

    const [counter, setCounter] = useState(defaultCounterVal);

    const handleCounterAction = (action) => {
        switch (action) {
            case 'increment':
                setCounter(counter + 1);
                break;
            case 'decrement':
                setCounter(counter - 1);
                break;
            default:
                setCounter(counter);
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

            <Text>Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default CounterScreen;