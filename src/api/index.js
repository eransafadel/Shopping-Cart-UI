import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getProducts = async (cat) => {
    const url = `/api/products`;
    const res = await API.get(cat ? url + `?category=${cat}` : url);
    return res;
};