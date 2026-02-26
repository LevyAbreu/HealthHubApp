import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";

/**
 * Cadastra um novo usuário no Firebase Auth e cria o perfil no Firestore
 */
export const registerUser = async (nome, email, senha) => {
  try {
    // 1. Cria o usuário no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    // 2. Cria o documento do usuário no Firestore usando o UID do Auth como ID do documento
    // Usamos 'setDoc' em vez de 'addDoc' para que o ID do banco seja igual ao ID da conta
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      nome: nome,
      email: email,
      tipo: "paciente", // Definindo um tipo padrão
      criadoEm: serverTimestamp(),
    });

    return { success: true, user };
  } catch (error) {
    console.error("Erro no registro:", error.code);
    
    // Tratamento de erros comuns do Firebase
    let message = "Ocorreu um erro ao criar sua conta.";
    if (error.code === 'auth/email-already-in-use') message = "Este e-mail já está em uso.";
    if (error.code === 'auth/invalid-email') message = "E-mail inválido.";
    if (error.code === 'auth/weak-password') message = "A senha deve ter pelo menos 6 caracteres.";

    return { success: false, error: message };
  }
};

export const loginUser = async (email, senha) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Erro no login:", error.code);
    
    let message = "E-mail ou senha incorretos.";
    if (error.code === 'auth/user-not-found') message = "Usuário não encontrado.";
    if (error.code === 'auth/wrong-password') message = "Senha incorreta.";
    if (error.code === 'auth/invalid-email') message = "Formato de e-mail inválido.";

    return { success: false, error: message };
  }
};