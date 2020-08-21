import React from 'react';
import { View } from 'react-native';
import Btn from 'shared/buttons/btn';
import Icon from 'react-native-vector-icons/Entypo';

import s from './styles';
import { colors as c } from 'theme/colors';

export default function Back({ onPress }) {
  return (
    <Btn onPress={onPress}>
      <View style={s.icon}>
        <Icon color={c.white} name={'chevron-left'} size={24} />
      </View>
    </Btn>
  );
}
