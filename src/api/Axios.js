// Create a new file, e.g., api.js

import axios from 'axios';

const API_KEY = '4083de13bef89cbdf179cf5f01ca0a5e'; // Replace with your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    
  },
  headers:{
    Accept:"application/json"
  },
});

export default axiosInstance;
