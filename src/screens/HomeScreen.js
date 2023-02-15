import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
    return (
        <View>
            <Text style={ styles.text }>Home!</Text>
            <Button 
                title="Components"
                onPress={ () => { console.log('Button pressed!') }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 45,
    },
});

export default HomeScreen;
