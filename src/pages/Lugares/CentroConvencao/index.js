//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Linking, Image } from 'react-native';
import GeneralStatusBarColor from '../../../shared/GeneralStatusBarColor';
import Icon from 'react-native-vector-icons/Entypo';

const CardHosp = ({ nome, endereco, telefone, latitude, longitude }) => (
    <View style={styles.card}>
        <View style={{ flex: 5, flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#155239', width: 100, borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}>
                <Image
                    style={styles.imagem}
                    source={require('../../../assets/Lugares/convencao.jpg')} />
            </View>
            <View style={{ padding: 10, flex:1 }} >
                <Text style={styles.TextoP}>{nome}</Text>
                <Text style={styles.Texto}><Negrito texto='Endereço: ' /> {endereco}</Text>
                <Text style={styles.Texto}><Negrito texto='Telefone:' /> {telefone}</Text>
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
const Convencao = () => {
    return (
        <ScrollView
            ref={ref => this.scrollView = ref}
            scrollEnabled={true}
            style={[styles.scrollView, styles.walletCardWrap]}
            contentContainerStyle={styles.scrollViewContentContainer} >
            <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />

            <CardHosp
                nome='Centro de Convenções Goiânia'
                endereco='R. 4, 1400 - St. Central'
                telefone='(62) 3219-3300'
                latitude='-16.674782' longitude='-49.264375'
            />

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
    box: {
        height: 300,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dadce0',
        marginBottom: 20
    },
    imagem: {
        height: 100,
        width: 100,
        resizeMode: "stretch",
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    titulo: {
        fontSize: 30,
        color: '#3c4043',
        paddingLeft: 12,
        paddingRight: 12
    },
    subtitulo: {
        fontSize: 15,
        color: '#3c4043',
        paddingLeft: 12,
        paddingRight: 12
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
    },
    Texto: {
        fontWeight: '600',
        fontSize: 15
    },
    TextoP: {
        fontWeight: '600',
        fontSize: 18
    }
});

//make this component available to the app
export default Convencao;
