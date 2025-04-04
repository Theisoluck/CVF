import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons, Feather, Entypo } from '@expo/vector-icons';

export default function Visita() {
  const navigation = useNavigation();
  const route = useRoute();
  const { visitData } = route.params;

  const handleEnviar = () => {
    navigation.navigate('GenerarQR', { visitData });
  };

  return (
    <View style={styles.container}>
      {/* TÍTULO */}
      <View style={styles.header}>
        <Text style={styles.headerText}>VISITA</Text>
      </View>

      {/* SUBTÍTULO Y FECHA */}
      <Text style={styles.subtitle}>Tienes una visita para el día</Text>
      <Text style={styles.date}>23 de Febrero del 2025 | 14:00 a 18:00 hrs</Text>

      {/* ICONO GRANDE */}
      <FontAwesome5 name="car" size={50} color="#333" style={{ marginVertical: 20 }} />

      {/* DATOS DE LA VISITA */}
      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <FontAwesome5 name="user-friends" size={20} color="#000" />
          <Text style={styles.infoText}>{visitData.personas} Personas</Text>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons name="description" size={20} color="#000" />
          <Text style={styles.infoText}>{visitData.descripcion}</Text>
        </View>

        <View style={styles.infoRow}>
          <Entypo name="location-pin" size={20} color="#000" />
          <Text style={styles.infoText}>{visitData.motivo}</Text>
        </View>

        <View style={styles.infoRow}>
          <FontAwesome5 name="car-side" size={20} color="#000" />
          <Text style={styles.infoText}>{visitData.placa}</Text>
        </View>

        <View style={styles.infoRow}>
          <Entypo name="home" size={20} color="#000" />
          <Text style={styles.infoText}>Unidad {visitData.unidad}</Text>
        </View>
      </View>

      {/* CONTRASEÑA */}
      <View style={styles.passwordBox}>
        <Text style={styles.passwordLabel}>Tu contraseña de acceso es:</Text>
        <Text style={styles.passwordText}>{visitData.contrasena || 'Sin contraseña'}</Text>
      </View>

      {/* NOMBRE DEL VISITANTE */}
      <Text style={styles.name}>{visitData.visitante}</Text>

      {/* BOTÓN */}
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
    padding: 45,
  },
  header: {
    backgroundColor: '#7C4A2D',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 4,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  date: {
    fontSize: 13,
    marginBottom: 10,
  },
  infoBox: {
    alignSelf: 'stretch',
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  passwordBox: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  passwordLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 14,
  },
  passwordText: {
    fontSize: 16,
    color: '#333',
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
