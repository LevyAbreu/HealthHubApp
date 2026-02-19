import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const PerformanceCard = ({ title, icon, value, labelExtra }) => (
  <Card style={styles.perfCard}>
    <View style={styles.contentAlignCenter}>
      <View style={styles.iconCircle}>
        <MaterialCommunityIcons name={icon} size={24} color="#005f73" />
      </View>
      <Text style={styles.perfValue}>{value}</Text>
      <Text style={styles.perfTitle}>{title}</Text>
      {labelExtra && <Text style={styles.perfExtra}>{labelExtra}</Text>}
    </View>
  </Card>
);

const styles = StyleSheet.create({
  perfCard: { 
    width: '48%', paddingVertical: 20, paddingHorizontal: 10,
    borderRadius: 24, marginBottom: 15, backgroundColor: '#FFF', elevation: 4 
  },
  contentAlignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: { 
    width: 50, height: 50, borderRadius: 25, backgroundColor: '#F1F5F9', 
    justifyContent: 'center', alignItems: 'center', marginBottom: 12 
  },
  perfValue: { fontSize: 17, fontWeight: 'bold', color: '#1E293B', textAlign: 'center' },
  perfTitle: { fontSize: 12, color: '#64748B', fontWeight: '500', textAlign: 'center' },
  perfExtra: { fontSize: 10, color: '#94A3B8', marginTop: 4, textAlign: 'center' },
});