
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://bc37-2409-40d2-6f-3838-ba71-378b-8b93-2650.ngrok-free.app/',
    timeout: 1000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

const Axios = async (apiName, method, dataObject) => {

    return await instance({
        url: `${apiName}`,
        method: `${method}`,
        data: dataObject

    })
}

export default Axios;