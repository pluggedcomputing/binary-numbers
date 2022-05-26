/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import {Image, Text,View, StatusBar, ScrollView, Linking, TouchableHighlight, SafeAreaView} from 'react-native';

import cards from '../../assets/images/cards/cards.png';
import cs from '../../assets/images/cs_unplugged/cs_unplugged.png';
import logo from '../../assets/images/logo_horizontal/logo_horizontal.png';
import ordIcon from '../../assets/images/ordenacao_icon/ordenacao_icon.png';
import pixelIcon from '../../assets/images/pixel_icon/pixel_icon.png';
import styles from './styles';

function ScreenAbout() {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxContainer}>
          <Text style={styles.title}>SOBRE</Text>
          <Image source={logo} style={styles.logo} />
          <Text style={[styles.textContent, styles.marginScreen]}>
            O aplicativo Computação Plugada foi inspirado no livro de Bell, T.;
            Witten, I. e Fellows, M. (2011). “Computer Science Unplugged – Ensinando
            Ciência da Computação sem o uso do Computador”. Tradução de Luciano Porto
            Barreto, 2011.
          </Text>
        </View>

        <View style={styles.box}>
          <Image source={cs} style={styles.images} />
          <Text style={[styles.textContent, styles.marginScreen]}>
            Este livro apresenta atividades práticas, lúdicas e acessíveis sobre
            diversos temas da ciência da computação. O mesmo engloba técnicas fáceis
            para seu uso, tornando-se disponível para todos. Sua prática é fácil não
            só em salas de aula mas também fora, podendo ser administrado por
            professores e compreendido pelas crianças.
          </Text>
        </View>

        <View style={styles.box}>
          <Image source={cards} style={styles.images} />
          <Text style={[styles.textContent, styles.marginScreen]}>
            O aplicativo aqui apresentado busca simplificar ainda mais a aplicação das
            atividades propostas sem a necessidade de produção de materiais
            adicionais. O aplicativo é uma grande inovação para as técnicas de
            aprendizagem, apresentando temas complexos de uma forma elementar para o
            conhecimento.
          </Text>
        </View>

        <View style={styles.box}>
          <View style={[styles.links, styles.marginScreen]}>
            <TouchableHighlight onPress={() => {
                  Linking.openURL('https://play.google.com/store/apps/details?id=br.ufpb.dcx.computacaoplugada.pixel');
                }}>
              <Image source={pixelIcon} />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
                  Linking.openURL('https://play.google.com/store/apps/details?id=br.ufpb.dcx.computacaoplugada.sortingalgorithms');
                }}>
              <Image source={ordIcon} />
            </TouchableHighlight>
          </View>
          <Text style={[styles.textContent, styles.marginScreen]}>
            O aplicativo Binários faz parte de uma família com vários outros aplicativos. Conheça mais sobre os demais clicando nas imagens acima.
          </Text>
        </View>  
      </ScrollView>
    </SafeAreaView>
  );
}

export default ScreenAbout;