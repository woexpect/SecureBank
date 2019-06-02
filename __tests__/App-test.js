/**
 * Created by woexpect
 */
import 'react-native';
import React from 'react';
import LoginScreen from '../src/Screens/LoginScreen/LoginScreen';
import RegistrationScreen from '../src/Screens/RegistrationScreen/RegistrationScreen';
import MainScreen from '../src/Screens/MainScreen/MainScreen';
import CreditFormScreen from '../src/Screens/CreditFormScreen/CreditFormScreen';
import CreditStatusScreen from '../src/Screens/CreditStatusScreen/CreditStatusScreen';

import renderer from 'react-test-renderer';

it('renders correctly: LoginScreen', () => {
    renderer.create(<LoginScreen />);
});
it('renders correctly: RegistrationScreen', () => {
    renderer.create(<RegistrationScreen />);
});
it('renders correctly: MainScreen', () => {
    renderer.create(<MainScreen />);
});
it('renders correctly: CreditFormScreen', () => {
    renderer.create(<CreditFormScreen />);
});
it('renders correctly: CreditStatusScreen', () => {
    renderer.create(<CreditStatusScreen />);
});