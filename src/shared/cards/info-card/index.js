import React from 'react';
import { View } from 'react-native';
import Text from 'shared/text';
import Icon from 'react-native-vector-icons/Entypo';

import { colors as c } from 'theme/colors';
import s from './styles';

export default function InfoCard({
  icon = 'rocket',
  title = '',
  description = '',
}) {
  return (
    <View style={s.container}>
      <Icon size={30} color={c.white} name={icon} />
      <Text
        size={16}
        color={c.light_gray}
        type={'medium'}
        align={'center'}
        mt={10}
        mb={5}>
        {title}
      </Text>
      <Text
        size={12}
        color={c.gray}
        type={'medium'}
        align={'center'}
        mt={10}
        mb={10}>
        {description}
      </Text>
    </View>
  );
}
