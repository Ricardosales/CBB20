//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image, Linking } from 'react-native';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';
import Screen from '../../shared/Screen';
import Slideshow from 'react-native-image-slider-show';

// create a component
const CongressoInfantil = () => {
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
                    <Text style={styles.Title}>Congresso Infantil</Text>
                    <Text style={styles.SubTitle}>
                        <Text style={styles.Bold}>CONGRESSO INFANTIL CBB 2020 | GOIÂNIA - JANEIRO</Text>
                    </Text>
                    <Image
                        style={styles.stretch}
                        source={require('../../assets/turma-do-pepito.jpg')}
                    />
                    <Text style={styles.TextoLongo}>
                        Queridos irmãos Batistas do Brasil é com muita alegria que a <Text style={styles.Link} onPress ={() => Linking.openURL('http://www.convencaobatistagoiana.com.br/site/')}>Convenção Batista Goiana</Text>, 
                        apresenta o 1º Congresso Infantil Batista em Goiânia para as Crianças de 3 a 12 anos que 
                        acontecerá durante a 100º Assembleia da Convenção Batista Brasileira. Serão 4 dias de muita alegria, 
                        com lanches, atividades, histórias Bíblicas, Musicalização, Jogos e Brincadeiras com a participação 
                        especial do <Text style={styles.Bold}>Pepito e Sua turma</Text>. Pepito e Sua Turma é uma Ferramenta de Evangelização e Missões que leva 
                        Alegria e Esperança para as Crianças do PEPE (Programa de Ensino dos Princípios do Evangelho). 
                        Teremos uma equipe com 40 Missionários voluntários envolvidos diretamente em uma Missão de Amor 
                        (PEPE GOIÁS e convidados!)! Faça sua inscrição e garanta já a vaga da sua criança! <Text style={styles.Bold}>VAGAS LIMITADAS!</Text>
                    </Text>
                    <Text style={styles.Tema}>
                        <Text style={styles.Bold}>TEMA: </Text>Criança no Palácio do Rei
                    </Text>
                    <Text style={styles.Tema}>
                        <Text style={styles.Bold}>Versículo Bíblico: </Text> Com alegria e regozijo serão trazidas; elas entrarão no palácio do rei. Salmos 45.15
                    </Text>
                    <Text style={styles.Tema}>
                        <Text style={styles.Bold}>Música Tema: </Text> Onde Viva o Rei da Glória
                    </Text>
                    <Text style={styles.Tema}>
                        <Text style={styles.Bold}>Dias: </Text> 22 a 25 de Janeiro de 2010
                    </Text>
                    <Text style={styles.Tema}>
                        <Text style={styles.Bold}>Local: </Text> Centro de Convenção de Goiânia – GO
                    </Text>
                    <Text style={styles.Tema}>
                        <Text style={styles.Bold}>Período da Manhã: </Text> 09 às 12h
                    </Text>
                    <Text style={styles.Tema}>
                        <Text style={styles.Bold}>Período Tarde: </Text> 14h às 17h
                    </Text>
                    <Text style={styles.Tema}>
                        <Text style={styles.Bold}>Período da Noite: </Text> 19h às 22h00
                    </Text>

                    <Text>{"\n"}</Text>

                    <View>
                        <Slideshow 
                            height={300}
                            dataSource={[
                                { url:require('../../assets/slider/foto-1.jpg') },
                                { url:require('../../assets/slider/foto-2.jpg') },
                                { url:require('../../assets/slider/foto-3.jpg') },
                                { url:require('../../assets/slider/foto-4.jpg') },
                                { url:require('../../assets/slider/foto-5.jpg') },
                                { url:require('../../assets/slider/foto-6.jpg') },
                                { url:require('../../assets/slider/foto-7.jpg') },
                                { url:require('../../assets/slider/foto-8.jpg') },
                                { url:require('../../assets/slider/foto-9.jpg') },
                                { url:require('../../assets/slider/foto-10.jpg') },
                                { url:require('../../assets/slider/foto-11.jpg') }
                        ]}/>
                    </View>

                    <Text>{"\n"}</Text>

                    <Text style={styles.SubTitleRed}>
                        Dúvidas e perguntas
                    </Text>
                    <Text style={styles.TemaRed}>
                        <Text style={styles.Bold}>Missionária: </Text> Loide Souza
                    </Text>
                    <Text style={styles.TemaRed}>
                        <Text style={styles.Bold}>Contatos: </Text> 62 9 9341 3895 (Somente WhatsApp)
                    </Text>
                    <Text style={styles.TemaRed}>
                        <Text style={styles.Bold}>E-mail: </Text> loidesouza@hotmail.com
                    </Text>

                    <Text>{"\n"}</Text>

                    <Button color="#d9534f" style={styles.BtnInscricao} title="Clique Aqui e faça a Pré-inscrição" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/form-pre-inscricao-congresso-infantil/')
                    }}
                    />
                    <Text>{"\n"}</Text>
                    <Image
                        style={{height:350, width:'100%', resizeMode:"contain"}}
                        source={require('../../assets/CongressoInfantil.png')}
                    />
                    <Text>{"\n"}</Text>
                    <Button color="#d9534f" style={styles.BtnInscricao} title="Clique Aqui e faça a Pré-inscrição" onPress={() => {
                        Linking.openURL('https://www.cbb2020.com.br/form-pre-inscricao-congresso-infantil/')
                    }}
                    />
                </View>

            </ScrollView>
        </Screen>
    );
};

// define your styles
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
    stretch: {
        width: "100%",
        resizeMode: 'contain'
    },
    TextoLongo: {
        fontSize: 15,
        textAlign: "justify",
        color: '#155239',
        fontWeight: "400",
        lineHeight: 24,
        marginBottom: 15,
    },
    Link:{
        color: '#1e73be'
    },
    Tema: {
        fontSize: 16,
        color: '#155239'
    },
    SubTitleRed: {
        fontSize: 19,
        marginBottom: 15,
        color: '#ce4b00',
        textAlign: "center",
        fontWeight: 'bold'
    },
    TemaRed: {
        fontSize: 16,
        color: '#ce4b00'
    }
});

//make this component available to the app
export default CongressoInfantil;
