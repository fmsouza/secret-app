import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactModal from 'react-native-modalbox'; // Reference: https://github.com/maxs15/react-native-modalbox
import { Color } from 'common/styles';

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
        const { children, modalStyle, contentStyle, title, ...props } = this.props;
        return (
            <ReactModal
                swipeToClose
                ref="modal"
                position="center"
                style={[styles.modal, modalStyle]}
                animationDuration={250}
                {...props}
            >
                {this.renderTitle(title)}
                <View style={[styles.modalBody, contentStyle]}>
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
        backgroundColor: Color.WHITE,
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
        color: Color.GREY500
    },
    modalBody: {
        paddingHorizontal: 10,
        paddingBottom: 10
    }
});