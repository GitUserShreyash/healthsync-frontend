import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    
    // Ensure headers object exists
    config.headers = config.headers || {};

    if (token) {
        // Attach Bearer token when available
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosInstance;
