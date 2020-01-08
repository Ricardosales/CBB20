//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image, Linking, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';

_dialCall = (number) => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
        phoneNumber = 'tel:${' + number + '}';
    }
    else {
        phoneNumber = 'telprompt:${' + number + '}';
    }

    Linking.openURL(phoneNumber);
}

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />
            <ScrollView
                ref={ref => this.scrollView = ref}
                scrollEnabled={true}
                style={[styles.scrollView, styles.walletCardWrap]}
                contentContainerStyle={styles.scrollViewContentContainer} >
                <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />
                <View style={styles.card}>

                    <View style={{ marginBottom: 25 }}>
                        <Button color="#d9534f" style={styles.botao} title="FAÇA AQUI SUA INSCRIÇÃO" onPress={() => {
                            Linking.openURL('https://www.e-inscricao.com/cbb/assembleia2020')
                        }}
                        />
                    </View>
                    <Text style={styles.title}>
                        Apresentação - Palavra do Presidente
                    </Text>

                    <Text style={{ color: '#0b601f', fontSize: 18 }}>
                        <Text style={{ fontStyle: 'italic' }}>"Estou convencido de que aquele que começou boa obra em vocês, vai completá-la até o dia de Cristo Jesus"</Text> (Filipenses 1.6).
                    </Text>
                    <View>
                        <View style={{ marginTop: -20, alignItems: 'center', marginBottom: 10 }}>
                            <Image
                                style={styles.contain}
                                source={require('../../assets/presidente.png')}
                            />
                            <Text>Pr. Carlos Enrique</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: '#0b601f', textAlign: "justify" }}>
                            Saudações a todos os Batistas do nosso amado Brasil, estamos felizes pela oportunidade de recebê-los nos dias 21 a 26 de janeiro de 2020. Teremos a oportunidade de compartilhar com todos os Batistas a celebração de um momento muito especial para a Convenção Batista Goiana, glorificaremos a Deus por 100 anos de trabalho Batista em nosso Estado, para nós será um privilégio tê-los em nossa linda cidade de Goiânia.
                        </Text>
                        <Text style={{ fontSize: 18, color: '#0b601f', textAlign: 'right', fontWeight: 'bold' }}>
                            Pr. Carlos Enrique Santana Rocha
                        </Text>
                        <Text style={{ fontSize: 18, color: '#0b601f', textAlign: 'right', fontWeight: 'bold', marginBottom: 30 }}>
                            Presidente da Convenção Batista Goiana
                        </Text>
                        <View style={styles.topico}>
                            <Text style={styles.tituloTopico}>Contato</Text>
                        </View>

                        <View style={{ marginBottom: 30 }}>
                            <Text style={styles.area}>Convenção Batista Brasileira (CBB)</Text>
                            <Text
                                onPress={() => {
                                    Linking.openURL('http://www.convencaobatista.com.br');
                                }}
                                style={styles.nome}>www.convencaobatista.com.br</Text>

                            <Text style={styles.InformacoesContato}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Endereço:
                                </Text>
                                Rua José Higino 416 Prédio 28, Tijuca, Rio de Janeiro / CEP: 20.510-412
                            </Text>
                            <Text style={styles.InformacoesContato}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    E-mail:
                                </Text> secretariacbb@batistas.com
                            </Text>
                            <Text onPress={() => _dialCall('(21) 2157 5557')} style={styles.InformacoesContato}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Telefone(s):
                                </Text> (21) 2157 5557 <Icon name='phone-square' color={'#1e73be'} size={20} />
                            </Text>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={styles.area}>Convenção Batista Goiana (CBG)</Text>
                            <Text
                                onPress={() => {
                                    Linking.openURL('http://www.convencaobatistagoiana.com.br');
                                }}
                                style={styles.nome}>www.convencaobatistagoiana.com.br</Text>

                            <Text style={styles.InformacoesContato}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Endereço:
                                </Text>
                                Rua 230 168 Setor Leste Universitário, Centro, Goiânia / CEP: 74605-110
                            </Text>
                            <Text style={styles.InformacoesContato}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    E-mail:
                                </Text> contato@convencaobatistagoiana.com.br
                            </Text>
                            <Text onPress={() => _dialCall('(62) 3092 4904')} style={styles.InformacoesContato}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Telefone(s):
                                </Text> (62) 3092 4904 <Icon name='phone-square' color={'#1e73be'} size={20} />
                            </Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
        flex: 1,
        borderRadius: 6,
        backgroundColor: '#fff',
        marginVertical: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 }
    },
    title: {
        fontSize: 25,
        color: '#1e4e94',
        marginBottom: 20,
        fontWeight: 'bold'
    },
    botao: {
        width: 50,
        borderRadius: 15
    },
    contain: {
        width: "100%",
        height: 200,
        resizeMode: 'contain'
    },
    topico: {
        justifyContent: 'center',
        backgroundColor: '#1b739b',
        color: '#fff',
        marginBottom: 10,
        borderRadius: 3
    },
    tituloTopico: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#fff',
        margin: 5
    },
    area: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#6ec1e4',
        marginBottom: 10
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#7a7a7a',
        marginBottom: 5,
        textDecorationLine: 'underline',
        color: '#1e73be'
    },
    InformacoesContato: {
        fontSize: 16,
        color: '#7a7a7a'
    }
});

//make this component available to the app
export default Home;
