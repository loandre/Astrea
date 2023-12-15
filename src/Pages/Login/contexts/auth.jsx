import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Verifica o localStorage para um token ao carregar o componente
    useEffect(() => {
        const storedToken = localStorage.getItem('user_token');
        if (storedToken) {
            setUser({ token: storedToken });
        }
        setLoading(false);
    }, []);

    // Função para realizar login
    const signin = async (email, password) => {
        console.log("Tentando fazer login com:", { email, password });
        
        // Mock data for demonstration
        const mockUserData = {
            token: 'mock_token',
            email: 'mock@example.com',
            name: 'Mock User'
        };

        if (email === 'loandre@email.com' && password === '123456') {
            localStorage.setItem('user_token', mockUserData.token);
            setUser(mockUserData);
            return true;
        } else {
            return 'Email ou senha incorretos';
        }
    };

    // Função para realizar registro
    const signup = async (name, email, phone, password, rg, cpf, oab) => {
        console.log("Tentando registrar com:", { name, email, phone, password, rg, cpf, oab });

        // Mock registration logic
        return true; // Assume registration is always successful
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
