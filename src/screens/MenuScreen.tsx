import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { menuItems } from '../Utility/MenuList'; //list of menus
import Footer from '../components/Footer';

const MenuScreen: React.FC = () => {
  // Sample static data — you can fetch or import from JSON later

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Restaurant Menu</Text>
      {menuItems.map(item => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      ))}
      <Footer />
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: '#555',
  },
});
