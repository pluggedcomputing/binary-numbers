import React from 'react';
import {setCustomTextInput, setCustomText} from 'react-native-global-props';

import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';

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

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Routes />;
};

export default App;
