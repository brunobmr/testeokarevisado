import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// import { NODE_ENV, uri } from 'constants/environment-variables';

// const axiosiInstance = axios.create({
//   baseURL: uri[NODE_ENV]
// });

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Trate o erro aqui, se necessário
    console.error('Erro na requisição GET:', error);
    return null;
  }
};

export default fetchData;