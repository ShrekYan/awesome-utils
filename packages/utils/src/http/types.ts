export type CallbackFunction = (...args: any[]) => any;

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