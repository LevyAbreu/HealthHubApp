import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'; 
import { Card } from 'react-native-paper';
import { Header } from '../../components'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Theme } from '../../styles/theme';

const MENU_ITEMS = [
  { id: '1', title: 'Ficha médica', icon: 'file-document-outline' },
  { id: '2', title: 'Rank', icon: 'trophy-outline' },
  { id: '3', title: 'Ajustes', icon: 'cog-outline' },
  { id: '4', title: 'Suporte', icon: 'headphones' },
];

export default function MoreScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Card style={styles.menuCard}>
      <TouchableOpacity 
        style={styles.cardContent}
        activeOpacity={0.7}
        onPress={() => console.log(`Navegar para ${item.title}`)}
      >
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={item.icon} size={32} color="#005f73" />
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </TouchableOpacity>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.fixedHeader}>
          <Header title="Mais opções" navigation={navigation} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
      <FlatList
        data={MENU_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
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
  container: { 
    flex: 1, 
    backgroundColor: '#F8FAFC', 
  },
  listContainer: { 
    paddingTop: 10,
    paddingBottom: 100 
  },
  row: { 
    justifyContent: 'space-between',
    marginBottom: 10 
  },
  menuCard: { 
    width: '31%',
    height: 120,
    backgroundColor: '#FFFFFF', 
    borderRadius: 20, 
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center', 
  },
  cardContent: { 
    flex: 1,
    alignItems: 'center',
    padding: 5, 
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: { 
    fontSize: 12,
    fontWeight: '600', 
    color: '#1E293B',
    textAlign: 'center'
  }
});