import axios, { type AxiosInstance} from 'axios';


const axiosInstance: AxiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;