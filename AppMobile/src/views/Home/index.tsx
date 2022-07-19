import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import bg from '../../assets/images/banner2.jpg';
import Logo from '../../assets/images/logo.svg';

export function HomeView() {
    return (
        <ImageBackground source={bg} style={style.background}>
            <SafeAreaView style={style.view}>
            <Logo width={450} height={250} />
            <Text style={style.title}>Faça login e escolha os pedidos recebidos</Text>
            <Text>Fazer login</Text>
            </SafeAreaView>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
    },
    view: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        flex: 1,
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
        fontFamily: 'Italiana-Regular',
    },
});
