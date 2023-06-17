import axios from 'axios';

const serverApi = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

export default serverApi;
