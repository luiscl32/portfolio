import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import { colors as c } from 'theme/colors';

//icons
const Rocket = () => <Icon size={30} color={c.white} name={'rocket'} />;

export const info = [
  {
    title: 'Responsable',
    description:
      'Enfocado en hacer mis asignaciones en el mejor tiempo posible',
  },
  {
    title: 'Responsable',
    description:
      'Enfocado en hacer mis asignaciones en el mejor tiempo posible',
  },
  {
    title: 'Responsable',
    description:
      'Enfocado en hacer mis asignaciones en el mejor tiempo posible',
  },
  {
    title: 'Responsable',
    description:
      'Enfocado en hacer mis asignaciones en el mejor tiempo posible',
  },
];

export const getIcons = (index) => {
  const icons = {
    0: <Icon size={30} color={c.white} name={'rocket'} />,
    0: <Icon size={30} color={c.white} name={'rocket'} />,
    0: <Icon size={30} color={c.white} name={'rocket'} />,
    0: <Icon size={30} color={c.white} name={'rocket'} />,
    default: <Icon size={30} color={c.white} name={'rocket'} />,
  };

  return icons[index];
};
