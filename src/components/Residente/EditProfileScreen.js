import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function EditProfileScreen() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    casa: '',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>EDITAR PERFIL</Text>

      <Image
        source={require('../../images/Residente/user.png')}
        style={styles.profileImage}
      />
      <Text style={styles.editPhoto}>
        <Feather name="edit" size={16} /> Editar foto
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo"
          value={formData.nombre}
          onChangeText={text => handleChange('nombre', text)}
        />

        <Text style={styles.label}>Número de teléfono:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo"
          keyboardType="phone-pad"
          value={formData.telefono}
          onChangeText={text => handleChange('telefono', text)}
        />

        <Text style={styles.label}>Correo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo"
          keyboardType="email-address"
          value={formData.correo}
          onChangeText={text => handleChange('correo', text)}
        />

        <Text style={styles.label}>Dirección:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo"
          value={formData.direccion}
          onChangeText={text => handleChange('direccion', text)}
        />

        <Text style={styles.label}>Número de casa:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo"
          value={formData.casa}
          onChangeText={text => handleChange('casa', text)}
        />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#C4BDA6',
    paddingHorizontal: 20,
    paddingTop: 80, // AUMENTADO para bajar el contenido
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: '#7C4A2D',
    paddingVertical: 12, // más alto
    paddingHorizontal: 40,
    fontWeight: 'bold',
    marginBottom: 25,
    borderRadius: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  editPhoto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    color: '#000',
  },
  input: {
    backgroundColor: '#EDEDED',
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 40,
    marginTop: 4,
  },
  saveButton: {
    backgroundColor: '#4D5637',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 4,
    width: '100%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  cancelButton: {
    backgroundColor: '#DDD',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 12,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
});
