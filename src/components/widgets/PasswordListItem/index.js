import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Icon } from 'components/widgets';
import { Color, Font } from 'common/styles';

export default ({ title, onPress, onPressRemove, ...props }) => (
    <View style={styles.container}>
        <SwipeRow disableRightSwipe closeOnRowPress rightOpenValue={-50} onRowPress={onPress}>
            <View style={styles.rowBack}>
                <View />
                <TouchableHighlight onPress={onPressRemove}>
                    <View>
                        <Icon name="trash" color={Color.WHITE} />
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.rowFront}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </SwipeRow>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderColor: Color.GREY400,
        borderBottomWidth: 1,
        height: 50,
        justifyContent: 'center',
    },
    title: {
        color: Color.BLACK,
        fontSize: Font.BASE,
    },
    rowBack: {
		alignItems: 'center',
		backgroundColor: Color.DANGER,
		flex: 1,
		flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingRight: 15
    },
    rowFront: {
		alignItems: 'flex-start',
		backgroundColor: Color.INDIGO50,
		justifyContent: 'center',
        height: 50
    }
});