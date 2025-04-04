import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../images/Guardia/profile.png')} style={styles.profileImage} />
      <Text style={styles.name}>Arturo Guardián</Text>
      <Text style={styles.info}>Correo: arturo@cvf.com</Text>
      <Text style={styles.info}>Turno: Mañana</Text>
      <Text style={styles.info}>ID Guardia: G1234</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4BDA6',
    alignItems: 'center',
    paddingTop: 60,
  },
  profileImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4D5637',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});
