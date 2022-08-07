import axios from "axios";
const BASE_URL ='http://localhost:5000/api/';

const TOKEN = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTkwMjc0M2Q2ZjBiZDNkMDFjYTExOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTg2NTEyOSwiZXhwIjoxNjYwMTI0MzI5fQ.s6unRTZd6Aqrqm0M1HIS2aO7jTuvRt46OK4ab0dDe_g";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});



export const getProducts = async (cat) => {
    const url = `products`;
    const res = await publicRequest.get(cat ? url + `?category=${cat}` : url);
    return res;
};