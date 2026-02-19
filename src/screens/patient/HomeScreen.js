import { useState } from 'react';
import { Header, ProgressCard, CheckInCard, SliderInput } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../../styles/theme'; 
import { PROFILE_DATA } from '../../utils/mockData'; 

export default function HomeScreen() {
  const navigation = useNavigation();
  const [checkedApp, setCheckedApp] = useState(false);
  const [checkedProtocol, setCheckedProtocol] = useState(false);
  const [mood, setMood] = useState(3);

  const { user } = PROFILE_DATA;

  return (
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
      <Header 
        title={user.name.split(' ')[0]}
        isHome={true} 
        userPhoto={user.initialImg} 
        navigation={navigation} 
      />

      <ProgressCard days={3} />

      <SliderInput 
        label="Como você está se sentindo?"
        value={mood}
        setValue={setMood}
        labels={['😡', '😟', '😐', '🙂', '🤩']}
      />

      <View style={styles.checkInRow}>
        <CheckInCard 
          question="Compareceu a aplicação hoje?" 
          checked={checkedApp} 
          onToggle={() => setCheckedApp(!checkedApp)} 
        />
        <CheckInCard 
          question="Cumpriu o protocolo hoje?" 
          checked={checkedProtocol} 
          onToggle={() => setCheckedProtocol(!checkedProtocol)} 
        />
      </View>

      <TouchableOpacity 
        style={styles.listItem} 
        onPress={() => navigation.navigate('Challenges')}
      >
        <View style={styles.listContent}>
          <View style={styles.challengeIconContainer}>
            <Ionicons name="trophy" size={22} color={Theme.text} />
          </View>
           <Text style={styles.listText}>Desafios</Text>
          <Text style={styles.listValue}>5/10</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#CCC" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.listItem} 
        onPress={() => navigation.navigate('Hidratation')}
      >
        <View style={styles.listContent}>
          <Ionicons name="water-outline" size={24} color={Theme.text} />
          <Text style={styles.listText}>Água</Text>
          <Text style={styles.listValue}>1.5L / 2L</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#CCC" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.listItem}
        onPress={() => navigation.navigate('Activity')}
      >
        <View style={styles.listContent}>
          <Ionicons name="bicycle-outline" size={24} color={Theme.text} />
          <Text style={styles.listText}>Atividade Física</Text>
          <Text style={styles.listValue}>Ciclismo 25 min</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#CCC" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.listItem} 
        onPress={() => navigation.navigate('Sleep')}
      >
        <View style={styles.listContent}>
            <MaterialCommunityIcons name="bed-outline" size={24} color={Theme.text} />
           <Text style={styles.listText}>Sono</Text>
           <Text style={styles.listValue}>5h</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#CCC" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create(
  {
    container: { 
    flex: 1, 
    backgroundColor: '#F2F6F9',
    paddingHorizontal: 20 
  },
  
  halfCard: { 
    backgroundColor: '#FFFFFF',
    width: '48%', 
    padding: 15, 
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  listItem: { 
    backgroundColor: '#FFFFFF', 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 15, 
    borderRadius: 15, 
    marginBottom: 10,
    elevation: 4, 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    shadowOffset: { width: 0, height: 4 } 
  },

  // Outros estilos
  checkInRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  cardText: { fontSize: 13, fontWeight: '600', marginBottom: 10, color: '#333' },
  checkRow: { flexDirection: 'row', alignItems: 'center' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  moodEmojis: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  emoji: { fontSize: 24 },
  listContent: { flexDirection: 'row', flex: 1, alignItems: 'center' },
  listText: { flex: 1, marginLeft: 15, fontWeight: '600', color: '#333' },
  listValue: { color: '#666', marginRight: 10 },
});