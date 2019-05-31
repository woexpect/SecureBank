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
    TouchableOpacity,
    Switch
} from 'react-native';
//================================ Component Importation ================================
import DateTimePicker from "react-native-modal-datetime-picker";
import TopLogo from "../../Components/TopLogo/TopLogo";
import CTAButton from '../../Components/CTAButton/CTAButton';
import SecondaryButton from '../../Components/SecondaryButton/SecondaryButton';
import CustomInputText from '../../Components/CustomInputText/CustomInputText';
//================================ Multimedia Importation ================================
import calendarIcon from '../../resources/icons/calendar.png';
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class RegistrationScreen extends Component {

    state = {
        isDateTimePickerVisible: false,
        pickedDate: undefined,
        tcConditionsAcceptance: false
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        let datePicked = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        console.log("picked date: " + datePicked);
        this.hideDateTimePicker();
        this.setState({
            pickedDate: datePicked
        })
    };

    toggleTC = () => {
        if (this.state.tcConditionsAcceptance) {
            this.setState({
                tcConditionsAcceptance: false
            });
        } else {
            this.setState({
                tcConditionsAcceptance: true
            });
        }
    }

    alertWithDate = () => {
        alert(this.state.pickedDate);
    }

    componentDidMount() {
        Platform.OS == 'ios' ? undefined : StatusBar.setBackgroundColor('#FFFFFF', true);
        StatusBar.setBarStyle('dark-content', true);
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={[styles.contentContainer, Platform.OS == 'ios' ? { marginTop: 16 } : undefined]}>
                    {/* Date picker */}
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                    {/* SB Logo */}
                    <TopLogo />
                    {/* Welcome text */}
                    <View style={styles.textBanner}>
                        <Text style={styles.titleBig}>Bienvenido.</Text>
                        <Text style={styles.grayTextBig}>Por favor regístrate para acceder a nuestros servicios.</Text>
                    </View>
                    {/* Form inputs */}
                    <View style={styles.formContainer}>
                        <View style={styles.nameLnContainer}>
                            <View style={{ width: '50%' }}>
                                <CustomInputText itPlaceholderColor={"#959595"} underlineColor={"#7EBC89"} label={"NOMBRE"} keyboardType={"default"} mandatory={true} aditionalStyle={{ width: '90%' }} />
                            </View>
                            <View style={{ width: '50%' }}>
                                <CustomInputText itPlaceholderColor={"#959595"} underlineColor={"#7EBC89"} label={"APELLIDO"} keyboardType={"default"} mandatory={true}  />
                            </View>
                        </View>
                        <CustomInputText itPlaceholderColor={"#959595"} underlineColor={"#7EBC89"} label={"N° IDENTIFICACIÓN"} keyboardType={"number-pad"} mandatory={true} aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.02 }} />
                        <View>
                            <CustomInputText tiValue={this.state.pickedDate} itPlaceholderColor={"#959595"} underlineColor={"#7EBC89"} label={"FECHA DE NACIMIENTO"} keyboardType={"number-pad"} mandatory={true} aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.02 }} />
                            <TouchableOpacity style={styles.calendarContainer} onPress={this.showDateTimePicker}>
                                <Image source={calendarIcon} style={styles.calendarIconStyle} />
                            </TouchableOpacity>
                        </View>
                        {/* T&C */}
                        <View style={styles.tcConditions}>
                            <Switch value={this.state.tcConditionsAcceptance} onValueChange={this.toggleTC} />
                            <Text style={[styles.txText]}>Acepto los términos y condiciones al registrarme en la base de datos de Secure Bank. <Text style={{ color: '#FE5D26' }}>*</Text></Text>
                        </View>
                        {/* Buttons */}
                        <CTAButton aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.08 }} buttonColor={"#7EBC89"} buttonTextColor={"#FFFFFF"} label={"Regístrate"} onPress={this.alertWithDate} />
                        <SecondaryButton buttonTextColor={"#7EBC89"} label={"Regresar a inicio de sesión"} onPress={this.alertWithDate} />
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
        height: DEVICE_HEIGHT * 0.06,
    },
    nameLnContainer: {
        flexDirection: 'row'
    },
    calendarContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    calendarIconStyle: {
        width: DEVICE_HEIGHT * 0.032,
        height: DEVICE_HEIGHT * 0.032,
        marginBottom: 16,
    },
    tcConditions: {
        width: '100%',
        height: DEVICE_HEIGHT * 0.068,
        //backgroundColor: 'tomato',
        marginTop: DEVICE_HEIGHT * 0.04,
        flexDirection: 'row'
    },
    txText: {
        fontFamily: 'Lato',
        color: '#959595',
        fontSize: DEVICE_HEIGHT * 0.016,
        width: '70%',
        height: '100%',
        marginLeft: '8%'
    },
});