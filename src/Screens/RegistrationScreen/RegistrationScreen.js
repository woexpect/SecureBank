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
    Switch,
    Alert
} from 'react-native';
//================================ Component Importation ================================
import { Navigation } from "react-native-navigation";
import DateTimePicker from "react-native-modal-datetime-picker";
import TopLogo from "../../Components/TopLogo/TopLogo";
import CTAButton from '../../Components/CTAButton/CTAButton';
import SecondaryButton from '../../Components/SecondaryButton/SecondaryButton';
import CustomInputText from '../../Components/CustomInputText/CustomInputText';
import Validations from '../../Components/LogicalComponents/Validations';
import HTTPOutputs from '../../Components/LogicalComponents/HTTPOutputs';
//================================ Multimedia Importation ================================
import calendarIcon from '../../resources/icons/calendar.png';
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class RegistrationScreen extends Component {

    state = {
        isDateTimePickerVisible: false,
        pickedDate: undefined,
        tcConditionsAcceptance: false,
        rFormName: '',
        rFormLastName: '',
        rFormIDNumber: ''
    }

    constructor(props) {
        super(props);
        validations = new Validations();
        httpout = new HTTPOutputs();
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

    showItems = () => {
        //alert("Nombre: " + this.state.rFormName + " Apellido: " + this.state.rFormLastName + " ID: " + this.state.rFormIDNumber + " fecha nacimiento: " + this.state.pickedDate);
        alert("Mensaje: " + validations.validateBirthDate(this.state.pickedDate));
    }

    attempRegistration = () => {
        let val = validations.validateRegistrationForm(
            {
                name: this.state.rFormName,
                lastName: this.state.rFormLastName,
                idNumber: this.state.rFormIDNumber,
                date: this.state.pickedDate,
            }
        );
        if (val.validationsOK) {
            if (!this.state.tcConditionsAcceptance) {
                alert("Aún no ha aceptado los términos y condiciones.");
            } else {
                let alreadyRegistered = undefined;
                let alreadyRegisteredBool = false;
                httpout.consultateJS()
                    .then((data) => {
                        alreadyRegistered = data;
                        for (o in alreadyRegistered) {
                            console.log(alreadyRegistered[o].identification);
                            if (alreadyRegistered[o].identification == this.state.rFormIDNumber) {
                                alreadyRegisteredBool = true;
                                break;
                            }
                        }
                        if (alreadyRegisteredBool) {
                            Alert.alert("Atención.",
                                "Este número de identificación ya se encuentra registrado.",
                                [
                                    { text: 'Continuar', onPress: () => console.log("Ya registrado") },
                                ],
                                { cancelable: true }
                            );
                        } else {
                            let obj = {
                                "birthdate": this.state.pickedDate,
                                "firstname": this.state.rFormName,
                                "lastname": this.state.rFormLastName,
                                "identification": this.state.rFormIDNumber
                            };
                            httpout.registrationProccess(obj)
                                .then((data) => {
                                    Alert.alert("Felicitaciones.",
                                        "Usted ha sido registrado satisfactoriamente en nuestra plataforma.",
                                        [
                                            { text: 'Continuar', onPress: () => this.goToMainPage() },
                                        ],
                                        { cancelable: true }
                                    );
                                })
                                .catch((error) => {
                                    console.log(error);
                                    // Se carga una alerta para informar del estado
                                    Alert.alert("Error.",
                                        "Ocurrió un problema al tratar de registrar al usuario en la base de datos, inténtelo más tarde.",
                                        [
                                            { text: 'Continuar', onPress: () => console.log("Error registramdo usuario en bd.") },
                                        ],
                                        { cancelable: true }
                                    );
                                });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        // Se carga una alerta para informar del estado
                        Alert.alert("Error.",
                            "Ocurrió un problema al tratar de consultar la base de datos de registros, por favor inténtelo más tarde.",
                            [
                                { text: 'Continuar', onPress: () => console.log("Error consultando registros de bd.") },
                            ],
                            { cancelable: true }
                        );
                    });
            }
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

    goToLoginScreen = () => {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [{
                        component: {
                            name: "navigation.secure.bank.LoginScreen"
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
                                <CustomInputText itPlaceholderColor={"#959595"} underlineColor={"#7EBC89"} label={"NOMBRE"} keyboardType={"default"} mandatory={true} aditionalStyle={{ width: '90%' }} onChangeText={(text) => this.setState({ rFormName: text })} />
                            </View>
                            <View style={{ width: '50%' }}>
                                <CustomInputText itPlaceholderColor={"#959595"} underlineColor={"#7EBC89"} label={"APELLIDO"} keyboardType={"default"} mandatory={true} onChangeText={(text) => this.setState({ rFormLastName: text })} />
                            </View>
                        </View>
                        <CustomInputText itPlaceholderColor={"#959595"} underlineColor={"#7EBC89"} label={"N° IDENTIFICACIÓN"} keyboardType={"number-pad"} mandatory={true} aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.02 }} onChangeText={(text) => this.setState({ rFormIDNumber: text })} />
                        <View>
                            <CustomInputText tiValue={this.state.pickedDate} itPlaceholderColor={"#959595"} underlineColor={"#7EBC89"} label={"FECHA DE NACIMIENTO"} keyboardType={"default"} mandatory={true} aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.02 }} onChangeText={(text) => this.setState({ rFormBirthDate: text })} />
                            <TouchableOpacity style={styles.calendarContainer} onPress={this.showDateTimePicker}>
                                <Image source={calendarIcon} style={styles.calendarIconStyle} />
                            </TouchableOpacity>
                        </View>
                        {/* T&C */}
                        <View style={styles.tcConditions}>
                            <Switch value={this.state.tcConditionsAcceptance} onValueChange={this.toggleTC} />
                            <Text style={[styles.tcText]}>Acepto los términos y condiciones al registrarme en la base de datos de Secure Bank. <Text style={{ color: '#FE5D26' }}>*</Text></Text>
                        </View>
                        {/* Buttons */}
                        <CTAButton aditionalStyle={{ marginTop: DEVICE_HEIGHT * 0.08 }} buttonColor={"#7EBC89"} buttonTextColor={"#FFFFFF"} label={"Regístrate"} onPress={this.attempRegistration} />
                        <SecondaryButton buttonTextColor={"#7EBC89"} label={"Regresar a inicio de sesión"} onPress={this.goToLoginScreen} />
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
    tcText: {
        fontFamily: 'Lato',
        color: '#959595',
        fontSize: DEVICE_HEIGHT * 0.016,
        width: '70%',
        height: '100%',
        marginLeft: '8%'
    },
});