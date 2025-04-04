import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/userContext';


export default function HomeResidente() {
  const { logout } = useContext(UserContext);
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnimation = useState(new Animated.Value(-250))[0];

  const toggleMenu = () => {
    const toValue = menuVisible ? -250 : 0;
    Animated.timing(menuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      {/* CABECERA */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image source={require('../../images/Residente/menu.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>HOME</Text>
        <TouchableOpacity onPress={logout}>
          <Image source={require('../../images/Residente/log-out.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

   {/* MENÚ LATERAL */ }
<Animated.View style={[styles.sideMenu, { left: menuAnimation }]}>
  <View style={styles.profileSection}>
    <Image source={require('../../images/Residente/user.png')} style={styles.profileIcon} />
    <Text style={styles.profileName}>Axel</Text>
  </View>

  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ProfileScreen')}>
    <Image source={require('../../images/Residente/user.png')} style={styles.menuIcon} />
    <Text style={styles.menuText}>Perfil</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('EditProfileScreen')}>
    <Image source={require('../../images/Residente/edit.png')} style={styles.menuIcon} />
    <Text style={styles.menuText}>Editar perfil</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HistoryScreen')}>
    <Image source={require('../../images/Residente/visita.png')} style={styles.menuIcon} />
    <Text style={styles.menuText}>Visitas</Text>
  </TouchableOpacity>
</Animated.View>


      {/* BOTONES CENTRALES */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GenerarVisita')}>
  <Text style={styles.buttonText}>Crear visita</Text>
</TouchableOpacity>

      <Image source={require('../../images/Residente/visita.png')} style={styles.icon} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Generar enlace</Text>
      </TouchableOpacity>
      <Image source={require('../../images/Residente/enlace.png')} style={styles.icon} />

      {/* LOGO */}
      <Image source={require('../../images/Residente/Logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4BDA6',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#7C4A2D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  sideMenu: {
    position: 'absolute',
    top: 90,
    width: 200,
    height: '100%',
    backgroundColor: '#7C4A2D',
    padding: 20,
    zIndex: 10,
    elevation: 5,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 14,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#4D5637',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 6,
    shadowColor: '#000',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  icon: {
    width: 80,
    height: 80,
    marginTop: 10,
    resizeMode: 'contain',
  },
  logo: {
    width: 140,
    height: 140,
    marginTop: 30,
    resizeMode: 'contain',
  },
});
