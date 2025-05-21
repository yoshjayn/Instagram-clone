// baseUrl = import.meta.env.VITE_API_BASE_URL;
import axios from 'axios';

let hardToken = '01fe030b-3bc0-4165-bc6f-0eba7dcedb43'

export const instance = axios.create({
    baseURL:  import.meta.env.VITE_API_BASE_URL,
    headers:{
        'Content-Type': 'application/json'
        // ,'Authorization': 'Bearer ' + hardToken
    }
})

// interceptors:

instance.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')

    if(token)   config.headers.Authorization = 'Bearer '+ token
    
    return config
})