import React from 'react';
import {setCustomTextInput, setCustomText} from 'react-native-global-props';

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
  return <Routes />;
};

export default App;
