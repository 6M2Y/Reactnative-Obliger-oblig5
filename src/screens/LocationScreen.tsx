import { View, TextInput, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import { locations } from '../Utility/LocationsList'; //holder lister med location
import { SafeAreaView } from 'react-native-safe-area-context';
import { Location } from '../Utility/Types'; //typescript type for location
import Styles from '../Utility/Styles'; //styles
import LocationCard from '../components/LocationCard'; //location display cards
import Footer from '../components/Footer';

const LocationScreen: React.FC = () => {
  const [locCard, setLocationCard] = useState(locations); //usestate for the customized display

  //search location function
  const handlerLocationSearch = (searchText: string) => {
    const trimmed = searchText.trim().toLocaleLowerCase();
    if (trimmed.length >= 2) {
      const matchLocations: Location[] = locations.filter(
        location => location.locationName.toLocaleLowerCase().includes(trimmed),
        /* matchLocations.push(matchLocation); */
      );
      setLocationCard(matchLocations);
    } else {
      setLocationCard(locations);
    }
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      <ScrollView>
        <View style={{ marginTop: 0 }}>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Her kan du søk om våre fine lokaler i hele Norge
          </Text>
        </View>
        <View style={Styles.locationContainer}>
          <TextInput
            style={Styles.textInputStyle}
            placeholder="Type here to search"
            onChangeText={handlerLocationSearch}
          />
        </View>

        <View>
          {locCard.map((loc, index) => {
            return <LocationCard {...loc} />;
          })}
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationScreen;
