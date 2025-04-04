import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Imagen redonda del residente */}
        <Image
          source={require('../../images/Residente/user.png')}
          style={styles.profileImage}
        />

        {/* Nombre */}
        <Text style={styles.name}>José Alfredo Hernández</Text>

        {/* Línea decorativa */}
        <View style={styles.separator} />

        {/* Teléfono */}
        <View style={styles.infoItem}>
          <Text style={styles.label}>Número de teléfono:</Text>
          <Text style={styles.value}>000-000-0000</Text>
        </View>

        {/* Correo */}
        <View style={styles.infoItem}>
          <Text style={styles.label}>Correo electrónico:</Text>
          <Text style={styles.value}>residente@gmail.com</Text>
        </View>

        {/* Dirección */}
        <View style={styles.infoItem}>
          <Text style={styles.label}>Dirección:</Text>
          <Text style={styles.value}>
            Av. Plutarco B, Col. Golondrina,{"\n"}62986, Jiutepec, Morelos
          </Text>
        </View>

        {/* No. Casa */}
        <View style={styles.infoItem}>
          <Text style={styles.label}>No. Casa:</Text>
          <Text style={styles.value}>Unidad 40</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4BDA6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#EFEAD8',
    padding: 25,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    maxWidth: 340,
    elevation: 6,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4D5637',
    marginBottom: 10,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: '#7C4A2D',
    marginVertical: 16,
  },
  infoItem: {
    marginBottom: 14,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#444',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  value: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
  },
});
