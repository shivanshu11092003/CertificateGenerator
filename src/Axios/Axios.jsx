
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://10.21.96.245:8888/certificate/',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

const Axios = async (apiName, method, dataObject) => {

    return await instance({
        url: `${apiName}`,
        method: `${method}`,
        data: dataObject,
        withCredentials: true

    })
}

export default Axios;