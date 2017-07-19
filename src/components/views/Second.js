import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, Button } from 'react-native';

@inject('counter')
@observer
export class Second extends React.Component {

    static navigationOptions = { title: 'Second page' }

    render() {
        const { counter, navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Counter: {counter.count}</Text>
                <Button
                    title="Increment"
                    onPress={() => counter.increment()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});