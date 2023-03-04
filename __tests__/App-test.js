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

// Note: test renderer must be required after react-native.

describe('renders correctly', () =>{

  test('renders correctly', () => {
    renderer.create(<ScreenAbout/>);
  });
  
  test('the component rendered', () => {
    renderer.create(<CardGroup/>);
  });
})

