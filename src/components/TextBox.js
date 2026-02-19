import { View, Text, TextInput, StyleSheet } from 'react-native';

export const TextBoxInput = ({ label, placeholder, onChangeText }) => (
  <View style={styles.container}>
    <Text style={styles.externalLabel}>{label}</Text>
    <View style={styles.card}>
      <TextInput 
        placeholder={placeholder} 
        placeholderTextColor="#94A3B8"
        multiline 
        numberOfLines={4}
        style={styles.input} 
        onChangeText={onChangeText} 
      />
    </View>
  </View>
);

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
  input: { width: 350,textAlignVertical: 'top', color: '#1E293B', fontSize: 15 }
});