import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import GeneralStatusBarColor from '../../../shared/GeneralStatusBarColor';

// import { Container } from './styles';

export default function CaldasNovas() {
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
            source={require('../../../assets/CaldasNovas/capa.jpg')} />
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Caldas Novas</Text> é uma cidade no centro do Brasil conhecida pelos seus banhos termais. As suas piscinas naturais e artificiais vão de parques temáticos a spas. No centro, a Nossa Senhora das Dores é uma igreja bem preservada do século XIX. O Jardim Japonês é um parque paisagístico tranquilo. Na extremidade sudeste da cidade encontra-se o lago artificial de Corumbá. A sudeste, o Parque Estadual Serra de Caldas possui trilhos, quedas de água e uma avifauna variada.
          </Text>
          
          <Text style={styles.titulo}>LUGARES PARA CONHECER EM CALDAS NOVAS</Text>
          
          <Text style={styles.subtitulo}>1. Water Park</Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/CaldasNovas/waterpark.jpg')} />
          <Text style={styles.texto}>
            Nesse espaço com muito verde, hóspedes e visitantes podem desfrutar não só das piscinas de águas termais: há espaço destinado às crianças com brinquedos como piscina de ondas, toboágua gigante, rampa para deslizar com ou sem boia, além de um playground aquático. O parque funciona das 9 às 18h, mas a diversão não para nem mesmo à noite, quando o Water Park também presenteia os hóspedes da Rede de Hotéis Privé com jantares temáticos. O Water Park também comporta eventos e grandes shows. 
          </Text>

          <Text style={styles.subtitulo}>
            2. Náutico Praia Clube
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/CaldasNovas/nautico.jpg')} />
          <Text style={styles.texto}>
            O complexo reúne lazer aquático temático, experiências Náuticas e um complexo de hotéis para quem quer ficar próximo à natureza. Entre as várias piscinas quentes e frias, estão piscinas de ondas, bar molhado, toboáguas radicais. Além disso, o complexo conta com uma mega Hidro, uma grande piscina de hidromassagem. O Náutico tem uma decoração toda especial, com caravela e turma de piratinhas. 
          </Text>

          <Text style={styles.subtitulo}>
            3. Clube Privé
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/CaldasNovas/clubeprive.jpg')} />
          <Text style={styles.texto}>
            O tradicional clube de Caldas Novas é conhecido por ser um lugar para descansar e curtir as piscina de águas termais, com um super toboágua radical. O Clube Privé ainda conta com ofurôs Zen, pizzaria e espaço para eventos. O parque fica há apenas 800 metros do centro de Caldas Novas e  tem acesso gratuito para todos os hóspedes que estão em qualquer um dos hotéis da Rede Privé.
          </Text>

          <Text style={styles.subtitulo}>
            4. Parque Estadual da Serra de Caldas
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/CaldasNovas/serracaldas.jpg')} />
          <Text style={styles.texto}>
            O Parque Estadual da Serra de Caldas Novas é uma ótima pedida para fugir da agitação da cidade, trata-se de uma unidade ambiental que fica entre os municípios de Caldas Novas e Rio Quente e que foi criada em 1970 para preservar as nascentes de água termais da região. Desde 1999 está estruturado para receber visitantes e oferece belezas da fauna e da flora da região, duas trilhas, Cascatinha e Paredão (níveis leve e intermediário) que levam às cachoeiras e mirantes. Vale lembrar que durante toda a visitação você contará com o auxílio de guias. E o melhor, o parque fica a apenas 5 Km do centro de Caldas.
          </Text>

          <Text style={styles.subtitulo}>
            5. Jardim Japonês
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/CaldasNovas/jardimjapones.jpg')} />
          <Text style={styles.texto}>
            No jardim de Caldas Novas, a ponte simboliza um ritual de passagem, evolução e abandono de sentimento de energias negativas.
          </Text>
          <Text style={styles.texto}>
            O Jardim Japonês é uma das opções de lazer para os turistas que vão visitar Caldas Novas. O local, construído por um paisagista japonês na década de 80, atrai anualmente quase 150 mil turistas. Foi construído na década de 1980 por um paisagista japonês e é o lugar perfeito para quem quer paz e harmonia.
          </Text>

          <Text style={styles.subtitulo}>
            6. Lagoa Quente de Pirapitinga (Lagoa Thermas Clube)
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/CaldasNovas/lagoaquente.jpg')} />
          <Text style={styles.texto}>
            No Parque Lagoa de Pirapitinga fica o famoso Poço do Ovo, uma das nascentes mais quentes do país, onde a água chega a 57 graus. O poço recebeu esse nome porque muitas pessoas têm o hábito de ir até o lugar e cozinhar um ovo em apenas 3 minutos. O clube Lagoa Termas Parque combina diversão termal, atrações radicais, contato com a natureza e nascentes termais, com opções de piscinas, escorregadores, toboáguas e atrações radicais, como a torre Hot Half, e os tobogãs Ananconda, Ciclone, Furioso e Loucomania. E ainda oferece infraestrutura para camping com banheiros, restaurantes, sauna, quadras e espaço para quem curte esportes como o arvorismo.
          </Text>

          <Text style={styles.subtitulo}>
            7. Lago Corumbá
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/CaldasNovas/lagocorumba.jpg')} />
          <Text style={styles.texto}>
            O lago é ideal para a prática de esportes náuticos, passeios de barco, pesca esportiva e exploração de cachoeiras da região. Ele é formado pelo represamento das águas do Rio Corumbá para alimentar a usina hidroelétrica do mesmo nome, e soma uma área de 65 km.
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