import React from 'react';
import { Image, Text, View } from 'react-native';
import { CardProp } from '../utility/Types';
import Styles from '../utility/Styles';

export const CardHome = (props: CardProp) => {
  return (
    <View style={Styles.card}>
      <Image source={props.image} style={Styles.cardImage} />
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
      <Text>{props.icon}</Text>
    </View>
  );
};
