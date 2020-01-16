/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src';

it('renders correctly', () => {
  renderer.create(<App />);
});
