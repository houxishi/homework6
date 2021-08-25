import axios from 'axios'


axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['token'] = JSON.parse(window.localStorage.getItem('token'));
axios.defaults.headers.post['Content-Type'] = 'application/json';


// http response 拦截器
// axios.interceptors.response.use(res => {
//     if (res.data.resultCode != 200) {
//         return Promise.reject(res.data)
//     }
//     return res.data.data
// })

// axios.interceptors.request.eject((config) => config);

export default axios