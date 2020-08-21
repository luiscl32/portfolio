import React from 'react';
import { View, ImageBackground } from 'react-native';
//components
import BackgroundContainer from 'shared/main-containers/background';
import Text from 'shared/text';
import Button from 'shared/buttons/main';
//styles
import s from './styles';
//components props
import { title, sub_title } from './components-props';
//hooks
import { useNavigation } from '@react-navigation/native';

export default function MainPage() {
  const { navigate } = useNavigation();

  //functions
  function goToDashboard() {
    navigate('Main/dashboard');
  }

  return (
    <BackgroundContainer style={s.main}>
      <Text {...title}>Hola, Soy Luis Correa</Text>
      <Text {...sub_title}>
        Desarrollador front-end en React-native & reactjs
      </Text>
      <Button title={'Ver mi trabajo'} onPress={goToDashboard} />
    </BackgroundContainer>
  );
}
