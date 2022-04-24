import React from 'react';
import codePush from 'react-native-code-push';
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

const appCodePush = codePush(App);

export default appCodePush;
