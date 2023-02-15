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
            <Text style={ styles.textStyle }>Horizontal List</Text>
            <FlatList 
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                keyExtractor={( item ) => { item.id }}
                data={ pets } 
                renderItem={({ item }) => {
                    return <Text style={ styles.horizontalStyle }>{ item.name }</Text>;
                }}
            />
            <Text style={ styles.textStyle }>Vertical List</Text>
            <FlatList 
                vertical={ true }
                showsVerticalScrollIndicator={ true }
                keyExtractor={( item ) => { item.id }}
                data={ pets } 
                renderItem={({ item }) => {
                    return <Text style={ styles.verticalStyle }>{ item.name }</Text>;
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    horizontalStyle: {
        fontSize: 24,
        marginHorizontal: 10,
        marginStart: 0,
    },
    verticalStyle: {
        fontSize: 24,
        marginVertical: 10,
        marginTop: 0,
    }
});

export default ListScreen;