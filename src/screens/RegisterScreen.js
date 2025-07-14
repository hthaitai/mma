import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "../components/header";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    if (!email || !password || !name) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Giả lập đăng ký thành công
    console.log("Đăng ký với:", { email, password, name });
    Alert.alert("Thành công", "Đăng ký thành công! Mời đăng nhập");
    navigation.goBack(); // Quay về LoginScreen
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Đăng ký" />

      <View style={styles.container}>
        <Text style={styles.label}>Họ tên</Text>
        <TextInput
          textContentType="none"
          importantForAutofill="no"
          placeholder="Nhập họ tên"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          textContentType="none"
          importantForAutofill="no"
          placeholder="Nhập email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput
          textContentType="none"
          importantForAutofill="no"
          placeholder="Nhập mật khẩu"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 8,
    marginTop: 32,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
