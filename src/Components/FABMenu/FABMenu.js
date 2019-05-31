import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
//================================ Component Importation ================================
//================================ Multimedia Importation ================================
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class FABMenu extends Component {

    onPressAction = () => {
        this.props.onPress();
    }

    render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity style={styles.fabBox}></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        //backgroundColor: 'red',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    fabBox: {
        width: DEVICE_HEIGHT * 0.097,
        height: DEVICE_HEIGHT * 0.097,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        zIndex: 99
    }
});