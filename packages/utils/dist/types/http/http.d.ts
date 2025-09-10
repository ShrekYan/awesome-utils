import { PluginFunction } from './httpFnStore';
import { AxiosRequestConfig } from 'axios';
/**
 * http options参数
 */
export interface IOptions {
    primitive?: boolean;
    urlPrefix?: string;
    isLoading?: boolean;
    openCustomError?: boolean;
    openExpire?: boolean;
    autoInteract?: boolean;
    customUrl?: boolean;
    useUserCacheInfo?: boolean;
    errorExitAndCloseLoading?: boolean;
    backupMockData?: boolean;
    firstMockData?: boolean;
    guid?: string;
}
/**
 * 接口返回参数
 */
export interface IResponseData<T> {
    code: string;
    data: T;
    msg: string;
    realMsg: string;
}
/**
 * 插件的PluginsOptions
 */
export interface HttpPluginOptions {
    url?: string;
    options: IOptions;
    resp: {
        data: IResponseData<object>;
    };
}
/**
 * 联合类型 options参数和undefined
 */
export type IOptionsAndUndefined = IOptions | undefined;
/**
 * http实现接口
 */
export interface IHttp {
    urlPrefix: string;
    addBeforeFn: (fn: PluginFunction) => void;
    addAfterFn: (fn: PluginFunction) => void;
    addErrorFn: (fn: PluginFunction) => void;
    addFinallyFn: (fn: PluginFunction) => void;
    getRequestUrl: (isCustomUrl: boolean | undefined, requestUrl: string, options: IOptions) => string;
    mergeDefaultOptions: (options: IOptionsAndUndefined) => IOptions;
    compatibleOldInterface<KParams>(params: IOptionsAndUndefined | KParams, options: IOptionsAndUndefined): IOptions;
    disposeProps<T>(props: T): T;
    post<KParams, TResponse>(requestUrl: string, params: KParams, options: IOptionsAndUndefined, headers?: AxiosRequestConfig): Promise<IResponseData<TResponse>>;
    get<KParams, TResponse>(requestUrl: string, params: AxiosRequestConfig<KParams>, options: IOptionsAndUndefined): Promise<IResponseData<TResponse>>;
}
declare class Http implements IHttp {
    urlPrefix: string;
    mockUrlPrefix: string;
    constructor(urlPrefix: string, mockUrlPrefix: string);
    /**
     * addBeforeFn
     * @param fn
     */
    addBeforeFn(fn: PluginFunction): void;
    /**
     * addAfterFn
     * @param fn
     */
    addAfterFn(fn: PluginFunction): void;
    /**
     * addErrorFn
     * @param fn
     */
    addErrorFn(fn: PluginFunction): void;
    /**
     * addFinallyFn
     * @param fn
     */
    addFinallyFn(fn: PluginFunction): void;
    /**
     * 处理空属性
     * @param prop
     * @returns {*}
     */
    disposeProps<T>(prop: T): T;
    /**
     * 获取请求链接
     * @param isCustomUrl
     * @param requestUrl
     * @param options
     * @returns {*}
     */
    getRequestUrl(isCustomUrl: boolean | undefined, requestUrl: string, options: IOptions): string;
    /**
     * 合并默认options参数
     * @param options
     * @returns {*}
     */
    mergeDefaultOptions(options: IOptionsAndUndefined): IOptions;
    /**
     * 兼容老版本接口,params也可以定义http中options的配置
     * @param params
     * @param options
     */
    compatibleOldInterface<KParams>(params: IOptionsAndUndefined | KParams, options?: IOptionsAndUndefined): IOptions;
    /**
     * 调用MOCK接口数据
     */
    callMockData<KParams, TResponse>(requestUrl: string, params: KParams, options?: IOptionsAndUndefined, headers?: {}): Promise<IResponseData<TResponse>>;
    /**
     *
     * POST
     * @param requestUrl
     * @param params
     * @param options
     * @param headers
     *
     * options.isLoading 默认为false不开启loading加载效果
     *
     * options.primitive 默认为true 原始数据
     * 获取接口原数据，而不是被剥离的数据,原始数据为data.list，剥离数据为list,去除了上层结构
     *
     *
     * options.urlPrefix 默认使用http中默认设置的服务前缀
     * 单独接口重新设置服务请求前缀，如：https://mobile.qiangungun.com 变更为 https://mobilesit.qiangungun.com
     *
     * options.customUrl 默认为false
     * customUrl为true，默认使用用户自定义链接
     *
     * options.autoInteract 默认为true
     * 如果为true则提示错误信息，如果为false则不提示错误信息
     *
     * options.openCustomError 默认为false
     * 默认false不开启客户端自定义报错，如果为true则开启客户端自定义报错
     * 客户端自定义报错信息在config.js中的CUSTOM_ERRORS对象中定义
     *
     * options.openExpire 默认为true
     * 默认为true会自动开启处理session过期逻辑，为false则不开启处理session过期逻辑
     *
     * options.useUserCacheInfo 默认为true; true 接口请求添加用户缓存信息 false 接口请求不添加用户缓存信息
     *
     * options.errorExitAndCloseLoading 默认为true
     * errorExitAndCloseLoading 接口返回失败出现错误信息自动关闭loading效果
     *
     * options.backupMockData（仅用于开发环境） 默认为false，仅在开发阶段中使用
     * backupMockData为true时优先调用启动开发环境的接口（dev），如果开发环境（dev）接口不存在则会自动调用YAPI服务上的MOCK接口
     *
     * options.headers: 要添加在请求头上的参数
     *
     */
    post<KParams, TResponse>(requestUrl: string, params: KParams, options?: IOptionsAndUndefined, headers?: AxiosRequestConfig): Promise<IResponseData<TResponse>>;
    /**
     * Get请求
     * @param requestUrl
     * @param params
     * @param options
     */
    get<KParams, TResponse>(requestUrl: string, params: AxiosRequestConfig<KParams>, options?: IOptionsAndUndefined): Promise<IResponseData<TResponse>>;
}
export default Http;
