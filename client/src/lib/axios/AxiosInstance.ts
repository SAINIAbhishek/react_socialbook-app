import axios from 'axios';
import { ENV } from '../../environments/Environment';

const instance = axios.create({
  baseURL: `${ENV.BASE_API_URL}`,
});

export default instance;
