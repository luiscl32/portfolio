import React from 'react';
import { View, Image } from 'react-native';
import s from '../styles';

const img = {
  uri:
    'https://steamuserimages-a.akamaihd.net/ugc/964234870034162920/A9B757FC91195AABB31F464C0FFD8F8E8D00ADEF/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
};

export default function PhotoInfo() {
  return (
    <View style={s.container}>
      <Image style={s.image} source={img} />
    </View>
  );
}
