import React from 'react';
import { View } from 'react-native';
import InfoCard from 'shared/cards/info-card';
import { info, getIcons } from '../data/info-cards-data';

import s from '../styles';

export default function InfoCards() {
  return (
    <View style={s.wrapper}>
      {info.map((item, i) => (
        <InfoCard Icon={getIcons(i)} key={i} {...item} />
      ))}
    </View>
  );
}
