import React from 'react';
import { View, Text} from 'react-native';

import CustomBackground from "./components/CustomBackground"

const App = () => {
  const jsx = [<Text>Muito</Text>,<Text>olaaa</Text>,<Text>Crazy</Text>]
  return (
    <View>
      <CustomBackground content={jsx} />
    </View>
  );
};


export default App;
