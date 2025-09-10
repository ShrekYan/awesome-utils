import { CallbackFunction } from '../types';
export interface IData {
    version: string;
    source: string;
    uuid: string;
    userId: string;
    sessionId: string;
    busChannel: string;
    sysChannel: string;
    noUserId: boolean;
    [props: string]: any;
}
/**
 * parameter
 * @param callback
 */
declare const _default: (callback: CallbackFunction) => ({ data }: {
    data: IData;
}) => void;
export default _default;
