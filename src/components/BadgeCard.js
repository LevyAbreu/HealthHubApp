import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Adicionamos 'points' às desestruturações das props
export const BadgeCard = ({ name, desc, icon, color, bg, locked, points }) => (
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
    
    {/* Container de Pontos formatado */}
    <View style={[styles.pointsContainer, { backgroundColor: locked ? '#F1F5F9' : bg }]}>
      <Text style={[styles.pointsText, { color: locked ? '#94A3B8' : color }]}>
        +{points} pts
      </Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  badgeCard: { 
    width: 150, padding: 15, marginRight: 15, alignItems: 'center', 
    borderRadius: 24, backgroundColor: '#FFF', elevation: 3 
  },
  lockedCard: { opacity: 0.7 },
  badgeIconBg: { 
    width: 60, height: 60, borderRadius: 30, 
    justifyContent: 'center', alignItems: 'center', marginBottom: 10 
  },
  lockedIconBg: { backgroundColor: '#E2E8F0' },
  badgeName: { fontSize: 13, fontWeight: 'bold', color: '#1E293B', textAlign: 'center' },
  badgeDesc: { fontSize: 11, color: '#64748B', marginTop: 2, textAlign: 'center', marginBottom: 10 },
  lockedText: { color: '#94A3B8' },
  // Novos estilos para os pontos
  pointsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 5
  },
  pointsText: {
    fontSize: 12,
    fontWeight: 'bold',
  }
});