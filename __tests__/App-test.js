/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ScreenAbout from '../src/screens/ScreenAbout'
import CardLevel from '../src/components/CardLevel';
import CardGroup from '../src/components/CardGroup';
import ModalAlert from '../src/components/ModalAlert';
import CustomTextInput from '../src/components/CustomTextInput';

// Note: test renderer must be required after react-native.

describe('renders correctly', () =>{

  test('the component rendered', () => {
    renderer.create(<ScreenAbout/>);
  });
  
  test('the component rendered', () => {
    renderer.create(<CustomTextInput
      keyboardType="numeric"
      placeholder="Digite aqui.."
      onChangeText={text => setNumericAnswer(text)}
      value={1}
    />);
  });
})



