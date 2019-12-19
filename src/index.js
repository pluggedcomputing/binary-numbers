import React from 'react';
import { View, Text, Image} from 'react-native';

import CustomBackground from "./components/CustomBackground"

import image from './components/CustomBackground/assets/next.png'

const App = () => {
  const jsx = [<Text>Muito</Text>,<Text>Crazy</Text>, <Image source={image} />]
  return (
    <View>
      <CustomBackground content={jsx} />
    </View>
  );
};


export default App;
