import React, { Component } from 'react';
import {SafeAreaView,View,StyleSheet,Image,ScrollView} from 'react-native';
import {
    createDrawerNavigator,
    DrawerItems
} from 'react-navigation';

import Home from '../pages/Home/index';
import Equipe from '../pages/Equipe/index';
import Stands from '../pages/Stands/index';

const customDrawer = (props) => (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.view}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);

const MyNavigator = createDrawerNavigator({
    Home: Home,
    Equipe: Equipe,
    Stands: Stands
},
{
    contentComponent:customDrawer
});

const styles = StyleSheet.create({
    view: {
        height: 150,
        backgroundColor : 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 120,
        width: 120,
        borderRadius: 60
    }
});

export default MyNavigator;