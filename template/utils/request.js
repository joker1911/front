import axios from "axios";
import {getUser} from "@/utils/auth";

// 创建axios实例
const service = axios.create({
    // baseURL: "https://easy-mock.com/mock/5c40244a87eb837229ac1ec0",
    baseURL: "http://localhost:7333/mock/6055d14deddea11280030288/weibo",
    timeout: 30000,     // 请求超时时间
    headers: {'X-Token':''+getUser().token},        // 定义头信息，每次请求都将头信息带过去
});

// 导出
export default service;