import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import * as Action from '../../../common/actions';
import * as Colors from '../../../common/styles/colors';
import * as Font from '../../../common/styles/font';
import { Header, Icon, PasswordListItem } from '../../widgets';
import PasswordModal from './newPasswordModal';

@inject('passwords')
@observer
export class Home extends React.Component {

    static navigationOptions = {
        title: 'Home page',
        headerStyle: { display: 'none' }
    }

    onSubmit(obj) {
        Action.createPassword(obj);
    }

    onPressPassword(item) {
        console.log("Clicked on", item);
    }

    onPressRemove(item) {
        console.log("Clicked to remove", item.title);
    }

    renderItems() {
        const { passwords: { list } } = this.props;
        return (list.length === 0) ? <Text>No items were saved yet.</Text> : (
            list.map((item, index) => (
                <PasswordListItem
                    {...item}
                    key={index}
                    onPress={() => this.onPressPassword(item)}
                    onPressRemove={() => this.onPressRemove(item)}
                />
            ))
        );
    }

    render() {
        const { navigation } = this.props;
        
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header style={styles.whiteText}>Secrets</Header>
                    <Icon name="add" style={styles.headerIcon} color={Colors.WHITE} onPress={() => this.refs.modal.open()} />
                </View>
                <View style={styles.content}>
                    <ScrollView children={this.renderItems()} />
                </View>
                <PasswordModal ref="modal" onSubmit={(data) => this.onSubmit(data)} />
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
    headerIcon: {
        marginRight: 2
    },
    content: {
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        backgroundColor: Colors.primaryLight,
        borderRadius: 1,
        paddingHorizontal: 5,
        flex: 9
    },
    whiteText: {
        color: Colors.WHITE
    }
});