import axios from 'axios';

// URL base da API
const API_BASE_URL = 'https://api.lawer.app';

// Função para realizar login
const login = async (email, password) => {
    try {
        console.log("Enviando solicitação de login para a API:", { email, password });
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
        console.log("Resposta da API para login:", response.data); 
        return response.data;
    } catch (error) {
        console.log("Erro na solicitação de login:", error.response?.data); 
        throw error;
    }
};


// Função para realizar registro
const register = async (name, email, phone, password, rg, cpf, oab) => {
    try {
        console.log("Enviando solicitação de registro para a API:", { name, email, phone, password, rg, cpf, oab }); // Log antes da solicitação
        const response = await axios.post(`${API_BASE_URL}/auth/register`, { name, email, phone, password, rg, cpf, oab });
        console.log("Resposta da API para registro:", response.data);
        return response.data;
    } catch (error) {
        console.log("Erro na solicitação de registro:", error.response?.data); 
        throw error;
    }
};

// Exportando as funções como um objeto
const apiServices = { login, register };

export default apiServices;
