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

export default class MainScreen extends Component {

    componentDidMount() {
        Platform.OS == 'ios' ? undefined : StatusBar.setBackgroundColor('#FFFFFF', true);
        StatusBar.setBarStyle('dark-content', true);
    }

    render() {
        let underline = Platform.OS == 'ios' ? (<View style={styles.underlineLike}></View>) : (<View />);
        return (
            <View style={styles.main}>
                <View style={[styles.contentContainer, Platform.OS == 'ios' ? { marginTop: 16 } : undefined]}>
                    <View style={styles.logoContainer}>
                        <Image source={shell} style={styles.logoStyle} resizeMode={'contain'} />
                        <Text style={styles.logoFont}>Secure Bank</Text>
                    </View>
                    <View style={styles.textBanner}>
                        <Text style={styles.titleBig}>Tus productos, Carlos.</Text>
                        <Text style={styles.grayTextBig}>A continuación se muestra la lista de productos financieros que has adquirido con nuestra entidad al día de hoy.</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FAFAFA',
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
        width: DEVICE_HEIGHT * 0.032,
    },
    logoFont: {
        fontFamily: 'Lora-Bold',
        fontSize: DEVICE_HEIGHT * 0.024,
        marginLeft: DEVICE_HEIGHT * 0.024,
        color: '#1C2C1F'
    },
    textBanner: {
        width: '100%',
        height: DEVICE_HEIGHT * 0.1908,
        //backgroundColor: 'tomato',
        marginTop: DEVICE_HEIGHT * 0.024,
    },
    titleBig: {
        fontFamily: 'Lato-Bold',
        color: '#2B422F',
        fontSize: DEVICE_HEIGHT * 0.024,
    },
    grayTextBig: {
        fontFamily: 'Lato',
        color: '#959595',
        fontSize: DEVICE_HEIGHT * 0.016,
        marginTop: DEVICE_HEIGHT * 0.024,
    },
});