import React from 'react';
import { View } from 'react-native';
import Text from 'shared/text';

import s from './styles';
import { colors as c } from 'theme/colors';

export default function Title({ children }) {
  return (
    <View style={s.titleContainer}>
      <Text size={18} color={c.white} type={'medium'} align={'left'}>
        {children}
      </Text>
    </View>
  );
}
