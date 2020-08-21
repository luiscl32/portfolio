import React from 'react';
import { View } from 'react-native';
import s from '../styles';

import Card from 'shared/cards/dashboard-card';

export default function Menu() {
  return (
    <View style={s.wrapContainer}>
      <Card title="Sobre mi" />
      <Card title="Prototipos" />
      <Card title="Proyectos" />
      <Card title="Contacto" />
    </View>
  );
}
