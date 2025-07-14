import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/header';

const GuestProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Tài khoản" />

      <View style={styles.container}>
        <Text style={styles.text}>Bạn chưa đăng nhập.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Đăng nhập ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GuestProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
