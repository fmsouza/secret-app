import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Modal } from '../../widgets';

export default class NewPasswordModal extends React.Component {

    state = { title: '', password: '' };

    open = () => this.refs.modal.open();

    onSubmit({ title, password }) {
        const { onSubmit } = this.props;
        if (title !== '' && password !== '') {
            onSubmit({ title, password });
            this.setState({ title: '', password: '' });
            this.refs.modal.close();
        }
    }

    render() {
        return (
            <Modal modalStyle={styles.container} contentStyle={styles.modalBody} title="New Password" ref="modal">
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="sentences"
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                    placeholder="Title"
                />
                <TextInput
                    style={styles.textInput}
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    placeholder="Type the password here..."
                />
                <Button style={styles.button} onPress={() => this.onSubmit(this.state)} title="Save" />
                <Button style={styles.button} onPress={() => this.refs.modal.close()} title="Close" />
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 250
    },
    modalBody: {
        justifyContent: 'space-around',
        height: 220
    },
    textInput: {
        height: 50
    },
    button: {
        marginBottom: 10
    }
});