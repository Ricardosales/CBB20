//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Linking } from 'react-native';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';
import Icon from 'react-native-vector-icons/Entypo';

const CardHosp = ({ local, distancia, Leito, latitude, longitude }) => (
    <View style={styles.card}>
        <View style={{ flex: 5, flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#155239', width: 5, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}>
            </View>
            <View style={{ padding: 10 }} >
                <Text style={styles.Texto}><Negrito texto='Local:' /> {local}</Text>
                <Text style={styles.Texto}><Negrito texto='Distância do Centro de Convenções:' /> {distancia}</Text>
                <Text style={styles.Texto}><Negrito texto='Nº de Leitos:' /> {Leito}</Text>
            </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight
                activeOpacity={10}
                style={styles.Toucha}
                onPress={() => this._abrirLocalizacao(latitude, longitude)}>
                <Icon name='location-pin' color='#f1594f' size={40} />
            </TouchableHighlight>
        </View>
    </View>
);

_dialCall = (number) => {
    try {
        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${' + number + '}';
        }
        else {
            phoneNumber = 'telprompt:${' + number + '}';
        }
        Linking.openURL(phoneNumber);
    } catch (error) {
        alert('Não foi possível abrir o contato!');
    }
}

_abrirLocalizacao = (latitude, longitude) => {
    try {
        const location = `${latitude},${longitude}`
        const url = Platform.select({
            ios: `maps:${location}`,
            android: `geo:${location}?center=${location}&q=${location}&z=16`,
        });
        Linking.openURL(url);
    } catch (error) {
        alert('Não foi possível abrir a localização!');
    }
}

const Negrito = ({ texto }) => (
    <Text style={{ fontWeight: 'bold' }}>{texto}</Text>
);

// create a component
const HospedagemEconomica = () => {
    return (
        <ScrollView
            ref={ref => this.scrollView = ref}
            scrollEnabled={true}
            style={[styles.scrollView, styles.walletCardWrap]}
            contentContainerStyle={styles.scrollViewContentContainer} >
            <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.SubTitle}>Hospedagem Econômica para a CBB 2020</Text>
            </View>
            <CardHosp
                local='COLEGIO LICEU DE GOIANIA'
                distancia='2km' Leito='80' latitude='-16.677023' longitude='-49.253993'
            />
            <CardHosp
                local='IGREJA BATISTA VILA NOVA'
                distancia='3,2km' Leito='80' latitude='-16.663297' longitude='-49.246117'
            />
            <CardHosp
                local='IGREJA BATISTA REDENÇÃO'
                distancia='8,7km' Leito='60' latitude='-16.719346' longitude='-49.242318'
            />
            <CardHosp
                local='IGREJA BATISTA COIMBRA'
                distancia='4,7km' Leito='70' latitude='-16.687489' longitude='-49.283608'
            />
            <CardHosp
                local='IGREJA BATISTA SETOR UNIVERSITÁRIO'
                distancia='3,6km' Leito='40' latitude='-16.675423' longitude='-49.236574'
            />
            <CardHosp
                local='IGREJA BATISTA DA FAMA'
                distancia='3,5km' Leito='35' latitude='-16.662145' longitude='-49.275840'
            />
            <CardHosp
                local='SEMINÁRIO BATISTA TEOLÓGICO'
                distancia='2,1km' Leito='55' latitude='-16.674042' longitude='-49.247727'
            />
            <CardHosp
                local='IGREJA BATISTA ESMERALDA'
                distancia='6,9km' Leito='60' latitude='-16.719423' longitude='-49.258702'
            />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.SubTitle}>Reservas com o Irmão JORGE ROQUE DOS SANTOS</Text>
            </View>

            <View style={{ marginBottom: 30, alignItems: 'center' }}>
                <Text onPress={() => _dialCall('(62) 3205 2210')} style={styles.InformacoesContato}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Telefone:
                    </Text>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        (62) 3205-2210
                    </Text>
                </Text>
                <Text onPress={() => _dialCall('(62) 99184 3863')} style={styles.InformacoesContato}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Telefone:
                    </Text>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        (62) 99184-3863
                    </Text>
                </Text>
                <Text style={styles.InformacoesContato}>
                    <Text style={{ fontWeight: 'bold' }}>
                        E-mail:
                    </Text> jorgeroque11@yahoo.com.br
                </Text>
            </View>

        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#eee'
    },
    scrollViewContentContainer: {
        flexGrow: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    walletCardWrap: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1
    },
    card: {
        flexDirection: 'row',
        borderRadius: 6,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 8,
        //padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 }
    },
    wrapper: {
        flex: 1,
        width: '100%'
    },
    walletRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        borderTopColor: '#ddd',
        borderTopWidth: StyleSheet.hairlineWidth
    },
    SubTitle: {
        fontSize: 18,
        marginBottom: 15,
        marginTop: 15,
        color: '#1e466d',
        fontWeight: 'bold'
    },
    Texto: {
        fontWeight: '600',
        fontSize: 15
    },
    viewHosp: {
        borderRadius: 6,
        backgroundColor: '#5c858c',
        margin: 4,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        width: '100%'
    },
    Toucha: {
        flex: 1, width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#f2f2f2'
    },
    InformacoesContato: {
        fontSize: 16,
        color: '#1e466d'
    }
});

//make this component available to the app
export default HospedagemEconomica;
