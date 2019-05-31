import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
//================================ Component Importation ================================
//================================ Multimedia Importation ================================
//================================ End of imports ================================
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class CTAButton extends Component {

    onPressAction = () => {
        this.props.onPress();
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.ctaButton, { backgroundColor: this.props.buttonColor }, this.props.aditionalStyle]}
                onPress={this.onPressAction}>
                <Text style={[styles.ctaButtonText, { color: this.props.buttonTextColor }]}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    ctaButton: {
        width: '100%',
        height: DEVICE_HEIGHT * 0.0583,
        borderTopLeftRadius: DEVICE_HEIGHT * 0.0182,
        borderBottomRightRadius: DEVICE_HEIGHT * 0.0182,
        //marginTop: DEVICE_HEIGHT * 0.08,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ctaButtonText: {
        fontFamily: 'Lato-Bold',
        color: '#FFFFFF',
        fontSize: DEVICE_HEIGHT * 0.024,
    },
});