import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // 👈 IMPORTANTE

export default function Visita() {
  const navigation = useNavigation(); // 👈 NECESARIO
  const route = useRoute();
  const { visitData } = route.params;

  const handleEnviar = () => {
    navigation.navigate('GenerarQR', { visitData }); // ✅ SE LLAMA AL HACER CLICK
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>VISITA</Text>
      </View>

      <Text style={styles.subtitle}>Tu visita ha sido confirmada</Text>
      <Text style={styles.date}>23 de Febrero del 2025 | 14:00 a 18:00 hrs</Text>

      <Image source={require('../../images/Residente/visita.png')} style={styles.carIcon} />

      <View style={styles.infoContainer}>
        <Text style={styles.info}>👥 {visitData.personas} Personas</Text>
        <Text style={styles.info}>📝 {visitData.descripcion}</Text>
        <Text style={styles.info}>📌 {visitData.motivo}</Text>
        <Text style={styles.info}>🚘 {visitData.placa}</Text>
        <Text style={styles.info}>🏠 {visitData.unidad}</Text>
      </View>

      <Text style={styles.name}>{visitData.visitante}</Text>

      <TouchableOpacity style={styles.button} onPress={handleEnviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4BDA6',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#7C4A2D',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    marginBottom: 20,
  },
  carIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  infoContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4D5637',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
