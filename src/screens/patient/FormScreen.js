import { useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Header, SliderInput, SelectorInput, TextBoxInput, Btn as SubmitButton } from '../../components'; 
import { weeklyCheckupQuestions } from '../../utils/mockData';
import { Theme } from '../../styles/theme';
import { globalStyles } from '../../styles/globalStyles';

export default function FormScreen({ navigation }) {
  const [formData, setFormData] = useState({
    disposicao: 1,
    sono: 1,
    motivacao: 1,
    intestino: 'Regular',
    observacao: ''
  });

  const updateField = (id, val) => setFormData(prev => ({ ...prev, [id]: val }));

  return (
    <View style={globalStyles.container}>
      <View style={styles.fixedHeader}>
        <Header title="Check-up Semanal" navigation={navigation} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>25/01/2026</Text> 
        </View>

        {weeklyCheckupQuestions.map((item) => {
          switch (item.type) {
            case 'slider':
              return (
                <View key={item.id} style={styles.inputGap}>
                  <SliderInput 
                    label={item.label}
                    value={formData[item.id]}
                    setValue={(val) => updateField(item.id, val)}
                    min={item.min}
                    max={item.max}
                    labels={['1', '2', '3', '4', '5']}
                  />
                </View>
              );
            case 'selector':
              return (
                <View key={item.id} style={styles.inputGap}>
                  <SelectorInput 
                    label={item.label} 
                    value={formData[item.id]} 
                    options={item.options}
                    onSelect={(val) => updateField(item.id, val)}
                  />
                </View>
              );
            case 'textbox':
              return (
                <View key={item.id} style={styles.inputGap}>
                  <TextBoxInput 
                    label={item.label} 
                    placeholder={item.placeholder}
                    onChangeText={(val) => updateField(item.id, val)} 
                  />
                </View>
              );
            default:
              return null;
          }
        })}

        <View style={styles.buttonContainer}>
          <SubmitButton 
            title="Enviar Check-up" 
            onPress={() => console.log("Dados enviados:", formData)} 
          />
        </View>
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
  dateContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  dateText: { 
    color: Theme.colors.textSecondary, 
    fontSize: 14,
    fontWeight: '500'
  },
  inputGap: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  }
});