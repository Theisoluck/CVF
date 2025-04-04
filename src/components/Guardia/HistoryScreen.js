import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const visitas = [
  { id: '1', nombre: 'Carlos Pérez', fecha: '2024-04-01', motivo: 'Entrega' },
  { id: '2', nombre: 'Lucía Torres', fecha: '2024-04-02', motivo: 'Reunión' },
  { id: '3', nombre: 'Andrés Gómez', fecha: '2024-04-03', motivo: 'Mantenimiento' },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Visitas</Text>
      <FlatList
        data={visitas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.visitItem}>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text style={styles.detail}>Fecha: {item.fecha}</Text>
            <Text style={styles.detail}>Motivo: {item.motivo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4BDA6',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4D5637',
    marginBottom: 20,
    textAlign: 'center',
  },
  visitItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detail: {
    fontSize: 14,
    color: '#555',
  },
});
