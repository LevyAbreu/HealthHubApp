import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Btn = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { backgroundColor: '#005f73', padding: 18, borderRadius: 20, alignItems: 'center', marginTop: 10, elevation: 4, marginBottom: 50 },
  text: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});