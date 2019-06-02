import { Navigation } from "react-native-navigation";
//================================ Screen Importation ================================
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import MainScreen from './src/Screens/MainScreen/MainScreen';
import CreditFormScreen from './src/Screens/CreditFormScreen/CreditFormScreen';
import CreditStatusScreen from './src/Screens/CreditStatusScreen/CreditStatusScreen';
//================================ End of imports ================================
//================================ Screen Registration for RNN ================================
Navigation.registerComponent('navigation.secure.bank.LoginScreen', () => LoginScreen);
Navigation.registerComponent('navigation.secure.bank.RegistrationScreen', () => RegistrationScreen);
Navigation.registerComponent('navigation.secure.bank.MainScreen', () => MainScreen);
Navigation.registerComponent('navigation.secure.bank.CreditFormScreen', () => CreditFormScreen);
Navigation.registerComponent('navigation.secure.bank.CreditStatusScreen', () => CreditStatusScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: "navigation.secure.bank.MainScreen"
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
});