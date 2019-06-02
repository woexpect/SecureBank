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
    StatusBar,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
//================================ Component Importation ================================
import { Navigation } from "react-native-navigation";
import DateTimePicker from "react-native-modal-datetime-picker";
import TopLogo from '../../Components/TopLogo/TopLogo';
import CTAButton from '../../Components/CTAButton/CTAButton';
import CustomInputText from '../../Components/CustomInputText/CustomInputText';
import Validations from '../../Components/LogicalComponents/Validations';
//================================ Multimedia Importation ================================
import calendarIcon from '../../resources/icons/calendar.png';
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class CreditFormScreen extends Component {

    state = {
        isDateTimePickerVisible: false,
        pickedDate: undefined,
        name: undefined,
        nit: undefined,
        incomes: undefined
    }

    constructor(props) {
        super(props);
        validations = new Validations();
    }

    componentDidMount() {
        Platform.OS == 'ios' ? undefined : StatusBar.setBackgroundColor('#FFFFFF', true);
        StatusBar.setBarStyle('dark-content', true);
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        let datePicked = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        this.hideDateTimePicker();
        this.setState({
            pickedDate: datePicked
        })
    };

    attempCredit = () => {
        let obj = {
            name: this.state.name,
            nit: this.state.nit,
            incomes: this.state.incomes,
            laboralDate: this.state.pickedDate
        }
        let val = validations.validateCreditForm(obj);
        if (val.validationsOK) {
            let creditResponse = validations.approveCredit(obj);
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'navigation.secure.bank.CreditStatusScreen',
                    passProps: {
                        success: creditResponse.approved,
                        creditValue: creditResponse.credit
                    },
                    options: {
                        topBar: {
                            visible: false,
                            height: 0
                        }
                    }
                }
            });
        } else {
            Alert.alert("Atención.",
                val.message,
                [
                    { text: 'Continuar', onPress: () => console.log("Inconsistencias CreditFormScreen") },
                ],
                { cancelable: true }
            );
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={[styles.contentContainer, Platform.OS == 'ios' ? { marginTop: 16 } : undefined]}>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                    <TopLogo small={true} />
                    <View style={styles.textBanner}>
                        <Text style={styles.titleBig}>Formulario de solicitud de crédito.</Text>
                        <CustomInputText small={true} itPlaceholderColor={"#FE5D26"} underlineColor={"#FE5D26"} label={"Nombre de la empresa donde labora"} keyboardType={"default"} mandatory={true} aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.12 }} onChangeText={(text) => this.setState({ name: text })} />
                        <CustomInputText small={true} itPlaceholderColor={"#FE5D26"} underlineColor={"#FE5D26"} label={"NIT de la empresa donde labora"} keyboardType={"number-pad"} mandatory={true} aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.02 }} onChangeText={(text) => this.setState({ nit: text })} />
                        <CustomInputText small={true} itPlaceholderColor={"#FE5D26"} underlineColor={"#FE5D26"} label={"Ingresos actuales por salario"} keyboardType={"number-pad"} mandatory={true} aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.02 }} onChangeText={(text) => this.setState({ incomes: text })} />
                        <View>
                            <CustomInputText small={true} tiValue={this.state.pickedDate} itPlaceholderColor={"#FE5D26"} underlineColor={"#FE5D26"} label={"Fecha de ingreso a la empresa donde labora"} keyboardType={"default"} mandatory={true} aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.02 }} onChangeText={(text) => this.setState({ laboralDate: text })} />
                            <TouchableOpacity style={styles.calendarContainer} onPress={this.showDateTimePicker}>
                                <Image source={calendarIcon} style={styles.calendarIconStyle} />
                            </TouchableOpacity>
                        </View>
                        <CTAButton aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.12 }} small={true} buttonColor={"#FE5D26"} buttonTextColor={"#FFFFFF"} label={"ENVIAR"} onPress={this.attempCredit} />
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
        marginTop: DEVICE_HEIGHT * 0.032,
    },
    titleBig: {
        fontFamily: 'Lato-Bold',
        color: '#FE5D26',
        fontSize: DEVICE_HEIGHT * 0.024,
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
});