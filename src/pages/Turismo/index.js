import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor'

export default class Turismo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />
                <ScrollView
                    ref={ref => this.scrollView = ref}
                    scrollEnabled={true}
                    style={[styles.scrollView, styles.walletCardWrap]}
                    contentContainerStyle={styles.scrollViewContentContainer} >
                    <View style={styles.card}>
                        <TouchableHighlight
                            activeOpacity={10}
                            style={styles.Toucha}
                            onPress={() => this.props.navigation.navigate('GoianiaScreen')}>

                            <View style={styles.box}>
                                <View>
                                    <Image
                                        style={styles.imagem}
                                        source={require('../../assets/Goiania/capa.jpg')} />
                                </View>
                                <View>
                                    <Text style={styles.titulo}>Goiânia - GO</Text>
                                    <Text style={styles.subtitulo}>Capital do estado e Goiás</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            activeOpacity={10}
                            style={styles.Toucha}
                            onPress={() => this.props.navigation.navigate('CaldasNovasScreen')}>
                            <View style={styles.box}>
                                <View>
                                    <Image
                                        style={styles.imagem}
                                        source={require('../../assets/CaldasNovas/capa.jpg')} />
                                </View>
                                <View>
                                    <Text style={styles.titulo}>Caldas Novas - GO</Text>
                                    <Text style={styles.subtitulo}>170km do município de Goiânia - GO</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            activeOpacity={10}
                            style={styles.Toucha}
                            onPress={() => this.props.navigation.navigate('PirinopolisScreen')}>
                            <View style={styles.box}>
                                <View>
                                    <Image
                                        style={styles.imagem}
                                        source={require('../../assets/Pirinopolis/capa.jpg')} />
                                </View>
                                <View>
                                    <Text style={styles.titulo}>Pirenópolis - GO</Text>
                                    <Text style={styles.subtitulo}>124km do município de Goiânia - GO</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    scrollView: {
        backgroundColor: '#eee'
    },
    scrollViewContentContainer: {
        flexGrow: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    box: {
        height: 300,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dadce0',
        marginBottom: 20
    },
    imagem: {
        height: 220,
        width: '100%',
        resizeMode: "stretch",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
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
    }
});
