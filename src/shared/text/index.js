import react from 'react';
import {Text as RNText} from 'react-native';
import {_getFont} from './handlers';

export default function Text({value, children}) {
  return (
    <Text>
      {value}
      {children}
    </Text>
  );
}
