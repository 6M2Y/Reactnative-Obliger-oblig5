//list of locations

import { Alert } from 'react-native';
import { Location } from './Types';

export const locationImages = {
  tromso: require('../asset/LocationImages/tromso.png'),
  bodo: require('../asset/LocationImages/bodo.png'),
  jess: require('../asset/LocationImages/jess.png'),
  kris: require('../asset/LocationImages/Krist.png'),
  lille: require('../asset/LocationImages/lillesand.png'),
  trond: require('../asset/LocationImages/berg1.png'),
};

export const locations: Location[] = [
  {
    id: 1,
    locationName: 'Tromso',
    img: locationImages.tromso,
    text: 'Welcome to our beautiful tromos locations',
    action: () => Alert.alert('under construction'),
  },
  {
    id: 2,
    locationName: 'Bodo',
    img: locationImages.bodo,
    text: 'Welcome to our beautiful Bodo locations',
    action: () => Alert.alert('under construction'),
  },
  {
    id: 3,
    locationName: 'Jessheim',
    img: locationImages.jess,
    text: 'Welcome to our beautiful Jessheim locations',
    action: () => Alert.alert('under construction'),
  },
  {
    id: 4,
    locationName: 'Trondheim',
    img: locationImages.trond,
    text: 'Welcome to our beautiful tromos locations',
    action: () => Alert.alert('under construction'),
  },
  {
    id: 5,
    locationName: 'Tromso 2',
    img: locationImages.tromso,
    text: 'Welcome to our beautiful tromos 2 locations',
    action: () => Alert.alert('under construction'),
  },
  {
    id: 6,
    locationName: 'Kristansand',
    img: locationImages.kris,
    text: 'Welcome to our beautiful tromos locations',
    action: () => Alert.alert('under construction'),
  },
];
