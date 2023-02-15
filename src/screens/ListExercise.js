import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListExercise = () => {

    const friends = [
        { id: '1', name: 'Friend 1', age: 20 },
        { id: '2', name: 'Friend 2', age: 45 },
        { id: '3', name: 'Friend 3', age: 32 },
        { id: '4', name: 'Friend 4', age: 27 },
        { id: '5', name: 'Friend 5', age: 53 },
        { id: '6', name: 'Friend 6', age: 30 }, 
    ]

    return (
        <View>
            <Text style={ styles.textStyle }>List Exercise!</Text>
            <FlatList 
                vertical={ true }
                showsVerticalScrollIndicator={ true }
                keyExtractor={ (item ) => item.id }
                data={ friends }
                renderItem={ ({ item }) => {
                    return <Text style={ styles.verticalListStyle }>{item.name} - {item.age}</Text>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    verticalListStyle: {
        fontSize: 17,
        marginTop: 10,
        marginVertical: 20,
    }
});

export default ListExercise;