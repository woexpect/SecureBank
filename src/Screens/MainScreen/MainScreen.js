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
} from 'react-native';
//================================ Component Importation ================================
import TopLogo from '../../Components/TopLogo/TopLogo';
import CTAButton from '../../Components/CTAButton/CTAButton';
import ProductCard from '../../Components/ProductCard/ProductCard';
import FABMenu from '../../Components/FABMenu/FABMenu';
//================================ Multimedia Importation ================================
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class MainScreen extends Component {

    componentDidMount() {
        Platform.OS == 'ios' ? undefined : StatusBar.setBackgroundColor('#FAFAFA', true);
        StatusBar.setBarStyle('dark-content', true);
    }

    render() {
        return (
            <View style={styles.main}>
                <FABMenu />
                <View style={[styles.contentContainer, Platform.OS == 'ios' ? { marginTop: 16 } : undefined]}>
                    <TopLogo small={true} />
                    <View style={styles.textBanner}>
                        <Text style={styles.titleBig}>Tus productos, Carlos.</Text>
                        <Text style={styles.grayTextBig}>A continuación se muestra la lista de productos financieros que has adquirido con nuestra entidad al día de hoy.</Text>
                    </View>
                    <View style={styles.scrollContainer}>
                        <ScrollView >
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </ScrollView>
                    </View>
                    <CTAButton small={true} buttonColor={"#FE5D26"} buttonTextColor={"#FFFFFF"} label={"SOLICITAR NUEVO CRÉDITO"} onPress={this.alertWithDate} />
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
    scrollContainer: {
        width: '100%',
        height: DEVICE_HEIGHT * 0.467,
        //backgroundColor: 'tomato'
    }
});