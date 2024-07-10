import axios from "axios";
axios.defaults.baseURL='https://api.edu-sts.uz/api/v1'
axios.interceptors.request.use(config=>{
    const getToken=localStorage.getItem('token');
    const authorization=getToken ? `Token ${getToken}`:'';
    config.headers.Authorization=authorization;
    return config;
})

export default  axios;