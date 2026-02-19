import { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';

export const SliderInput = ({ label, value, setValue, min = 1, max = 5, labels }) => {
  const range = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  const trackWidth = useRef(0);
  const displayLabels = labels || range;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const x = gestureState.moveX - 40;
        const percentage = Math.max(0, Math.min(x / (trackWidth.current || 300), 1));
        const newValue = Math.round(percentage * (max - min) + min);
        setValue(newValue);
      },
    })
  ).current;

  const progress = ((value - min) / (max - min)) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.externalLabel}>{label}</Text>
      <View style={styles.card}>
        <View style={styles.numbersRow}>
          {displayLabels.map((item, index) => {
            const currentValue = min + index;
            return (
              <Text 
                key={index} 
                style={[
                  styles.numberText, 
                  value === currentValue && styles.activeNumber
                ]}
              >
                {item}
              </Text>
            );
          })}
        </View>
        <View 
          style={styles.sliderArea} 
          onLayout={(e) => trackWidth.current = e.nativeEvent.layout.width}
          {...panResponder.panHandlers}
        >
          <View style={styles.track}>
            <View style={[styles.progress, { width: `${progress}%` }]} />
            <View style={[styles.thumb, { left: `${progress > 95 ? 95 : progress}%` }]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  externalLabel: { fontSize: 14, fontWeight: 'bold', marginBottom: 12, color: '#333', marginLeft: 5 },
  card: { 
    backgroundColor: '#FFF', 
    padding: 20, 
    borderRadius: 25, 
    elevation: 4, 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    shadowOffset: { width: 0, height: 4 } 
  },
  numbersRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, paddingHorizontal: 5 },
  numberText: { fontSize: 14, color: '#94A3B8', fontWeight: 'bold' },
  activeNumber: { color: '#005f73', transform: [{ scale: 1.3 }] },
  sliderArea: { height: 30, justifyContent: 'center' },
  track: { height: 6, backgroundColor: '#F1F5F9', borderRadius: 3 },
  progress: { height: 6, backgroundColor: '#005f73', borderRadius: 3 },
  thumb: { 
    position: 'absolute', top: -7, width: 20, height: 20, borderRadius: 10, 
    backgroundColor: '#FFF', borderWidth: 3, borderColor: '#005f73', elevation: 5 
  }
});