import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {

    const handleButtonPress = () => {
        console.log('Button pressed!');
    }; 

    const handleListPress = () => {
        console.log("List pressed!");
    };

    return (
        <View>
            <Text style={ styles.text }>Home!</Text>
            <Button 
                title="Components"
                onPress={ handleButtonPress }
            />
            <TouchableOpacity onPress={ handleListPress }>
                <Text>First Exercise</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 45,
    },
});

export default HomeScreen;
