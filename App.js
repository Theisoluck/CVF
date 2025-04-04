import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { UserProvider, UserContext } from './src/context/userContext';
import Navigation from './src/routes/navigation';
import LoginScreen from './src/components/Login/LoginScreen';

export default function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

function Main() {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      {user ? <Navigation /> : <LoginScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
