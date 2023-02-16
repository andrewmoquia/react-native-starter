import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    const images = [
        { title: 'Forest', imgeSrc: require('../../assets/forest.jpg'), imgScore: 9 },
        { title: 'Beach', imgeSrc: require('../../assets/beach.jpg'), imgScore: 7 },
        { title: 'Mountain', imgeSrc: require('../../assets/mountain.jpg'), imgScore: 4 },
    ];
    return (
        <View>
            <ImageDetail props={images[0]} />
            <ImageDetail props={images[1]} />
            <ImageDetail props={images[2]} />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
    }
});

export default ImageScreen;