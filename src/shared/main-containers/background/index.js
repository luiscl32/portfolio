import React from 'react';
import { ImageBackground } from 'react-native';
import s from './styles';
//background
const bg = { uri: 'https://wallpaperaccess.com/full/698610.jpg' };

export default function BackgroundContainer({ children, style }) {
  return (
    <ImageBackground source={bg} style={[s.main, { ...style }]}>
      {children}
    </ImageBackground>
  );
}
