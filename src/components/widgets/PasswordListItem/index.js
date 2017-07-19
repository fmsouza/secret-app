import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    title: {

    }
});

export default ({ title, ...props }) => (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>
);