import axios from 'axios';

const api = axios.create({
    baseURL: 'https://desafio.eadplataforma.com/api/1',
    headers: {
        Authorization: 123456789,
    },
})

export default api;