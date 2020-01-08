import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import HospedagemEconomica from '../pages/Hospedagem/HospedagemEconomica';

const DrawerScreen = DrawerNavigator({
    Screen1: {screen:HospedagemEconomica}
}, 
{
    headerMode: 'none'
});

export default DrawerScreen;