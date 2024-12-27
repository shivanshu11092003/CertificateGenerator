
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://10.21.96.199:8000/certifier',
    timeout: 1000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

const Axios = async (apiName, method, dataObject) => {

    return await instance({
        url: `/${apiName}`,
        method: `${method}`,
        data: dataObject

    })
}

export default Axios;