import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    const images = [
        { title: 'Forest', imageSrc: require('../../assets/forest.jpg') },
        { title: 'Beach', imageSrc: require('../../assets/beach.jpg') },
        { title: 'Mountain', imageSrc: require('../../assets/mountain.jpg') },
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