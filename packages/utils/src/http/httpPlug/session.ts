import { RESPONSE_CODE } from "./constant";
import type { HttpPluginOptions } from "../http";
import type {CallbackFunction} from "../types"

export default (callback:CallbackFunction)=>{
    return ({ options, resp }: HttpPluginOptions) => {
        //session过期处理
        if (resp.data.code === RESPONSE_CODE.SESSION_TIMEOUT && options.openExpire) {
            callback();
        }
    };
}
