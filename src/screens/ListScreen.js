import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const pets = [
        {
            id: '1',
            name: 'Bruno',
            color: 'Brown',
        },
        {
            id: '2',
            name: 'Blacky',
            color: 'Black',
        },
        {
            id: '3',
            name: 'Reddy',
            color: 'Red',
        },
    ];

    return (
        <View>
            <Text style={ styles.textStyle }>My Dogs List</Text>
            <FlatList 
                keyExtractor={( item ) => { item.id }}
                data={ pets } 
                renderItem={({ item }) => {
                    return <Text>{ item.name }</Text>;
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default ListScreen;