import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TextInput,
    Platform
} from 'react-native';
//================================ Component Importation ================================
//================================ Multimedia Importation ================================
//================================ End of imports ================================
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class CustomInputText extends Component {

    onPressAction = () => {
        this.props.onPress();
    }

    onChangeTextAction = (text) => {
        this.props.onChangeText(text);
    }

    render() {
        let placeholderStyle = this.props.small ? styles.placeholderLikeSmall : styles.placeholderLike;
        let underline = Platform.OS == 'ios' ? (<View style={[styles.underlineLike, { backgroundColor: this.props.underlineColor}]}></View>) : (<View />);
        let mandatory = this.props.mandatory ? (<Text style={{ color: '#FE5D26' }}>*</Text>) : undefined;
        return (
            <View style={[styles.main, this.props.aditionalStyle]}>
                <Text style={[placeholderStyle, { color: this.props.itPlaceholderColor }]}>{this.props.label} {mandatory}</Text>
                <TextInput style={[styles.textInputStyle, Platform.OS == 'ios' ? { paddingTop: 18, height: '64%', } : undefined]}
                    underlineColorAndroid={this.props.underlineColor}
                    secureTextEntry={this.props.password}
                    keyboardType={this.props.keyboardType}
                    onChangeText={(text) => this.onChangeTextAction(text)}>{this.props.tiValue}</TextInput>
                {
                    underline
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        height: DEVICE_HEIGHT * 0.072
    },
    placeholderLike: {
        fontFamily: 'Lato',
        fontSize: DEVICE_HEIGHT * 0.02,
    },
    placeholderLikeSmall: {
        fontFamily: 'Lato',
        fontSize: DEVICE_HEIGHT * 0.016,
    },
    textInputStyle: {
        //backgroundColor: 'green',
        width: '100%',
        height: DEVICE_HEIGHT *0.06
    },
    underlineLike: {
        width: '100%',
        height: 1
    }
});