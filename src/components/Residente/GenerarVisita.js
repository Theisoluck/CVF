// components/Residente/GenerarVisita.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function GenerarVisita() {
  const navigation = useNavigation();
  const [visitData, setVisitData] = useState({
    personas: '',
    descripcion: '',
    motivo: '',
    placa: '',
    unidad: '',
    visitante: ''
  });

  const handleChange = (field, value) => {
    setVisitData(prev => ({ ...prev, [field]: value }));
  };

  const handleGuardar = () => {
    navigation.navigate('Visita', { visitData });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>EDITAR PERFIL</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} placeholder="Example" onChangeText={text => handleChange('visitante', text)} />

        <Text style={styles.label}>Número de personas:</Text>
        <TextInput style={styles.input} placeholder="Example" keyboardType="numeric" onChangeText={text => handleChange('personas', text)} />

        <Text style={styles.label}>Correo:</Text>
        <TextInput style={styles.input} placeholder="Example" />

        <Text style={styles.label}>Descripción:</Text>
        <TextInput style={styles.input} placeholder="Padres e hijo, coche rojo" onChangeText={text => handleChange('descripcion', text)} />

        <Text style={styles.label}>Motivo de visita:</Text>
        <TextInput style={styles.input} placeholder="Visita Familiar" onChangeText={text => handleChange('motivo', text)} />

        <Text style={styles.label}>Placa:</Text>
        <TextInput style={styles.input} placeholder="000-00-00" onChangeText={text => handleChange('placa', text)} />

        <Text style={styles.label}>Unidad de casa:</Text>
        <TextInput style={styles.input} placeholder="Unidad 40" onChangeText={text => handleChange('unidad', text)} />

        <TouchableOpacity style={styles.button} onPress={handleGuardar}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4BDA6',
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#7C4A2D',
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    borderRadius: 8,
  },
  form: {
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#EDEDED',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    backgroundColor: '#4D5637',
    marginTop: 20,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 14,
    color: 'black',
  },
});
