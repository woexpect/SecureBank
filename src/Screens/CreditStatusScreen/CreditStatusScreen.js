/**
 * Designed by woexpect
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';
//================================ Component Importation ================================
import { Navigation } from "react-native-navigation";
import CTAButton from '../../Components/CTAButton/CTAButton';
//================================ Multimedia Importation ================================
import success from '../../resources/success.png';
import fail from '../../resources/fail.png';
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const successTitle = "Felicitaciones, tu solicitud de crédito ha sido pre aprovada por un valor de: ";
const successText = "A continuación te puedes acercar a cualquiera de nuestras sucursales para continuar con el papeleo y tranquilo, ya no tienes que llenar mucho más para hacer efectiva tu solicitud!";
const failTitle = "Lo sentimos, tu solicitud de crédito no ha sido aprovada";
const failText = "Intenta mejorar tu Score de crédito o de validar qué parámetros son escenciales para que puedas aplicar a este tipo de crédito, ánimo la próxima será posible!";

export default class CreditStatusScreen extends Component {

    state = {
        isDateTimePickerVisible: false,
        pickedDate: undefined
    }

    componentDidMount() {
        Platform.OS == 'ios' ? undefined : StatusBar.setBackgroundColor('#FFFFFF', true);
        StatusBar.setBarStyle('dark-content', true);
    }

    toMainMenu = () => {
        Navigation.setStackRoot(this.props.componentId, [
            {
                component: {
                    name: 'navigation.secure.bank.MainScreen',
                    options: {
                        animations: {
                            setStackRoot: {
                                enabled: true
                            }
                        },
                        topBar: {
                            visible: false,
                            height: 0
                        }
                    }
                }
            }
        ]);
    }

    render() {

        let title = this.props.success ? successTitle : failTitle;
        let text = this.props.success ? successText : failText;
        let titleStyle = this.props.success ? styles.successTitleStyle : styles.failTitleStyle;
        let image = this.props.success ? success : fail;
        return (
            <View style={styles.main}>
                <View style={[styles.contentContainer, Platform.OS == 'ios' ? { marginTop: 16 } : undefined]}>
                    <Text style={titleStyle}>{title} {this.props.success ? '$' + this.props.creditValue : undefined}</Text>
                    <Text style={styles.textStyle}>{text}</Text>
                    <Image source={image} style={styles.imageStyle} resizeMode={'contain'} />
                    <CTAButton aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.16 }} small={true} buttonColor={this.props.success ? "#7EBC89" : "#FE5D26"} buttonTextColor={"#FFFFFF"} label={"CONTINUAR"} onPress={this.toMainMenu} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        //backgroundColor: 'tomato',
        width: DEVICE_WIDTH * 0.8443,
        height: DEVICE_HEIGHT * 0.92224,
        alignItems: 'center'
    },
    successTitleStyle: {
        color: '#2B422F',
        fontFamily: 'Lato-Bold',
        fontSize: DEVICE_HEIGHT * 0.024,
        textAlign: 'center',
        marginTop: DEVICE_HEIGHT * 0.09,
    },
    failTitleStyle: {
        color: '#FE5D26',
        fontFamily: 'Lato-Bold',
        fontSize: DEVICE_HEIGHT * 0.028,
        textAlign: 'center',
        marginTop: DEVICE_HEIGHT * 0.09,
    },
    textStyle: {
        color: '#959595',
        textAlign: 'center',
        fontSize: DEVICE_HEIGHT * 0.016,
        marginTop: DEVICE_HEIGHT * 0.032,
    },
    imageStyle: {
        width: DEVICE_HEIGHT * 0.25,
        height: DEVICE_HEIGHT * 0.31,
        marginTop: DEVICE_HEIGHT * 0.08,
    }
});