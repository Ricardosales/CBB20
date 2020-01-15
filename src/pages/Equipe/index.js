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
                        <Text onPress={() => _dialCall("(62) 99172-2118")} >
                            (62) 99172-2118 <Icon name='phone-square' color={'#1e73be'} size={20} />{"\n"}
                        </Text>
                        cbb2020goiania@gmail.com {"\n"}
                        adm.cbg@gmail.com
                    </Text>
                    <WalletRow></WalletRow>
                    <Contato
                        titulo="Alimentação"
                        ordem="1"
                        nome="Lilia"
                        telefone="(62) 98420-2288" />
                    <Contato
                        titulo="Assistência A Pessoas Com Necessidades Especiais"
                        ordem="2"
                        nome="Damiana Aparecida Oliveira Santos"
                        telefone="(62) 98582 6537"
                        email="damianaoliveira7@gmail.com" />
                    <Contato
                        titulo="Atividades Infantis"
                        ordem="3"
                        nome="Loide Maria Lopes de Souza"
                        telefone="(62) 99341-3895"
                        email="loidesouza@hotmail.com" />
                    <Contato
                        titulo="Conservação"
                        ordem="4"
                        nome="Lilia"
                        telefone="62) 98420-2288" />
                    <Contato
                        titulo="Divulgação E Promoção"
                        ordem="5"
                        nome="Elton Ribeiro de Magalhães"
                        telefone="(62) 98215-4436"
                        email="eltonrima@hotmail.com" />
                    <Contato
                        titulo="Escrutinação"
                        ordem="6"
                        nome="Pr. Eli Machado Diniz"
                        telefone="(62) 99904-5485"
                        email="elmadiniz@gmail.com | elmadiniz@hotmail.com" />
                    <Contato
                        titulo="Evangelismo (Programação)"
                        ordem="7"
                        nome="Gestor de Missões da CBG: Pr. Samoel Martin + Tiana + JMN + PIB Goiânia" />

                    <Contato
                        titulo="Exposições"
                        ordem="8"
                        nome="Jeronimo David de Souza"
                        telefone="(62) 98111-2696"
                        email="jeronimodwd@gmail.com" />

                    <Contato
                        nome="Co-Relator: Reabias Freire"
                        telefone="(62) 98151-1075" />

                    <Contato
                        titulo="Hospedagem"
                        ordem="9"
                        nome="Jorge Roque Dos Santos"
                        telefone="(62) 3205-2210 | (62) 99184-3863 (Whatsapp)"
                        email="jorgeroque11@yahoo.com.br" />

                    <Contato
                        titulo="Informática"
                        ordem="10"
                        nome="Relator:  Júlio Mota"
                        telefone="(62) 9 9972-6077" />

                    <Contato
                        titulo="Informação E Turismo"
                        ordem="11"
                        nome="Deusilene Silva de Leão"
                        telefone="(62) 98139-3800"
                        email="dleao@terra.com.br" />

                    <Contato
                        titulo="Infra-Estrutura"
                        ordem="12"
                        nome="Pr. Sérgio Vaz"
                        telefone="(62) 98225-4877 | 98512-0959"
                        email="pr.sergiovaz25@gmail.com" />

                    <Contato
                        titulo="Inscrições"
                        ordem="13"
                        nome="Samya Vanessa Soares de Araújo"
                        telefone="(62) 3988-2235 | 98512-9814"
                        email="samya-soares@hotmail.com" />

                    <Contato
                        titulo="Introdutores"
                        ordem="14"
                        nome="Pr. Wuezel"
                        telefone="(62) 98593-5577"
                        email="wuezel@hotmail.com" />

                    <Contato
                        titulo="Música"
                        ordem="15"
                        nome="MM Marcus Vinicius Viana"
                        telefone="(62) 3223-1717 | 98236-5500 "
                        email="marcusviniciusvianna@hotmail.com" />

                    <Contato
                        nome="Timóteo Lima Viana"
                        telefone="(62) 99850-8556 | 98144-9469"
                        email="bysite6@gmail.com" />

                    <Contato
                        titulo="Ornamentação"
                        ordem="16"
                        nome="Maria Jacinta"
                        telefone="(62) 99645-7566" />

                    <Contato
                        titulo="Preparação Espiritual"
                        ordem="17"
                        nome="Waldecy Oliveira da Costa"
                        telefone="(62) 98420-9721"
                        email="prpaulojose2011@hotmail.com" />

                    <Contato
                        titulo="Recepção"
                        ordem="18"
                        nome="Pr. Clécio Bezerra Nunes"
                        telefone="(62) 99363-0484" />

                    <Contato
                        titulo="Relações Públicas"
                        ordem="19"
                        nome="Dr. Walter Pereira da Silva"
                        telefone="(62) 99976-5232"
                        email="walterpsilva@hotmail.com" />

                    <Contato
                        titulo="Secretaria"
                        ordem="20"
                        nome="Maria Sebastiana Francisca da Silva"
                        telefone="(62) 99172-0168"
                        email="tianatapuia@hotmail.com" />

                    <Contato
                        titulo="Segurança"
                        ordem="21"
                        nome="Relator: Júnior Alves Araújo"
                        telefone="(62) 9 8420 1436"
                        email="" />

                    <Contato
                        nome="Co-Relator: André Shroder"
                        telefone="(62) 9 8132 0068" />

                    <Contato
                        titulo="Serviços Médicos"
                        ordem="22"
                        nome="Dr. Carlos Pineda"
                        telefone="(62) 99280-8556"
                        email="" />

                    <Contato
                        nome="Dr. Marcos Loyola | Dr. Maria Madalena Borges"
                        telefone="(62)  9 9694 8607" />

                    <Contato
                        titulo="Odontólogo"
                        ordem="23"
                        nome="Timóteo Lima Viana"
                        telefone="(62) 9850-8556 | 98144-9469"
                        email="bysite6@gmail.com" />

                    <Contato
                        titulo="Sonoplastia (Som)"
                        ordem="24"
                        nome="Samuel (Água Viva)"
                        telefone="(16) 9 9766-3248"
                        email="" />

                    <Contato
                        nome="Alexandro Rodrigues Alves"
                        telefone="(62) 98591-0975 | (62) 3210-0368"
                        email="alex.ralves@hotmail.com" />

                    <Contato
                        titulo="Tesouraria"
                        ordem="25"
                        nome="Alex Nogueira Santos"
                        telefone="(62) 99221-7441"
                        email="nog.alex@hotmail.com" />

                    <Contato
                        titulo="Transporte"
                        ordem="26"
                        nome="Pr. Silvio Daniel Machado"
                        telefone="(64) 99248-5550"  />

                    <WalletRow></WalletRow>
                    <Text style={styles.area}>Seja você também um voluntário!</Text>
                    <Button title="Abrir" color="#155239" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/seja-um-voluntario/')
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