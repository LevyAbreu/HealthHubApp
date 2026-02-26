import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Btn as SubmitButton } from '../../components'; 
import { Theme } from '../../styles/theme';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha e-mail e senha para entrar.");
      return;
    }

    setLoading(true);
    const result = await loginUser(email, senha);
    setLoading(false);

    if (result.success) {
      // O replace impede que o usuário volte para a tela de login pelo botão 'voltar'
      navigation.replace('MainTabs'); 
    } else {
      Alert.alert("Erro de Acesso", result.error);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        bounces={false} 
        style={{ backgroundColor: Theme.colors.primary }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Login</Text>
            <Text style={styles.headerSubtitle}>Sua jornada de saúde continua aqui.</Text>
          </View>

          <View style={styles.card}>
            <TextInput
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
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

            <TouchableOpacity style={styles.forgotPass}>
              <Text style={styles.forgotText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              <SubmitButton 
                title={loading ? "Carregando..." : "Entrar"} 
                onPress={handleLogin} 
              />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.footerText}>
                Novo por aqui? <Text style={styles.linkText}>Crie uma conta</Text>
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