import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../components/Login/LoginScreen';
import HomeResidente from '../components/Residente/HomeScreen';
import HomeGuardia from '../components/Guardia/HomeScreen';
import ProfileScreen from '../components/Guardia/ProfileScreen';
import HistoryScreen from '../components/Guardia/HistoryScreen';
import CameraScreen from '../components/Guardia/CameraScreen';
import EditProfileScreen from '../components/Residente/EditProfileScreen';
import GenerarVisita from '../components/Residente/GenerarVisita'; // ajusta el path si es necesario
import Visita from '../components/Residente/Visita'; // la pantalla donde mostrarás los datos
import GenerarQR from '../components/Residente/GenerarQR';



import { UserContext } from '../context/userContext';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const { user } = useContext(UserContext);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* LOGIN CON CABECERA VISIBLE PERSONALIZADA */}
                {!user && (
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: true,
                            title: 'INICIO DE SESIÓN',
                            headerStyle: { backgroundColor: '#7C4A2D' },
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: 18,
                            },
                            headerTitleAlign: 'center',
                        }}
                    />
                )}

                {/* HOME GUARDIA - CABECERA CUSTOM */}
                {user?.tipoUsuario === 'GUARDIA' && (
                    <Stack.Screen
                        name="HomeGuardia"
                        component={HomeGuardia}
                        options={{ headerShown: false }}
                    />
                )}

                {/* HOME RESIDENTE - CABECERA CUSTOM TAMBIÉN 🔥 */}
                {user?.tipoUsuario === 'RESIDENTE' && (
                    <Stack.Screen
                        name="HomeResidente"
                        component={HomeResidente}
                        options={{ headerShown: false }}
                    />
                )}

                {/* PANTALLAS EXTRA DEL MENÚ */}
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
                <Stack.Screen name="CameraScreen" component={CameraScreen} />
                <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
                <Stack.Screen name="GenerarVisita" component={GenerarVisita} />
                <Stack.Screen name="Visita" component={Visita} />
                <Stack.Screen name="GenerarQR" component={GenerarQR} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
