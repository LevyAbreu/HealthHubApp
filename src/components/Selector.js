import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SelectorInput = ({ label, value, options = [], onSelect }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.externalLabel}>{label}</Text>
      
      <TouchableOpacity style={styles.card} onPress={() => setVisible(true)}>
        <Text style={value ? styles.activeText : styles.placeholderText}>
          {value || "Selecione uma opção"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#64748B" />
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.optionItem} 
                  onPress={() => {
                    onSelect(item);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                  {value === item && <Ionicons name="checkmark" size={20} color="#005f73" />}
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    marginBottom: 15,
  },
  externalLabel: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginBottom: 12,
    color: '#333', 
    marginLeft: 5 
  },
  card: { 
    elevation: 4, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, shadowOffset: { width: 0, height: 4 },
    backgroundColor: '#FFF', padding: 20, borderRadius: 25, 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  activeText: { color: '#1E293B', fontSize: 15 },
  placeholderText: { color: '#94A3B8', fontSize: 15 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  modalContent: { backgroundColor: '#FFF', borderRadius: 20, padding: 10, maxHeight: '50%' },
  optionItem: { padding: 20, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  optionText: { fontSize: 16, color: '#1E293B' }
});