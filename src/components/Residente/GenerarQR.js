import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function GenerarQR({ route }) {
  const { visitData } = route.params;
  
  // Convertimos los datos a formato JSON
  const jsonData = JSON.stringify({
    visitante: visitData.visitante,
    personas: visitData.personas,
    descripcion: visitData.descripcion,
    motivo: visitData.motivo,
    placa: visitData.placa,
    unidad: visitData.unidad
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CÓDIGO QR DE VISITA</Text>
      
      <View style={styles.qrContainer}>
        <QRCode
          value={jsonData}
          size={250}
          color="#000"
          backgroundColor="#FFF"
        />
      </View>
      
      <Text style={styles.info}>Este QR contiene la información de la visita en formato JSON</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4BDA6',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7C4A2D',
    marginVertical: 20,
  },
  qrContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  info: {
    color: '#4D5637',
    textAlign: 'center',
    marginHorizontal: 30,
  },
});