//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GeneralStatusBarColor from '../../../shared/GeneralStatusBarColor';
import Screen from '../../../shared/Screen';

// create a component
const AreaTrabalho = () => {
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
                    <Text style={styles.Title}>Constituição e Atribuições das Comissões</Text>
                    <Text style={styles.SubTitle}>1. Recepção</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada de recepcionar e encaminhar as pessoas ao Centro Administrativo da Comissão Coordenadora Local e pela colocação de faixas na cidade e na parte externa do local da Assembleia.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A recepção deve ser feita, especialmente nas estações rodoviária, ferroviária e aeroporto, com pessoas identificadas, portanto faixa ou cartaz identificadores. O ideal seria uma mesa em cada local, com todo o material de informação: mapa da cidade, endereço dos hotéis e hospedagem econômica, com a listagem das inscrições prévias com o local de hospedagem, etc.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A Comissão deve se relacionar com a Comissão de Transporte, para que haja transporte desses locais para o Centro Administrativo da Comissão Coordenadora. Com a Comissão de Transporte deverá providenciar tabela oficial dos táxis, ônibus e prestar a orientação devida aos que chegam.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Na Central de Inscrições e Hospedagem, será necessária pessoa identificada para receber e encaminhar aos locais desejados, inclusive para os locais de hospedagem e nesse caso deve trabalhar em conjunto com a Comissão de Transporte. Os plantões devem começar 02 dias antes do início das atividades e funciona até o último dia da Assembleia.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        É aconselhável que na correspondência para os pré-inscritos e nas publicações de O Jornal Batista, haja informação para onde devem se dirigir, chegando à cidade.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>OBS.:</Text> Em algumas Assembleias foi montado plantão nas rodovias, o que não tem necessidade, uma vez que o local da Assembleia deve ser de conhecimento geral. <Text style={{ fontWeight: 'bold' }}>Pessoal mínimo:</Text> 40 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>2. Hospedagem</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada de providenciar os locais de hospedagem e cuidar de tudo que se relacione à hospedagem chamada econômica, e apoiar a Agência Oficial, no tocante a hospedagem em hotéis.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Esta Comissão trabalha praticamente o ano todo, na escolha dos locais de hospedagem econômica e residência. Dependem de um organizado programa de controle dos locais e das reservas. As hospedagens em hotel serão controladas por uma agência de viagem escolhida pela organização hospedeira.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        As hospedagens econômicas geralmente são oferecidas em colégios, acampamentos, com colchão. A roupa de cama e banho são da responsabilidade de cada mensageiro. A comissão deve prover os locais com instalações para banho, ferro elétrico e tábua para passar roupa. Deve ter um serviço de segurança e limpeza, que poderá ser, conforme o caso, o mesmo pessoal.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A taxa de hospedagem econômica deverá ser fixada com a aprovação do Conselho da CBB. Esta taxa é uma das fontes de recursos para as grandes despesas que terá a Comissão Coordenadora Local.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A Comissão deve trabalhar em harmonia com a Comissão de Inscrição, para cobrança e controle das taxas de inscrição e hospedagem. Ninguém deve ser hospedado sem ter feito inscrição.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A Comissão não deve ter menos que 20 membros que possam estar disponíveis na semana que se inicia a Assembleia, para turmas de plantão, de pelo menos 6 pessoas. A Comissão de Local deve preparar um balcão, se possível com um local para guardar malas, mediante emissão de um talão próprio, pois nem sempre é possível encaminhar imediatamente para a hospedagem e o mensageiro terá dificuldades com a bagagem.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A Comissão deverá ter a listagem completa das hospedagens para orientação dos mensageiros. A Comissão deve trabalhar em harmonia com a Comissão de Recepção, Transporte e Segurança. Nos locais de hospedagem deverá ter permanente segurança que controlará a entrada dos hóspedes. <Text style={{ fontWeight: 'bold' }}>Pessoal mínimo:</Text> 30 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>3. Introdutores</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada da orientação do público para acesso ao local das sessões e pela manutenção da reverência. O número de membros da comissão oscilará de acordo com o local e a previsão de inscritos.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        As equipes devem estar nos postos, pelo menos 15 minutos antes do início das atividades e são responsáveis, além do encaminhamento do público e reverência, pelo controle e distribuição de impressos, que só poderá ocorrer com a permissão da Mesa na pessoa do Presidente ou do Diretor Executivo do Conselho. Antes do início das sessões deve verificar se o local está em ordem. Qualquer anormalidade deve ser imediatamente encaminhada ao responsável pela equipe ou direção da Convenção.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Deverá ser mantida uma pessoa, permanentemente em local próximo da plataforma, para assessoria e também servir água e café à mesa, quando não houver alguém designado para isso. <Text style={{ fontWeight: 'bold' }}>Pessoal mínimo:</Text> 60 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>4. Alimentação</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada do serviço de alimentação, restaurantes, cantinas, etc. Esse serviço pode deixar algum resultado positivo para as despesas gerais, especialmente cantina. Verificar as concessões para o local, evitar confronto, mas cuidar para que não funcionem nos horários das sessões.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        O serviço de alimentação deve ser montado próximo do local da Assembleia, em condições de atender, com a maior rapidez possível, especialmente no almoço, quando há maior procura. Normalmente o jantar cai para 10 a 15% do movimento do almoço, especialmente se há boa cantina para lanche.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        É bom evitar contratos que garantam certo número de refeições, pois facilita a queda da qualidade e a natural procura de outras alternativas por parte dos mensageiros.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        O serviço de alimentação deve ser montado próximo do local da Assembleia, em condições de atender, com a maior rapidez possível, especialmente no almoço, quando há maior procura. Normalmente o jantar cai para 10 a 15% do movimento do almoço, especialmente se há boa cantina para lanche.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        As reuniões que antecedem a Assembleia demandam um sistema especial por se tratar de vários locais.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Durante a Assembleia é servida a refeição para a Diretoria, em média 30 pessoas, em local reservado, normalmente no local da Assembleia, visto que esse é o único momento para tratar de assuntos especiais e também para ser liberada rapidamente para a sessão seguinte. Cada um paga a sua despesa.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Cuidado especial deve ser dado ao domingo, onde há muita dispersão, mas grande parte depende do serviço de alimentação geral. <Text style={{ fontWeight: 'bold' }}>Pessoal mínimo:</Text> 22 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>5. Ornamentação</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada da ornamentação do recinto das sessões e das reuniões que antecedem a Assembleia.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Preparação das mesas diretoras (Assembleia CBB e demais), com toalha, não sendo permitido ornamentos de flores sobre a mesa ou qualquer ornamentação que prejudique a visibilidade da mesa.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Não é permitida a colocação de faixas no ambiente da Assembleia. Os que desejarem colocar faixas deverão fazer na parte externa, sob orientação da Comissão Coordenadora Local.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A Comissão deverá estar atenta a arrumação da plataforma, especialmente entre as sessões. No encerramento dos trabalhos deverá tomar as providências para as entregas e desmontagem do seu setor, no máximo pela manhã seguinte ao encerramento. <Text style={{ fontWeight: 'bold' }}>Pessoal mínimo:</Text> 5 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>6. Transporte</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada de prover os meios de transporte locais dos mensageiros e dos utensílios necessários.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>6.1. Transporte de Pessoal</Text> – Dos desembarques para a central de hospedagem e desta para os locais de hospedagem econômicas, quando for o caso. Linhas de transporte urbano que sirvam ao local da Assembleia, especialmente dos locais de hospedagem econômica e hotéis. Cartazes de orientação e impresso na pasta do inscrito que oriente sobre transporte. Os transportes dos terminais de desembarques e para as hospedagens, na chegada, não precisam ser gratuitos.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>6.2. Transporte de Material</Text> – A Comissão deve se relacionar com as demais comissões e Coordenação Geral para que lhe sejam solicitadas, com antecedência e preferencialmente, por escrito, o transporte que necessitará, inclusive com o dia e horários estabelecidos.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Os pedidos devem ser formalizados, pelo menos uma semana antes, mas informados com muita antecedência para efeito de orçamento e providências de transporte.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Aconselha-se que providencie um veículo, se possível com motoristas, para ficar à disposição da Presidência da Convenção e outro para o Diretor, caso não estejam com transporte próprio. O Conselho deverá formalizar esses pedidos com a devida antecedência.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A Comissão deve se relacionar com a Comissão de Segurança para facilitar a entrada e estacionamento dos veículos de serviço. O encerramento dos trabalhos da Comissão se dará com a distribuição do material, na manhã do dia seguinte, ou na noite de encerramento para liberação do local. <Text style={{ fontWeight: 'bold' }}>Pessoal mínimo:</Text> 20 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>7. Relações Públicas</Text>
                    <Text style={styles.TextoLongo}>
                        Funcionará sob a orientação da presidência da Convenção. Será constituída do relator indicado pela Comissão Coordenadora Local, o Diretor Executivo do Conselho, o Presidente da Comissão Coordenadora Local e o Diretor de O Jornal Batista. Encarregada de fazer os contatos com as autoridades e encaminhar todos os assuntos atinentes a essa função. Articular-se com a imprensa; encaminha os convites às autoridades conforme seleção da Comissão Coordenadora Local e do Conselho. É de sua responsabilidade a preparação dos convites às autoridades e organizações que poderão ser em nome de Comissão Coordenadora Local ou em nome da Convenção Batista Brasileira, assinado pelo respectivo presidente.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Atribuições: prestar informações a jornais, rádio e televisão, inclusive emitindo “releases”, antes e durante as assembleias da Convenção e preparando, eventualmente, programas especiais para rádio e televisão. Promover entrevistas diversas com os líderes da Convenção. Esta Comissão pode trabalhar em acordo com a Comissão de Relações Públicas, especialmente na área de imprensa. No entanto, são Comissões distintas, assim como a Comissão de Informação e Turismo.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A Comissão tem a responsabilidade de reconhecer as autoridades presentes e encaminhá-las ao local apropriado. Providenciar espaço especial no plenário para as autoridades na sessão solene de abertura. Ajudará também nos contatos com a imprensa, encaminhando “releases”, quando solicitada pela Comissão Coordenadora Local. A Comissão deverá ter plantão durante as sessões para atendimentos e encaminhamentos de ilustres visitantes e imprensa. Pessoal mínimo: 15 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>8. Promoção</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada da divulgação da Assembleia em nível local e nacional e do preparo de material de promoção a ser oferecido aos inscritos, preparo dos artigos, foto para a imprensa, etc. Trabalha com a Comissão de Transporte e Recepção na preparação de mapas de orientação e de informação sobre os locais dos acontecimentos que antecedem a Assembleia. A Comissão desenvolverá um criterioso trabalho de visita às igrejas especialmente da grande região onde acontecerá a Assembleia, visando o envio do número total de mensageiros de cada Igreja e que o maior número possível de membros se inscreva, o que representa apoio e integração, visto que é um acontecimento que dificilmente se repetirá na mesma geração, naquele local. Um bem elaborado programa de promoção resultará em grande sucesso para todo o acontecimento. Pessoal mínimo: 5 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>9. Serviços Médicos</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada de prestar assistência médica de emergência, no local da Assembleia, com medicamentos de emergência, especialmente para problemas gástricos, cardíacos e acidentes. Os plantões de pessoal da área médica devem ser num lugar acessível no local da assembleia. Deve ser feito um convênio com um hospital, de preferência evangélico para algum atendimento grave. Os serviços hospitalares e medicamentos deverão ser pagos pelos usuários. Pessoal mínimo: 10 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>10. Infra-Estrutura</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada da preparação do local e instalação de todo o equipamento e móveis relacionados com a Assembleia, exceto os que forem de responsabilidade de outras comissões. Serviço de eletricidade, palco, telas, confecção de divisórias, locais para inscrição, para Comissão de Hospedagem, local para as bandeiras, etc, a saber:
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>10.1. Auditório –</Text> Responsável pela preparação do auditório com plataforma com as dimensões mínimas que permitam mesa diretora para 10 pessoas, pequena mesa para assessorias e pelo menos 50 cadeiras para autoridades, tanto na noite de abertura e durante todas as sessões. Duas mesas de pequeno porte com 2 cadeiras em cada para a Comissão Escrutinadora; cadeiras colocação de cadeiras no plenário de acordo com a capacidade do local; tela para projeção (de acordo com as dimensões do auditório); Data show, Notebook, um piano ou teclado, um púlpito, local para coral – para aproximadamente 100 vozes, em acordo com a Comissão de Música.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>10.2. Instalações sanitárias e elétricas –</Text> Cuidar para que as instalações estejam em pleno funcionamento, e demais equipamentos. Manter pessoas habilitadas de plantão para as emergências e assessoramento,  especialmente no setor elétrico que tem constantes variações de iluminação.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>10.3. Serviços de apoio – </Text> Preparação de locais para as comissões de inscrição, hospedagem, serviço de informações, cantina, etc. Esses serviços devem estar concluídos até a manhã quando começa o atendimento aos mensageiros. A Comissão de transporte está muito relacionada com esta Comissão, sendo que os trabalhos de ambas é um dos últimos a se encerrar com o desmonte e transporte e a consequente entrega do local.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada também do serviço de informação de instalação de serviços de internet e telefônicos, local de informação, local para achados e perdidos, assim como orientação sobre eventos turísticos, sendo que as atividades turísticas não poderão ser concorrentes com as atividades da Convenção. A Comissão deve cuidar dos custos e cobranças desses serviços de maneira a cobrir todos os gastos dessa área a fim de não recair nenhum custo sobre os hospedeiros. O serviço de informação é fundamental e para tanto a Comissão deve providenciar um bom local, bem central e de fácil acesso, onde deverão ficar, pelo menos 2 pessoas munidas de mapa do local e da cidade, listagem de hospedagens, tanto de hotel, como econômica e relação dos relatores das comissões. Esse local deverá estar munido, se possível de telefone que não será para uso do público, ou de algum serviço de intercomunicação. Esse mesmo local ou outro deve estar aparelhado para guarda-volume e perdidos e achados. Caso o local de guarda-volumes seja outro, a Comissão será também responsável por esse serviço, tanto na providência do local como pessoal para plantão. O mesmo pessoal da informação deverá estar em condições de informar sobre atividades e locais turísticos; estar em harmonia com a Comissão de Recepção e de Transporte para orientação sobre táxis, ônibus e outros serviços. Esta Comissão deverá se relacionar com praticamente todas as demais comissões e a própria mesa da Convenção para prestar sempre informações pessoais, evitando ao máximo a expressão “eu acho que”. Pessoal mínimo: 30 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>11. Conservação</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada da limpeza dos locais das reuniões, serviços sanitários, água, inclusive na assessoria ao local das hospedagens econômicas. O seu trabalho consiste em promover a limpeza com pessoal próprio ou da própria organização do mesmo local. O pessoal contratado para esse serviço normalmente deve ser remunerado, tendo um chefe de equipe que a tudo supervisionará, inclusive se o pessoal for do próprio local. Os serviços consistem, especialmente em:
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>11.1.</Text> Limpeza geral e colocação das cadeiras devidamente arrumadas no dia anterior ao início das atividades;
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>11.2. </Text> Limpeza superficial, com retirada de papéis e arrumação dos móveis, nos intervalos das sessões;
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>11.3. </Text> Limpeza geral, podendo ser pela manhã, até às 7:00 horas ou a noite, após às 22:00 horas;
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>11.4. </Text> Limpeza e material higiênico nos sanitários que deverá ser feita nos mesmos horários e condições do auditório;
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>11.5. </Text> Entrada, átrios, locais de inscrições, informações, hospedagens, stands, cantinas e sala de reuniões também devem merecer atenção da Comissão com a limpeza;
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>11.6. </Text> Coletores de lixo devem ser colocados em vários lugares, inclusive na plataforma.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>Hospedagens – </Text> na medida do possível a Comissão poderá estender o seu trabalho aos locais de Hospedagem Econômica ou, pelo menos, assessorar a Comissão de Hospedagem nesse serviço. Pessoal mínimo: 10 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>12. Som</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada da sonorização dos locais das reuniões, tanto da assembleia da Convenção como das reuniões que antecedem a assembleia. A Sonorização deverá estar pronta um dia antes do início das atividades. Os serviços se constituem fundamentalmente em colocação de caixas, para o auditório, conforme a necessidade e caixas de retorno para a mesa, com equipamento para gravação digital. Serão necessários:
                    </Text>
                    <Text style={styles.TextoLongo}>
                        • 3 microfones para a mesa, sendo 1 microfone sem fio para a mesa diretora;<Text>{"\n"}</Text>
                        • 2 microfones para as duas tribunas na plataforma;<Text>{"\n"}</Text>
                        • 10 microfones no auditório para os debates;<Text>{"\n"}</Text>
                        • 8 microfones para o coral, com pedestal alto;<Text>{"\n"}</Text>
                        • 1 microfone para o piano;
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Num total mínimo de 25 microfones. O acompanhamento do serviço deve ser rigoroso, não sendo permitida a colocação de músicas sem a prévia autorização da Comissão. A critério da mesa, durante a contagem de votos e recessos poderá ser tocada música suave, orquestrada, sendo imediatamente interrompida com a palavra do Presidente. A responsabilidade com o equipamento será inteiramente dos contratados. A localização dos equipamentos será sempre ao lado da mesa, na altura do piso do auditório ou no final do auditório. Nunca à frente da mesa. Pessoal mínimo: 5 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>13. Exposições</Text>
                    <Text style={styles.TextoLongo}>
                        A Assembleia é um evento que ocorre no âmbito da Convenção Batista Brasileira e como tal deve ser interpretado. Tudo o que se relaciona a essa Assembleia deve ter como desiderato fundamental a promoção, direta e indiretamente, dos objetivos da Convenção com o consequente fortalecimento das igrejas a ela filiados no desempenho de sua missão de acordo com a interpretação e prática dos batistas no Brasil.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>13.1. Organização e Coordenação –</Text> Em cada assembleia a comissão local procurará reservar espaço apropriado nas áreas de acesso ao local de reuniões para a instalação de stands promocionais. A instalação dos stands dar-se-á de maneira criteriosa, de forma a não prejudicar o andamento dos trabalhos da Assembleia, como barulho e movimentação, etc. Será reservado um estande para o Conselho. O Conselho da Convenção será o órgão coordenador e administrador da cessão de stands nos termos destas normas, cabendo-lhe ainda julgar os casos omissos.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>13.2. Participantes –</Text> Sendo um evento da Convenção, as organizações que a compõe, de acordo com seus Estatutos e Regimento Interno, terão exclusividade na utilização dos locais privilegiados (acessos principais). Locais de importâncias secundária poderão ser cedidos a outros expositores, a critério do Conselho da Convenção, desde que sua natureza, finalidade e material não fira os princípios adotados pela Convenção. O processo de localização dos expositores nos stands, será feito por sorteio, resguardadas as condições previstas neste título e assegurado ao Conselho o espaço de um estande para informações, sem ônus para o mesmo.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>13.3. Obrigações da Comissão Local –</Text> Fornecer credenciais a todo o pessoal em serviço, na área de exposição. Reservar o estande montado, mencionado em contrato, para uso exclusivo do expositor. Manter equipe de segurança de plantão na área de exposição, que poderá ser feito pela Comissão de Segurança. Manter a limpeza de corredores e áreas de trânsito externos ao stands, podendo valer-se da Comissão de Limpeza. Entregar os stands 48 horas antes do início da Assembleia da Convenção, sob pena de multa estabelecida em contrato.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>13.4. Obrigações dos Expositores –</Text> Cumprir todas as cláusulas pertinentes ao presente regulamento. Desocupar seu estande dentro do prazo previsto em contrato. Manter o pessoal no estande durante o período de realização do evento. Cuidar da limpeza de sua área de exposição e após a retirada do material. Cumprir todas as exigências legais e fiscais que incidirão sobre a comercialização de seus produtos, bem como a obtenção de licença junto ao órgão competente, para operar seu estande durante o evento. Os expositores não pertencentes a Convenção, nos termos dos seus Estatutos e Regimento Interno, por ocasião da inscrição para aluguel de estande, deverão especificar em formulário próprio, natureza, tipo e finalidade do material que pretendem promover e divulgar.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>13.5. É vedado aos Expositores –</Text> Sublocar qualquer área do espaço contratado. Ceder qualquer área do espaço contratado. Usar aparelhos sonoros ou ruidosos que possam perturbar os demais expositores, com exceção de equipamentos áudio-visuais, ou somente áudio, desde que com sonorização ao nível da voz humana normal, ou com utilização de fones de ouvido. Amarrar, pregar ou apoiar qualquer tipo de material nas estruturas, colunas ou paredes do local do evento.Ter qualquer elemento de decoração, montagem ou produto expostos fora dos limites do estande. É vedado aos expositores, quer pertencentes à Convenção ou não, a concorrência predatória. Entende-se por concorrência predatória a venda de material igual ou semelhante, por preço diferenciado.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>13.6. Disposições Gerais –</Text> Todo e qualquer expositor deverá preencher formulário próprio de inscrição, para aluguel de estande promocional e uma vez aprovado deve ser firmado em contrato. A decisão sobre o pedido de inscrição para aluguel de estande, será comunicada no período posterior, definido pela própria comissão local, ouvido o Conselho da Convenção, não podendo entretanto ultrapassar o prazo máximo de 15 dias antes do início da realização da Assembleia da Convenção. Toda e qualquer venda e/ou exposição de material é restrito aos estandes. Os expositores, que não sejam organizações da Convenção, pagarão um diferencial de 30% sobre o preço do m2 dos estandes reservados para as organizações da Convenção, que será revertido para a Comissão Local. Os elementos decorativos dos estandes, não
                            poderão em hipótese alguma, ultrapassar as suas dimensões em qualquer sentido. As pessoas que trabalharão nos estandes deverão portar credenciais fornecidas pela Comissão Local. Na escolha de local de instalações de estandes será dada preferência ao Conselho e à Comissão Local para instalação das mesas de inscrição e hospedagem. A voltagem elétrica a ser utilizada deve ser definida em contrato.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>13.7. Solicitação de Stand: </Text> CLIQUE NO MENU STANDS
                    </Text>

                    <Text style={styles.SubTitle}>14. Segurança</Text>
                    <Text style={styles.TextoLongo}>
                        Encarregada do policiamento do trânsito, de estacionamento e segurança pessoal e dos equipamentos instalados nos locais, assim como da segurança nos locais de reuniões e das chamadas hospedagens econômicas. Esse trabalho deverá ser feito com policiamento requisitado, especialmente no local da Assembleia e no trânsito. Quanto a segurança
                        nas hospedagens econômicas e de equipamentos internos deverá ser feito por pessoal contratado, de preferência relacionado com as igrejas. A segurança deve ter um posto fixo para ser encontrado em emergências onde deverá estar sempre uma autoridade, especialmente policial, de plantão. Por segurança pessoal entende-se atenção especial quanto a pessoas estranhas que adentrem ao local das sessões e que se aproximem da mesa diretora. O cuidado com vigaristas, exploradores, orientação sobre custos de táxis, etc. A segurança dos locais inclui atenção à distribuição de literatura, trabalhando junto com os introdutores, certificando-se que o material distribuído está autorizado pela direção
                        da assembleia, na pessoa de seu Presidente ou Diretor Executivo; precaução para evitar qualquer ato de vandalismo e desrespeito à ordem, inclusive estar à disposição da mesa para qualquer medida de emergência. Com relação a veículos, controlar o serviço de estacionamento, inclusive os credenciamentos. Pessoal mínimo: 15 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>15. Escrutinação</Text>
                    <Text style={styles.TextoLongo}>
                        Ficará à disposição da mesa, nas sessões deliberativas, devidamente equipada para contagem de votos, exceto na eleição da diretoria que é feita por uma comissão eleita pela Assembleia. Para cada sessão, exceto as noturnas, a Comissão deverá estar no seu posto com a seguinte composição:
                    </Text>
                    <Text style={styles.TextoLongo}>
                        * 1 Coordenador, que supervisionará o trabalho da Comissão, conferindo as presenças, distribuindo e controlando os escrutinadores, suprindo ou cancelando eventuais ausências, de forma a não ficar áreas sem contagem, distribuindo o equipamento, verificando o seu perfeito funcionamento e encaminhando à mesa o resultado da votação;<Text>{"\n"}</Text>
                        * 4 mesários, de preferência com prática em máquina calculadora, cujo trabalho será registrar os votos de sua ala em impresso próprio, somando e encaminhando ao Coordenador, ou diretamente à mesa. O trabalho dos mesários começa tão logo um escrutinador tenha dado o resultado de sua área e só termina quando tiver concluído o registro de todos os escrutinadores de sua ala, e registrado o total;<Text>{"\n"}</Text>
                        * 24 escrutinadores que serão distribuídos pelo coordenador, nas diversas áreas e devem se ater exclusivamente à contagem de sua área previamente delimitada.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        O Presidente pedirá os votos e os escrutinadores se põem imediatamente a contar. Caso o Presidente declare não ser necessária a contagem, voltarão ao seu lugar. Ocorrendo a solicitação de recontagem de votos toda a operação deve ser repetida sem qualquer constrangimento e com toda eficiência. O tempo da Assembleia é muito limitado e a  velocidade de todo o serviço de escrutinação é fundamental. A Comissão deverá permanecer no local desde abertura até o encerramento das sessões deliberativas que são normalmente diurnas, podendo ocorrer exceção para eventuais serões e nesse caso a Comissão precisará estar no posto. O coordenador será informado desse fato. Pessoal mínimo: 30 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>16. Secretaria</Text>
                    <Text style={styles.TextoLongo}>
                        Equipe que desenvolve suas tarefas sob a coordenação do escritório da Convenção Batista Brasileira. É de sua responsabilidade a separação de um local que servirá de escritório, acessível e a altura do evento, que deve estar no mesmo local da Assembleia, munido de 5 computadores em rede (sendo 1 com acesso à internet), que servirão para digitação das fichas de inscrição (tarefa para qual serão necessários 7 digitadores, sendo 1 com experiência em digitação e secretaria para supervisionar os outros 6 e dar apoio a mesa de inscrições), redação de O Jornal Batista e atualização do portal da CBB. Copiadoras para grandes quantidades que não precisarão estar no escritório, mas com fácil acesso e rápida execução. Deverá providenciar papel para cópias de relatórios em número equivalente a 10 vezes o número de inscritos. Esse material deverá ser fornecido em consignação a ser pago apenas o usado, uma mesa para direção e mesas para os computadores. Nesta sala deverá ser instalado um telefone. Além desses equipamentos deve ser providenciado o material geral de expediente, tais como: grampeadores, com bom estoque de grampos, clipes, borracha, canetas, lápis preto, papel-carbono, álcool, algodão, tesoura, fita adesiva, elástico e canetas piloto para cartazes. Deve ser providenciado um grupo de apoio que servirá a comissão escrutinadora e que atuará durante todas as atividades da Assembleia até a desmontagem do escritório. Pessoal mínimo: 10 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>17. Inscrição</Text>
                    <Text style={styles.TextoLongo}>
                        Sua atuação é executar todo o trabalho de inscrição, com pessoal, instalações e equipamentos adequados. A Comissão deverá trabalhar durante o ano, com pessoal restrito, de preferência ligado à sede da Comissão Local que estará, durante o ano, recebendo inscrições prévias relacionadas com as reservas de hospedagens, especialmente econômica. A taxa de inscrição é fixada pelo Conselho que também fornecerá as fichas próprias para inscrição. Todas as inscrições para a Assembleia serão realizadas através do escritório central do Conselho da Convenção Batista Brasileira. As inscrições pagas durante a Assembleia serão recebidas pela Comissão Local e transferidas, através de depósitos, diariamente para a Convenção, no final de cada expediente diurno, no total correspondente ao número de inscrições feitas. O controle desses recebimentos deverá ser feito mediante cópia dos comprovantes dos depósitos diários na conta da CBB, recibos das inscrições e conferência com o número de inscritos. No encerramento da Assembleia deverá ser feita a conferência final, junto à coordenação do Conselho da CBB. No mesmo recibo de inscrição poderão estar outros recebimentos, como hospedagem, desde que registrados como itens diferentes. <Text style={{ fontWeight: 'bold' }}>A Comissão deverá ter pelo menos 30 pessoas distribuídas em 3 equipes de 10 com um coordenador,</Text> tão logo esteja funcionando o local das reuniões. Se isso não acontecer, o atendimento deve se iniciar no escritório da Comissão que poderá fazer nesse local as inscrições e entregar material. É necessário que a Comissão funcione até as 22 horas aproximadamente.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>Inscrição Prévia –</Text> Os mensageiros só poderão ser inscritos com carta credencial da Igreja Batista arrolada na Convenção assinada pelo pastor ou pelo presidente da igreja, dentro dos limites de representação regimental de 05 inscritos por igreja e mais um para cada grupo de 50 ou fração. Caso o mensageiro não traga a carta credencial, ele deve procurar o pastor da sua igreja para que ele assine a sua ficha de inscrição autorizando a entrada do mensageiro. Cada mensageiro pagará a taxa de inscrição e terá direito a receber todo o material do mensageiro. Se a igreja não estiver arrolada na Convenção, os membros farão a inscrição e receberão apenas material promocional, não recebendo portanto o crachá de identificação e o livro do mensageiro. Para este caso temos duas exceções: Se o ingresso da igreja acontecer durante a assembleia ou se a igreja mãe for arrolada a convenção e esta autorizar a participação do mensageiro nas sessões. Os membros das igrejas, que excederem ao número de mensageiros credenciados, poderão pagar a taxa de inscrição, e assim se habilitar à hospedagem econômica, e receber apenas o material promocional, não tendo acesso ao material exclusivo dos mensageiros (livro de relatórios e crachá).
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>Inscrição no Ato –</Text> Embora instalados no mesmo local, a Comissão será dividida em 2 grupos, sendo este o maior, que cuidará do atendimento aos que ainda não se inscreveram, que preencherão a ficha. O pessoal da Comissão emitirá o recibo em duas vias e o encaminhará, com o recibo, ao caixa para o pagamento. A pessoa voltará ao local da inscrição para receber o material que será o mesmo da inscrição prévia, tanto para mensageiro como inscrito. Nesse caso o crachá não será personalizado. Todos os casos de inscrição no ato devem ser digitados até a tarde que antecede a apresentação do relatório do Diretor Executivo da Convenção Batista Brasileira, no qual é apresentado o número total de inscritos. É importante que haja homens na comissão para ajudar no bom andamento das inscrições. As pastas são preparadas na sede da CBB antes da assembleia, sendo necessário, portanto, apenas o recurso pessoal para auxiliar no carregamento do caminhão que chegará com as pastas. Para este dia e os demais de trabalho da Comissão é necessário providenciar alimentação. A despesa desta Comissão com alimentação é de responsabilidade da convenção local. O Conselho custeará as despesas com as pastas, crachás, Livro da Convenção, e todo o material da pasta que não seja da competência de outra Comissão ou de interesse específico de organização. Todo o material a ser colocado na pasta deverá receber aprovação do Diretor Executivo do Conselho, sem qualquer exceção. A comissão deverá fornecer à mesa, na instalação da Assembleia, às 8 horas o número de inscritos, se possível, informar também se todas as Convenções estão representadas.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A comissão deve evitar que o local se transforme em guarda-volumes, o que deverá ser feito por outra Comissão. O trabalho da comissão deverá receber orientação do Diretor Executivo do Conselho, através do relator da Comissão. Pessoal mínimo: 35 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>18. Finanças</Text>
                    <Text style={styles.TextoLongo}>
                        Esta Comissão trabalhará, especificamente, nos dias da Assembleia propriamente dita, conforme mencionado no item 18 sobre inscrição e estará funcionando em comum acordo com a Comissão de Inscrição Local. A Comissão de Finanças fará depósitos diários, na conta da CBB, dos valores recebidos das inscrições. As receitas provenientes da hospedagem econômica serão depositadas na conta da Comissão Coordenadora Local. O relator da Comissão será o tesoureiro geral de todo o movimento financeiro. A Comissão Coordenadora Local, que deverá ser composta de 4 membros, elaborará o orçamento, sugerindo inclusive, a taxa de hospedagem econômica a ser homologada pelo Conselho. Estudará as demais receitas e despesas, valendo-se do orçamento de cada Comissão. Esse orçamento deverá ser aprovado pela Comissão Coordenadora Local. Qualquer alteração orçamentária deverá ser estudada pela Comissão de Finanças e aprovada pela Comissão Coordenadora Local. As fontes de receita são:
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>18.1. Taxa de hospedagem – </Text> Fixada e administrada pela Comissão Coordenador Local, ouvido o Conselho. O resultado total da hospedagem chamada econômica e de outras hospedagens e outras receitas se destinam a cobertura das despesas da Comissão Local com aluguel do local, propaganda, relações-públicas, hospedagem econômica de mensageiros, transporte de material, segurança local, aluguel de móveis, faixas promocionais, ornamentação, pessoal e material de limpeza, sonorização, preparo de balcões, e outros custos;
                    </Text>
                    <Text style={styles.TextoLongo}>
                        <Text style={{ fontWeight: 'bold' }}>18.2. Outros –</Text> A Comissão Local poderá criar outras fontes de receitas, tais como:
                    </Text>
                    <Text style={styles.TextoLongo}>
                        A - Aluguel de estande;<Text>{"\n"}</Text>
                        B - Venda de alimentação, especialmente cantina;<Text>{"\n"}</Text>
                        C - Venda de souvenir, etc.
                    </Text>
                    <Text style={styles.TextoLongo}>
                        Os custos com eventos que antecedem a Assembleia, ocorrem por conta das organizações que os promovem, inclusive União Feminina Missionária que usa o local da assembleia, a saber: aluguel de local, de som, ornamentação, serviço de mesa, etc. Fica a critério da Comissão Coordenadora Local essa cobrança ou não. A taxa de inscrição que é fixada e administrada pelo Conselho, se destina exclusivamente a cobertura dos gastos com material de expediente da assembleia, transporte desse material, publicações relacionadas com a assembleia e material fornecido aos inscritos, custos com pessoal, Livro da Convenção, tabloide e outros. Encerrada a assembleia a comissão deverá preparar minucioso relatório financeiro a ser considerado pela Comissão Local e posteriormente enviado ao Conselho para consideração e divulgação.
                    </Text>

                    <Text style={styles.SubTitle}>19. Música</Text>
                    <Text style={styles.TextoLongo}>
                        A AMBB é a responsável pela música da Assembleia. Será responsável pela colocação e conservação dos instrumentos musicais no recinto da Assembleia. O relator desta Comissão será escolhido pelo Conselho que normalmente acata a sugestão da Comissão Local. A Comissão deve relacionar os participantes e as músicas a serem executadas. Deve preparar até novembro a escala dos dirigentes congregacionais, os instrumentistas e aqueles, que apresentarão números musicais e encaminhar ao Conselho. O pessoal responsável pela música em cada sessão deverá estar presente e a disposição da Mesa desde o início até ao final da sessão. A inclusão de números musicais fora do programado só deverá ocorrer em casos excepcionais e com a aprovação da Comissão de Música. O trabalho da Comissão se encerrará com a remoção dos instrumentos e a consequente entrega do local. <Text style={{ fontWeight: 'bold' }}>Pessoal mínimo:</Text> 5 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>20. Programação Evangelística</Text>
                    <Text style={styles.TextoLongo}>
                        Sob o comando da Junta de Missões Nacionais, promoverá as atividades evangelísticas durante a Assembleia, tais como concentrações, evangelização nas igrejas, preparo e distribuição de literatura e material evangelístico para ser usado pelos convencionais e colocados nas pastas, etc. A programação de caráter geral, como concentrações evangelísticas, escolha de pregadores e músicos ficará sob a total responsabilidade da Junta de Missões Nacionais, que poderá se valer da cooperação da Comissão de Música, de Introdutores, etc. Quando a Concentração se der no mesmo local da assembleia serão usadas os mesmos serviços da assembleia e a Junta de Missões Nacionais participará com o percentual correspondente ao uso de equipamento: móveis, dependências e som. A Comissão Local é responsável por esses custos. Esses valores devem ser acertados previamente entre as partes. <Text style={{ fontWeight: 'bold' }}>Pessoal mínimo:</Text> 5 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>21. Preparação Espiritual</Text>
                    <Text style={styles.TextoLongo}>
                        Promoverá um trabalho junto às Igrejas locais, de maneira que todo o povo batista hospedeiro se sinta envolvido em todos os sentidos e na dependência de Deus. A comissão deve manter equipes para visitação às Igrejas e produzir literatura que vise promover o despertamento de todos. Deve promover, com a Comissão Local, cultos e/ou vigílias em que haja o maior envolvimento possível, para que todos os batistas se sintam hospedeiros e não transfiram para as comissões esta difícil tarefa. Deve se associar à Comissão de Evangelismo para um grande esforço evangelístico em todas as Igrejas. Durante a Assembleia prestará assessoria aos cultos matinais, providenciará, no local da assembleia, uma sala para oração, prestando assistência que for necessária e promovendo a mesma através dos canais competentes. <Text style={{ fontWeight: 'bold' }}>Pessoal mínimo:</Text> 10 pessoas.
                    </Text>

                    <Text style={styles.SubTitle}>22. Atividades Infantis</Text>
                    <Text style={styles.TextoLongo}>
                        Dentro das possibilidades locais esta comissão trabalhará com crianças, na faixa de 4 a 11 anos, filhos de mensageiros, podendo ser dividido em grupos de 4 e 5 anos, 6 e 7 anos e 8 a 11 anos. Promoverá a prévia inscrição da criança, com o devido pagamento de taxa a ser fixada pela Comissão Local, que não será devolvida, em caso de desistência, mas sim transferida. Essa atividade poderá ser realizada especialmente durante o dia, em acampamento, clube, colégio, etc.
                    </Text>

                    <Text style={styles.SubTitle}>23. Assistência a Portadores de Necessidades Especiais</Text>
                    <Text style={styles.TextoLongo}>
                        Prestar assistência aos convencionais portadores de necessidades especiais. Estabelecendo os locais específicos a serem usados nos locais de reunião, formas de acesso a todas as instalações.
                    </Text>

                    <Text style={styles.SubTitle}>24. Informática</Text>
                    <Text style={styles.TextoLongo}>
                        A comissão de informática será responsável pela instalação, suporte e manutenção de toda a rede de computadores a serem utilizados durante a assembleia da Convenção. Deverá ter equipamentos para a pronta substituição em caso de falhas dos equipamentos, bem como pessoal habilitado para toda orientação necessária para a transmissão de dados, e providenciar local onde os convencionais possam acessar a internet.
                    </Text>

                    <Text style={styles.SubTitle}>CONCLUSÃO</Text>
                    <Text style={styles.TextoLongo}>
                        A hospedagem de uma Assembleia Anual da Convenção Batista Brasileira é um empreendimento que demanda muito esforço, união, capacidade e acima de tudo espírito de serviço, sem recompensa financeira. A maioria da Comissão não será notada em seu trabalho, especialmente se fizer bem. Na maioria dos serviços só aparecem as falhas e nesse não é diferente. São, no mínimo 390 pessoas que estarão envolvidas diretamente nos diversos setores, sem contar o pessoal de limpeza, os que prepararão refeições, policiamento, e tantos outros, que chegaria perto de 500. Todo esse contingente é mais que muitas empresas de médio a grande porte, cujo custo superaria todas as possibilidades. Somente o amor a Deus e aos irmãos explica a dedicação de tantos para a hospedagem de uma assembleia de porte da Convenção Batista Brasileira.
                    </Text>

                    <Text style={{fontWeight:'bold', textAlign:'right'}}>Conselho Geral da Convenção Batista Brasileira.</Text>

                </View>

            </ScrollView>
        </Screen>
    );
};

// define your styles
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
        marginBottom: 15
    },
    SubTitle: {
        fontSize: 21,
        marginBottom: 15,
        color: '#0053b2',
        fontWeight: 'bold'
    },
    TextoLongo: {
        fontSize: 15,
        textAlign: "justify",
        color: '#54595f',
        fontWeight: "400",
        lineHeight: 24,
        marginBottom: 15,
    },
    Fonte: {
        fontSize: 15,
        marginLeft: 40,
        textAlign: "right",
        color: '#54595f',
        fontWeight: "400",
        lineHeight: 24,
        marginBottom: 15
    },
    Bold: {
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default AreaTrabalho;
