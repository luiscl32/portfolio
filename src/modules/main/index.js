import React from 'react';
import { View, ImageBackground } from 'react-native';
//components
import Text from 'shared/text';
import Button from 'shared/buttons/main';
//styles
import s from './styles';
//background
const bg = { uri: 'https://wallpaperaccess.com/full/698610.jpg' };
//components props
import { title, sub_title } from './components-props';
import { useNavigation } from '@react-navigation/native';

export default function MainPage() {
  const { navigate } = useNavigation();

  //functions
  function goToDashboard() {
    console.log('navigation here');
  }

  return (
    <ImageBackground style={s.main} source={bg}>
      <Text {...title}>Hola, Soy Luis Correa</Text>
      <Text {...sub_title}>
        Desarrollador front-end en React-native & reactjs
      </Text>
      <Button title={'Ver mi trabajo'} onPress={goToDashboard} />
    </ImageBackground>
  );
}
