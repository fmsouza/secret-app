import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactModal from 'react-native-modalbox'; // Reference: https://github.com/maxs15/react-native-modalbox
import * as Colors from '../../../common/styles/colors';

export default class Modal extends React.Component {

    close = () => this.refs.modal.close();

    open = () => this.refs.modal.open();

    renderTitle(title) {
        return title && (
            <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderTitle}>{title}</Text>
            </View>
        );
    }

    render() {
        const { children, title, ...props } = this.props;
        return (
            <ReactModal
                swipeToClose
                ref={"modal"}
                position={"center"}
                style={styles.modal}
                animationDuration={250}
                {...props}
            >
                {this.renderTitle(title)}
                <View style={styles.modalBody}>
                    {children}
                </View>
            </ReactModal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        height: 200,
        width: 300,
        backgroundColor: Colors.WHITE,
        borderRadius: 2,
        elevation: 10
    },
    modalHeader: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 30,
        paddingHorizontal: 10
    },
    modalHeaderTitle: {
        color: Colors.GREY500
    },
    modalBody: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        height: 170
    }
});