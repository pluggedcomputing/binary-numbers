import React from "react";
import {Text, SafeAreaView, StatusBar, Image, ScrollView, Linking} from "react-native";

import help from "../../assets/images/help/help.png";
import styles from "./styles";

function HelpScreen (){
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF'  />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>AJUDA</Text>
          <Image source={help} style={styles.image} />

          <Text style={styles.textContent}>
            Para uma melhor experiência com o aplicativo, aqui vão algumas dicas que podem ser úteis!
          </Text>

          <Text style={styles.textContent}>
            • Você pode navegar pelas telas de textos de cada fase utilizando a seta à esquerda ou a que fica à direita.
          </Text>

          <Text style={styles.textContent}>
            • Além de telas textos informativos, você encontrará telas com atividades onde serão apresentadas as alternativas disponíveis e você deverá escolher a resposta correta.
          </Text>

          <Text style={styles.textContent}>
            • Você só poderá passar para a próxima fase após finalizar totalmente a sua fase atual.
          </Text>

          <Text style={styles.textContent}>
            • Em algumas telas é possível interagir com algumas cartas que são apresentadas, sendo possível trocar os seus valores para 0 ou 1 para facilitar o cálculo da conversão entre números binários e decimais.
          </Text>

          <Text style={styles.textContent}>
            • Você pode obter dicas sobre a questão atual clicando no ícone de lâmpada que fica localizado no lado superior direito de cada questão.

          </Text>
          <Text style={styles.textContent}>
            • Mesmo finalizando uma fase, você pode refazê-la a qualquer momento e melhorar assim seu desempenho naquela fase.
          </Text>
          <Text style={styles.textContent}>
            Para mais informações, entre em contato conosco através do e-mail <Text style={styles.link} onPress={() => Linking.openURL('mailto:computacaoplugada@dcx.ufpb.br')}>computacaoplugada@dcx.ufpb.br</Text>. 
            Estamos trabalhando continuamente para melhorar a experiência dos nossos usuários. Seu feedback é muito importante. Ajude-nos preenchendo formulários de avaliação disponíveis no site do projeto: <Text style={styles.link} onPress={() =>Linking.openURL('https://sites.google.com/view/computacaoplugada/aplicativos/cp-binários')}>https://sites.google.com/view/computacaoplugada/aplicativos/cp-binários</Text>.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
};

export default HelpScreen;