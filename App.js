import React from 'react';
import { BackHandler, Platform, StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import * as stores from 'common/stores';
import Router, { INITIAL_ROUTE } from './Router';
import AppConfig from './app.json';
import './setup';

export default class Application extends React.Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (!this.props.navigation) return false;
            const { state, goBack } = this.props.navigation;
            const { index, routes } = state;
            if (routes[index].routeName !== INITIAL_ROUTE) {
                goBack();
                return true;
            }
            return false;
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        return (
            <Provider {...stores}>
                <View style={{ flex: 1 }}>
                    <StatusBar {...AppConfig.expo.androidStatusBar} />
                    <Router />
                </View>
            </Provider>
        );
    }
}