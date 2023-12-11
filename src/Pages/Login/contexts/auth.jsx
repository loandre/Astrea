import { createContext, useState, useEffect } from 'react';
import apiServices from '../../../services/loginAPI'; 

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Novo estado para verificar o carregamento

    // Verifica o localStorage para um token ao carregar o componente
    useEffect(() => {
        const storedToken = localStorage.getItem('user_token');
        if (storedToken) {
            // Se um token é encontrado, atualiza o estado do usuário
            setUser({ token: storedToken });
        }
        setLoading(false); // Atualiza o estado de carregamento após verificar o token
    }, []);

    // Função para realizar login
    const signin = async (email, password) => {
      console.log("Tentando fazer login com:", { email, password }); 
      try {
          const data = await apiServices.login(email, password);
          localStorage.setItem('user_token', data.token);
          setUser(data);
          return true;
      } catch (error) {
          console.log("Erro ao fazer login:", error.response?.data); 
          return error.response?.data.message || 'Erro ao realizar login';
      }
    };

    // Função para realizar registro
    const signup = async (name, email, phone, password, rg, cpf, oab) => {
      console.log("Tentando registrar com:", { name, email, phone, password, rg, cpf, oab });
      try {
          await apiServices.register(name, email, phone, password, rg, cpf, oab);
          return true;
      } catch (error) {
          console.log("Erro ao fazer registro:", error.response?.data);
          return error.response?.data.message || 'Erro ao realizar registro';
      }
    };

    // Função para realizar logout
    const signout = () => {
        setUser(null);
        localStorage.removeItem('user_token');
    };

    return (
        <AuthContext.Provider value={{ user, signed: !!user, loading, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Exporte e continue usando o AuthProvider normalmente no seu aplicativo
