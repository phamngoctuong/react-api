import * as Config from './../constants/Config';
import axios from 'axios';
export default function apiCaller(endpoint,method,body){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(error => {
        console.log(error);
    });
}