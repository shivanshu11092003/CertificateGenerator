
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fe9a-2409-40d2-3c-1156-cc02-3234-5c2b-8fb7.ngrok-free.app/',
    timeout: 1000,
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