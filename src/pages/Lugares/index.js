import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor'

const _TAMANHO_BOX = 100;
const _TAMANHO_MARGIN = 10;
const _TAMANHO_BORDER_R = 100;

export default class Lugares extends Component {
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

            <View style={styles.container1}>

              <TouchableHighlight
                activeOpacity={10}
                onPress={() => this.props.navigation.navigate('AeroportoScreen')}>
                <View style={styles.box1}>
                  <Icon name='airplane' color='white' size={35} />
                  <Text style={styles.nome}>Aeroporto</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                activeOpacity={10}
                onPress={() => this.props.navigation.navigate('ParqueScreen')}>
                <View style={styles.box2}>
                  <Icon name='pine-tree' color='white' size={35} />
                  <Text style={styles.nome}>Parques</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={10}
                onPress={() => this.props.navigation.navigate('ShoppingScreen')}>
                <View style={styles.box3}>
                  <Icon name='shopping' color='white' size={35} />
                  <Text style={styles.nome}>Shoppings</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.container1}>
              <TouchableHighlight
                activeOpacity={10}
                onPress={() => this.props.navigation.navigate('ConvencaoScreen')}>
                <View style={styles.box4}>
                  <Icon name='home-map-marker' color='white' size={30} />
                  <Text style={styles.nome}>Centro De</Text>
                  <Text style={styles.nome}>Convenções</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={10}
                onPress={() => this.props.navigation.navigate('PibScreen')}>
                <View style={styles.box5}>
                  <Icon name='church' color='white' size={35} />
                  <Text style={styles.nome}>Pib Goiania</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.box6}>
              </View>
            </View>


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
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  nome: {
    fontSize: 15,
    color: 'white'
  },
  box1: {
    width: _TAMANHO_BOX,
    height: _TAMANHO_BOX,
    backgroundColor: '#4f98f0',
    margin: _TAMANHO_MARGIN,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: _TAMANHO_BORDER_R
  },
  box2: {
    width: _TAMANHO_BOX,
    height: _TAMANHO_BOX,
    backgroundColor: '#a043f4',
    margin: _TAMANHO_MARGIN,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: _TAMANHO_BORDER_R
  },
  box3: {
    width: _TAMANHO_BOX,
    height: _TAMANHO_BOX,
    backgroundColor: '#fb7b17',
    margin: _TAMANHO_MARGIN,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: _TAMANHO_BORDER_R
  },
  box4: {
    width: _TAMANHO_BOX,
    height: _TAMANHO_BOX,
    backgroundColor: '#34a853',
    margin: _TAMANHO_MARGIN,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: _TAMANHO_BORDER_R
  },
  box5: {
    width: _TAMANHO_BOX,
    height: _TAMANHO_BOX,
    backgroundColor: '#24c1e0',
    margin: _TAMANHO_MARGIN,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: _TAMANHO_BORDER_R
  },
  box6: {
    width: _TAMANHO_BOX,
    height: _TAMANHO_BOX,
    margin: _TAMANHO_MARGIN,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: _TAMANHO_BORDER_R
  }
});