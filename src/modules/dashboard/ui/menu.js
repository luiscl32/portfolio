import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import s from '../styles';
import { colors as c } from 'theme/colors';

import Card from 'shared/cards/dashboard-card';
import { useNavigation } from '@react-navigation/native';

//icons
const Info = () => (
  <Icon name={'info-with-circle'} color={c.sub_titles} size={60} />
);
const Code = () => <Icon name={'code'} color={c.sub_titles} size={60} />;
const PortFolio = () => <Icon name={'folder'} color={c.sub_titles} size={60} />;
const Contact = () => <Icon name={'message'} color={c.sub_titles} size={70} />;

export default function Menu() {
  const { navigate } = useNavigation();

  function goTo(type) {
    const route = {
      0: 'dashboard/info',
      1: 'dashboard/info',
      2: 'dashboard/info',
      3: 'dashboard/info',
      default: 'dashboard/info',
    };
    return navigate(route[type]);
  }

  return (
    <View style={s.wrapContainer}>
      <Card
        onPress={() => {
          goTo(0);
        }}
        Icon={() => <Info />}
        title="Sobre mi"
      />
      <Card
        onPress={() => {
          goTo(0);
        }}
        Icon={() => <Code />}
        title="Prototipos"
      />
      <Card
        onPress={() => {
          goTo(0);
        }}
        Icon={() => <PortFolio />}
        title="Proyectos"
      />
      <Card
        onPress={() => {
          goTo(0);
        }}
        Icon={() => <Contact />}
        title="Contacto"
      />
    </View>
  );
}
