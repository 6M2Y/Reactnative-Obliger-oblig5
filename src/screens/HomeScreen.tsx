import { View, Text, ScrollView } from 'react-native';
import React from 'react';
//import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import ButtonComponent from '../components/ButtonComponent';
import Infosection from '../components/Infosection';
import styles from '../Utility/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

//on action navigate to respective screens
const HomeScreen: React.FC = ({ navigation }: any) => {
  const actionBtns = [
    {
      title: 'BOOK BORD',
      action: () => navigation.navigate('BookTable'),
    },
    {
      title: 'MENYER',
      action: () => navigation.navigate('Menu'),
    },
    {
      title: 'LOKALER',
      action: () => navigation.navigate('Location'),
    },
  ];
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          {/* Header section*/}
          {/* Header component */}
          <Header />
          {/* Content section */}

          <Cards />

          <View style={styles.content}>
            <Text style={styles.contentText}>
              Julen nærmer seg med stormskritt sikre dere plass nå!
            </Text>

            {/* button component */}
            {actionBtns.map((button, index) => (
              <ButtonComponent
                key={index}
                title={button.title}
                color="#aff8e6ff"
                action={button.action}
              />
            ))}
          </View>
          {/* Info section */}
          {/* Infosection component */}
          <Infosection />
        </View>
        <Footer />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
