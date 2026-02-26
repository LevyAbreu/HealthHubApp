import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Header = ({ title, navigation, isHome = false, userPhoto }) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        {isHome ? (
          <Image 
            source={typeof userPhoto === 'string' ? { uri: userPhoto } : userPhoto} 
            style={styles.avatar} 
          />
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}

        <View style={styles.textContainer}>
          {isHome && <Text style={styles.greeting}>Olá,</Text>}
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <View style={styles.streakBadge}>
          <Text style={styles.streakText}>
            <Text>🔥</Text>
            <Text style={{ marginLeft: 5 }}> 8 semanas</Text>
          </Text>
        </View>
        
        <TouchableOpacity style={styles.iconBtnSmall}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 40,
    marginBottom: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {  
    width:  42, 
    height: 42, 
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: '#DDD'
  },
  textContainer: {
    marginLeft: 12,
  },
  greeting: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: -2,
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#1E293B'
  },
  iconBtn: { 
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  iconBtnSmall: {
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 20,
    elevation: 2,
    marginLeft: 10,
  },
  streakBadge: { 
    backgroundColor: '#FFF', 
    height: 40,
    paddingHorizontal: 12, 
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakText: { 
    fontWeight: 'bold',
    fontSize: 13,
    color: '#333',
  },
});