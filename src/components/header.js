import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title, onBack, rightIcon, onRightPress }) => {
  return (
    <View style={styles.container}>
      {onBack ? (
        <TouchableOpacity onPress={onBack}>
          <Icon name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 28 }} />
      )}

      <Text style={styles.title}>{title}</Text>

      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress}>
          <Icon name={rightIcon} size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 28 }} />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
