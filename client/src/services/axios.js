import axios from "axios";

const axios = (URL) => {
    const request = axios.get(`${URL}`)
    return request.then(response => response.data)
}
 
export default axios;