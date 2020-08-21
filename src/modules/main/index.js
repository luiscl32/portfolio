import React from 'react';
import { View, ImageBackground } from 'react-native';
//components
import Text from 'shared/text';
//styles
import s from './styles';
//background
const bg = { uri: 'https://wallpaperaccess.com/full/698610.jpg' };
//components props
import { title, sub_title } from './components-props';

export default function MainPage() {
  return (
    <ImageBackground style={s.main} source={bg}>
      <Text {...title}>Hola, Soy Luis Correa</Text>
      <Text {...sub_title}>
        Desarrollador front-end en React-native & reactjs
      </Text>
    </ImageBackground>
  );
}
