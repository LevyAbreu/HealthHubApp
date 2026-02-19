import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export const ProgressCard = ({ days }) => (
  <Card style={styles.card}>
    <View style={styles.row}>
      <Text style={styles.title}>Seu progresso{"\n"}semanal</Text>
      
      <View style={styles.chartContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.number}>{days}</Text>
            <Text style={styles.subText}>Dias</Text>
          </View>
        </View>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#A5D8FF',
    borderRadius: 30,
    padding: 25,
    marginBottom: 20,
    elevation: 4,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '600', color: '#1A1A1A', lineHeight: 28 },
  chartContainer: { alignItems: 'center', justifyContent: 'center' },
  outerCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 8,
    borderColor: '#FFF',
    borderTopColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: { alignItems: 'center' },
  number: { fontSize: 22, fontWeight: '800', color: '#1A1A1A' },
  subText: { fontSize: 12, color: '#666', fontWeight: '600' }
});