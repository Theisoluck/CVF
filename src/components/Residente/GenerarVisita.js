import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Platform,
  SafeAreaView
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';

export default function GenerarVisita() {
  const navigation = useNavigation();

  const [visitData, setVisitData] = useState({
    fecha: '',
    hora: '',
    personas: '',
    descripcion: '',
    tipo: '',
    placa: '',
    contrasena: '',
    verificarContrasena: '',
    unidad: '',
    visitante: ''
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (field, value) => {
    setVisitData(prev => ({ ...prev, [field]: value }));
  };

  const handleGuardar = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('Visita', { visitData });
    }, 2000);
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString();
      handleChange('fecha', formattedDate);
    }
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const formattedTime = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      handleChange('hora', formattedTime);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#C4BDA6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>CREAR VISITAS</Text>

        {/* Fecha y hora */}
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Fecha:</Text>
            <TouchableOpacity style={styles.inputIconRow} onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.inputIcon}
                value={visitData.fecha}
                placeholder="dd/mm/aaaa"
                editable={false}
              />
              <Feather name="calendar" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          <View style={styles.col}>
            <Text style={styles.label}>Hora:</Text>
            <TouchableOpacity style={styles.inputIconRow} onPress={() => setShowTimePicker(true)}>
              <TextInput
                style={styles.inputIcon}
                value={visitData.hora}
                placeholder="hh:mm"
                editable={false}
              />
              <FontAwesome name="clock-o" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display="default"
            value={new Date()}
            onChange={onChangeDate}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            mode="time"
            display="default"
            value={new Date()}
            onChange={onChangeTime}
          />
        )}

        <Text style={styles.label}>
          Número de personas: <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => handleChange('personas', text)} />

        <Text style={styles.label}>
          Descripción: <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <TextInput
          style={[styles.input, { height: 60 }]}
          multiline
          onChangeText={text => handleChange('descripcion', text)}
        />

        <Text style={styles.label}>
          Tipo de visita: <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.tipoButton, visitData.tipo === 'Familiar' && styles.tipoActivo]}
            onPress={() => handleChange('tipo', 'Familiar')}
          >
            <Feather name="users" size={20} color="#333" style={{ marginRight: 6 }} />
            <Text style={styles.tipoText}>Familiar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tipoButton, visitData.tipo === 'Técnica' && styles.tipoActivo]}
            onPress={() => handleChange('tipo', 'Técnica')}
          >
            <Feather name="tool" size={20} color="#333" style={{ marginRight: 6 }} />
            <Text style={styles.tipoText}>Técnica</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Placas de vehículo:</Text>
        <TextInput style={styles.input} placeholder="000-00-00" onChangeText={text => handleChange('placa', text)} />

        <Text style={styles.label}>Contraseña:</Text>
        <TextInput style={styles.input} secureTextEntry onChangeText={text => handleChange('contrasena', text)} />

        <Text style={styles.label}>Verificar contraseña:</Text>
        <TextInput style={styles.input} secureTextEntry onChangeText={text => handleChange('verificarContrasena', text)} />

        <Text style={styles.label}>
          Número de casa: <Text style={{ color: 'red' }}>*</Text>
        </Text>
        <TextInput style={styles.input} onChangeText={text => handleChange('unidad', text)} />

        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} onChangeText={text => handleChange('visitante', text)} />

        <TouchableOpacity style={styles.button} onPress={handleGuardar}>
          <Text style={styles.buttonText}>Crear visita</Text>
        </TouchableOpacity>

        {/* MODAL DE CONFIRMACIÓN */}
        <Modal transparent={true} visible={modalVisible} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Feather name="check-circle" size={80} color="#4BB543" />
              <Text style={styles.modalText}>¡Visita creada exitosamente!</Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4BDA6',
    padding: 20,
    paddingTop: 55, // ⬅️ agrega espacio extra arriba
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#7C4A2D',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 14,
    color: 'black',
  },
  input: {
    backgroundColor: '#EDEDED',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
    width: '100%',
    marginTop: 4,
  },
  inputIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EDEDED',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
    marginTop: 4,
  },
  inputIcon: {
    flex: 1,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
    marginRight: 10,
  },
  tipoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginTop: 10,
    marginRight: 10,
  },
  tipoActivo: {
    backgroundColor: '#B0D9A3',
  },
  tipoText: {
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#4D5637',
    marginTop: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  modalText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
