import React from 'react';
import { Pressable } from 'react-native';
import Text from 'shared/text';
import s from './styles';
import { colors as c } from 'theme/colors';
import { ripple_config } from 'utils/ripple-config';

export default function MainButton({
  title,
  align = 'center',
  onPress = () => {},
}) {
  return (
    <Pressable
      android_ripple={ripple_config}
      style={s.container(align)}
      onPress={onPress}>
      <Text size={16} color={c.light_gray} type={'medium'} align={'center'}>
        {title}
      </Text>
    </Pressable>
  );
}
