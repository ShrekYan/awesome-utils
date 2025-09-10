export type PluginFunction = (...args: any[]) => any;
/**
 * Http缓存存储
 */
declare class HttpFnStore {
    beforeFnList: PluginFunction[];
    afterFnList: PluginFunction[];
    errorFnList: PluginFunction[];
    finallyFnList: PluginFunction[];
    constructor();
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
     * getBeforeFn
     */
    getBeforeFn(): PluginFunction[];
    /**
     * getAfterFn
     */
    getAfterFn(): PluginFunction[];
    /**
     * getErrorFn
     */
    getErrorFn(): PluginFunction[];
    /**
     * getFinallyFn
     */
    getFinallyFn(): PluginFunction[];
}
declare const _default: HttpFnStore;
export default _default;
