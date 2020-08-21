import React from 'react';
import { View, Pressable } from 'react-native';
import Text from 'shared/text';
import s from './styles';
import { colors as c } from 'theme/colors';

export default function DashboardCard({ Icon = () => <></>, title = '' }) {
  return (
    <Pressable>
      <View style={s.container}>
        <View style={s.column}>
          <Icon />
          <Text size={18} color={c.light_gray} type={'black'} align={'center'}>
            {title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
