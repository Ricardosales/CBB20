import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import GeneralStatusBarColor from '../../../shared/GeneralStatusBarColor';

// import { Container } from './styles';

export default function Goiania() {
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
            source={require('../../../assets/Goiania/goiania.jpg')} />
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Goiânia</Text> é um município brasileiro, capital do estado de Goiás. Dista 209 km de Brasília, a capital nacional. Localizada no centro do seu estado, foi planejada e construída para ser a capital política e administrativa de Goiás. Sofreu um acelerado crescimento populacional desde a década de 1960 e atingiu um milhão de habitantes em 1996. Desde seu início, a sua arquitetura teve influência do Art Déco, que definiu a fisionomia dos primeiros prédios da cidade.
          </Text>
          <Text style={styles.texto}>
            É um importante polo econômico da região, considerada um centro estratégico para áreas como indústria, medicina, moda e agricultura. Goiânia se destaca por ser a cidade mais arborizada do pais, com um índice de arborização de 89,5% e está entre as 100 cidades mais verdes do mundo (dados do Carbon Discloudure Project - 2018).
          </Text>

          <Text style={styles.titulo}>LUGARES PARA CONHECER EM GOIÂNIA</Text>
          <Text style={styles.subtitulo}>1. Monumento às três raças</Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Monumento.jpg')} />
          <Text style={styles.texto}>
            O monumento foi esculpido em bronze e granito no ano de 1968, pela artista Neusa Morais. Foi desenvolvido como uma homenagem à miscigenação dos povos responsáveis pela origem do povo goiano – brancos, negros e indígenas. O monumento pode ser encontrado na Praça Cívica.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text>Praça Dr. Pedro Ludovico Teixeira, 2 – St. Central, Goiânia – GO, 74003-010
          </Text>

          <Text style={styles.subtitulo}>
            2. Centro Cultural Oscar Niemeyer
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/OscarNiemeyer.jpg')} />
          <Text style={styles.texto}>
            O complexo que homenageia o arquiteto brasileiro foi inaugurado em 2006. E abriga um teatro, uma biblioteca e um monumento aos direitos humanos. Além disso, ali funciona também o Museu de Arte Contemporânea. Conta com três galerias de arte e homenageia os artistas locais D.J. Oliveira e Cleber Gouveia.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text>Avenida Deputado Jamel Cecílio, Lote 01, Quadra Gleba, 4490 – Setor Fazenda Gameleira, Goiânia – GO, 74884-801
          </Text>

          <Text style={styles.subtitulo}>
            3. Vila Cultural Cora Coralina
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/CoraCoralina.jpg')} />
          <Text style={styles.texto}>
            Situada ao lado do Teatro Goiânia, a Vila também funciona como um centro de convivência. Foi inaugurada em outubro de 2013 e desde então recebe eventos que sempre contemplam as artes, tornando-as acessíveis ao público em geral. Por ali podem se encontradas exposições fotográficas, mostras de filmes, oficinas, workshops, palestras, feiras de artesanato, exposições de obras, e muito mais.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Horário de funcionamento: </Text> todos os dias, das 9h às 17h
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Telefone: </Text> (62) 3201-9863
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text>  Rua 3, s/n – St. Central, Goiânia – GO, 74015-005
          </Text>

          <Text style={styles.subtitulo}>
            4. Teatro Goiânia
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Teatro.jpg')} />
          <Text style={styles.texto}>
            Inaugurado em 12 de junho de 1942, é o mais tradicional espaço cultural de Goiânia. Integra o conjunto arquitetônico do projeto da cidade. Trata-se do estilo Art decó do arquiteto Jorge Félix. Além de sua importância histórica, o teatro, na atualidade, é um dos principais espaços de apresentação de dança, teatro e música erudita e popular da cidade, tendo sido declarado Patrimônio Nacional em 2003. O Teatro Goiânia foi um dos primeiros prédios da nova capital.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Horário de funcionamento: </Text> segunda a sexta-feira, das 8 às 20 horas, e nos sábados, domingos e feriados para espetáculos.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Rua 23 esq. c/ Av Tocantins. Goiânia
          </Text>

          <Text style={styles.subtitulo}>
            5. Memorial do Cerrado
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Memorial.jpg')} />
          <Text style={styles.texto}>
            No complexo, a réplica de uma cidadezinha histórica, típica do interior do estado, mini fazendas e até tribo indígena. O espaço é mantido pela PUC Goiás e abriga ainda um enorme Centro de Convenções e teatro paara 3 mil pessoas.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Rua Maria de Lourdes G. Ferreira - Conjunto Fabiana. Telefone: (62) 3946-1711
          </Text>

          <Text style={styles.titulo}>PARQUES</Text>
          <Text style={styles.subtitulo}>
            1. Parque Flamboyant
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/ParqueFlamboyant.jpg')} />
          <Text style={styles.texto}>
            Inaugurado no ano de 2007, conta com 125 mil m² de extensão, considerado como um dos maiores parques da capital. Por ali é possível aproveitar bons momentos com a família e os amigos, já que o ambiente possui muita área verde, ciclovias, espaços de convivência, parques infantis e muito mais.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> R. 15, 103-157 – Jardim Goiás, Goiânia – GO, 74810-080
          </Text>

          <Text style={styles.subtitulo}>
            2. Parque Vaca Brava
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/VacaBrava.jpg')} />
          <Text style={styles.texto}>
            O parque Sulivan Silvestre, mais conhecido como Parque Vaca Brava, é um dos melhores e mais frequentados da cidade. Por estar em um dos setores mais nobres e próximo a grandes shoppings, escolas e polos empresariais, sempre é possível ver muita gente andando por ali. Em seus 79.800 m² é possível encontrar um grande lago, um bosque bem charmoso e muito contato com a natureza. Um dos melhores lugares para conhecer em Goiânia!
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Av. T-10, s/n – St. Bueno, Goiânia – GO, 74210-240
          </Text>

          <Text style={styles.subtitulo}>
            3. Bosque dos Buritis
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Buritis.jpg')} />
          <Text style={styles.texto}>
            O Bosque dos Buritis é um dos destinos certos para conhecer em Goiânia, simplesmente por ser um dos principais e mais bonitos cartões postais da cidade. Por ali é possível encontrar três lagos, um espaço para eventos, parque infantil e muito mais. Perfeito também para quem busca manter um bom contato com a natureza.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Av. Assis Chateaubriand – St. Oeste, Goiânia – GO, 74115-040
          </Text>

          <Text style={styles.subtitulo}>
            4. Parque Areião
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Areiao.jpg')} />
          <Text style={styles.texto}>
            Um dos mais tradicionais de Goiânia. Localizado na região Sul, entre os setores Pedro Ludovico Teixeira e Marista, o parque foi feito a partir do traçado original da capital, e considerado no Plano Original de Goiânia como uma grande reserva ambiental. Com uma pista de cooper de 2.400m, duas estações de ginásticas, um campo de futebol, área de lazer infantil, lagos, e os já citados teatro a céu aberto e Vila Ambiental projetada para desenvolver atividades de educação ambiental, o Areião é composto por plantas do cerrado e por áreas de reflorestamento. A fauna é constituída principalmente por macacos, pássaros e outros animais de pequeno porte. Excelente local para atividades físicas e convívio com a natureza, quiosques de hidratação estão espalhados pelo lugar, que é bem localizado e de fácil acesso. Os bambus são o diferencial na paisagem, oferecendo uma beleza singular, sombra e frescor.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Av. Areião, s/n - St. Pedro Ludovico, Goiânia - GO, 74820-370
          </Text>

          <Text style={styles.subtitulo}>
            5. Jardim Botânico
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Botanico.jpg')} />
          <Text style={styles.texto}>
            Construído ainda na década de 40, conta com nada menos que um milhão de metros quadrados, representando a maior unidade de conservação de Goiânia. Boa parte do parque não é aberto para visitações, no entanto, ainda é possível ter acesso a uma boa área que oferece diversas atrações, como um lago, trilhas ecológicas, pista para caminhada e um lindo borboletário. Vale a pena conhecer em Goiânia!
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Av. Botafogo, 2981-3105 – St. Pedro Ludovico, Goiânia – GO
          </Text>

          <Text style={styles.titulo}>COMPRAS EM GOIÂNIA</Text>
          <Text style={styles.subtitulo}>
            1. Pólo da Moda
          </Text>
          <Text style={styles.texto}>
            Goiás está no mapa nacional e internacional da moda. Produzimos moda para grandes atacadistas, lojas de varejo e sacoleiras de todos os lugares.  Com moda de qualidade e moderna, Goiânia começa a se projetar como um importante polo de moda e possui uma expressiva indústria de confecção nos mais diversos segmentos. 
          </Text>
          <Text style={styles.texto}>
            A Região da Rua 44 é o principal Centro de Compras em Atacado da Cidade, por ali se encontram diversas bancas, lojas e galerias que oferecem os mais variados produtos, mas que se concentram principalmente na comercialização de roupas. É o maior polo atacadista da cidade e atrai sacoleiros e turistas de todos os lugares. Lá também estão o Mega Moda, especializado em atacado, com mais de 1300 lojas, o Shopping da Estação com mais de 400 lojas atacado e varejo e demais lojas de rua. 
          </Text>

          <Text style={styles.subtitulo}>
            2. Feira Hippie
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/FeiraHippie.jpg')} />
          <Text style={styles.texto}>
            A maior e mais tradicional de todas as feiras da cidade.É também a maior feita da América Latina. São mais de 6 mil expositores e oferece de produtos artesanais, comida e moda.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Funcionamento: </Text> sexta, das 8h às 17h / sábado, das 7h às 17h / domingo, das 7h às 15h
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Viela da Rua 44, s/n – Centro, Goiânia – GO, 74063-300
          </Text>

          <Text style={styles.subtitulo}>
            3. Feira do Sol
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Sol.jpg')} />
          <Text style={styles.texto}>
            A charmosa feira toma conta da praça de mesmo nome, no Setor Oeste, aos domingos. O visitante encontra desde bichinhos de estimação, quitandas, obras de arte a roupas e acessórios.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Funcionamento: </Text> Aos domingos das 16 às 20 horas na Praça do Sol, Setor Oeste.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Rua 9, s/n – St. Oeste, Goiânia – GO, 74110-100
          </Text>

          <Text style={styles.subtitulo}>
            4. Feira da Lua
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Lua.jpg')} />
          <Text style={styles.texto}>
            Segunda maior feira ao ar livre de Goiânia, a famosa Feira da Lua bomba aos sábados e atrai gente de todas as partes e classes sociais. É possível encontrar roupas e acessórios de boa qualidade com preços bem acessíveis. Vale deixar um espaço para se deliciar nas banquinhas de comidas do lugar. 
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Funcionamento: </Text> Sábados, das 17h às 22h.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Praça Tamandaré, Setor Oeste
          </Text>

          <Text style={styles.subtitulo}>
            5. Mercado Central
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/MercadoCentral.jpg')} />
          <Text style={styles.texto}>
            Funcionando desde o ano de 1950, o Mercado Central é um ponto não apenas para compras em Goiânia, mas também para reviver um pouquinho de nossa história e cultura. É possível encontrar no local diversos produtos exóticos e, convenhamos, o melhor empadão goiano da cidade.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Funcionamento: </Text> segunda a sexta, das 7h às 18h / sábado, das 7h às 15h / domingo, das 7h às 12h
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Telefone: </Text> (62) 3524-1324
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Rua 3, 322 – St. Central, Goiânia – GO, 74015-090
          </Text>

          <Text style={styles.subtitulo}>
            6. Mercado Popular da Rua 74
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Rua74.jpg')} />
          <Text style={styles.texto}>
            O pequeno notável do tradicional Bairro Popular (continuação do Centro) se revela uma boa opção para o público que busca ainda mais contato com a cultura local. Destaque para o Pub e Pastelaria do Meu, há 50 anos no mesmo local e eleito como o melhor pastel da cidade.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Telefone: </Text> (62) 3524-1111
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Rua 74, n.º 329, Setor Central.
          </Text>

          <Text style={styles.titulo}>SHOPPINGS</Text>
          <Text style={styles.subtitulo}>
            1. Flamboyant Shopping Center
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/FlamboyantShopping.jpg')} />
          <Text style={styles.texto}>
            Âncora da região Sul de Goiânia, o Flamboyant reúne as mais famosas grifes do mundo num só lugar, além de muitos dos melhores restaurantes na capital. Av. Deputado Jamel Cecílio, 3300 - Jardim Goiás, Goiânia. Telefone:(62) 3546-2000
          </Text>

          <Text style={styles.subtitulo}>
            2. Passeio das Águas
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Passeio.jpg')} />
          <Text style={styles.texto}>
             Mais novo da cidade, o Passeio das Águas é o gigante da região Norte da capital. Com boa opção gastronômica e lojas famosas, destacamos a programação e opções para a garotada – atualmente a melhor de Goiânia.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Av. Perimetral Norte, 8303 - Fazenda Caveiras. Telefone:(62) 4003-7840
          </Text>

          <Text style={styles.subtitulo}>
            3. Goiânia Shopping
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/goiania.jpg')} />
          <Text style={styles.texto}>
            Um dos mais modernos e grandes centros de compras da cidade, o Goiânia Shopping tem como vizinho um dos mais belos cartões postais da cidade: o Parque Vaca Brava 
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Av. T-10, nº 1.300 - Setor Bueno. (62) 3237-0514
          </Text>

          <Text style={styles.subtitulo}>
            4. Bougainville
          </Text>
          <Image
            style={{ height: 300, width: '100%', resizeMode: "contain" }}
            source={require('../../../assets/Goiania/Bougainville.jpg')} />
          <Text style={styles.texto}>
            Um dos mais tradicionais shoppings de Goiânia, tem como destaque sua localização nobre e privilegiada. Shopping de vizinhança com opção de empório e cinema voltado para o público mais exigente. 
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Telefone: </Text> (62) 3520-4300.)
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.negrito}>Endereço: </Text> Rua 9, 1855 - St. Marista
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