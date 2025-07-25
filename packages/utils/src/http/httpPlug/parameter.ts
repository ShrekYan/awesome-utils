import {v4 as uuidV4} from "uuid";
import type {CallbackFunction} from "../types"


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
export default (callback: CallbackFunction) => {
    return ({data}: { data: IData }) => {
        data.uuid = uuidV4().replace(/-/g, "");
        callback?.(data);
    };
}
