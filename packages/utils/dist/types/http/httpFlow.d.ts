import { IOptions } from './http';
import { PluginFunction } from './httpFnStore';
/**
 * http执行流程
 * @param url
 * @param data
 * @param options
 * @param httpFn
 */
declare function httpFlow<KParams, TResponse>(url: string, data: KParams, options: IOptions, httpFn: PluginFunction): Promise<TResponse>;
export default httpFlow;
