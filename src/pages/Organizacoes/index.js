//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Linking } from 'react-native';
import Screen from '../../shared/Screen';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';

// create a component
const Organizacoes = () => {
    return (
        <Screen>
            <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />
            <ScrollView
                ref={ref => this.scrollView = ref}
                scrollEnabled={true}
                style={[styles.scrollView, styles.walletCardWrap]}
                contentContainerStyle={styles.scrollViewContentContainer} >
                <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />

                <View style={styles.card}>
                    <Text style={styles.Title}>Organizações</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/opp.png')}
                    />
                    <Text style={styles.Tema}>
                        Ordem dos Pastores Batistas do Brasil
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 21 e 22/01/2020
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> Manhã, Tarde e Noite
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Local: </Text> PIB em Goiânia
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Contato: </Text> Pr Daniel Ventura
                    </Text>
                    <Button color="#d9534f" style={styles.BtnInscricao} title="Programação" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/congresso-da-opbb/')
                    }}
                    />
                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/ambb.png')}
                    />
                    <Text style={styles.Tema}>
                        AMBB – Associação dos Músicos Batistas do Brasil
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 21 e 22 de janeiro
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> 9:00h às 22:00h
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Presidente/Representante: </Text> Anderson Costa
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Responsável pelas informações: </Text> Anderson Costa
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>E-mail: </Text> mmandersoncosta@yahoo.com.br
                    </Text>
                    <Button color="#d9534f" style={styles.BtnInscricao} title="Programação" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/congresso-dos-musicos-batistas-do-brasil/')
                    }}
                    />
                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/diaconos.png')}
                    />
                    <Text style={styles.Tema}>
                        Associação Dos Diáconos Batistas Do Brasil
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 21/01/2020
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> Manhã, Tarde e Noite
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Local: </Text> Centro de Convenções de Goiânia
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Informações: </Text> Fabio De La Plata
                    </Text>
                    <Button color="#d9534f" style={styles.BtnInscricao} title="Programação" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/assembleia-dos-diaconos-e-diaconisas-batistas/')
                    }}
                    />
                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/educadores.jpg')}
                    />
                    <Text style={styles.Tema}>
                        Associação de Educadores Cristãos Batistas do Brasil
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 20 e 21/01/2020
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> 20/01 (N) e 21/01 M, T e N
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Local: </Text> Seminário Teológico Batista Goiano
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Contato: </Text> AECBB
                    </Text>
                    <Button color="#d9534f" style={styles.BtnInscricao} title="Programação" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/assembleia-anual-da-aecbb-2020/')
                    }}
                    />
                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/esposas.png')}
                    />
                    <Text style={styles.Tema}>
                        União das Esposas de Pastores Batistas do Brasil
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 21/01/2020
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> 09h00 às 17h00
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Local: </Text> Igreja Metodista Central de Goiânia
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Contato: </Text> Alcini Sousa Mendes Santos
                    </Text>
                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/ufmbb.jpg')}
                    />
                    <Text style={styles.Tema}>
                        UFMBB – União Feminina Missionária Batista Brasileira
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 22 de janeiro
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> 8:30h às 22:00h
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Presidente/Representante: </Text> Neusa Resende (presidente) e Marli Gonzalez (executiva)
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Responsável pelas informações: </Text> Lis Ruama (coordenadora de eventos)
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Telefones: </Text> (21) 3031 4765
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>E-mail: </Text> eventos@ufmbb.org.br
                    </Text>
                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/abibet.jpg')}
                    />
                    <Text style={styles.Tema}>
                        ABIBET – Associação Brasileira das Instituições Batistas de Ensino Teológico
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 22 de janeiro
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> 9:00h às 17:00h
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Presidente/Representante: </Text> Claiton André Kunz
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Responsável pelas informações: </Text> Anderson Carlos Guimarães Cavalcanti
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>E-mail: </Text> abibet.contato@gmail.com
                    </Text>
                    <Button color="#d9534f" style={styles.BtnInscricao} title="Programação" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/assembleia-abibet-2020/')
                    }}
                    />

                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/UMHBB.png')}
                    />
                    <Text style={styles.Tema}>
                        União Missionária de Homens Batistas do Brasil
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 22/01/2020
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> Manhã e Tarde
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Local: </Text> Centro de Convenções
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Contato: </Text> Pr. Sócrates Oliveira de Souza
                    </Text>
                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/juventude-batista-brasileira.png')}
                    />
                    <Text style={styles.Tema}>
                        Juventude Batista Brasileira
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 22/01/2020 (PREVISTO)
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> à confirmar
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Local: </Text> à confirmar
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Contato: </Text> Amnon Lopes – (21) 9 9946 5865
                    </Text>
                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/aneb.png')}
                    />
                    <Text style={styles.Tema}>
                        ANEB – Associacao Nacional de Escolas Batista
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 22 de janeiro
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> 9:00h às 17:00h
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Presidente/Representante: </Text> Valseni Braga
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Responsável pelas informações: </Text> Mario Jorge Castelani (Diretor Executivo)
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>E-mail: </Text> executivo@aneb.com.br
                    </Text>
                    <Button color="#d9534f" style={styles.BtnInscricao} title="Programação" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/associacao-nacional-de-escolas-batista/')
                    }}
                    />
                    <Text>{"\n"}</Text>

                    <Image
                        style={styles.contain}
                        source={require('../../assets/Organizacoes/infantil.png')}
                    />
                    <Text style={styles.Tema}>
                        Congresso Infantil | CBB 2020
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Data: </Text> 22 a 25 de Janeiro de 2010
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Horários: </Text> 09-12h | 14-17h | 19-22h
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Local: </Text> Centro de Convenção de Goiânia
                    </Text>
                    <Text style={styles.SubTema}>
                        <Text style={styles.Tema}>Outras Informações: </Text> www.cbb2020.com.br/congresso-infantil
                    </Text>
                    <Button color="#d9534f" style={styles.BtnInscricao} title="Programação" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/congresso-infantil/')
                    }}
                    />
                    <Text>{"\n"}</Text>


                </View>
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    card: {
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
    Title: {
        fontSize: 25,
        marginBottom: 20
    },
    SubTitle: {
        fontSize: 16,
        marginBottom: 15,
        color: '#155239',
        textAlign: "center"
    },
    Bold: {
        fontWeight: 'bold'
    },
    contain: {
        width: "100%",
        height: 150,
        resizeMode: 'contain'
    },
    Link: {
        color: '#1e73be'
    },
    Tema: {
        fontWeight: "700",
        color: '#7a7a7a'
    },
    SubTema: {
        fontWeight: "400",
        color: '#7a7a7a'
    }
});

//make this component available to the app
export default Organizacoes;
