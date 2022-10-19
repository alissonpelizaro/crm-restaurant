import api from "variables/api"
import axios from "axios"

const Api = axios.create({
    baseURL: api.url
});

export default Api