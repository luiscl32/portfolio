import React from 'react';
import { ScrollView } from 'react-native';
import Background from 'shared/main-containers/background';
import Content from 'shared/main-containers/content-background';

import PhotoInfo from './ui/photo-info';

import s from './styles';

export default function Info() {
  return (
    <Background>
      <Content>
        <ScrollView style={}>
          <PhotoInfo />
        </ScrollView>
      </Content>
    </Background>
  );
}
