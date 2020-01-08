//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';
import Screen from '../../shared/Screen';

const Card = ({ data, mes, descricao, local, perido }) => (
    <View>
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 30 }}>
            <View style={{
                width: 70,
                borderRightWidth: 2,
                borderRightColor: '#f4dc17'
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: '#494949'
                }}>
                    {data}
                </Text>
                <Text style={{
                    color: '#494949',
                    textAlign: 'center'
                }}>
                    {mes}
                </Text>
            </View>
            <View style={{ paddingLeft: 10, flex: 1 }} >
                <Negrito texto={descricao} />
                <Text>{local} {perido}</Text>
            </View>
        </View>
    </View>
);

const Negrito = ({ texto }) => (
    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#494949' }}>{texto}</Text>
);

const Assembleia = () => {
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
                    <Text style={styles.Title}>100ª Assembleia da CBB</Text>
                    <Text style={styles.SubTitle}>
                        <Text style={styles.Bold}>ASSEMBLEIAS DAS ORGANIZAÇÕES E CBB 2020</Text>
                    </Text>
                    <Card
                        data='20'
                        mes='jan'
                        descricao='Culto de Lançamento da Campanha de Missões Mundiais.'
                        local='PIB Goiânia'
                        perido=' - Noite'
                    />

                    <Card
                        data='20 e 21'
                        mes='jan'
                        descricao='Assembleia da AECBB'
                        local='Seminário Teológico Batista Goiano'
                    />

                    <Card
                        data='21 e 22'
                        mes='jan'
                        descricao='Encontro da Juventude Batista Brasileira'
                        local='JBB - PIB em Vila Coimbra'
                    />

                    <Card
                        data='21'
                        mes='jan'
                        descricao='Encontro Nacional das Esposas de Pastores'
                        local='Igreja Metodista Central'
                    />

                    <Card
                        data='21'
                        mes='jan'
                        descricao='Assembleia da Associação dos Diáconos'
                        local='Centro de Convenções de Goiânia'
                    />

                    <Card
                        data='21 e 22'
                        mes='jan'
                        descricao='Assembleia da AMBB'
                        local='PIB Goiânia'
                    />

                    <Card
                        data='21 e 22'
                        mes='jan'
                        descricao='Assembleia da OPBB'
                        local='PIB Goiânia'
                    />

                    <Card
                        data='22'
                        mes='jan'
                        descricao='Assembleia da ANEB'
                        local='Centro de Convenções de Goiânia'
                    />

                    <Card
                        data='22'
                        mes='jan'
                        descricao='Assembleia da ABIBET'
                        local='Centro de Convenções de Goiânia'
                    />

                    <Card
                        data='22'
                        mes='jan'
                        descricao='Assembleia da UMHBB'
                        local='Centro de Convenções'
                    />

                    <Card
                        data='22'
                        mes='jan'
                        descricao='Assembleia da UFMBB'
                        local='Centro de Convenções'
                    />

                    <Card
                        data='22 a 25'
                        mes='jan'
                        descricao='Congresso Infantil'
                        local='Centro de Convenções'
                    />

                    <Card
                        data='23 a 26'
                        mes='jan'
                        descricao='100° Assembleia da CBB'
                        local='Centro de Convenções'
                    />

                    <Text style={styles.SubTitle}>
                        <Text style={styles.Bold}>ENCONTROS NO PERÍODO DA ASSEMBLEIA</Text>
                    </Text>

                    <Card
                        data='23'
                        mes='jan'
                        descricao='Reunião do Conselho Administrativo da UFMBB'
                        local='Centro de Convenções - 15h'
                    />

                    <Card
                        data='24'
                        mes='jan'
                        descricao='5° Encontro de Igreja Multiplicadora'
                        local='Centro de Convenções- 17h30'
                    />

                    <Card
                        data='25'
                        mes='jan'
                        descricao='4° Workshop Viver'
                        local='Centro de Convenções- 17h30'
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
        marginBottom: 30,
        color: '#155239'
    },
    Bold: {
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default Assembleia;
