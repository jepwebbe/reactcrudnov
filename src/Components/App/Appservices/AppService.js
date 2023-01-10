import axios from "axios";

import API_URL from "./API_URL";
import authHeader from "./auth-header";

const BASEURL = "bakeonline"

const GetList = (e) => {
    return axios.get(`${API_URL}/${e}`, {
        headers: authHeader()
    })
}

const Get = (e, id) => {
    return axios.get(`${API_URL}/${BASEURL}/${e}/${id}`, {
        headers: authHeader(),
    })
}

const Create = (e, data) => {
    return axios.post(`${API_URL}/${BASEURL}/${e}`, data, {
        headers: authHeader(),
    })
}

const Login = async (username, password) => {
    return await axios.post(`${API_URL}/token`, { username, password})
}

const Update = (e, id, data) => {
    return axios.put(`${API_URL}/${e}/${id}`, data, {
        headers: authHeader(),
    })
}

const Remove = (e, id) => {
    return axios.get(`${API_URL}/${BASEURL}/${e}/${id}`, {
        headers: authHeader(),
    })
}

const appService = {
    GetList, Get, Create, Remove, Login, Update,
}
export default appService;