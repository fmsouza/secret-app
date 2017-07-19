import React from 'react';
import { BackHandler, Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import * as stores from './src/common/stores';
import Router, { INITIAL_ROUTE } from './src';

useStrict(true);

export default class Application extends React.Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
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
                <Router />
            </Provider>
        );
    }
}