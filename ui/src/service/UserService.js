
import axios from 'axios';

const USER_API_URL = "http://localhost:8080/api/v1/users";

export default axios.create({
  baseURL:USER_API_URL
})