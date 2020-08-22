import React from 'react';
import { View } from 'react-native';
import Text from 'shared/text';

import { colors as c } from 'theme/colors';
import s from './styles';

export default function InfoCard({
  Icon = () => <> </>,
  title = '',
  description = '',
}) {
  return (
    <View style={s.container}>
      <Text
        size={16}
        color={c.light_gray}
        type={'medium'}
        align={'center'}
        mt={10}
        mb={10}>
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
