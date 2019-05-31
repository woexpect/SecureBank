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
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
//================================ Component Importation ================================
//================================ Multimedia Importation ================================
import shell from '../../resources/shell.png';
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class LoginScreen extends Component {

    componentDidMount() {
        Platform.OS == 'ios' ? undefined : StatusBar.setBackgroundColor('#FFFFFF', true);
        StatusBar.setBarStyle('dark-content', true);
    }

    render() {
        let underline = Platform.OS == 'ios' ? (<View style={styles.underlineLike}></View>) : (<View />);
        return (
            <View style={styles.main}>
                <View style={[styles.contentContainer, Platform.OS == 'ios' ? {marginTop: 16} : undefined]}>
                    <View style={styles.logoContainer}>
                        <Image source={shell} style={styles.logoStyle} resizeMode={'contain'} />
                        <Text style={styles.logoFont}>Secure Bank</Text>
                    </View>
                    <View style={styles.textBanner}>
                        <Text style={styles.titleBig}>Bienvenido de vuelta a tu banca de confianza.</Text>
                        <Text style={styles.grayTextBig}>Por favor, ingresa para poder continuar.</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.placeholderLike}>Correo</Text>
                        <TextInput style={[styles.textInputStyle, Platform.OS == 'ios' ? { paddingTop: 18, height: '64%', } : undefined]}
                            underlineColorAndroid="#7EBC89">sebaspp95@gmail.com</TextInput>
                        {
                            underline
                        }
                        <Text style={[styles.placeholderLike, {marginTop: 24}]}>Contraseña</Text>
                        <TextInput style={[styles.textInputStyle, Platform.OS == 'ios' ? { paddingTop: 18, height: '64%', } : undefined]}
                            underlineColorAndroid="#7EBC89"
                            secureTextEntry={true}></TextInput>
                        {
                            underline
                        }
                        <TouchableOpacity style={styles.ctaButton}>
                            <Text style={styles.ctaButtonText}>Ingresa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryButton}>
                            <Text style={styles.secondaryButtonText}>Crear una cuenta</Text>
                        </TouchableOpacity>
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
    grayTextBig:{
        fontFamily: 'Lato',
        color: '#959595',
        fontSize: DEVICE_HEIGHT * 0.024,
        marginTop: DEVICE_HEIGHT * 0.04,
    },
    formContainer:{
        //backgroundColor: 'tomato',
        height: DEVICE_HEIGHT * 0.08,
        marginTop: DEVICE_HEIGHT * 0.16,
    },
    placeholderLike: {
        color: '#959595',
        fontFamily: 'Lato',
        fontSize: DEVICE_HEIGHT * 0.02, 
    },
    textInputStyle: {
        //backgroundColor: 'green',
        width: '100%',
        height: '80%',
    },
    underlineLike: {
        width: '100%',
        height: 1,
        backgroundColor: '#7EBC89'
    },
    ctaButton: {
        backgroundColor: '#7EBC89',
        width: '100%',
        height: DEVICE_HEIGHT * 0.0583,
        borderTopLeftRadius: DEVICE_HEIGHT * 0.0182,
        borderBottomRightRadius: DEVICE_HEIGHT * 0.0182,
        marginTop: DEVICE_HEIGHT * 0.08,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ctaButtonText: {
        fontFamily: 'Lato-Bold',
        color: '#FFFFFF',
        fontSize: DEVICE_HEIGHT * 0.024,
    },
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