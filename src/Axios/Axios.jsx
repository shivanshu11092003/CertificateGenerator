
import axios from "axios";
import { Constant } from "../Utlis/Constants";



const instance = axios.create({
    baseURL: `https://${Constant.IP}/certificate/`,

});

const showLoader = () => {



}

instance.interceptors.request.use((config) => {

    console.log(config);
    showLoader()


    return config;

}, (error) => {
    console.log(error);

    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {

    console.log(response);

    return response;
}, function (error) {
    console.log(error)

    return Promise.reject(error);
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