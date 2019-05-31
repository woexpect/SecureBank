import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image
} from 'react-native';
//================================ Component Importation ================================
//================================ Multimedia Importation ================================
import shell from '../../resources/shell.png';
//================================ End of imports ================================
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class CustomInputText extends Component {

    onPressAction = () => {
        this.props.onPress();
    }

    render() {
        return (
            <View style={styles.logoContainer}>
                <Image source={shell} style={styles.logoStyle} resizeMode={'contain'} />
                <Text style={styles.logoFont}>Secure Bank</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        width: '100%',
        height: DEVICE_HEIGHT * 0.068,
        //backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoStyle: {
        height: '100%',
        width: DEVICE_HEIGHT * 0.056,
    },
    logoFont: {
        fontFamily: 'Lora-Bold',
        fontSize: DEVICE_HEIGHT * 0.032,
        marginLeft: DEVICE_HEIGHT * 0.024,
        color: '#1C2C1F'
    },
});