import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const { logout } = useAuth(); // lấy hàm logout từ context

  // Dữ liệu giả lập (có thể fetch từ API sau)
  const user = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  };
const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn muốn đăng xuất?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Đăng xuất",
          onPress: () => logout(), // gọi logout từ context
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Chỉnh sửa hồ sơ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FF5252" }]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Đăng xuất</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#2196F3" }]}
        onPress={() => navigation.navigate("Subscription")}
      >
        <Text style={styles.buttonText}>Chọn gói Subscription</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  button: {
    width: "80%",
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
