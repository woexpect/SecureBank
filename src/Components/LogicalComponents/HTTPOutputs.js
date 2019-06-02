import React, { Component } from 'react';
import {
    Alert
} from 'react-native';
const FETCH_ERROR = "There has been a problem with your fetch operation: ";
const FETCH_ERROR_POST = "There has been a problem with your post fetch operation: ";

export default class HTTPOutputs extends Component {

    consultateJS = () => {
        return fetch("https://testbankapi.firebaseio.com/clients.json", {
            method: 'get'
        }).then(function (response) {
            if (response.status == 400) {
                Alert.alert("Ups!",
                    "Ha ocurrido un error al tratar de ejecutar el método con los parámetros ingresados.",
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                );
            } else {
                return response.json();
            }
        }).catch(function (error) {
            console.log(FETCH_ERROR + error.message);
            throw error;
        });
    }

    registrationProccess = (input) => {
        return fetch("https://testbankapi.firebaseio.com/clients.json", {
            method: 'post',
            body: JSON.stringify(input)
        }).then(function(response) {
            console.log(response);
            console.log("status: " + response.status);
            return response.json();
        }).catch(function (error) {
            console.log(FETCH_ERROR_POST + error.message);
            throw error;
        });
    }

}