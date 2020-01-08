import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import GeneralStatusBarColor from '../../../shared/GeneralStatusBarColor';

// import { Container } from './styles';

export default function Pirinopolis() {
  return (
    <View style={styles.container}>
      <GeneralStatusBarColor backgroundColor='#155239' barStyle="light-content" />
      <ScrollView
        ref={ref => this.scrollView = ref}
        scrollEnabled={true}
        style={[styles.scrollView, styles.walletCardWrap]}
        contentContainerStyle={styles.scrollViewContentContainer} >
        <View style={styles.card}>
          <Image
            style={{ height: 250, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Pirinopolis/capa.jpg')} />
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Pirenópolis</Text> é uma cidadezinha cheia de charme com suas casas em estilo colonial e seu centro histórico tão bem preservado. Localizada a 129km de Goiânia, a cidade é um misto de cultura, gastronomia e natureza e tem atividades para todos os gostos.
          </Text>
          
          <Text style={styles.titulo}>LUGARES PARA CONHECER EM PIRENÓPOLIS</Text>
          
          <Text style={styles.subtitulo}>1. Centro Histórico de Pirenópolis</Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Pirinopolis/centrohistorico.jpg')} />
          <Text style={styles.texto}>
            Tombada pelo IPHAN em 1989 como patrimônio histórico, a cidade conserva o casario colonial. Pelas ladeiras calçadas em paralelepípedos do centro antigo estão espalhadas construções de janelas coloridas, igrejas e espaços culturais. O cenário fica ainda mais bonito à noite, quando são acesas antigas luminárias. Vá a pé, sem pressa, e se deleite com os cafés, lojinhas de artesanatos, os bistrôs e todo o charme do lugar.
          </Text>

          <Text style={styles.subtitulo}>
            2. Cachoeira do Abade
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Pirinopolis/abade.jpg')} />
          <Text style={styles.texto}>
            Há duas maneiras de aproveitar o passeio até a Cachoeira do Abade, em Pirenópolis (GO). Uma delas é ir direto à Cachoeira do Abade, com poço para banho e prainha, e à do Canyon (7 m), com poço grande e fundo. A outra é percorrer a trilha de 2,5 km com mirantes, corredeiras leves, um poço e, para finalizar, uma ponte suspensa (o ingresso também dá direito a visitar as cachoeiras).
          </Text>

          <Text style={styles.subtitulo}>
            3. Parque Estadual dos Pireneus
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Pirinopolis/parquepireneus.jpg')} />
          <Text style={styles.texto}>
            Espalhado por uma área de quase três mil hectares, o parque oferece trilhas, cachoeiras com poços para banhos e o mirante do pico da Capelinha, o segundo mais alto do Estado, a 1.385 metros de altitude.
          </Text>

          <Text style={styles.subtitulo}>
            4. Museu Rodas do Tempo
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Pirinopolis/museu.jpg')} />
          <Text style={styles.texto}>
            Rodas do Tempo é a realização de um sonho de quem, por mais de trinta anos, procurou resgatar e restaurar veículos antigos motorizados de duas rodas. São motocicletas, bicicletas motorizadas, scooters e veículos com mais de duas rodas que possuem motorização de motocicleta ou scooter.
          </Text>

          <Text style={styles.subtitulo}>
            5. Cachoeira do Rosário
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Pirinopolis/rosario.jpg')} />
          <Text style={styles.texto}>
            Imagine-se e um oásis de águas cristalinas mesmo durante o período chuvoso, cercado pelo cerrado rupestre, campos, várzeas, cânion, mata de galeria, fauna, flora piscinas naturais, gruta e cachoeira de 42m de queda negativa, proporcionando um banho incrível, trilhas terapêuticas e árvores centenárias. A comida goiana caipira, servida no fogão a lenha, revive a vida na roça. Venha viver a verdade da vida, a simplicidade e a exuberância da natureza
          </Text>

          <Text style={styles.subtitulo}>
            6. Cachoeira Paraíso
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Pirinopolis/paraiso.jpg')} />
          <Text style={styles.texto}>
            A Cachoeira Paraíso esta localizada a 30km de Pirenópolis. GO338 saída para a cidade de Goianésia . Sendo 23km de asfalto e 7km de estrada de terra. Localizada na Fazenda Araras em uma região onde se concentra vários pontos de extração de pedras, a Cachoeira Paraíso tem uma paisagem exuberante e águas cristalinas. Na mesma localização com uma trilha de 2km pelo cerrado, em uma região de várzeas temos a Cachoeira do Lobo com queda d`água de 11 metros que jamais havia sido explorada antes. O local é lindo! Alem disso, o local possui ainda 06 piscinas naturais com trilhas de 200 a 500 metros que são excelentes para banho. A Cachoeira Paraíso oferece Restaurante com uma deliciosa comida caipira aberto aos sabados,domingos e feriados.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#fff',
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
  negrito: {
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 24,
    color: '#333333'
  },
  titulo: {
    color: '#16a085',
    marginBottom: 15,
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitulo: {
    color: '#16a085',
    marginTop: 15,
    fontSize: 17,
    fontWeight: 'bold'
  }
});