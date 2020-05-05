import axios from 'axios'

export function request(config){
    // 创建axios实例
    const instance = axios.create({
      baseURL:'',
      timeout:5000
    })
    // 进行数据请求
    return instance(config)
}
