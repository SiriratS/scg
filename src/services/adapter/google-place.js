import axios from 'axios'
const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const END_POINT = CORS_URL + 'https://maps.googleapis.com/maps/api/place/';

let axiosInstance = axios.create({
    baseURL: END_POINT
  });

  axiosInstance.defaults.params = {
     name: 'value'
  };

export default axiosInstance;