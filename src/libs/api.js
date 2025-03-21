import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

console.log('API Base URL:', API_BASE_URL); // Debug log

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getInventions = async () => {
    try {
        const response = await api.get('/inventions');
        return response.data;
    } catch (error) {
        console.error('Error fetching inventions:', error);
        throw error;
    }
};

export const createInvention = async (inventionData) => {
    try {
        console.log('Sending invention data:', inventionData); // Debug log
        const response = await api.post('/inventions', inventionData);
        console.log('Server response:', response.data); // Debug log
        return response.data;
    } catch (error) {
        console.error('Error creating invention:', error);
        throw error;
    }
};

export const getInventionById = async (id) => {
    try {
        const response = await api.get(`/inventions/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching invention:', error);
        throw error;
    }
};

export default api; 