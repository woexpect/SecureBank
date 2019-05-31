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

export default class ProductCard extends Component {

    onPressAction = () => {
        this.props.onPress();
    }

    render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.cashContainer}>
                        <Text style={styles.title}>Saldo disponible</Text>
                        <Text style={styles.cash}>$3,467,701.69</Text>
                    </View>
                    <View style={styles.accountContainer}>
                        <Text style={styles.subtitle}>Cuenta de ahorros</Text>
                        <Text style={styles.subtitleNumber}>432401235648</Text>
                        <View style={{width: '100%', height: '100%', justifyContent: 'flex-end', position: 'absolute'}}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>VER DETALLES</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        height: DEVICE_HEIGHT * 0.2, 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        //backgroundColor: 'tomato' 
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '95%',
        height: DEVICE_HEIGHT * 0.132,
        borderRadius: DEVICE_HEIGHT * 0.01,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cashContainer: {
        //backgroundColor: 'red',
        width: '70%',
        height: '100%'
    },
    accountContainer: {
        //backgroundColor: 'green',
        width: '30%',
        height: '100%',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'Lato-Regular',
        fontSize: DEVICE_HEIGHT * 0.02,
        color: '#2B422F',
        marginTop: DEVICE_HEIGHT * 0.0128,
        marginLeft: DEVICE_HEIGHT * 0.0128,
    },
    cash: {
        fontFamily: 'Lato-Regular',
        fontSize: DEVICE_HEIGHT * 0.024,
        color: '#2B2B2B',
        marginTop: DEVICE_HEIGHT * 0.0128,
        marginLeft: DEVICE_HEIGHT * 0.0128,
    },
    subtitle: {
        fontFamily: 'Lato-Regular',
        fontSize: DEVICE_HEIGHT * 0.011,
        color: '#2B2B2B',
        marginTop: DEVICE_HEIGHT * 0.0128,
        marginRight: DEVICE_HEIGHT * 0.0128,
    },
    subtitleNumber: {
        fontFamily: 'Lato-Bold',
        fontSize: DEVICE_HEIGHT * 0.011,
        color: '#2B2B2B',
        marginTop: DEVICE_HEIGHT * 0.0128,
        marginRight: DEVICE_HEIGHT * 0.0128,
    },
    buttonStyle: {
        width: '100%',
        height: DEVICE_HEIGHT * 0.03,
        borderTopLeftRadius: DEVICE_HEIGHT * 0.01,
        borderBottomRightRadius: DEVICE_HEIGHT * 0.01,
        backgroundColor: '#F2C078',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTextStyle: {
        fontFamily: 'Lato-Bold',
        fontSize: DEVICE_HEIGHT * 0.011,
        color: '#FFFFFF'
    }
});