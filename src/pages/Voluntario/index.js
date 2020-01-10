import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import GeneralStatusBarColor from '../../shared/GeneralStatusBarColor';
import { ActivityIndicator } from 'react-native-paper';

export default class Voluntario extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />
        <WebView 
          source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLScp-yR9RPqN515tMmgG8SeMQOB_TMtT-hXKghXGlwlu2I_cnQ/viewform' }} 
          onLoad={() => this.hideSpinner()}
          style={{ flex: 1 }}
          onError={
            ()=> alert("Não foi possível conectar com a internet")
          }
        />
        {
          this.state.visible && (
            <ActivityIndicator
              style={{ position: 'absolute', left: Dimensions.get('window').width/2 }}
              size="small"
              color='#155239'
            />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});