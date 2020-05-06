import React, {useState, useEffect} from 'react';
import {setCustomTextInput, setCustomText} from 'react-native-global-props';

import {AppLoading} from 'expo';
import * as Font from 'expo-font';

import Routes from './src/routes';
import {general} from './src/styles';

const customTextInputProps = {
  style: general.customProps,
};

const customTextProps = {
  style: general.customProps,
};

setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);

const customFonts = {
  'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    console.log('Antes', new Date());
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
    console.log('Depois', new Date());
  };

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Routes />;
};

export default App;
