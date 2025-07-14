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
import { useAuth } from "../contexts/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth(); // 🔥 hook phải gọi ở đây — trong component

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }

    // Giả lập login thành công
    login("fake-token"); // set token vào context
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Đăng nhập" />

      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          importantForAutofill="no"
          textContentType="none"
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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.linkText}>Chưa có tài khoản? Đăng ký ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

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
  linkText: {
    color: "#4CAF50",
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
  },
});
