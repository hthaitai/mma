import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const initialMessages = [
  { id: '1', sender: 'Coach', text: 'Em bắt đầu từ khi nào?' },
  { id: '2', sender: 'Bạn', text: 'Em muốn bỏ thuốc' },
];

export default function CoachChatScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([
      ...messages,
      { id: Date.now().toString(), sender: 'Bạn', text: input },
    ]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.headerBox}>
        <Icon name="chatbubbles" size={28} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.header}>Tư vấn viên trực tuyến</Text>
      </View>
      <View style={styles.chatContainer}>
        <FlatList
          data={[...messages].reverse()}
          renderItem={({ item }) => (
            <View style={item.sender === 'Bạn' ? styles.userMsgBox : styles.coachMsgBox}>
              <Text style={styles.sender}>{item.sender === 'Bạn' ? 'Bạn' : 'Coach'}:</Text>
              <Text style={item.sender === 'Bạn' ? styles.userMsg : styles.coachMsg}>{item.text}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          style={styles.chatBox}
          contentContainerStyle={{ paddingVertical: 8 }}
          inverted
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Nhập tin nhắn"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Icon name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#26a69a',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  header: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  chatContainer: { flex: 1, backgroundColor: '#f9f9f9', paddingHorizontal: 8, paddingTop: 8 },
  chatBox: { flex: 1 },
  userMsgBox: {
    alignSelf: 'flex-end',
    backgroundColor: '#e0f7fa',
    borderRadius: 16,
    marginVertical: 4,
    padding: 10,
    maxWidth: '80%',
    shadowColor: '#26a69a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 2,
  },
  coachMsgBox: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff3e0',
    borderRadius: 16,
    marginVertical: 4,
    padding: 10,
    maxWidth: '80%',
    shadowColor: '#ff9800',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 2,
  },
  sender: { fontSize: 12, color: '#888', marginBottom: 2 },
  userMsg: { color: '#222', fontSize: 16 },
  coachMsg: { color: '#222', fontSize: 16 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#b2dfdb',
    borderRadius: 24,
    padding: 10,
    fontSize: 16,
    marginRight: 8,
    backgroundColor: '#f5f5f5',
    color: '#222',
  },
  sendBtn: {
    backgroundColor: '#26a69a',
    borderRadius: 24,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
}); 