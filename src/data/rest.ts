import axios, { AxiosResponse } from "axios";
import { mock } from './mock';

type Data = { [key: string]: string | number | boolean | object }

const useMock = false;



const rest = (() => {
  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:6000', // 今回は未指定 (通常は env などから参照させる)
    headers: { 
               "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
               "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"               
            },
    timeout: 15000,
  });
  return {
        client,
        get: <T = any, R = AxiosResponse<T>>(url: string): Promise<R> => {
            return client.get(url)
            // return res
        },
        post: <T = any, R = AxiosResponse<T>>(url: string, data: Data): Promise<R> => {
            return client.post(url, data);
        }
    }
})();

if ((/true/i).test(process.env.REACT_APP_USE_MOCK || "")) {
    mock(rest.client).enableLog().setDelayTime(500);
}

export { rest };