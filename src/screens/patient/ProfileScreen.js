import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header, PerformanceCard, BadgeCard } from '../../components';
import { PROFILE_DATA } from '../../utils/mockData';

export default function ProfileScreen({ navigation }) {
  const { user, conquistas, performance } = PROFILE_DATA;

  return (
    <View style={styles.container}>
      <View style={styles.blueHeader}>
        <Header title="Perfil" navigation={navigation} />
        
        <View style={styles.profileSection}>
          <Image source={user.initialImg} style={styles.avatarLarge} />
          <View style={styles.nameContainer}>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileAge}>{user.age} anos • {user.city}</Text>
          </View>
          <TouchableOpacity style={styles.editIcon}>
            <MaterialCommunityIcons name="pencil" size={20} color="#005f73" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* 3. Conteúdo Inferior */}
        <View style={styles.content}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Conquistas</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgesRow}>
            {conquistas.map(item => (
              <BadgeCard key={item.id} {...item} />
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>Performance</Text>
          <View style={styles.grid}>
            {performance.map(item => (
              <PerformanceCard key={item.id} {...item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8FAFC' 
  },
  blueHeader: { 
    backgroundColor: '#A5D8FF', 
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 35, 
    borderBottomRightRadius: 35,
    zIndex: 1,
  },
  profileSection: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 10,
  },
  avatarLarge: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    borderWidth: 3, 
    borderColor: '#FFF' 
  },
  nameContainer: { 
    flex: 1, 
    marginLeft: 15 
  },
  profileName: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#004A77' 
  },
  profileAge: { 
    color: '#004A77', 
    opacity: 0.7, 
    fontWeight: '600' 
  },
  editIcon: { 
    backgroundColor: '#FFF', 
    padding: 8, 
    borderRadius: 12 
  },
  content: { 
    marginTop: 40,
    paddingHorizontal: 20 
  },
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1E293B',
  },
  viewAll: { color: '#64748B', fontSize: 13, fontWeight: '600' },
  badgesRow: { marginBottom: 30, marginTop: 10 },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    paddingBottom: 50 
  },
});