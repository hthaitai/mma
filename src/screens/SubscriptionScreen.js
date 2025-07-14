import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/header';

const SubscriptionScreen = ({ navigation }) => {
  const handleChoosePlan = (plan) => {
    Alert.alert("Đã chọn gói", `Bạn đã chọn gói ${plan}`);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Chọn gói Subscription" />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.planButton}
          onPress={() => handleChoosePlan('Cơ bản')}
        >
          <Text style={styles.planText}>Gói Cơ bản - Miễn phí</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.planButton}
          onPress={() => handleChoosePlan('Pro')}
        >
          <Text style={styles.planText}>Gói Pro - 49K/tháng</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.planButton}
          onPress={() => handleChoosePlan('Premium')}
        >
          <Text style={styles.planText}>Gói Premium - 99K/tháng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  planButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  planText: {
    color: '#fff',
    fontSize: 16,
  },
});
