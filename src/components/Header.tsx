import { View, Text, Image } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import styles from '../utility/Styles';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

export default function Header() {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Text style={styles.textLogo}>ELD</Text>
        <Text>Restuarant</Text>
      </View>

      <Menu
        onOpen={() => setMenuOpen(true)}
        onBackdropPress={() => setMenuOpen(false)}
        onClose={() => setMenuOpen(false)}
      >
        <MenuTrigger>
          {menuOpen ? (
            <Image
              source={require('../asset/close.png')}
              style={styles.menuIcon}
            />
          ) : (
            <Image
              source={require('../asset/menu-burger.png')}
              style={styles.menuIcon}
            />
          )}
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: styles.optionsContainer,
          }}
        >
          <MenuOption
            onSelect={() => {
              navigation.navigate('Home' as never);
              setMenuOpen(false);
            }}
            text="Home"
          />
          <MenuOption
            onSelect={() => {
              navigation.navigate('About' as never);
              setMenuOpen(false);
            }}
            text="About"
          />
          <MenuOption
            onSelect={() => {
              navigation.navigate('Menu' as never);
              setMenuOpen(false);
            }}
            text="Menu"
          />
          <MenuOption
            onSelect={() => {
              navigation.navigate('BookTable' as never);
              setMenuOpen(false);
            }}
            text="Book Table"
          />
          <MenuOption
            onSelect={() => {
              navigation.navigate('Contact' as never);
              setMenuOpen(false);
            }}
            text="Contact"
          />
        </MenuOptions>
      </Menu>
    </View>
  );
}
