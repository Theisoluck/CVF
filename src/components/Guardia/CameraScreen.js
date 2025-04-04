import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CameraScreen({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [qrData, setQrData] = useState(null);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Necesitamos acceso a la cámara</Text>
        <Button onPress={requestPermission} title="Dar permiso" />
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setQrData(data);
    if (data.includes('tipo:entrada')) {
      navigation.navigate('ValidVisitScreen', { qr: data });
    } else if (data.includes('tipo:salida')) {
      navigation.navigate('ValidExitScreen', { qr: data });
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
        onBarcodeScanned={handleBarCodeScanned}
      >
        <View style={styles.qrBox} />
      </CameraView>

      {qrData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>QR: {qrData}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  message: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrBox: {
    position: 'absolute',
    top: '35%',
    left: '15%',
    width: 250,
    height: 250,
    borderColor: '#00FF00',
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  resultContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
  },
  resultText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
