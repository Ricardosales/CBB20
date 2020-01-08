//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Image, Modal } from 'react-native';
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';
import Screen from '../../shared/Screen';
import ImageViewer from 'react-native-image-zoom-viewer';
import Slideshow from 'react-native-image-slider-show';

const images = [
    { props: { source: require('../../assets/Hospedagem/001.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/002.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/003.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/004.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/005.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/006.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/007.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/008.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/009.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/010.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/011.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/012.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/013.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/014.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/015.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/016.jpeg') } },
    { props: { source: require('../../assets/Hospedagem/017.jpeg') } },
]

//make this component available to the app
export default class HospedagemParticular extends Component {



    state = {
        visibleModal: false,
        index: 0
    };

    setModalVisible(visible, index) {
        this.setState({ visibleModal: visible, index: index });
    }

    render() {
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
                        <Text style={styles.Title}>Hospedagens Particulares</Text>

                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 0);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/001.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 1);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/002.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 2);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/003.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 3);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/004.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 4);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/005.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 5);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/006.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 6);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/007.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 7);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/008.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 8);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/009.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 9);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/010.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 10);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/011.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 11);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/012.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 12);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/013.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 13);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/014.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 14);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/015.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 15);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/016.jpeg')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <TouchableHighlight
                                activeOpacity={.5}
                                onPress={() => {
                                    this.setModalVisible(true, 16);
                                }}
                            >
                                <Image
                                    style={{ height: 350, width: '100%', resizeMode: "contain" }}
                                    source={require('../../assets/Hospedagem/017.jpeg')} />
                            </TouchableHighlight>
                        </View>

                        <Modal
                            visible={this.state.visibleModal}
                            transparent={false}
                            onRequestClose={() => {
                                this.setModalVisible(false, 0);
                            }}
                        >
                            <ImageViewer imageUrls={images} index={this.state.index} />
                        </Modal>

                        <Text>{"\n"}</Text>

                    </View>
                </ScrollView>
            </Screen>
        )
    }
}

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
        marginBottom: 10
    }
});