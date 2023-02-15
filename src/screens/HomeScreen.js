import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

    const handleButtonPress = () => {
        console.log('Button pressed!');
        navigation.navigate('Components');
    }; 

    const handleListPress = () => {
        console.log("List pressed!");
        navigation.navigate('FirstExercise');
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
