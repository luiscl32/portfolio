import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import s from '../styles';
import { colors as c } from 'theme/colors';

import Card from 'shared/cards/dashboard-card';

//icons
const Info = () => (
  <Icon name={'info-with-circle'} color={c.sub_titles} size={70} />
);
const Code = () => <Icon name={'code'} color={c.sub_titles} size={70} />;
const PortFolio = () => <Icon name={'folder'} color={c.sub_titles} size={70} />;
const Contact = () => <Icon name={'message'} color={c.sub_titles} size={70} />;

export default function Menu() {
  return (
    <View style={s.wrapContainer}>
      <Card Icon={() => <Info />} title="Sobre mi" />
      <Card Icon={() => <Code />} title="Prototipos" />
      <Card Icon={() => <PortFolio />} title="Proyectos" />
      <Card Icon={() => <Contact />} title="Contacto" />
    </View>
  );
}
