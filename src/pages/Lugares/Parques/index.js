//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Linking, Image } from 'react-native';
import GeneralStatusBarColor from '../../../shared/GeneralStatusBarColor';
import Icon from 'react-native-vector-icons/Entypo';

const IMAGES = {
    vacabrava: require('../../../assets/Lugares/vacabrava.jpg'),
    flamboyant: require('../../../assets/Lugares/flamboyant.jpg'),
    areiao: require('../../../assets/Lugares/areia.jpg'),
    rosas: require('../../../assets/Lugares/rosas.jpg'),
    botanico: require('../../../assets/Lugares/botanico.jpg')
}

const CardHosp = ({ nome, endereco, descricao, imagem, latitude, longitude }) => (
    <View style={styles.card}>
        <View style={{ flex: 5, flexDirection: 'row' }}>
            <View style={{
                width: 100,
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
                alignItems: 'center', justifyContent: 'center'
            }}>
                <Image
                    style={styles.imagem}
                    source={IMAGES[imagem]} />
            </View>
            <View style={{ padding: 10, flex: 1 }} >
                <Text style={styles.TextoP}>{nome}</Text>
                <Text style={styles.Texto}><Negrito texto='Endereço: ' /> {endereco}</Text>
                <Text style={styles.Texto}>{descricao}</Text>
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
const Parque = () => {
    return (
        <ScrollView
            ref={ref => this.scrollView = ref}
            scrollEnabled={true}
            style={[styles.scrollView, styles.walletCardWrap]}
            contentContainerStyle={styles.scrollViewContentContainer} >
            <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />

            <CardHosp
                nome='Parque Vaca Brava'
                endereco='Av. T-10, s/n - St. Bueno.'
                latitude='-16.709508' longitude='-49.270533'
                imagem='vacabrava'
                descricao='Recanto verde urbano com lago e mata nativa por onde circulam animais silvestres entre caminhos sinalizados.'
            />

            <CardHosp
                nome='Parque Flamboyant'
                endereco='R. 15, 103-157 - Jardim Goiás.'
                latitude='-16.703113' longitude='-49.238791'
                imagem='flamboyant'
                descricao='O parque possui dois lagos, pista para caminhada, pista para ciclismo e parque infantil, entre outras atrações.'
            />

            <CardHosp
                nome='Parque Areião'
                endereco='Av. Areião, s/n - St. Pedro Ludovico.'
                latitude='-16.707136' longitude='-49.256601'
                imagem='areiao'
                descricao='Recanto verde urbano em torno de lago com áreas gramadas ao sol e outras sombreadas por grandes árvores.'
            />

            <CardHosp
                nome='Lago das Rosas'
                endereco='Esquina com a - Alameda das rosas, R. R 3 - oeste.'
                latitude='-16.679121' longitude='-49.274254'
                imagem='rosas'
                descricao='Espaço arborizado com lago, pistas, playground, estação de ginástica e mirante, além de jardim zoológico.'
            />

            <CardHosp
                nome='Parque Jardim Botânico'
                endereco='Alameda do Contorno, 1128-1222 - Jardim Santo Antônio'
                latitude='-16.725180' longitude='-49.253786'
                imagem='botanico'
                descricao='É a maior área verde da cidade.'
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
        fontSize: 19
    }
});

//make this component available to the app
export default Parque;
