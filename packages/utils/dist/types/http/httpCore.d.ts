import { AxiosRequestConfig } from 'axios';
import { IResponseData } from './http';
interface IHttpCore {
    get<KParams, TResponse>(requestUrl: string, paramsData: AxiosRequestConfig<KParams>): Promise<IResponseData<TResponse>>;
    post<KParams, TResponse>(requestUrl: string, paramsData: KParams, headers: AxiosRequestConfig): Promise<IResponseData<TResponse>>;
}
declare class HttpCore implements IHttpCore {
    /**
     * get请求
     * @param requestUrl
     * @param paramsData
     */
    get<KParams, TResponse>(requestUrl: string, paramsData: AxiosRequestConfig<KParams>): Promise<IResponseData<TResponse>>;
    /**
     * post请求
     * @param requestUrl
     * @param paramsData
     * @param headers
     */
    post<KParams, TResponse>(requestUrl: string, paramsData: KParams, headers?: AxiosRequestConfig): Promise<IResponseData<TResponse>>;
}
declare const _default: HttpCore;
export default _default;
