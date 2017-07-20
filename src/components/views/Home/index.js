import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import * as Colors from '../../../common/styles/colors';
import * as Font from '../../../common/styles/font';
import { Header, Icon, PasswordListItem } from '../../widgets';
import list from './mock';

export class Home extends React.Component {

    static navigationOptions = {
        title: 'Home page',
        headerStyle: { display: 'none' }
    }

    state = { list };

    onPressRemove() {
        console.log("Clicked to remove");
    }

    renderItems() {
        const { list } = this.state;
        return (list.length === 0) ? <Text>No items were saved.</Text> : (
            list.map((item, index) => <PasswordListItem key={index} {...item} onPressRemove={this.onPressRemove} />)
        );
    }

    render() {
        const { navigation } = this.props;
        
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header style={styles.whiteText}>Hello lad!</Header>
                    <Icon name="settings" color={Colors.WHITE} onPress={() => navigation.navigate('second')} />
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        {this.renderItems()}
                    </ScrollView>
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
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        backgroundColor: Colors.INDIGO50,
        borderRadius: 4,
        paddingHorizontal: 5,
        flex: 9,
        elevation: 3
    },
    whiteText: {
        color: Colors.WHITE
    }
});