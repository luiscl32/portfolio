import { TransitionPresets } from '@react-navigation/stack';
import HeaderLeft from 'shared/header/back';
import HeaderTitle from 'shared/header/title';
import HeaderStyle from 'shared/header/styles';

export const options = {
  ...TransitionPresets.RevealFromBottomAndroid,
  headerStyle: HeaderStyle.container,
  headerLeft: HeaderLeft,
  headerTitle: HeaderTitle,
  headerTransparent: true,
};

export const options_no_transparent = {
  ...TransitionPresets.RevealFromBottomAndroid,
  headerStyle: HeaderStyle.container,
  headerLeft: HeaderLeft,
  headerTitle: HeaderTitle,
  headerTransparent: false,
};
