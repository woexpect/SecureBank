import { Navigation } from "react-native-navigation";
//================================ Screen Importation ================================
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import MainScreen from './src/Screens/MainScreen/MainScreen';
//================================ End of imports ================================

//================================ Screen Registration for RNN ================================
Navigation.registerComponent('navigation.secure.bank.LoginScreen', () => LoginScreen);
Navigation.registerComponent('navigation.secure.bank.RegistrationScreen', () => RegistrationScreen);
Navigation.registerComponent('navigation.secure.bank.MainScreen', () => MainScreen);

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