/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import {Image, Text, TouchableOpacity, View, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import data from '../../../package.json';
import logo from '../../assets/images/logo_grey.png';
import CustomBackground from '../../components/CustomBackground';
import {colors} from '../../styles';
import styles from './styles';

function ScreenAbout({navigation}) {
  const viewOfContent = [
    <Text style={styles.textContent}>
      O aplicativo Computação Plugada foi inspirado no livro de Bell, T.;
      Witten, I. e Fellows, M. (2011). “Computer Science Unplugged – Ensinando
      Ciência da Computação sem o uso do Computador”. Tradução de Luciano Porto
      Barreto, 2011.
    </Text>,
    <Text style={styles.textContent}>
      Este livro apresenta atividades práticas, lúdicas e acessíveis sobre
      diversos temas da ciência da computação. O mesmo engloba técnicas fáceis
      para seu uso, tornando-se disponível para todos. Sua prática é fácil não
      só em salas de aula mas também fora, podendo ser administrado por
      professores e compreendido pelas crianças.
    </Text>,
    <Text style={styles.textContent}>
      O aplicativo aqui apresentado busca simplificar ainda mais a aplicação das
      atividades propostas sem a necessidade de produção de materiais
      adicionais. O aplicativo é uma grande inovação para as técnicas de
      aprendizagem, apresentando temas complexos de uma forma elementar para o
      conhecimento.
    </Text>,
  ];
  return (
    <LinearGradient
      colors={[colors.colorPrimary, '#242F68']}
      style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.colorPrimary}
      />
      <Image source={logo} style={styles.logo} />

      <CustomBackground content={viewOfContent} />
      <Text style={styles.credits}> version: {data.version}</Text>
      <View>
        <Text style={styles.credits}>
          Desenvolvido e mantido pela equipe do projeto Computação Desplugada da
          UFPB campus IV.
        </Text>
        <Text style={styles.credits}>Todos os Direitos Reservados © 2020.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text style={styles.textButton}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default ScreenAbout;
