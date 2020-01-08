//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';
import Screen from '../../shared/Screen';

// create a component
const Centenario = () => {
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
                    <Text style={styles.Title}>100 anos dos Batistas em Goiás</Text>
                    <Text style={styles.SubTitle}>Um pouco da nossa história...</Text>
                    <Text style={styles.TextoLongo}>
                        Salomão Ginsburg organizou em 26 de setembro de 1920, na cidade de Catalão,
                        a primeira igreja Batista em solo goiano. O segundo trabalho foi organizado
                        também pelo mesmo missionário na cidade de Ipameri, no dia 17 de janeiro do ano de 1923.
                        Ele fundou ainda outras igrejas como a Primeira Igreja Batista em Cristalina,
                        em 21 de abril de 1923, a Primeira Igreja Batista em Tavares (Hoje Vianópolis),
                        no final do ano de 1923 e a Primeira Igreja Batista em Bonfim (atual Silvânia),
                        em fins de 1924.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Ginsburg teve de regressar a São Paulo aonde veio a falecer no ano de 1927.
                        E o período que se seguiu foi marcado por muitos reveses no início do trabalho batista goiano.
                        Os historiadores registram que, de todas as igrejas organizadas neste período, apenas duas não sucumbiram.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Relatam, entre os motivos, problemas internos como a idoneidade de alguns dirigentes e falta de obreiros
                        como também uma ostensiva perseguição empreendida contra os crentes. É citado o caso de Bonfim
                        (atual Silvânia), onde, segundo um destes historiadores, eram negados aos crentes desde oportunidades
                        de trabalho até um simples copo com água.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        O Campo Goiano, que estivera afeto ao de São Paulo, após a morte do missionário pioneiro
                        Salomão Ginsburg, passou à jurisdição da Convenção Batista do Estado de Minas Gerais,
                        formando o Campo Mineiro-Goiano.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Neste período, mais precisamente no ano de 1934, chegou a Goiás o Missionário Daniel 
                        Frank Crosland. O pioneiro da obra Batista no Brasil, filiado à Convenção mineira, 
                        assumiu o pastorado da Primeira Igreja Batista em Ipameri no dia oito de julho de 1934. 
                        Três anos depois se exonerou e transferiu sua residência para Goiânia, de onde passou a 
                        dar assistência ao trabalho Batista do Estado, região centro- Sul.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        O terceiro trabalho batista goiano a se estabelecer, considerando obviamente apenas 
                        os dois sobreviventes do período (Catalão e Ipameri), foi o da Primeira Igreja 
                        Batista em Goiânia. Sua organização ocorreu no dia 30 de janeiro do ano de 1938, 
                        na residência do Pr. Daniel Frank Crosland, no Bairro Popular, região central da 
                        nova capital do Estado.
                    </Text>
                    <Text style={styles.Fonte}>
                        <Text style={styles.Bold}>Fonte:</Text> Extraído – Autora: Carmelita Graciana
                    </Text>
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
        marginBottom: 15
    },
    SubTitle: {
        fontSize: 18,
        marginBottom: 15,
        color: '#155239',
        fontWeight: 'bold'
    },
    TextoLongo: {
        fontSize: 15,
        marginLeft: 40,
        textAlign: "justify",
        color: '#54595f',
        fontWeight: "400",
        lineHeight: 24,
        marginBottom: 15,
    },
    Fonte:{
        fontSize: 15,
        marginLeft: 40,
        textAlign: "right",
        color: '#54595f',
        fontWeight: "400",
        lineHeight: 24,
        marginBottom: 15
    },
    Bold: {
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default Centenario;
