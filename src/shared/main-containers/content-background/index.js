import React from 'react';
import { View } from 'react-native';
import s from './styles';

export default function Content({ style, children }) {
  return <View style={[s.container, { ...style }]}>{children}</View>;
}
