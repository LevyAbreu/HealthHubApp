import { StyleSheet } from 'react-native';
import { Theme } from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
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
  card: {
    backgroundColor: Theme.colors.card,
    borderRadius: Theme.radius.large,
    padding: 16,
    marginBottom: 15,
    ...Theme.shadow,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.colors.textPrimary,
    marginBottom: 15,
    marginTop: 10,
  },
  checkInRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 20 
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  }
});