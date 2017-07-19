import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Colors from '../../common/styles/colors';
import * as Font from '../../common/styles/font';
import { Header, Icon, PasswordListItem } from '../widgets';

export class Home extends React.Component {

    static navigationOptions = {
        title: 'Home page',
        headerStyle: { display: 'none' }
    }

    state = { list: [] };

    renderItems() {
        const { list } = this.state;
        return (list.length === 0) ? <Text>No items were saved.</Text> : (
            list.map((item, index) => <PasswordListItem key={index} {...item} />)
        );
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header style={styles.whiteText}>Hello lad!</Header>
                    <Icon name="settings" color={Colors.WHITE} />
                </View>
                <View style={styles.content}>
                    {this.renderItems()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    header: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
    },
    content: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: Colors.INDIGO50,
        borderRadius: 4,
        padding: 10,
        flex: 9,
        elevation: 3
    },
    whiteText: {
        color: Colors.WHITE
    }
});