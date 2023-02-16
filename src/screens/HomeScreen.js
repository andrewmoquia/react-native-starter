import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    
    const { navigate } = navigation;

    const handleButtonPress = () => {
        console.log('Button pressed!');
        navigate('Components');
    }; 

    const handleListPress = () => {
        console.log("List pressed!");
        navigate('FirstExercise');
    };
    
    const handleImagePress = () => {
        console.log("Image Screen pressed!");
        navigate('ImageScreen');
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
            <TouchableOpacity onPress={ handleImagePress }>
                <Text>Image Screen</Text>
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
