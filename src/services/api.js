import axios from 'axios';

const api = axios.create ({
    method: 'GET',
    baseURL: 'https://shoes-collections.p.rapidapi.com/shoes',
    headers: {
        'x-rapidapi-host': 'shoes-collections.p.rapidapi.com',
        'x-rapidapi-key': '090b31ce6dmshc1e8fcdf9c69cf3p1b1093jsn81dfecbed929'
    }
});

export default api;