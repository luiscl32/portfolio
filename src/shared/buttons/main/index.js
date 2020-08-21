import React from 'react';
import { Pressable } from 'react-native';
import Text from 'shared/text';
import s from './styles';
import { colors as c } from 'theme/colors';

export default function MainButton({
  title,
  align = 'center',
  onPress = () => {},
}) {
  return (
    <Pressable style={s.container(align)} onPress={onPress}>
      <Text size={20} color={c.light_gray} type={'medium'} align={'center'}>
        {title}
      </Text>
    </Pressable>
  );
}
