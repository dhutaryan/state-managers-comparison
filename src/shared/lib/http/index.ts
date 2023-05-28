import axios from 'axios';

const http = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4000',
});

export default http;
