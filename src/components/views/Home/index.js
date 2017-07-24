import React from 'react';
import { Button, Clipboard, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Header, Icon } from 'components/widgets';
import * as Action from 'common/actions';
import { Color, Font } from 'common/styles';
import PasswordModal from './PasswordModal';
import PasswordListItem from './PasswordListItem';

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

    onPressItem(item) {
        const password = Action.decrypt(item.password);
        Clipboard.setString(password);
    }

    renderItems() {
        const { passwords: { list } } = this.props;
        return (list.length === 0) ? <Text>No items were saved yet.</Text> : (
            list.map((item, index) => (
                <PasswordListItem
                    {...item}
                    key={index}
                    onPressItem={() => this.onPressItem(item)}
                    onPressRemove={() => Action.removePassword(item)}
                />
            ))
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header style={styles.whiteText}>Secrets</Header>
                    <Icon name="add" style={styles.headerIcon} color={Color.WHITE} onPress={() => this.refs.modal.open()} />
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
        backgroundColor: Color.primary,
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
        backgroundColor: Color.primaryLight,
        borderRadius: 1,
        paddingHorizontal: 5,
        flex: 9
    },
    whiteText: {
        color: Color.WHITE
    }
});