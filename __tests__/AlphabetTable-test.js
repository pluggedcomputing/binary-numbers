import React from 'react';
import renderer from 'react-test-renderer';

import AlphabetTable from '../src/components/AlphabetTable/index';

test('renders correctly', () => {
  const tree = renderer.create(<AlphabetTable />).toJSON();
  expect(tree).toMatchSnapshot();
});
