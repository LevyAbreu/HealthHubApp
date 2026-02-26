const initialImage = require('../assets/initial.png');

export const weeklyCheckupQuestions = [
  { id: 'disposicao', label: 'Nível de disposição', type: 'slider', min: 1, max: 5 },
  { id: 'sono', label: 'Qualidade do sono', type: 'slider', min: 1, max: 5 },
  { id: 'motivacao', label: 'Motivação', type: 'slider', min: 1, max: 5 },
  { 
    id: 'intestino', 
    label: 'Funcionamento Intestinal', 
    type: 'selector', 
    options: ['Regular', 'Lento', 'Preso', 'Diarréico'] 
  },
  { id: 'observacao', label: 'Alguma observação?', type: 'textbox', placeholder: 'Excreva aqui como foi sua semana...' },
];

export const PROFILE_DATA = {
  user: {
    name: 'Mariana Souza',
    age: 20,
    city: 'Manaus',
    initialImg: initialImage,
    stats: [
      { label: 'Peso', value: '65kg', icon: 'weight-kilogram' },
      { label: 'Gordura', value: '22.4%', icon: 'percent' },
      { label: 'Massa Magra', value: '38.2kg', icon: 'arm-flex' },
    ],
    conquistas: [
      { id: 1, title: 'Foco Total', icon: 'target', points: 100, completed: true },
      { id: 2, title: 'Hidratado', icon: 'water', points: 50, completed: true },
      { id: 3, title: 'Assíduo', icon: 'calendar-check', points: 150, completed: false },
    ],
  },
  conquistas: [
    { id: '1', name: 'A todo vapor', desc: '30 dias seguido', icon: 'fire', color: '#FF4D4D', bg: '#FFEBEB', locked: false, points: 100 },
    { id: '2', name: 'Hidratada', desc: 'Meta batida', icon: 'water', color: '#0EA5E9', bg: '#E0F2FE', locked: false, points: 50 },
    { id: '3', name: 'Madrugadora', desc: 'Treino às 6h', icon: 'weather-sunset-up', color: '#6366F1', bg: '#EEF2FF', locked: false, points: 80 },
    { id: '4', name: 'Maratonista', desc: 'Corra 42km', icon: 'run', color: '#94A3B8', bg: '#F1F5F9', locked: true, points: 500 },
    { id: '5', name: 'Mestre Zen', desc: '7 dias meditando', icon: 'leaf', color: '#94A3B8', bg: '#F1F5F9', locked: true, points: 150 },
  ],
  performance: [
    { id: '1', title: 'Massa Magra', icon: 'speedometer', value: '30%', labelExtra: 'Meta: 40%', color: '#4ADE80' },
    { id: '2', title: 'Hidratação', icon: 'water', value: '1.5L / 2L', color: '#38BDF8' },
    { id: '3', title: 'Sono', icon: 'bed', value: '5h / 8h', color: '#818CF8' },
    { id: '4', title: 'Atividade', icon: 'bicycle', value: '30 min', color: '#FB923C' },
  ]
};