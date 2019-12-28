import React from 'react';
import { Alert, Image, Text, SafeAreaView, StatusBar, View, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import CustomBackground from "../../components/CustomBackground";

import logo from '../../assets/logo.png';
import { colors } from '../../styles';

export default function ScreenOn() {
  const url = 'https://classic.csunplugged.org/wp-content/uploads/2014/12/CSUnpluggedTeachers-portuguese-brazil-feb-2011.pdf'
  const viewOfContent = [
    <Text style={styles.textContent}>
      O aplicativo Computação Plugada foi inspirado no livro de Bell, T.; Witten, I. e Fellows,
      M. (2011). “Computer Science Unplugged – Ensinando Ciência da Computação sem o uso do Computador”.
      Tradução de Luciano Porto Barreto, 2011.
    </Text>,
    <Text style={styles.textContent} onPress={() => Linking.openURL(url).catch((err) => Alert.error('Ocorreu um erro', err))}>
      Disponivel em: https://classic.csunplugged.org/wp-content/uploads/2014/12/CSUnpluggedTeachers-portuguese-brazil-feb-2011.pdf.
    </Text>,
    <Text style={styles.textContent}>
      Este livro apresenta atividades práticas, lúdicas e acessíveis sobre diversos temas da ciência da computação.
      O mesmo engloba técnicas fáceis para seu uso, tornando-se disponível para todos.
      Sua prática é fácil não só em salas de aula mas também fora, podendo ser administrado por professores e compreendido pelas crianças.
    </Text>,
    <Text style={styles.textContent}>
      O aplicativo aqui apresentado busca simplificar ainda mais a aplicação das atividades propostas sem a necessidade de produção de materiais adicionais.
      O aplicativo é uma grande inovação para as técnicas de aprendizagem, apresentando temas complexos de uma forma elementar para o conhecimento.
    </Text>
  ]
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={[colors.colorPrimary, '#242F68']} style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.colorPrimary}
        />
        <Image source={logo} style={styles.logo} />
        <CustomBackground content={viewOfContent} />
        <View style={styles.loadText}>
          <Text style={styles.text}>
            Desenvolvido e mantido pela equipe do
            projeto Computação Desplugada da UFPB
                        campus iV
              Todos os Direitos Reservados
                         ©2019
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}