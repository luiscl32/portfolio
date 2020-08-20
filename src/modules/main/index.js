import React from 'react';
import {ImageBackground} from 'react-native';
//components
import Text from 'shared/text';
//styles
import s from './styles';
//background
import bg from 'assets/backgrounds/background.png';
//components props
import {title, sub_title} from './components-props';

export default function MainPage() {
  return (
    <ImageBackground style={s.main} source={require(bg)}>
      <Text {...title}>Hola, Soy Luis Correa</Text>
      <Text {...sub_title}>
        Desarrollador front-end en React-native & reactjs
      </Text>
    </ImageBackground>
  );
}
