import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Views from './components/views';

export const INITIAL_ROUTE = 'home';

export default StackNavigator({
    home: { screen: Views.Home },
    second: { screen: Views.Second },
}, {
    initialRouteName: INITIAL_ROUTE,
    navigationOptions: {
        headerStyle: {
            height: Platform.OS === "ios" ? 64 : (56 + StatusBar.currentHeight),
            paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight
        }
    }
});