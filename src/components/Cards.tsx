import React from 'react';
import { ScrollView } from 'react-native';
import { CardHome } from './CardHome';

const images = {
  image1: require('../asset/LocationImages/berg.png'),
  image2: require('../asset/LocationImages/jess.png'),
  image3: require('../asset/LocationImages/tromso.png'),
};

const titles = {
  title_bergen: 'Bergen',
  title_jess: 'Jessheim',
  title_troms: 'Tromsø',
};

const descriptions = {
  desc_bergen: 'This is Bergen location',
  desc_jess: 'This is Jessheim location',
  desc_troms: 'This is Tromsø location',
};
const Cards = () => {
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <CardHome
        title={titles.title_bergen}
        image={images.image1}
        description={descriptions.desc_bergen}
      />
      <CardHome
        title={titles.title_jess}
        image={images.image2}
        description={descriptions.desc_jess}
      />
      <CardHome
        title={titles.title_troms}
        image={images.image3}
        description={descriptions.desc_troms}
      />
    </ScrollView>
  );
};

export default Cards;
