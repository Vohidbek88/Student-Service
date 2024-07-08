import axios from "axios";
axios.defaults.baseURL='http://api.edu-sts.uz:8030/api/v1'
axios.interceptors.request.use(config=>{
    const getToken=localStorage.getItem('token');
    const authorization=getToken ? `Token ${getToken}`:'';
    config.headers.Authorization=authorization;
    return config;
})

export default  axios;