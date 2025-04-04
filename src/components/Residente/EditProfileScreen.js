import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EditProfileScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Ionicons name="menu" size={30} color="white" />
        <Text style={styles.headerText}>EDITAR PERFIL</Text>
        <Ionicons name="log-out-outline" size={30} color="white" />
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={require('../../images/user.png')} style={styles.avatar} />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="create-outline" size={20} color="black" />
          <Text>Editar foto</Text>
        </TouchableOpacity>
      </View>

      {/* Formulario */}
      <View style={styles.form}>
        {renderInput('Nombre:', name, setName)}
        {renderInput('Número de teléfono:', phone, setPhone)}
        {renderInput('Correo:', email, setEmail)}
        {renderInput('Dirección:', address, setAddress)}
        {renderInput('Número de casa:', houseNumber, setHouseNumber)}
      </View>

      {/* Botones */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Componente para renderizar cada campo de entrada
const renderInput = (label, value, onChangeText) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder="Example" />
  </View>
);

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#D3CDBE', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#7C4A2D', padding: 15 },
  headerText: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  avatarContainer: { alignItems: 'center', marginVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'gray' },
  editIcon: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  form: { marginBottom: 20 },
  inputContainer: { marginBottom: 10 },
  label: { fontWeight: 'bold' },
  input: { backgroundColor: 'white', padding: 8, borderRadius: 5 },
  saveButton: { backgroundColor: '#5A6445', padding: 12, borderRadius: 5, alignItems: 'center' },
  saveButtonText: { color: 'white', fontWeight: 'bold' },
  cancelButton: { backgroundColor: '#E0DFDB', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  cancelButtonText: { color: 'black', fontWeight: 'bold' },
});
