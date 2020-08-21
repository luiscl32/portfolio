import React from 'react';
import Background from 'shared/main-containers/background';
import Content from 'shared/main-containers/content-background';
import s from './styles';

import Menu from './ui/menu';

export default function Dashboard() {
  return (
    <Background>
      <Content style={s.container}>
        <Menu />
      </Content>
    </Background>
  );
}
