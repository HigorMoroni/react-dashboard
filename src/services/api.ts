import axios from 'axios';

const api = axios.create({
    baseURL: 'http://desafio.eadplataforma.com/api/1',
    headers: {
        Authorization: 123456789,
    },
})

export default api;