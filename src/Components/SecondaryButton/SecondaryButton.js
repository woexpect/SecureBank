import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
//================================ Component Importation ================================
//================================ Multimedia Importation ================================
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class SecondaryButton extends Component {

    onPressAction = () => {
        this.props.onPress();
    }

    render() {
        return (
            <TouchableOpacity 
                style={[styles.secondaryButton, this.props.aditionalStyle]} 
                onPress={this.onPressAction}>
                <Text style={[styles.secondaryButtonText, {color: this.props.buttonTextColor}]}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    secondaryButton: {
        width: '100%',
        height: DEVICE_HEIGHT * 0.0583,
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondaryButtonText: {
        fontFamily: 'Lato-Regular',
        color: '#7EBC89',
    }
});