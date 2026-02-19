import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Header } from '../../components'; 
import { Theme } from '../../styles/theme';
import { globalStyles } from '../../styles/globalStyles';
import { PROFILE_DATA } from '../../utils/mockData';

const screenWidth = Dimensions.get("window").width;

// Importação das imagens (Certifique-se que os arquivos estão em assets/)
const initialImage = require('../../assets/initial.png');
const nowImage = require('../../assets/now.png');

export default function ProgressScreen({ navigation }) {
  
  const chartData = {
    labels: ["Jan", "Fev", "Mar", "Abr"],
    datasets: [
      { data: [70, 68, 66, 65], color: () => '#0EA5E9', strokeWidth: 3 },
      { data: [25, 24, 23, 22.4], color: () => '#EF4444', strokeWidth: 3 },
      { data: [20, 21, 22, 22.4], color: () => '#22C55E', strokeWidth: 3 },
      { data: [30, 29, 28, 27], color: () => '#F59E0B', strokeWidth: 2 },
    ],
    legend: ["Peso", "% Gordura", "% Magra", "Id. Óssea"]
  };

  const ComparisonCard = ({ title, date, data, imageSource }) => (
    <View style={[globalStyles.card, styles.compCard]}>
      <Text style={styles.compTitle}>{title} <Text style={styles.compDate}>({date})</Text></Text>
      <View style={styles.compContent}>
        <Image source={imageSource} style={styles.compImage} />
        <View style={styles.compStats}>
          <StatLine label="Peso" value={data.weight} color="#0EA5E9" />
          <StatLine label="Gordura" value={data.fat} color="#EF4444" />
          <StatLine label="M. Magra" value={data.lean} color="#22C55E" />
          <StatLine label="Id. Óssea" value={data.bone} color="#F59E0B" />
        </View>
      </View>
    </View>
  );

  const StatLine = ({ label, value, color }) => (
    <View style={styles.statLine}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.statLabel}>{label}: </Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      {/* HEADER FIXO: Fora do ScrollView */}
      <View style={styles.fixedHeader}>
          <Header title="Progresso" navigation={navigation} />
      </View>

      {/* CONTEÚDO ROLÁVEL */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={globalStyles.sectionTitle}>Evolução Geral</Text>
        
        
        <View style={[globalStyles.card, styles.chartCard]}>
          <LineChart
            data={chartData}
            width={screenWidth - 60}
            height={220}
            chartConfig={{
              backgroundColor: "#FFF",
              backgroundGradientFrom: "#FFF",
              backgroundGradientTo: "#FFF",
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(100, 116, 139, ${opacity})`,
              propsForDots: { r: "4" }
            }}
            bezier
            style={styles.chartStyle}
          />
        </View>

        <Text style={globalStyles.sectionTitle}>Comparativo de Resultados</Text>

        <ComparisonCard 
          title="Início do Tratamento"
          date="10/12/2023"
          imageSource={initialImage}
          data={{ weight: '70kg', fat: '25%', lean: '20%', bone: '30a' }}
        />

        <ComparisonCard 
          title="Momento Atual"
          date="Hoje"
          imageSource={nowImage}
          data={{ weight: '65kg', fat: '22.4%', lean: '22.4%', bone: '27a' }}
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
  chartCard: { paddingVertical: 20, alignItems: 'center', marginBottom: 25 },
  chartStyle: { borderRadius: 16, marginVertical: 8 },
  compCard: { padding: 15, marginBottom: 20 },
  compTitle: { fontSize: 16, fontWeight: 'bold', color: Theme.colors.textPrimary, marginBottom: 15 },
  compDate: { fontSize: 12, color: Theme.colors.textSecondary, fontWeight: 'normal' },
  compContent: { flexDirection: 'row', alignItems: 'center' },
  compImage: { width: 100, height: 130, borderRadius: 12, backgroundColor: '#F1F5F9' },
  compStats: { flex: 1, marginLeft: 20, justifyContent: 'center' },
  statLine: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 8 },
  statLabel: { fontSize: 13, color: Theme.colors.textSecondary },
  statValue: { fontSize: 14, fontWeight: 'bold', color: Theme.colors.textPrimary },
});