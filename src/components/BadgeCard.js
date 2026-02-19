import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const BadgeCard = ({ name, desc, icon, color, bg, locked }) => (
  <Card style={[styles.badgeCard, locked && styles.lockedCard]}>
    <View style={[styles.badgeIconBg, { backgroundColor: bg }, locked && styles.lockedIconBg]}>
      <MaterialCommunityIcons 
        name={locked ? "lock" : icon} 
        size={30} 
        color={locked ? "#94A3B8" : color} 
      />
    </View>
    <Text style={[styles.badgeName, locked && styles.lockedText]}>{name}</Text>
    <Text style={[styles.badgeDesc, locked && styles.lockedText]}>{desc}</Text>
  </Card>
);

const styles = StyleSheet.create({
  badgeCard: { 
    width: 150, padding: 15, marginRight: 15, alignItems: 'center', 
    borderRadius: 24, backgroundColor: '#FFF', elevation: 3 
  },
  lockedCard: { opacity: 0.6 },
  badgeIconBg: { 
    width: 60, height: 60, borderRadius: 30, 
    justifyContent: 'center', alignItems: 'center', marginBottom: 10 
  },
  lockedIconBg: { backgroundColor: '#E2E8F0' },
  badgeName: { fontSize: 13, fontWeight: 'bold', color: '#1E293B', textAlign: 'center' },
  badgeDesc: { fontSize: 11, color: '#64748B', marginTop: 2, textAlign: 'center' },
  lockedText: { color: '#94A3B8' }
});