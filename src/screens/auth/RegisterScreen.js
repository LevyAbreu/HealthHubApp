import { useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Btn as SubmitButton } from '../../components'; 
import { Theme } from '../../styles/theme';
import { registerUser } from '../../services/auth';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    setLoading(true);
    
    const result = await registerUser(nome, email, senha);

    setLoading(false);

    if (result.success) {
      Alert.alert("Sucesso!", "Sua conta HealthHub foi criada.");
      navigation.replace('MainTabs');
    } else {
      Alert.alert("Erro no Cadastro", result.error);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} backgroundColor={Theme.colors.primary}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Cadastro</Text>
            <Text style={styles.headerSubtitle}>Comece a monitorar sua saúde hoje.</Text>
          </View>

          <View style={styles.card}>
            <TextInput
              label="Nome Completo"
              value={nome}
              onChangeText={setNome}
              mode="outlined"
              style={styles.input}
              outlineColor="#E2E8F0"
              activeOutlineColor={Theme.colors.primary}
            />
            <TextInput
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              style={styles.input}
              outlineColor="#E2E8F0"
              activeOutlineColor={Theme.colors.primary}
            />
            <TextInput
              label="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              mode="outlined"
              style={styles.input}
              outlineColor="#E2E8F0"
              activeOutlineColor={Theme.colors.primary}
            />

            <View style={[styles.buttonContainer, { marginTop: 20 }]}>
              <SubmitButton 
                title={loading ? "Cadastrando..." : "Criar Conta"} 
                onPress={handleRegister} 
              />
            </View>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.footerText}>
                Já tem uma conta? <Text style={styles.linkText}>Fazer Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Theme.colors.primary 
  },
  header: { 
    height: 250, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 20
  },
  brandName: {
    color: Theme.colors.secondary, 
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8
  },
  headerTitle: { 
    color: '#FFFFFF', 
    fontSize: 36, 
    fontWeight: '900',
  },
  headerSubtitle: { 
    color: 'rgba(255,255,255,0.8)', 
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 30,
  },
  input: { 
    marginBottom: 16, 
    backgroundColor: '#FFFFFF' 
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  forgotText: {
    color: Theme.colors.primary,
    fontSize: 13,
    fontWeight: '600'
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  footerText: { 
    textAlign: 'center', 
    marginTop: 25, 
    color: '#64748B',
    fontSize: 14
  },
  linkText: { 
    color: Theme.colors.primary, 
    fontWeight: 'bold' 
  }
});