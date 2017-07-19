import React from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Font from '../../../common/styles/font';

const styles = StyleSheet.create({
    header: { fontSize: Font.MEDIUM }
});

export default ({ style, ...props }) => (
    <Text {...props} style={StyleSheet.flatten([style, styles.header])} />
);