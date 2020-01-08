import React from 'react'
import { withNavigation } from 'react-navigation'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Button,
    Linking,
    Platform
}
from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';

const Equipes = () => {
    return (
        <ScrollView
            ref={ref => this.scrollView = ref}
            scrollEnabled={true}
            style={[styles.scrollView, styles.walletCardWrap]}
            contentContainerStyle={styles.scrollViewContentContainer} >
            <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />
            <View style={styles.card}>
                <View style={styles.wrapper}>
                    <View style={styles.topico}>
                        <Text style={styles.tituloTopico}>Coordenação Geral</Text>
                    </View>
                    <Text style={styles.nome}>Tatiana Silva Souza Feire (PIB Goiânia)</Text>
                    <Text style={styles.InformacoesContato}>
                        Gerência Administrativa e Financeira {"\n"}
                        <Text onPress={() => _dialCall("(62) 3092-4904")} >
                            (62) 3092-4904 <Icon name='phone-square' color={'#1e73be'} size={20} />{"\n"} 
                        </Text>
                        <Text onPress={() => _dialCall("(62) 99172-2118") } >
                            (62) 99172-2118 <Icon name='phone-square' color={'#1e73be'} size={20} />{"\n"}
                        </Text>
                        cbb2020goiania@gmail.com {"\n"}
                        adm.cbg@gmail.com
                    </Text>
                    <WalletRow></WalletRow>
                    <View style={styles.topico}>
                        <Text style={styles.tituloTopico}>Staff</Text>
                    </View>
                    <Contato
                        titulo="Informações e Turismo"
                        ordem="1"
                        nome="Deusilene Silva de Leão"
                        telefone="(62) 98139-3800"
                        email="dleao@terra.com.br" />
                    <Contato
                        titulo="Relações Públicas, Publicidade e Promoção"
                        ordem="2"
                        nome="Elton Ribeiro"
                        telefone="(62) 98215-4436"
                        email="eltonrima@hotmail.com" />
                    <Contato
                        titulo="Introdutores, Escrutinação e Ornamentação"
                        ordem="3"
                        nome="Elvia dos Santos Barros"
                        telefone="(62) 98405-4708"
                        email="elviajsb12@hotmail.com" />
                    <Contato
                        titulo="Exposição (stands), Assessoria Jurídica, Alimentação e Finanças"
                        ordem="4"
                        nome="Jerônimo David de Souza"
                        telefone="(62) 98111-2696"
                        email="jeronimodwd@gmail.com" />
                    <Contato
                        titulo="Infraestrutura, Segurança, Hospedagem, Sonorização, Apoio Logístico (Recepção e Transporte, Conservação e Limpeza)"
                        ordem="5"
                        nome="Jorge Roque dos Santos"
                        telefone="(62) 99184-3863"
                        email="jorgeroque11@yahoo.com.br" />
                    <Contato
                        titulo="Preparação Espiritual, Música e Programação Evangelística"
                        ordem="6"
                        nome="Maria Sebastiana Francisca da Silva"
                        telefone="(62) 99172-0168"
                        email="tianatapuia@hotmail.com" />
                    <Contato
                        titulo="Informática, Secretaria, Inscrição, Atividades Infantis e Necessidades Especiais"
                        ordem="7"
                        nome="Samya Vanessa Soares de Araújo"
                        telefone="(62) 98512-9814"
                        email="samya-soares@hotmail com" />
                    <WalletRow></WalletRow>
                    <Text style={styles.area}>Seja você também um voluntário!</Text>
                    <Button title="Abrir" color="#155239" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/equipes-de-trabalho/')
                    }}
                    />
                    <Text></Text>
                </View>
            </View>
        </ScrollView>
    )
};

const Contato = ({ titulo, ordem, nome, telefone, email }) => (
    <View style={{ marginBottom: 30 }}>
        <Text style={styles.area}>{titulo}</Text>
        <Text style={styles.nome}>{nome}</Text>
        <Text onPress={() => _dialCall(telefone)} style={styles.InformacoesContato}>
            <Text style={{ fontWeight: 'bold' }}>
                Telefone(s):
            </Text> 
            {telefone} <Icon name='phone-square' color={'#1e73be'} size={20} />
        </Text>
        <Text style={styles.InformacoesContato}>
            <Text style={{ fontWeight: 'bold' }}>
                E-mail:
            </Text> {email}
        </Text>
    </View>
)

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

const WalletRow = () => (
    <View style={styles.walletRow}>
    </View>
)

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
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: '#fff',
        marginVertical: 8,
        padding: 10,
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
        margin: 10
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
        marginBottom: 5
    },
    InformacoesContato: {
        fontSize: 16,
        color: '#7a7a7a'
    },
    label: {
        fontWeight: '600'
    },
    message: {
        textAlign: 'center',
        paddingHorizontal: 10
    }
})

export default withNavigation(Equipes)