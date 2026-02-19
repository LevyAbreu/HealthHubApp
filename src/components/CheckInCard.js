import { View, Text, StyleSheet } from 'react-native';
import { Card, Checkbox } from 'react-native-paper';

export const CheckInCard = ({ question, checked, onToggle }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{question}</Text>
    
    <Card style={styles.halfCard}>
      <View style={styles.checkRow}>
        <Checkbox 
          status={checked ? 'checked' : 'unchecked'} 
          onPress={onToggle} 
          color="#005f73" 
        />
        <Text style={styles.optionText}>Sim</Text>
      </View>
      
      <View style={styles.checkRow}>
        <Checkbox 
          status={!checked ? 'checked' : 'unchecked'} 
          onPress={onToggle} 
          color="#005f73" 
        />
        <Text style={styles.optionText}>Não</Text>
      </View>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '48%',
  },
  label: { 
    fontSize: 14, 
    fontWeight: '700', 
    marginBottom: 8, 
    color: '#333',
    marginLeft: 5,
  },
  halfCard: { 
    width: '100%',
    padding: 12, 
    borderRadius: 20, 
    backgroundColor: '#FFF', 
    elevation: 4, 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    shadowOffset: { width: 0, height: 4 } 
  },
  checkRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: -2,
  },
  optionText: { 
    fontSize: 14, 
    fontWeight: '600',
    color: '#475569'
  }
});