import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, ScrollView, Button } from 'react-native';
import {
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
  DrawerItems
}
  from 'react-navigation';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Equipe from '../pages/Equipe';
import AreasTrabalho from '../pages/Equipe/AreasTrabalho';
import Centenario from '../pages/Centenario';
import Assembleia from '../pages/Assembleia';
import CongressoInfantil from '../pages/CongressoInfantil';
import Organizacoes from '../pages/Organizacoes';
import HospedagemParticular from '../pages/Hospedagem/HospedagemParticular';
import HospedagemEconomica from '../pages/Hospedagem/HospedagemEconomica';
import Home from '../pages/Home';
import Stands from '../pages/Stands';
import Lugares from '../pages/Lugares';
import Aeroporto from '../pages/Lugares/Aeroporto';
import Pib from '../pages/Lugares/Pib';
import Convencao from '../pages/Lugares/CentroConvencao';
import Parque from '../pages/Lugares/Parques';
import Shopping from '../pages/Lugares/Shoppings';
import Voluntario from '../pages/Voluntario';
import Turismo from '../pages/Turismo';

const ACTIVE_TAB_COLOR = '#155239'
const INACTIVE_TAB_COLOR = '#aaa'

const headerStyles = {
  headerTintColor: '#fff',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: ACTIVE_TAB_COLOR,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  }
}

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <IconAntDesign name='home' color={tintColor} size={30} />
      }
    },
    Equipes: {
      screen: createMaterialTopTabNavigator({
        Economica: {
          screen: Equipe,
          navigationOptions: {
            title: 'Grupo de Trabalho',
          }
        },
        Particular: {
          screen: AreasTrabalho,
          navigationOptions: {
            title: 'Áreas de Trabalho',
          }
        }
      },
        {
          tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: ACTIVE_TAB_COLOR,
            inactiveTintColor: '#979CA8',
            style: {
              backgroundColor: '#FFF',
              elevation: 0,
              borderBottomColor: '#DFE2EF',
              borderBottomWidth: 1,
            },
            indicatorStyle: {
              backgroundColor: ACTIVE_TAB_COLOR,
              height: 2,
              marginBottom: -1,
            }
          }
        }
      ),
      navigationOptions: {
        tabBarLabel: 'Equipes',
        tabBarIcon: ({ tintColor }) => <IconAntDesign name='user' color={tintColor} size={30} />
      }
    },
    Programação: {
      screen: createMaterialTopTabNavigator({
        Centenario: {
          screen: Centenario,
          navigationOptions: {
            title: '100 Anos em Goiás',
          }
        },
        Assembleia: {
          screen: Assembleia,
          navigationOptions: {
            title: '100ª Assembleia da CBB',
          }
        },
        CongressoInfantil: {
          screen: CongressoInfantil,
          navigationOptions: {
            title: 'Congresso Infantil',
          }
        },
        Organizacoes: {
          screen: Organizacoes,
          navigationOptions: {
            title: 'Organizações',
          }
        }
      },
        {
          tabBarOptions: {
            upperCaseLabel: false,
            scrollEnabled: true,
            activeTintColor: ACTIVE_TAB_COLOR,
            inactiveTintColor: '#979CA8',
            style: {
              backgroundColor: '#FFF',
              elevation: 0,
              borderBottomColor: '#DFE2EF',
              borderBottomWidth: 1,
            },
            indicatorStyle: {
              backgroundColor: ACTIVE_TAB_COLOR,
              height: 2,
              marginBottom: -1,
            }
          }
        }
      ),
      navigationOptions: {
        tabBarLabel: 'Programação',
        tabBarIcon: ({ tintColor }) => <IconAntDesign name='calendar' color={tintColor} size={30} />
      }
    },
    Stands: {
      screen: Stands,
      navigationOptions: {
        tabBarLabel: 'Stands',
        tabBarIcon: ({ tintColor }) => <IconAntDesign name='isv' color={tintColor} size={30} />
      }
    },
    Hospedagem: {
      screen: createMaterialTopTabNavigator({
        Economica: {
          screen: HospedagemEconomica,
          navigationOptions: {
            title: 'Hospedagem Econômica',
          }
        },
        Particular: {
          screen: HospedagemParticular,
          navigationOptions: {
            title: 'Hospedagens Particulares',
          }
        }
      },
        {
          tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: ACTIVE_TAB_COLOR,
            inactiveTintColor: '#979CA8',
            style: {
              backgroundColor: '#FFF',
              elevation: 0,
              borderBottomColor: '#DFE2EF',
              borderBottomWidth: 1,
            },
            indicatorStyle: {
              backgroundColor: ACTIVE_TAB_COLOR,
              height: 2,
              marginBottom: -1,
            }
          }
        }
      ),
      navigationOptions: {
        tabBarLabel: 'Hospedagem',
        tabBarIcon: ({ tintColor }) => <IconMaterialCommunityIcons name='hotel' color={tintColor} size={30} />
      }
    }
  },
  {

    swipeEnabled: false,
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: ACTIVE_TAB_COLOR,
      inactiveTintColor: INACTIVE_TAB_COLOR,
      showLabel: true,
      style: {
        borderTopWidth: 0,
        paddingTop: 3,
        paddingBottom: 4,
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 0 }
      }
    }
  }
)

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: AppTabNavigator
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: true,
      headerLeft: (
        <IconIonicons
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          color='white'
          size={30}
        />
      ),
      headerTitle: () => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return <Text style={{ fontSize: 20, color: 'white' }}> {routeName} </Text>
      },
      ...headerStyles
    })
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: DashboardStackNavigator,
    navigationOptions: {
      drawerLabel: 'Início',
      drawerIcon: ({ tintColor }) => (
        <IconAntDesign name='home' color={tintColor} size={24} />
      )
    }
  },
  Lugares: {
    screen: createStackNavigator({
      LugaresScreen: { screen: Lugares },
      AeroportoScreen: { screen: Aeroporto },
      PibScreen: { screen: Pib },
      ConvencaoScreen: { screen: Convencao },
      ParqueScreen: { screen: Parque },
      ShoppingScreen: { screen: Shopping }
    },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarVisible: true,
          headerLeft: (

            <IconMaterialCommunityIcons
              style={{ paddingLeft: 10 }}
              onPress={() => {
                let index = navigation.dangerouslyGetParent().state.index;
                if (index > 0) {
                  navigation.goBack()
                }
                else {
                  navigation.navigate('Home')
                }
              }}
              name="arrow-left" color='white' size={30}
            />
          ),
          headerTitle: 'Lugares',
          ...headerStyles
        })
      }),
    navigationOptions: {
      drawerLabel: 'Lugares',
      drawerIcon: ({ tintColor }) => (
        <IconAntDesign name='enviromento' color={tintColor} size={24} />
      ),

    }
  },
  Turismo: {
    screen: createStackNavigator({
      TurismoScreen: { screen: Turismo }
    },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarVisible: true,
          headerLeft: (
            <IconMaterialCommunityIcons
              style={{ paddingLeft: 10 }}
              onPress={() => {
                let index = navigation.dangerouslyGetParent().state.index;
                if (index > 0) {
                  navigation.goBack()
                }
                else {
                  navigation.navigate('Home')
                }
              }}
              name="arrow-left" color='white' size={30}
            />
          ),
          headerTitle: 'Turismo',
          ...headerStyles
        })
      }),
    navigationOptions: {
      drawerLabel: 'Turismo',
      drawerIcon: ({ tintColor }) => (
        <IconMaterialCommunityIcons name='bus-double-decker' color={tintColor} size={24} />
      ),

    }
  },
  Voluntario: {
    screen: createStackNavigator({
      VoluntarioScreen: { screen: Voluntario }
    },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarVisible: true,
          headerLeft: (
            <IconIonicons
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu" color='white' size={30}
            />
          ),
          headerTitle: 'Seja um Voluntário',
          ...headerStyles
        })
      }),
    navigationOptions: {
      drawerLabel: 'Seja um Voluntário',
      drawerIcon: ({ tintColor }) => (
        <IconIonicons name='ios-hand' color={tintColor} size={24} />
      ),

    }
  }
},
  {
    contentOptions: {
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      }
    },

    contentComponent: (props) => (
      <SafeAreaView style={styles.container}>
        <View style={{ height: 140, alignItems: 'center', justifyContent: 'center' }}>

          <Image
            style={{ width: '100%', resizeMode: "contain" }}
            source={require('../assets/menu_logo.jpeg')} />
        </View>
        <ScrollView>
          <DrawerItems {...props} />
        </ScrollView>
      </SafeAreaView>
    )
  });

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator }
});

class App extends Component {
  render() {
    return <AppSwitchNavigator />;
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});