import React, { useState, useContext } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal,
  KeyboardAvoidingView, ScrollView, Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../../context/userContext';

export default function LoginScreen() {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      showModal('Favor de rellenar todos los campos.');
    } else if (
      (username === 'Axel' && password === '12345678') ||
      (username === 'Eduardo' && password === '87654321')
    ) {
      const tipoUsuario = username === 'Axel' ? 'RESIDENTE' : 'GUARDIA';
      login({ username, tipoUsuario });
    } else {
      showModal('Credenciales incorrectas. FAVOR DE VERIFICAR SUS DATOS.');
    }
  };

  const showModal = (message) => {
    setModalText(message);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <View style={styles.inner}>
            <Text style={styles.label}>Usuario *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su usuario"
              value={username}
              onChangeText={setUsername}
            />

            <Text style={styles.label}>Contraseña *</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Ingrese su contraseña"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="black" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>

          <Image source={require('../../images/Logo.png')} style={styles.logo} />

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>{modalText}</Text>
                <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C4BDA6',
    },
    keyboardContainer: {
      flex: 1,
    },
    scroll: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 20,
      paddingTop: 20, // ¡Ahora no tapa el header!
    },
    inner: {
      marginBottom: 40,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 5,
    },
    input: {
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 15,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 5,
      height: 40,
      paddingHorizontal: 10,
      marginBottom: 15,
    },
    passwordInput: {
      flex: 1,
    },
    forgot: {
      fontSize: 14,
      color: '#000',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#4D5637',
      borderRadius: 5,
      paddingVertical: 12,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    logo: {
      width: '100%',
      height: 220,
      resizeMode: 'contain',
      marginTop: 20,
      alignSelf: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      alignItems: 'center',
    },
    modalText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
    },
    modalButton: {
      backgroundColor: '#4D5637',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    modalButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  