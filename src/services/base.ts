import axios from 'axios';
import Constants from 'expo-constants';

const axiosBaseInstance = axios.create({
  baseURL: Constants?.expoConfig?.extra?.baseUrl!, // TODO pass as environment variable
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axiosBaseInstance;