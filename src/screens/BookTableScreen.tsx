import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import Footer from '../components/Footer';

const BookTableForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState<number>(1);

  // tables needed (1 table per 3 guests)
  const tablesNeeded = Math.ceil(guests / 3);

  const handleBooking = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Please fill in all fields');
      return;
    }
    Alert.alert(
      'Booking Confirmed',
      `Name: ${name}\nEmail: ${email}\nGuests: ${guests}\nTables needed: ${tablesNeeded}`,
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Book a Table</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <View style={styles.guestContainer}>
          <Text style={styles.label}>Number of Guests:</Text>
          <View style={styles.counter}>
            <Pressable
              style={styles.counterBtn}
              onPress={() => setGuests(prev => Math.max(prev - 1, 1))}
            >
              <Text style={styles.counterText}>-</Text>
            </Pressable>

            <Text style={styles.guestCount}>{guests}</Text>

            <Pressable
              style={styles.counterBtn}
              onPress={() => setGuests(prev => prev + 1)}
            >
              <Text style={styles.counterText}>+</Text>
            </Pressable>
          </View>
          <Text style={styles.tablesInfo}>Tables needed: {tablesNeeded}</Text>
        </View>

        <Pressable style={styles.bookBtn} onPress={handleBooking}>
          <Text style={styles.bookText}>Confirm Booking</Text>
        </Pressable>
      </View>
      <Footer />
    </>
  );
};

export default BookTableForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  guestContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterBtn: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  counterText: {
    color: '#000000ff',
    fontSize: 18,
    fontWeight: '600',
  },
  guestCount: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  tablesInfo: {
    marginTop: 8,
    fontSize: 16,
    color: '#555',
  },
  bookBtn: {
    backgroundColor: '#92f8f3ff',
    paddingVertical: 14,
    borderRadius: 10,
  },
  bookText: {
    color: '#000000ff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
  },
});
