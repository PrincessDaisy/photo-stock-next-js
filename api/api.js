import axios from 'axios';

const instanceAPI = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Client-ID 539a243d3ccefd20c8def536a22699cc55608b6e0ce6db506b2be577682ed2ef',
  },
});

export default instanceAPI;
