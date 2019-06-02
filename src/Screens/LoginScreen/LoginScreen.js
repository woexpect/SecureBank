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
    StatusBar
} from 'react-native';
//================================ Component Importation ================================
import { Navigation } from "react-native-navigation";
import TopLogo from "../../Components/TopLogo/TopLogo";
import CTAButton from '../../Components/CTAButton/CTAButton';
import SecondaryButton from '../../Components/SecondaryButton/SecondaryButton';
import CustomInputText from '../../Components/CustomInputText/CustomInputText';
//================================ Multimedia Importation ================================
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class LoginScreen extends Component {
    
    componentDidMount() {
        Platform.OS == 'ios' ? undefined : StatusBar.setBackgroundColor('#FFFFFF', true);
        StatusBar.setBarStyle('dark-content', true);
    }

    goToMainPage = () => {
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

    goToRegistrationScreen = () => {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [{
                        component: {
                            name: "navigation.secure.bank.RegistrationScreen"
                        }
                    }],
                    options: {
                        topBar: {
                            visible: false,
                            height: 0
                        }
                    }
                }
            }
        });
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={[styles.contentContainer, Platform.OS == 'ios' ? { marginTop: 16 } : undefined]}>
                    <TopLogo />
                    <View style={styles.textBanner}>
                        <Text style={styles.titleBig}>Bienvenido de vuelta a tu banca de confianza.</Text>
                        <Text style={styles.grayTextBig}>Por favor, ingresa para poder continuar.</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <CustomInputText
                            itPlaceholderColor={"#959595"}
                            underlineColor={"#7EBC89"}
                            label={"Correo"}
                            keyboardType={"email-address"}
                            password={false} />
                        <CustomInputText
                            itPlaceholderColor={"#959595"}
                            underlineColor={"#7EBC89"}
                            label={"Contraseña"}
                            aditionalStyle={{ marginTop: 24 }}
                            keyboardType={"default"}
                            password={true} />
                        <CTAButton aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.08 }} buttonColor={"#7EBC89"} buttonTextColor={"#FFFFFF"} label={"Ingresa"} onPress={this.goToMainPage} />
                        <SecondaryButton buttonTextColor={"#7EBC89"} label={"Crear una cuenta"} onPress={this.goToRegistrationScreen} />
                    </View>
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
        height: DEVICE_HEIGHT * 0.92224
    },
    textBanner: {
        width: '100%',
        height: DEVICE_HEIGHT * 0.1908,
        //backgroundColor: 'tomato',
        marginTop: DEVICE_HEIGHT * 0.08,
    },
    titleBig: {
        fontFamily: 'Lato-Bold',
        color: '#2B422F',
        fontSize: DEVICE_HEIGHT * 0.032,
    },
    grayTextBig: {
        fontFamily: 'Lato',
        color: '#959595',
        fontSize: DEVICE_HEIGHT * 0.024,
        marginTop: DEVICE_HEIGHT * 0.04,
    },
    formContainer: {
        //backgroundColor: 'tomato',
        height: DEVICE_HEIGHT * 0.08,
        marginTop: DEVICE_HEIGHT * 0.16,
    }
});