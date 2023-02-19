import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import { FlatList } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {

    const { navigate } = navigation;

    const pages = [
        { page: 'Components' },
        { page: 'FirstExercise' },
        { page: 'ImageScreen' },
        { page: 'CounterScreen' },
        { page: 'ColorScreen' },
        { page: 'SquareScreen' },
        { page: 'CounterScreenWithReducer' },
        { page: 'TextScreen' },
    ];

    const handlePageSwitch = (page) => navigate(page);

    return (
        <View>
            <Text style={styles.text}>Home!</Text>
            <FlatList
                vertical={true}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item) => item.page}
                data={pages}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => handlePageSwitch(item.page)}>
                            <Text>{item.page}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
            {/* <Button 
                title="Components"
                onPress={ handleButtonPress }
            /> */}
            {/* <TouchableOpacity onPress={ () => handlePageSwitch('Components') }>
                <Text>Components</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => handlePageSwitch('FirstExercise') }>
                <Text>First Exercise</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => handlePageSwitch('ImageScreen') }>
                <Text>Image Screen</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 45,
    },
});

export default HomeScreen;
