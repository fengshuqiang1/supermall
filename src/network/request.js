import axios from 'axios'

export function request(config){
    // 创建axios实例
    const instance = axios.create({
      baseURL:'http://106.54.54.237:8000/api/h8',
      timeout:5000
    })
    // 进行数据请求
    return instance(config)
}