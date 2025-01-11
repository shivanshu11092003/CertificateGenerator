
import axios from "axios";
import { Constant } from "../Utlis/Constants";

const instance = axios.create({
    baseURL: `https://${Constant.IP}/certificate/`,

});

const Axios = async (object) => {

    return await instance({
        url: `${object.apiName}`,
        method: `${object.method}`,
        data: object.dataObject,
        withCredentials: true,
        headers: {
            'Content-Type': `${object.contentType}`
        },
        params: object.param

    })
}

export default Axios;