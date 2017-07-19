import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default ({ name, ...props }) => (
    <Ionicons name={`${Platform.OS === 'android' ? 'md' : 'ios'}-${name}`} size={24} {...props} />
);