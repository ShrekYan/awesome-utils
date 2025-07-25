import type {HttpPluginOptions} from "../http.ts";
import type {CallbackFunction} from "../types"

export default (callback?: CallbackFunction) => {
    return ({options}: HttpPluginOptions) => {
        if (!options.backupMockData && options.autoInteract) {
            callback?.();
        }
    };
}