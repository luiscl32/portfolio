import React from 'react';
import { View, Pressable } from 'react-native';
import Text from 'shared/text';
import s from './styles';
import { colors as c } from 'theme/colors';
import { ripple_config } from 'utils/ripple-config';

export default function DashboardCard({
  Icon = () => <></>,
  title = '',
  onPress = () => {},
}) {
  return (
    <Pressable android_ripple={ripple_config} onPress={onPress}>
      <View style={s.container}>
        <View style={s.column}>
          <Icon />
          <View style={s.filler} />
          <Text size={18} color={c.light_gray} type={'medium'} align={'center'}>
            {title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
