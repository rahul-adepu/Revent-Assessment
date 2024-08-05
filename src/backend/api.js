import axios from 'axios';

const API_URL = "http://localhost:8080/products";

export const getProductsData = (params) => {
    return axios.get(API_URL, { params });
};
