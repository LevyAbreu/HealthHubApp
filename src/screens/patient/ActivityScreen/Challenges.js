import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../../components'; 
import { Theme } from '../../../styles/theme';

export default function ChallengesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.fixedHeader}>
          <Header title="Desafios" navigation={navigation} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Card style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <View style={styles.statsContainer}>
              <Text style={styles.summaryTitle}>Resumo mensal</Text>
              <View style={styles.statItem}><Text style={styles.statLabel}>Realizado</Text><Text style={styles.statValue}>25min</Text></View>
              <View style={styles.statItem}><Text style={styles.statLabel}>Falta</Text><Text style={styles.statValue}>35min</Text></View>
              <View style={styles.statItem}><Text style={styles.statLabel}>Meta</Text><Text style={styles.statValue}>1h</Text></View>
            </View>
            <View style={styles.progressCircle}>
              <Ionicons name="trophy" size={45} color="#3498db" />
            </View>
          </View>
        </Card>

        <TouchableOpacity style={styles.insertButton}>
          <Text style={styles.insertButtonText}>+ Inserir</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Histórico</Text>
        <Card style={styles.historyCard} />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  fixedHeader: {
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.background,
    zIndex: 10,
  },
  scrollContent: { 
    paddingHorizontal: 20, 
    paddingBottom: 100,
    paddingTop: 10
  },
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, marginBottom: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  backBtn: { backgroundColor: '#FFF', padding: 8, borderRadius: 20, elevation: 2 },
  notifBtn: { backgroundColor: '#FFF', padding: 8, borderRadius: 20, elevation: 2 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 10 },
  summaryCard: { backgroundColor: '#A5D8FF', borderRadius: 25, padding: 20, elevation: 4 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statsContainer: { flex: 1 },
  summaryTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  statItem: { flexDirection: 'row', marginBottom: 5 },
  statLabel: { fontSize: 14, fontWeight: 'bold', width: 75 },
  statValue: { fontSize: 14 },
  progressCircle: { width: 110, height: 110, borderRadius: 55, borderWidth: 10, borderColor: '#FFF', borderTopColor: '#3498db', justifyContent: 'center', alignItems: 'center' },
  insertButton: { backgroundColor: '#3498db', borderRadius: 15, paddingVertical: 12, alignItems: 'center', marginTop: 20, elevation: 3 },
  insertButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 15 },
  historyCard: { backgroundColor: '#FFF', borderRadius: 25, minHeight: 350, marginBottom: 30, elevation: 1 }
});