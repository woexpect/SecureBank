import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';
//================================ Component Importation ================================
//================================ Multimedia Importation ================================
import crossIcon from '../../resources/icons/cross.png';
import menuIcon from '../../resources/icons/menu.png';
import menuIcons from '../../resources/icons/menuIcons.png';
//================================ End of imports ================================
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default class FABMenu extends Component {

    state = {
        animation: new Animated.Value(1),
        burgerAnimation: new Animated.Value(1),
        closeAnimation: new Animated.Value(1),
        menuOpen: false
    }

    onPressAction = () => {
        this.props.onPress();
    }

    onFabPress = () => {
        if (this.state.animation._value === 1) {
            Animated.parallel([
                Animated.timing(this.state.animation, {
                    toValue: 2,
                    duration: 720
                }),
                Animated.timing(this.state.burgerAnimation, {
                    toValue: 2,
                    duration: 720
                })
            ]).start(() => {
                this.setState({ menuOpen: true });
                Animated.timing(this.state.closeAnimation, {
                    toValue: 2,
                    duration: 640,
                    easing: Easing.bounce,
                }).start();
            });
        }
    }

    onFabClosePress = () => {
        if (this.state.animation._value === 2) {
            Animated.parallel([
                Animated.timing(this.state.animation, {
                    toValue: 1,
                    duration: 720
                }),
                Animated.timing(this.state.closeAnimation, {
                    toValue: 1,
                    duration: 720,
                    easing: Easing.bounce,
                })
            ]).start(() => {
                this.setState({ menuOpen: false });
                Animated.timing(this.state.burgerAnimation, {
                    toValue: 1,
                    duration: 640,
                    easing: Easing.bounce,
                }).start();
            });
        }
    }

    render() {

        // Apartado de definición de animaciones
        const fabInterpolate = this.state.animation.interpolate({
            inputRange: [1, 2],
            outputRange: [1, DEVICE_WIDTH * 0.028]
        })

        const burgerInterpolate = this.state.burgerAnimation.interpolate({
            inputRange: [1, 2],
            outputRange: [1, 0.01]
        })

        const closeInterpolate = this.state.closeAnimation.interpolate({
            inputRange: [1, 2],
            outputRange: [0.01, 1]
        })

        const fabAnimatedStyle = {
            transform: [{
                scaleX: fabInterpolate
            }]
        }

        const burgerAnimatedStyle = {
            transform: [{
                scale: burgerInterpolate
            }]
        }

        const closeAnimatedStyle = {
            transform: [{
                scale: closeInterpolate
            }]
        }

        return (
            <View style={styles.main}>
                <Animated.View style={[styles.fabBox, fabAnimatedStyle]}>
                </Animated.View>
                {
                    this.state.menuOpen ? (
                        <TouchableOpacity style={styles.iconContainer} onPress={this.onFabClosePress}>
                            <Animated.Image source={crossIcon} style={[styles.crossIcon, closeAnimatedStyle]} />
                        </TouchableOpacity>)
                        :
                        (
                            <TouchableOpacity style={styles.iconContainer} onPress={this.onFabPress}>
                                <Animated.Image source={menuIcon} style={[styles.burgerIcon, burgerAnimatedStyle]} />
                            </TouchableOpacity>)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        //backgroundColor: 'red',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    fabBox: {
        width: DEVICE_HEIGHT * 0.097,
        height: DEVICE_HEIGHT * 0.097,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        zIndex: 99
    },
    iconContainer: {
        //backgroundColor: 'tomato',
        width: DEVICE_HEIGHT * 0.097,
        height: DEVICE_HEIGHT * 0.097,
        position: 'absolute',
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 18,
    },
    burgerIcon: {
        width: (DEVICE_HEIGHT * 0.04) * 1.2,
        height: (DEVICE_HEIGHT * 0.018) * 1.2,
    },
    crossIcon: {
        width: (DEVICE_HEIGHT * 0.04),
        height: (DEVICE_HEIGHT * 0.04),
    },
    iconsStyle: {
        width: DEVICE_WIDTH * 0.589,
        height: DEVICE_WIDTH * 0.11533,
        //backgroundColor: 'tomato',
        position: 'absolute',
        marginLeft: DEVICE_WIDTH * 0.08,
        paddingTop: -500,
    }
});