import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const notifications = [
  { id: '1', text: '1 tuần không hút!', icon: 'checkmark-circle', color: '#26a69a' },
  { id: '2', text: 'Nhớ lý do bạn bắt đầu!', icon: 'bulb-outline', color: '#ffb300' },
  { id: '3', text: 'Giai đoạn 2 bắt đầu!', icon: 'notifications-outline', color: '#42a5f5' },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Icon name="notifications" size={28} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.header}>Thông báo / Nhắc nhở</Text>
      </View>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <View style={[styles.card, { borderLeftColor: item.color }]}> 
            <Icon name={item.icon} size={32} color={item.color} style={styles.icon} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#42a5f5',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    marginBottom: 8,
  },
  header: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 14,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: { marginRight: 16 },
  text: { fontSize: 17, color: '#222', fontWeight: '500' },
}); 