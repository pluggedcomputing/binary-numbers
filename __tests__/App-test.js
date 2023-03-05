/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react-native';

import ScreenAbout from '../src/screens/ScreenAbout'
import CustomTextInput from '../src/components/CustomTextInput';
import CustomButton from '../src/components/CustomButton';

// Note: test renderer must be required after react-native.

describe('renders correctly', () =>{

  test('the component rendered', () => {
    renderer.create(<ScreenAbout/>);
  });

  test('verificando se o props text está funcionando', () =>{
    render(<CustomButton
    text = "test"
    /> )

    const buttonText = screen.getByText("test");
    
  })

  test('the component rendered', () => {
    render(<CustomTextInput
      keyboardType="numeric"
      placeholder="Digite aqui.."
      onChangeText={text => setNumericAnswer(text)}
      value={1}
    />);
  });
})



