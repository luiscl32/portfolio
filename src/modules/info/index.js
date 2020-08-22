import React from 'react';
import { ScrollView } from 'react-native';
import Background from 'shared/main-containers/background';

import PhotoInfo from './ui/photo-info';
import Text from 'shared/text';
import { colors as c } from 'theme/colors';

import s from './styles';

export default function Info() {
  return (
    <Background style={s.background}>
      <ScrollView>
        <PhotoInfo />
        <Text
          size={26}
          color={c.light_gray}
          type={'black'}
          mb={20}
          align={'center'}>
          ¿Quien soy?
        </Text>

        <Text align={'left'} color={c.white} type={'light'} size={18}>
          Me llamo Luis Correa, tengo 28 años, Venezolano, soy desarrollador
          front-end, en React js y React-native.{'\n\n'}
          Me considero una persona muy enfocada lograr los objetivos, ademas de
          eso me encanta trabajar en equipo, ademas de eso me gusta aprender
          nuevas cosas tanto a tecnologia, como nivel humano.
        </Text>
      </ScrollView>
    </Background>
  );
}
