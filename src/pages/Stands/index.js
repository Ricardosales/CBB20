//import liraries
import React, { Component } from 'react';
import { View, Modal, Text, TouchableHighlight, StyleSheet, ScrollView, Image, Button, Linking } from 'react-native';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';
import Screen from '../../shared/Screen';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [{
    url: '',

    props: {
        source:require('../../assets/Stands/stands.jpg')
    }
}]


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
        color: '#1e466d'
    },
    Bold: {
        fontWeight: 'bold'
    },
    contain: {
        width: "100%",
        height: 300,
        resizeMode: 'contain'
    },
    Link: {
        color: '#1e73be'
    },
    Tema: {
        fontWeight: "700",
        color: '#7a7a7a',
        marginBottom: 15
    },
    SubTema: {
        fontWeight: "400",
        color: '#7a7a7a'
    },
    ButtonSpaco: {
        marginBottom : 10
    }
});

//make this component available to the app
export default class Stands extends Component{

    state = {
        visibleModal : false,
    };

    setModalVisible(visible) {
        this.setState({visibleModal: visible});
    }

    render(){
        return(
            <Screen>
            <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />
            <ScrollView
                ref={ref => this.scrollView = ref}
                scrollEnabled={true}
                style={[styles.scrollView, styles.walletCardWrap]}
                contentContainerStyle={styles.scrollViewContentContainer} >
                <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />

                <View style={styles.card}>
                    <Text style={styles.Title}>Stands</Text>

                    <TouchableHighlight 
                        activeOpacity = { .5 }
                        onPress={() => {
                            this.setModalVisible(true);
                          }}
                        >
                        <Image
                            style={styles.contain}
                            source={require('../../assets/Stands/stands.jpg')}
                        />
                    </TouchableHighlight>
                    
                    <Modal 
                        visible={this.state.visibleModal}
                        transparent={false}
                        onRequestClose={() => {
                            this.setModalVisible(false);
                          }}
                        >
                        <ImageViewer imageUrls={images}/>
                    </Modal>              

                    <Text style={styles.SubTitle}>
                        Reserve o seu espaço agora mesmo!
                    </Text>
                    <Text style={styles.Tema}>
                        Contato:
                    </Text>
                    <Text style={styles.SubTema}>
                        Reabias Calixto Freire
                    </Text>
                    <Text style={styles.SubTema}>
                        (62) 9 8151 1075 (Whatsapp)
                    </Text>

                    <Text>{"\n"}</Text>
                    
                    <Text style={styles.SubTitle}>
                        Download de Documentos Necessários:
                    </Text>

                    <View style={styles.ButtonSpaco}>
                        <Button style={styles.BtnInscricao} title="Contrato de Locação" onPress={() => {
                            Linking.openURL('https://www.cbb2020.com.br/wp-content/uploads/2019/09/CONTRATO_EXPOCBB2020.pdf')
                        }} />
                    </View>
                    <View style={styles.ButtonSpaco}>
                        <Button style={styles.BtnInscricao} title="Filosofia da Convenção" onPress={() => {
                            Linking.openURL('https://www.cbb2020.com.br/wp-content/uploads/2019/09/EXPOCBB2020_ANEXO-I-Filosofia-da-CBB.pdf')
                        }} />
                    </View>
                    <View style={styles.ButtonSpaco}>
                        <Button style={styles.BtnInscricao} title="Declaração de Resp." onPress={() => {
                            Linking.openURL('https://www.cbb2020.com.br/wp-content/uploads/2019/09/EXPOCBB2020_ANEXO-II-Declara%C3%A7%C3%A3o.pdf')
                        }} />
                    </View>
                    <Text>{"\n"}</Text>

                </View>
            </ScrollView>
        </Screen>
        )
    }
};
