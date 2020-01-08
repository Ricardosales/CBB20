//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Linking, Image } from 'react-native';
import GeneralStatusBarColor from '../../../shared/GeneralStatusBarColor';
import Icon from 'react-native-vector-icons/Entypo';

const IMAGES = {
    passeio: require('../../../assets/Lugares/passeio.jpg'),
    goianiashop: require('../../../assets/Lugares/goianiashop.jpg'),
    araguaia: require('../../../assets/Lugares/araguaia.jpg'),
    flamboyantShop: require('../../../assets/Lugares/flamboyantShop.jpg'),
    cerrado: require('../../../assets/Lugares/cerrado.jpg')
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
const Shopping = () => {
    return (
        <ScrollView
            ref={ref => this.scrollView = ref}
            scrollEnabled={true}
            style={[styles.scrollView, styles.walletCardWrap]}
            contentContainerStyle={styles.scrollViewContentContainer} >
            <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />

            <CardHosp
                nome='Passeio das Águas Shopping'
                endereco='Av. Perimetral Norte, 8303 - Jardim Diamantina.'
                latitude='-16.629788' longitude='-49.278434'
                imagem='passeio'
                descricao='É o maior shopping center do estado de Goiás e da região Centro-Oeste do Brasil.'
            />

            <CardHosp
                nome='Goiânia Shopping'
                endereco='Av. T-10, 1300 - St. Bueno.'
                latitude='-16.707681' longitude='-49.273200'
                imagem='goianiashop'
                descricao='Um dos mais modernos e acolhedores centro de compras, entretenimento e lazer de Goiás.'
            />

            <CardHosp
                nome='Araguaia Shopping'
                endereco='R. 44, 399 - St. Central.'
                latitude='-16.659368' longitude='-49.259703'
                imagem='araguaia'
                descricao='É pioneiro em suas atividades, sendo o único no Brasil que tem integração de um Terminal Rodoviário Interestadual e Intermunicipal com suas outras operações.'
            />

            <CardHosp
                nome='Flamboyant Shopping Center'
                endereco='Av. Dep. Jamel Cecílio, 3300 - Jardim Goiás.'
                latitude='-16.710284' longitude='-49.237232'
                imagem='flamboyantShop'
                descricao='É o centro comercial mais antigo do estado de Goiás ocupando a 35ª posição na lista dos maiores shopping centers por Área Bruta Locável.'
            />

            <CardHosp
                nome='Shopping Cerrado'
                endereco='Av. Anhanguera, 10790 - Aeroviario'
                latitude='-16.665732' longitude='-49.307830'
                imagem='cerrado'
                descricao='Chegou para trazer conforto e comodidade para uma região em pleno desenvolvimento.'
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
export default Shopping;
